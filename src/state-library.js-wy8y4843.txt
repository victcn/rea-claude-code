// atom-brand/atom-brand.js
const ATOM_BRAND = Symbol.for('claude-code.state.atom');

// atom-value-of/atom-value-of.js
function atomValueOf(atom, stored) {
    if (atom.shape === undefined) {
        return stored === undefined ? atom.initial : stored;
    }
    const kept = stored;
    const isSameShape = kept?.shape === atom.shape && kept.value !== undefined;
    return isSameShape ? kept.value : atom.initial;
}

// atom/atom.js
export const atom = (ref, initial, options) => Object.freeze({
    [ATOM_BRAND]: true,
    ref: frozenRef(ref),
    initial: deepFrozen(initial),
    ...(options?.shape !== undefined && { shape: options.shape }),
});

// deep-frozen/deep-frozen.js
function deepFrozen(value) {
    if (typeof value !== 'object' || value === null || Object.isFrozen(value)) {
        return value;
    }
    for (const member of Object.values(value)) {
        deepFrozen(member);
    }
    return Object.freeze(value);
}

// derive/derive.js
export const derive = (sources, compute) => {
    const memo = {};
    return Object.freeze({
        [DERIVED_BRAND]: memo,
        sources: Object.freeze(sources.map(one => {
            const isMade = isAtom(one) || isDerived(one);
            return isMade ? one : frozenRef(one);
        })),
        compute,
    });
};

// derived-brand/derived-brand.js
const DERIVED_BRAND = Symbol.for('claude-code.state.derived');

// frozen-ref/frozen-ref.js
function frozenRef(ref, id = ref.id) {
    const { plugin, key } = ref;
    return Object.freeze(id === undefined ? { plugin, key } : { plugin, key, id });
}

// has-brand/has-brand.js
const hasBrand = (source, brand) => typeof source === 'object' &&
    source !== null &&
    source[brand] !== undefined;

// is-atom/is-atom.js
const isAtom = (source) => hasBrand(source, ATOM_BRAND);

// is-derived/is-derived.js
const isDerived = (source) => hasBrand(source, DERIVED_BRAND);

// member-of/member-of.js
export const memberOf = (family, e) => (isAtom(family)
    ? Object.freeze({
        ...family,
        [ATOM_BRAND]: true,
        ref: frozenRef(family.ref, e.requestId),
    })
    : frozenRef(family, e.requestId));

// peek/peek.js
async function peek(state, source) {
    if (isAtom(source)) {
        const held = await state.get(source.ref);
        return {
            value: atomValueOf(source, held.value),
            versions: [held.version],
        };
    }
    if (!isDerived(source)) {
        const held = await state.get(source);
        return { value: held.value, versions: [held.version] };
    }
    const parts = await Promise.all(source.sources.map(one => peek(state, one)));
    const versions = parts.flatMap(part => part.versions);
    const key = versions.join(',');
    const memo = source[DERIVED_BRAND];
    if (memo?.versions !== key && memo !== undefined) {
        memo.value = source.compute(...parts.map(part => part.value));
        memo.versions = key;
    }
    return { value: memo?.value, versions };
}

// read/read.js
export const read = async ($, source) => (await peek($.state, source)).value;

// stored-value-of/stored-value-of.js
const storedValueOf = (atom, value) => atom.shape === undefined ? value : { shape: atom.shape, value };

// update-tries-max/update-tries-max.js
const UPDATE_TRIES_MAX = 64;

// update/update.js
export const update = async ($, target, change) => {
    const state = $.state;
    const ref = isAtom(target) ? target.ref : target;
    for (let tries = 0; tries < UPDATE_TRIES_MAX; tries += 1) {
        const held = await state.get(ref);
        const current = isAtom(target)
            ? atomValueOf(target, held.value)
            : held.value;
        const next = change(current);
        const stored = isAtom(target) ? storedValueOf(target, next) : next;
        const wrote = await state.set(ref, stored, { ifVersion: held.version });
        if (wrote.isSet) {
            return next;
        }
    }
    throw new Error('update: the value was written by another every time it was read, up ' +
        'to the bound on tries; nothing was written');
};
