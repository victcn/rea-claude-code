# Spec file format

One Markdown file per spec in `.claude-test/specs/`. File name: lower-case words joined by
hyphens, `.md`. Files starting with `_` and `README.md` are ignored.

```markdown
---
id: ct_k3xq5mwa            # minted by the helper when a run creates the file; leave it as it is, and leave it out of files you write by hand
allow_navigation: true     # optional; default false = reach everything by clicking from the base URL
timeout_ms: 180000         # optional; per-spec budget — when set, time is the only limit; default ≈ 3 min and ≈ 30 browser actions
tags: [creates-data]       # optional; "creates-data" marks a spec whose steps add records to the app
---
# Search finds an article

From the landing page, search for "refund".

## Passes when
- Must: the results list shows an entry titled "Refund policy".
- Must not: the text "No articles match your search".
```

A spec has three parts:

| Part | What goes in it |
|---|---|
| `# heading` | The label people see in results. One line. |
| prose under it (an optional `## Steps` heading is allowed) | The goal and the data, not the clicks: where to start, what to do, what made-up values to type. "Add the travel mug to the cart and open the cart", not "click …, then click …". Name pages by path (`/pricing`), never by full URL. |
| `## Passes when` | `- Must: …` and `- Must not: …` lines about the one screen where the steps end. Quote visible text exactly. "The page loads" or "no error" alone is not a criterion. |

Front matter is optional. `id` is the spec's stable identity (a run's `write-spec` helper mints it; a hand-written
spec may omit it, and nothing else should invent or change one). `allow_navigation` (default false: the agent
follows the page's own links; true lets it open paths on your host directly), `timeout_ms` and
`tags` are read too; other keys are kept and ignored.

**Specs that need data.** If a journey needs a record to exist, either configure a seed script as
`setupCommand` in `.claude-testrc` (before each run you are asked, and it runs only if you say yes; it must be safe to run twice), or
write the creation into the steps as a conditional, clearly named first step and tag the spec:

```markdown
---
tags: [creates-data]
---
# A saved recipe can be found by its name

If the app has no recipe named "Claude Test demo recipe", add one from "Add a recipe" with
that name and the ingredient "2 eggs". Then search the recipe list for "demo recipe".

## Passes when
- Must: the results list shows a card titled "Claude Test demo recipe".
```
The fixed "Claude Test demo …" name lets later runs find and reuse the record instead of adding
another. Such a spec never deletes anything. Before running these specs against a site other
people use, review the `creates-data` ones. There is no URL in a spec: the address comes from
`baseUrl` in `.claude-testrc`, so the same spec runs against a laptop, a preview, or staging.

**Goal-oriented, not prescriptive.** Say WHAT to achieve; the agent figures out HOW from what it
sees. Three to ten lines of intent beat thirty lines of click-this-then-that, and keep passing when
the button moves.

**"Passes when" must be checkable from a single screenshot at the end.** "The invoice list shows a
row numbered INV-… with status Draft" is good. "The total is higher than before" is bad (needs
memory). Say what must be visible, and where useful what must *not* be ("…and no error banner").

A good spec:
- is a journey where it can be: two or more actions through the app's main create / open / edit path,
  ending on a screen whose content proves they took effect — a spec that only confirms a page or dialog
  renders is a weaker, periphery check;
- can be finished by a visitor in about two minutes and is safe to repeat on every run;
- names only controls and strings that really exist (copied from the code or the screen);
- quotes the whole visible string when it says a line "reads" something, or says "contains …" when
  it means part of it — a half-quoted string is judged differently by different runs;
- checks an outcome the page would not show if the step did nothing;
- says *where* on the screen the outcome appears ("the results list shows …", "the dialog headed
  'Search' shows …", "the order summary's total line reads …") — on a very large app this lets a run
  check that one region instead of re-reading a page whose accessibility snapshot is thousands of
  lines, which is slower, dearer and easier to misjudge;
- asserts seeded data by value when a seed, fixture or migration file fixes it (and cites that file),
  and nothing the code computes at run time (dates, random ids, rotating content);
- uses an unmistakable sentinel for any free text it types ("zzqx-test-note", "Claude Test demo recipe") so the
  end screen can be checked for exactly that string;
- contains no credentials, no environment variables, no other hosts;
- when the app has accounts, says from which vantage it is written — "As a visitor, …" or "Signed in, …"
  at the start of the steps — so a run that meets a sign-in screen can tell a regression from a
  missing session.
