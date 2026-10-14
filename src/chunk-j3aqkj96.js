// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-5wbhf1bk.js";

import "./chunk-g6nh65r0.js";

import "./chunk-601j5vvf.js";

import { ie } from "./chunk-yxennhe9.js";

import { deflateSync as j, inflateRawSync as L } from "zlib";

var z = {
  30: {
    r: 0,
    g: 0,
    b: 0
  },
  31: {
    r: 205,
    g: 49,
    b: 49
  },
  32: {
    r: 13,
    g: 188,
    b: 121
  },
  33: {
    r: 229,
    g: 229,
    b: 16
  },
  34: {
    r: 36,
    g: 114,
    b: 200
  },
  35: {
    r: 188,
    g: 63,
    b: 188
  },
  36: {
    r: 17,
    g: 168,
    b: 205
  },
  37: {
    r: 229,
    g: 229,
    b: 229
  },
  90: {
    r: 102,
    g: 102,
    b: 102
  },
  91: {
    r: 241,
    g: 76,
    b: 76
  },
  92: {
    r: 35,
    g: 209,
    b: 139
  },
  93: {
    r: 245,
    g: 245,
    b: 67
  },
  94: {
    r: 59,
    g: 142,
    b: 234
  },
  95: {
    r: 214,
    g: 112,
    b: 214
  },
  96: {
    r: 41,
    g: 184,
    b: 219
  },
  97: {
    r: 255,
    g: 255,
    b: 255
  }
}, x = {
  r: 229,
  g: 229,
  b: 229
}, R = {
  r: 30,
  g: 30,
  b: 30
};

function W(t) {
  let r = [], n = t.split(`\n`);
  for (let e of n) {
    let i = [], s = x, l = !1, o = 0;
    while (o < e.length) {
      if (e[o] === "\x1b" && e[o + 1] === "[") {
        let f = o + 2;
        while (f < e.length && !/[A-Za-z]/.test(e[f])) f++;
        if (e[f] === "m") {
          let u = e.slice(o + 2, f).split(";").map(Number), c = 0;
          while (c < u.length) {
            let d = u[c];
            if (d === 0) s = x, l = !1; else if (d === 1) l = !0; else if (d >= 30 && d <= 37) s = z[d] || x; else if (d >= 90 && d <= 97) s = z[d] || x; else if (d === 39) s = x; else if (d === 38) {
              if (u[c + 1] === 5 && u[c + 2] !== void 0) {
                let p = u[c + 2];
                s = G(p), c += 2;
              } else if (u[c + 1] === 2 && u[c + 2] !== void 0 && u[c + 3] !== void 0 && u[c + 4] !== void 0) s = {
                r: u[c + 2],
                g: u[c + 3],
                b: u[c + 4]
              }, c += 4;
            }
            c++;
          }
        }
        o = f + 1;
        continue;
      }
      if (e[o] === "\x1b") {
        if (e[o + 1] === "]") {
          let f = o + 2;
          while (f < e.length && e[f] !== "\x07" && !(e[f] === "\x1b" && e[f + 1] === "\\")) f++;
          o = e[f] === "\x1b" ? f + 2 : f + 1;
        } else o++;
        continue;
      }
      let g = o;
      while (o < e.length && e[o] !== "\x1b") o++;
      let a = e.slice(g, o);
      if (a) i.push({
        text: a,
        color: s,
        bold: l
      });
    }
    if (i.length === 0) i.push({
      text: "",
      color: x,
      bold: !1
    });
    r.push(i);
  }
  return r;
}

function G(t) {
  if (t < 16) return [ {
    r: 0,
    g: 0,
    b: 0
  }, {
    r: 128,
    g: 0,
    b: 0
  }, {
    r: 0,
    g: 128,
    b: 0
  }, {
    r: 128,
    g: 128,
    b: 0
  }, {
    r: 0,
    g: 0,
    b: 128
  }, {
    r: 128,
    g: 0,
    b: 128
  }, {
    r: 0,
    g: 128,
    b: 128
  }, {
    r: 192,
    g: 192,
    b: 192
  }, {
    r: 128,
    g: 128,
    b: 128
  }, {
    r: 255,
    g: 0,
    b: 0
  }, {
    r: 0,
    g: 255,
    b: 0
  }, {
    r: 255,
    g: 255,
    b: 0
  }, {
    r: 0,
    g: 0,
    b: 255
  }, {
    r: 255,
    g: 0,
    b: 255
  }, {
    r: 0,
    g: 255,
    b: 255
  }, {
    r: 255,
    g: 255,
    b: 255
  } ][t] || x;
  if (t < 232) {
    let n = t - 16, e = Math.floor(n / 36), i = Math.floor(n % 36 / 6), s = n % 6;
    return {
      r: e === 0 ? 0 : 55 + e * 40,
      g: i === 0 ? 0 : 55 + i * 40,
      b: s === 0 ? 0 : 55 + s * 40
    };
  }
  let r = (t - 232) * 10 + 8;
  return {
    r,
    g: r,
    b: r
  };
}

var P = 24, m = 48, H = P * m, S = "7X1Jk+2wd5eLNQtVkUWoClUi5IUpgIEwBxDzDA4kBAIBMc9g5pnSAqpYUGWGD2C+gZcs9RG8ZOk1K38EY0mWdI50zn339r/7dd/XOlX9Xvfv+sqyLB0dnfG/dLJr1KhRo/ejX/6Uve6VUoLA7XEcHN69Aj4xuHl+fGdwS+Ejg6sH8d7a6T3mj94PS8yT/hweqqNu2KiB0w6mBm49cU3e2PSN55T0o+/eA3HyE9V1MvyH5q1778P570rgqpwu8gQ2Au8CwOHuaxOBu/8MwrfjmCncBoDD9+MYKPz8T5WMVYb/RJuXjT4P/YrnlIJE/KXYfWTkIgVTib9skPlF5lbs0ulPhbmTjkzGYG5z/jlGKSn2RxpjTiYzG0eb/0UlBorJ3MIdgz577fizOu+/qsCnrk07dXPB3Z9xf5PskrqvcfcDj1wwU0w80sZhTaMsbo2ywHuGBN20WRww8/lYfnTOX9bzvyR/FnQTh70+r+lx9/u4dcBu7nky7Lj7O+5vPRnIUR6ryWDwrGj0NfqxO4VXa3tGWFffHh/MuRDmEfdImD3Oz81kSUKscOZuAxSX9+lcAKPjEWnCOPF6Edd91XasIl2+i9QfMYu88maqnxcToXBL4a47PYG7/uyKGIfZnxuWenzm61GrFTBs4YPdFHKW0PGTkTp8Hkdcb3ipecYwEe9rdB8o4j2OVUvXc+3lkebCqzPx3bjuAS6OyED6fR8yPqcjkxuARQZcLln07v3IrNPZsJ9He+TGYoLTagVMWs5xHq7lcawfznZG8WHWkT99vL/Q/eXJeKaa7GLAG1+CuGCLdTeEye7mjd3yB2KPK33v/freRdxMTZiJ+vpzvBjAep3yoHpE7v7rXniBm6W9vpbwweNJeSKitsq4JeFakYkBmet/nVoJ3z+XjHAiQ/hOyWcO1adnAJqLTbmmBsxnvCRm8G4OFCE7MRcd/1a0Wmw6ef75qdVYNthEf63ANbUnzmFV7p9tmnZwf9+KCVe6b6nUyupfxXBdNINXJ/DQplcHX8VxfY5eXWjVteJfXRfvdw1IfONuZJcuTYWs95Ku50pZ3wx4dUEndKQJlbm48nNy8df15sMt/A9EP/6MZzEz2Wks5TIVBZ5VVXrDizRWP/oL3dYE1p/Nq2fee6RsSmtaYuWUoJWwJI7aKZRNK4U7ddgsGPX4NipAV7fUQh3qzltPK3XYm/0+H09F7nikLu6zq1qjPB9HHpWMSyR3ZdygYci4RQcehBsGnyh8YdpxApfs6H4ucGqA50oS2rhn3EvR26SVnrYDPjsSr6EY1JmNF4Pc6MrGdAr6lR/GziUZ+5Rh8IHBqY17ZnBzAxcP2JU0gyse3zpaP9/sJo0+Gf2qR85BJCoW0gwpVlK+93BPw5I0chJX4+0YCw1EX8ROn0Bm+gQiGcY30Zc7sX5m+M/wAH+zjCS0M3Ztppdc79Ur4T2DdzfwhfF/sI/4P2hmvxC1VioJSRu3MWimR+QX2EeeDqwHh9N2I8XgHR5S4S2YSXT7A66pmV6o5oPyoF99j5RCn17FvpMvgGEQL/lgYT4Qt17ywp1phkcmnuRmKje1B2aNdNwa4ZiOeXARcsxOPcilOC4iXsC99AMDZA5seIMvn2HKjE6LvC2z07iNaWJ2Gnk3H3ITcb1/Ro90HzUPTzQ80vND0wYl9bHloF/TRMEH6DQP2kfYxvD4GQ3jIuE7XhHLADUdclzXuDHvswq40F4rKi/dvFNsLOEn6e97U+iI9kWLqMReon1nm1S9lI6tWqkiaEImipmYmlEGyJarVQXBqRQZHM/wvGTAxrX1AL4FYBGeWp0pfXMFd+iX2OowNdXwR6Bf24bgFeh0B9LdK/gNf2tcXOrsMbgeqegnSrgrHbfw09/Zkzs6X7/aZxqH9/bb/tz0E20IGj09qcVSMo3CTgJIdqLOMwctx3UbtC9WNteBto3s9DGSOtH5GBFBH91m+pRK6qEY1SF3StWcGkJ9W+Pdr2sT+HOv3oIkWo6VgZ/FbUG6DW2jO+nXtyFo9PQ00HKQRq7NSMlOSRjXSXNj8JUUayjBxvtpUhLJ6Smq2tsq6Te8TjOccm/eNGd0UrQ5wT5go5ppYdKpLzWtOf5Ql3OWfkPLzeTl2ztdfjCXc14KkjYMfqjL7evM1Le73MWBqMcW4DPQU7rEKWPtPJYzSUUHVexXDByloWqg95FT/Rn8gbe47JGk4R4HDKIKHvaBpd4CV2zgtOL8EZM1Gdin7TFPqaHsNHReLrOb75IMZfacleoAAZop3tabwa7OrXHy2pgTwMAwtXA5sMJH3Ib/Svy6vMKvyzNuY24Cha32Abc57vMaIOc0mi4Ho+LHwdZu1r7FNHRg0HeYbgP40swgZg06NYD0CT58BPKg8N7FinQ8bg85Zq28+/NcCjuURCWuSJp6+xXKmLE5oZb0G59Xj0G5F9KO0iGKSjE8S5Uul26alrhz4HcRryXuPblFV+H9YeW1ShXl6HnDmajhHwm/9Ftuo/K/9IxiTH0Fb8TSb3q+LovBLNYaLbiweRgX3m8HJQeFE7t2ZukNykGTjxLNEUE686Ae7owr42rJRnioB/Geab+jj0DLA76CjFfmSJt4etolkPMS5R3bqcZnuovvA1P9rpwRVga3DG4ai/kq/eanPIrNN3nQzPGgPMukv24QnRws0lua7M+GLaPgdgvDa4YbjsyP4JpxEF5Jt1kn+hf2Z+f2MxG+/IqOpbzkxGPR1UAb4z0VqaSDLhkhHS3AOVCzLuacp/T4IPOewIsRZECwWBaBmtGZoyqQlWNF3pgupNdn5MgTaNiZmFXBx6xK1WJWKfrJ5+z2RL9JzvdsoSUFyc9lTr08PqbRfUQrujymkE+dnJA/oNiB7qZQi0kCz51EOOCPCF/S+pQQB51Evt4gxg7he0hcdkXrHyb6eNYukPYmDrwKPMMiYn7VD+qr/sp4o5J+y5M7tBT+ZYXIXOELxGeTSD2l4kKO56HUGlngKf5iqvzvqmFw+g4nD16JzCjxxeluSR7LBS49HKZqGcHvBs6F8c7d7XCs3grquU6xJqqQ5QoeSyc5aMHKZyRfI+k0JoQ70w2Vu4nP3dHiQ0r6rU/ZazkSp7GgkfZnLuQsAsRmuJS8eWtSQg4TzB/otT2ylucZhQEXADoy63all4m4EXcqfXITM/RVgNqVGREYYHyWtblWgLlV6zwZ5utQYcEqjw8ggKrEInVqNiBZJJTppLjC8bc9tH9ZKiq2cGRIeJEEJeE9UpEBx1/k+TDkq9CNgQ8HPP+iONQctyY3qOqS3i42Kj0feAYAuxieGNEutld5n4RqTIig3/bkfr2cmcJ+BUdOvUx+hBveG+uDnkDdY8438n7upRgF9vJqrlbmgQQkGy+JMM9kH8gEwOiTJCOP3YiYnx/QSjEqfy6NgV5ppdfZz6YKIum3P2OnnWFsrqqkJKU0csxACe+KeOu5d1a2FUrTBqxRGJYDFxdw/hFoSVtkH1EELkt8yQqSCWpLNDDjACV52p/99hwMgBptxGF7XgaXFRnl9xMLY6sZyXHrXVaKIYTeH4uo8tlIp/ROgpYE69rfyFKsLaWSK3L+pHzPpSkvmvBK7b0FMbQj5mlrbHDGTGpJX+yRcWHIQnEP5BgLD2OLGdQYlNICauTzzibuyietdJODCPodz3gS02ZZ6pPYTNnF0FzZemwimgelvF0snVm8jqDvKh9FZLhe8lxc4RoDRwS8BpJ5uzi5JX1HYUlKqUD6GpdEqp9sJ9qQYLEkfIJ7PMg5L8HDT7BehQmpYs9lswUFU5XK+nxWxGEiKzs9aCyWHM4tw+8YXCIizYhyGy32GD7bzkrb1upDtD+2V3A/F7PkyosSlD6CsiXOkjCOrlTeejs2MYim39mG4B3otN8uPVNLj8igxcUlcS4oW5k9G8WRE/3pJzs+9fYseibF57Fr2oZPnbuOB8fZMuPsZdGZjhdrbtIV/a42BO9A42vyoOnu3BRqp3NZnAer5+ZBZ+4OKvH/wOTu2G7m7phfJ3fHRhvuXit3h3wsd8dA203ojKDm20bW/lRjCDePffSUXykXYe/cVjOEYJabqcNAUQIkcSFDRpUssiOiSrayiXAmKmuI9f5+VpKR5ZrkhlQkuiFumPpNsQGvpNtHJqzmoKrWhQEj7h5qem0D9UKoAcr3N9z9V8Xcn4x6n8g0r95S0pbKy+l3tyHoPnhNWUQCHQPqsCQOn4r8Pn3rf6MPQr+nDcFdiQQUXeXL67A1u8sTuyYtpiS3EkrKoMWgO6SMlZIytptSxk5mOGVcfuk02qG7dz5eMBmY7h6pTRhSagtPVL4eeVNKpGohkK9Lk6/XNdTMW69Fv/cJ+3xq9uxZbbXn7GJo4mk6gnBOdrEZnumhh6LTLG754LMw4UrixXFhTGkYTR8F/IP05NKul0mozdeT8CLInsy04419oEiJeYhX8SUC3ppOrkUJUp4RbVzgqqTVOEd3d1zs+cBNJX13zbAPb5o/c49jvZkYsx8QKKhudiTZX6uyD7XDnduHAsGIXhGQnWS8YOAUAK5A8Fiyg8W309drWXX3u8V5N7pHCgWJpEtVPph0Xwbsv5RN5xt0TfLVVE/nlGRlD47NuSAbKGd9QH9IhANvZYSP+SkQPiFf0YyD9GIlbn5wfIO+AahMt6n748cne2drgE+5Kq6vGCJzWe6rGq/LdGT9FSK8L5+UyiX62M8dcQbhx9dOuPtcT0bI5G4mT4d/66Mfr1NopXG6HNxqnibGMk7nSen3PW0WZMnYF9b7bbGMfcQ1MxENndjSEw352uR1PKv0xo7aqToUMR+qhtbQQtkjeV24FA2N199lUsNYvL7wiJaJf6zIeycbR0bUUA7SRynRoZMldCAGbAiFrzt3bRhVqlE61SqCTVexqSJ5SGdlUMoyJorFGcW5ckxiqbJyDHVoSJRjfvk41u7doaGFeqdnQ7VTuWQsW40A/f5njdXoKLPqVSKLC9UEh7QjTWq8y+QDm9c+7JKo/zcC+xc64O1onzVU7GWJbxS+0e1AL2KAS1hnz815Pz6D82PO/rsooFfT4wO96PL4YAUK+N0rbWaq/wty1jRoaa9UPcWscKpxSeA5e8pd7Uj6vjBDVMZ7s/OxPmlAcVW2sR7P3U5DYy930R940iOkSyFUHMdgCiFwHMs5XjEfCmbpMxrxdMMHIeMKqYz1PoMSe31ttDd8eWl7f6IwNkL84GuKGkbzND6gkeIS8YwvyIRkHinpuvNJVg7R3V2J1DdE+riMXHXbFQ+RskgrrbLD9ISCXzZrjN1Q3LNANjyo0FYpLKaMnRdqPNO5tnANRH/wyXRBRahq4TnvJsusSbyKLz/8Lr/h6I6sPZWeoS2EVtVrkwyhbZV7mqFYC2tgvPiBRf6N0tomJ7QCT9VKCzzxgAfwhcHtg/j0wH3HyAAKPAWSmSq50UGMT+p+gVuUlxrd1dbvy4BwjYSHFCaJ38V5cu1sAzmvZlHPNzvrxmjupD/UfacOMxwOJQ/gbzJ1X89x8+z4TrnXWCb78Q38ex2fO8YtF06zXKG1lsz1UfrDz9ZhoWgmpJhk4uqgmZBKWcpxbWL1SglZPyIOkrZJJmOyugfn2vlex+018EYs/ZGn7HXv1UFlmZSUwQ654KPkHVlu9sf8/SzaokKKPJOdDpMH3+npN9dqVi9zV6eCOmBI0vqR+QE10cKn6eHUR/Y23ifugXGFePSBko1QeOfbsDWOjjZ70c+I2+K5Il76NkR8KLQ76ehUqIMSPjGJCHylnp5wXNJADRjOYx2wqe6nNmiyWJBGyTugnj8n79hnRSXvaD5CmP7o8+mDsEwkGH2B+rR4kWK51l8AweYWnoWd+VOP52vgjW7QH3tydZB84fFcp328TCj9Eoffhn+v+JQsF00d9Fb0x5+wz4LI5VqqMOwdeA9yuX42PetT4Dt/tDSMc7n+ysEY5FNFMTF2j6otA9VfPt3bGrNw57tKyzEaNXN2eX8Sa3b5mv7E88lBfeGyKOppnBOvIHzIvmoQ70GhLIAjl6CMe/2SqpfPTKd1NViVEXFdaIYuvC8T3gTcWf1xuhCPi7qioMeJarNXUvtq7TrcEFl2UjszgXulmSbYSF/FtF3P5V7IJgi2Mxf7QsTFWnkf2qzHUwT70ijQAbzHGTrPw/e+gseDuHcV0h09f/aeYJt5BG31OHSJkUaZ/uSzdVjSVZ5fVMy04Q2H+EhUjSo1ZjuDWwZvHOir9Kee7xTW138pZLEY05xQyK48p3AyhUToLX17gNNGZDuI8RXo97Qb2ow7V8Y+zj4D8CX6454Xx+IXDh/j5uvccq/endeaPudvN7GqmA/K3MNJYnQQxJewWS/OxHRt3B4fg+C1uUe9nnJzfen9w0v/6YWH5nbXwuAtcwhfHDR5C9YGce2aCNUjrm0/4NL9EZ4u4PGxNz8CGuGxAE94uBnhOsXchpokEZcpG1wY6BRhumHfx1Q5KFUEGCNua0u6YHAFY24Rbnl8vrM8XKNMf/oJ/aQFPIpluxg48mC7z87gKEos4TAtPMRHoFVA+IqiphJuQPlVhIMaQAgH4a0Qn0G4OsQtCG8v8HTnAk93LvB05xLvL6DE450r/AoWrfCrRG2FX4U3ajzcucbDnQnc33mtcX9nW+P+zhTeF/ZBizPk1rhmcO8H0DjQ1+nPPKNOejjzB92q7QPfO4rqMThuaJuGULsuRxCZrCPwBTf7sjrMpS8ASiBJyPk7EsJTqZmhrl2zU6WtzHXnMnlY/P5WbMQqyy+2jP+eKL+hI8kvb4LLLH+tVD+p5xrAc5eFRIgaPluqGY1vOxFJVPJbkkD1F9wtgex8ZWLRO6zhE4TnyfiYQqh8AwVGsE5OWa7GoSu0OjamVNLwtDYxQeSZioHzoqPdfXOAc3L3XSxKZA5cOkLaPkO4evQ5FQh2AZlyeh+E94mFFS4juXD6D4Rz7Ru6P36HrvuvQKU1FdUjZlphZvjCfXoSxDhD17zsVj30zU26EUU//d3LQesNOcjckoP6++SgXdBy0MzIQQOR12Yi/IZ7nNwDZe8ojdZ9loOWUk6ZKGN24GXyQby7gVvKer4z8lqZJiCOCzUOkpAfU7YSLG/mfs9IoAJy0FHIQQZatmSSg9aOlIOg9XDmnICG9WD8pKWzzvvcc1Te2CtVLeFF7W2BK+ONQLojLAdfkpb0sF8W/W7r+c92T+qj2FOlnq7IedUxoZc5VtOt7uCmuKI3D9SNPiPxLggb7ZK5FsIlbfsPDI/C7YP4AQu/W+TpMtE+B9FaDUrATsD0XIxPDgxHOCjkZwkZCLQv92KxxPuOxVJN/cGVT4ENHi87i0LfDeVatMGWAK442/yEfQuxIqfv7vbtCBPCELjcmfKNjQD9uSfssxyd96rReCtRlkzShW2la4+cz8yZ68s7S0deI0PCzZyhWpNJWtVYZyHrioAuzhtvY3K6sol/SH+8kCGeKN051/nIYOp3PzqiqpBe5eKK0WXXR3UO6pDbhDI9h/1cM2FxlhmugxuW7gE/58S7ZV/u/qEG9LoPhYg8xj3CDvBIugF185mO7BRfNrhX9ZaeVs5HcT+YWs+9Ms1JkaCfeeqY+cuRo4qNv2y7JG6Bg3T2wT95WotRaPgb440o+tnu2VK5SvxnT3nvp/224c+Oz1HvM1HBGhYd2HKy2xEZGuekZkKVQnpgi5iyjmbcwZeDOnFdppDTVpP2VlzXJKVvqGrRN7sYSX/+2ZJJU0ypTnER8rDXGUCD0lNUh4grPXvZUMwLrwtdckz/LopghpQufkGqv5xeXqMzXc4iL5B705K7t8D6QuBxNFA0wAzuAqziBT4lyMOORiXnbR/Qw+c87zMerCWu4h0PbuzFUIxh7PVUjvnVva18R8HzsEfa/tiQ95mcawXs7IZ+qBPA7pLQwfrXTyVRWZjazZqpvCaOG8WYWzbpe+nnnjdWLDEhSxkNjuy1XHmuEFl5vE0VmrUuluDKTvSwjEMOA7NpO1Z5jjqPZ7espqR0SrVixqSwDG7XKnkFxiIe9syDHVakiP67R+CQVodbBY9hdT2Ay18fFrJO4VoqeVqv0cfR32XwFyn3aLGb0f3ZOHYWHJZteFJf2cb96zmQ8gPSBz7iXSO34J2ZSuSYIzhlB1/nyf0Tfb59RSDj+2a9i3ncItwfoY7I5r4/JWdLE4bmZCru5mPcI9QSHtqNXPItdI7ha+rDsEd+Ovu3HN0m80QIPqjz1bestRuyfUtAX3kFuBIygR05Ms5CxrVnh/25uSjeR3/h6apqCCJ4zBQy/HZFSOa6UDgdM849JnYkd8DYjhQECQw+OKF8LlhTsML12sh1MRMvi7DYyqTrk++rqfd/1z2512pe1/JKaXktU8tIHnSm9/6glcWWrmzl5AtbddP308i9ukN4otINMwqHVfb/qLYv8rrlimsbCn/FfMSU3g1F3LyEThNgEiyosFeaBEWufhmV1WsRgXtZ2MZytMReD1Ojkv7i93AWm6sNJ2TvkmXVhchtymoYcYEI/IVcmhDPLuAVtIFJBt1qNPh9hjM2L15UtwtM98J2tlxfKL3fYk7GKngpeMPUVRLD02z16cFcsqEkioOQZjmN6ksU9i3TdM9NJ/0Q/Xz3nIU1ygRC5qDjmDlcw1TSKxPfzBRjZirZiI12JHvTVgamlZ1uZWmtPNJKV5tVDYOPDN4OY1+lv/SD1PiKpJk6O/ZefGPascwm0/CGf0/4SvndPrqOdF0k5jnoL7/we/Qh96wyqBhfM3L4e26j4DLrKc7v1DI1dRWdXP5bfGFjvqBvfMEwX6CVCu/3BcN8QexMLULDOGe+4xdm5guSM2pxs1hys/gbfGGjy5jJZ+JBv/DyUxFR4KWIXlT34LEdbpgb3vDvGY+Ot/euFw7vqepxT0F/pbuvlo4xdxTO7WAgRL1PeisBIRzMIJtXFYK8VAf4kLtGlrceL9NGsUV7a01p/UKKYl2Wz9JlhojwuyU0OabMEXFZV0Z0sJRV0vxGjRpd9FfbEDRq9ORkCFKkijzlVyBxrp23Jf0WjTKnUblP5OF1KdJtoIR2dbRkJ33k965JfRSXwvf0oB+/4RA0atToPvprbQjehoSebZVRLTrkXlG1feE+uNsQlQRzyCyTSkH8pFmZs9qjsI17SuPci+t5JTLnpLB8jHtn4WWMGg8Ds2DIuv0V6utB9Vu0s+DMcobAewbv4BhqHNYS9dAGWpy88mVy5SI371ad9jENc5jArCFxHKzyGaiA1rs/kwcN18P1LZIj019/5/sPZtJvsE4+CK6WMp+Rryi8pOmLko2tmQtNAN8vkW+EasgDLOIRrFDEwbYclIL6mf3FMQ6WNMJFXpX4ed8J5/o5Ms+1onFI2sLhQJnA456gdpw5fPdMdFwQb3V3yqx4RhpnMQXnzm2oEz+cQastn1BBf6MNwduRDHlQ7YQOp2IC2cFEmfAx5FQD+6f7e/WzeZiBldnAqS8NVMFvgjYTaNrj4JHK9T0d7ME5XD6MCyYItGN8C70AIxkHCMOlKsp7Qo8F1DGlouqRmHlmRDQhkyIY2/FgIudlTLG4mSosccyyUKOL/uZH6oyeaA3Yk3qhuXIOZ958ifF+S/PWFEkPz3XmWdBaVHNYpGdo8JAAayTCgqFbkY/dUrzDIDdyReA4gUDGcTL6b4fj3KwZx6w14yj3LvQ2A/l5UX1FN4abzMdHC2Pm9lkrs/lAY0vkCNYDfL9RCjot5ArPBycF6caAKvpbbQjeWAzaiqTCwM8V6dtDZkSLMshfVzvdQhCfpjJaLC7EnolNm8tMHNElMe/+PVJK9VTA0wHi1HcQKANj3MiYhhv4hs0v8quJEwUjl+lHEllqNBASu5lcJpPTsmFwLmcnBpkFu+T0MFE5LKEhzEankw4qoZZAqKS//VE60p8VLuxihiIPkC0Ccq6ls5OOWi5GdTdKijNT/Vos7/4BT+Zvr0RSTNXOEp+QQ5pnWp70d6hM+/7wRiT9nTYE3cusXnV2o5CaWhbaoIKHQm2Q00Ff9QxEqHfmyy7AtM45fb4AtRSR4eeqH9hVBTpAMALKKwJi5FFMDDiYcdej/IQgUZuE/BHqdHJWlX6tapDsi/FDtvd0OFSPBZjZ+Jy7Zaro7cHjMlW5IjD79Qq3GjqyfAbWMpsdpf2v6y4ELTYlpfU70+vpEgP7IuYr5oVThZiYxEa8R+eDuj9unlZJF+vtc4NfPrSo2gw00Qr4vEifdVazcWncl9dXqv/dd17Mp5JOfb9bYWBDK3iVHk/LLJ+5HD57u5hFUzrYZXwDcsX2mrSYoG83WtHYKD0xxmrT8LfHG/H0976t+DDbkYv5MPfn1hJMRQe3AWw0l/7mBlGdNB0dU4ToPjxsqnNLwPNOeFn8oGeyeqiv4I1Y+vvf/I7DsihOGJb0rKD4kz54a/NMq4i/bUI7WWtcaxWP+jqeiomMn6w06UfEe6ZiUUcHwa+M+8F0v5fBTF7ua9+t5YTufV0hDIvhUglM9TZO5d333Hasl8p5Xnmr9fMPuvdWRZvpkeQdT4kPrq5UjWtwcLLYTEzUXERwxgesT4m4r29Y1w4s4Quv4IDXsMcJ2OMTsS58O3Mtzob72sodKOBeXTET4ylWplZiv+MtKddKxB+AWo8HUxORGX/2fQU+cVkj8XyYKU7RqKB/+P7ZWWOVMDp/3X14kDZsO1E0/A58vGHpn6j8WNZr9Zyboq6LMAfNXiGn2GierySY85Cu2wEN0j9qQ9C9RRyzDvGzy7lt9i4m11wsdLssErvQwNrui83sXh09RychcbFc50Q0RcPaHoIRDlBBeYz1JYAfjwLlPBr+/nijW/SP2xC8VTaFjrGL9dk8j+xiw/oVu9jG2MU0YxeTzS7WNbvYx6d/0oagezvt+074SUtL+knHWI0N8yYfkx1YkIV8BFYGsUCJCivlAF/qASlFsmMP8ifqRugPvWFt7Fg1D6O+CoXPg3hmlivTPj5l56xzI9ITT6ie6gSDzRYQHyeJMVQ5Blijzk3BTXqA3jU5jqxOgOCjzYKoW0WLtTqrJI1tCN5QDvJcaC/i5lUuE4xEkwHEzZs6bj5IT5KIm4dBHFAOgpWK0JYMTDB3xZ1zceq34uwNEwdP4fLB9jXTz4l5rg2NQxqfsahZeOVC1zC2/pJXz9e5IkPsleegSmHidwxTx81fReWquPln8Xc7XRPlW62Vf9rYxVuRMPEgJmFm1xyzOqgqZtWSMas+jsmbY8mYVXOgmMzsjLyiGM6JMA7hItYWxbL2BI7lkdfHcaysZWJrcf9HAkd15cWGYnphDUscs9rnQvJo/A8XNX9uBVv1vsKRGBnDoqfxWb2+MJo6McjHrD670bcfzWueMf9Z4xXd27ko9okV7VMHXBFNnsMW4lOe2jOUBqxfRtqVQUZSwhoqLnclfspOY0fhuVL1gHEVy8P0CKemoGIcs75Lv6Dp2hXKmDxL5Gu7hTfi6Z+3IXg7PrRsIX0Qmtkw4SCQ1vWVSPHKHzTAOgDDFaO2Yl+V3GzOCHHLTE052KGEhl3hq3bMdbq/KMYtpWwec1acH6kyuG7Z6/Dya+FPG+v0vjNFdvTBxxrbr+DCYKYzp0wca+y1z2GmgNJnc1Hz4Sw2fzVaTE7p/Zbj0Ds/sWaXr+hffApeYJdvLLJ6MWjLCSqIbRJ5OVk6bP479Nf8ADhXWGzIB1ZVhRI5ldCpAULCjczbCa4ikyI/V01kUnw7j+PnpH/ZhqB7I520ov5otupvg69FriVTJxBAPtdTkn3UBg9SvT9Hn4Ey7osruFk2i63OWmDKeHrnzYiOwiGFWUvkWtO/akPQvUkECir8qC5RSBZxO2s8hWBbuEwaF42OUGPab3HQEcjqsYCGYMFQmKxshDfbc0Nw3QJhQaI+9OmvEXsHb/HbK871NF0NySIeKjY7liexqxtrqXUK3ZZV5Trh2cdYn88WB631ec6lcCNzfuw+VeJExmxRR9nhYOoMbHTdvUYk/es2BN1bRKuWKha3BwpiZvp0q3utwPQOtukw4RLnJAcd7SuUp0OCTb6Pfk1ki3J22O2v5a98bYg+rJ41+/W6/TqseBMYgg1/nYtYhjU5hx5e/23nl8ONbWgg8BHh1rz1N97TDa3/d3Rf7f0NI9vwN/O8Y3AdtHHxCndb/yXj/pnjcKjzw81/1XYmDqTrtgx9Pu1Wjt+pyB3MEDp7ftW5VonIQReTHvpUze1JhLLXRdoPhgX+RIFbKe8tOkG2ZPNga5hk2mSLWtP+fJ3+TRuCtyAn+Awg5thc/mpexSyATnQCW+qSTck5H2s+JGC1crqqL0ww0almLbfo4D0z1vGmzoQv95o/upbJnKg+l8EuO0qQoGLCNX29DHV3V0qPM9SGJePbWEqJpA+cXRQtiRXEs0wd4UNky/q6JgtocfxRqya3hHuxRoGzyKSvyHLDjQr6t20IvsFZbPjaWWy59yx2vPAspvFZbId1OKa6mfIsNqDzR5+SNWH+M8UuTIQGWBTMI6bC0OWpaAvccCnZ2eTZgahORUHK0zUz2y75a6xZ6BoltSIn4zFSh6vV88qRrmlORL9KztQXxFiSSZO8aqMt/DN5uVeED5Vrts/nMVMZG6nGdUxfXs7o6e18FP9dYxjdG+cwwwmELJPiisNzOxOzq860yM9Ut+l3Oi3cyjc+0I1PdOMr07j8+I0LOqsPJM0YOBWDNyno6/TvH9FzqJ4yfFOTOhbLohImntE3mreK1jvWKxTdUYw1VjHeNJLBO+6EvzO4Zco+cPHUE4Mz1wtyew4uSLJ0tlsPqkJ2KAZbO+5YIqdz2lq5M0bP6WJf6XkdPjJlNNQD70sw3IGbD4qpwja+UlEozZXK9TKMrtfd5cpaNybng/OSOtMm6w/Jg/7D26hDeF7Q8IY3/I3wM+fmExr//+MdacYkJxLsiyZxx4lF7THjvWU5rzFyH+AOxLf2Sf2I/MLgkt8POfxReW1hxsEw1USX7gHvZ+klHmKnD0WRNlsJnWLcqA20XyinyWt/Hvp7q7kufJVUwzzX/Mh4DvxaJd9Xf0PO7R+ZPyvtyX1rfhrGO3Ko1p2eD0J+j0FqFE7Is93HD9X/T+04+p3RmahvIBSWFishr1h+ueNMRuN1Jva5VEPMrQCRIbEyji/MMw4p1/EO9NSwPTnHGwbPP1zV8QrkmBbTPPc+M/2fNgTP7YlEpB8PnKDWsIq9KoUFs+lv9+JcO9x9O5w4oFEjRP+3DcEHoX7K0Z9Y+5jjKmd8fJ2T+l9ha8B8/a9LM8FcwdcHO3GKugwLmrY9244xRMwUvFUfhJ5U2etjB8sP5tiT+nl1+dtVUKL+rdFHpP/3dk0P5DH0TLZCGVhncraH2Bs7EGaffe4pKxqlBBFz3+rNt3rzrd78B6VfItsYfF7RS1EkCM4Rlh+HT5aipuRpdBf9UONBn5YUQ8eDZBlqI9zoHvph+WYTvGdkYfOAk5lmZPCNNvYqJruVpUV2RYdDB+dYzbgd7Jw7ApMHbKOdcnfSJ03r5ljb6JPRL5VvJOX3nB+QZXgB4QBrGGfQkbHLBKXoQLrjko7SK6NOYC7nspgaxo2Wc3/ZmUhGGOfaqNEnoR95Ax4k1ZUorsflU7dLphE7WrIp2rDwfE8hlFsVjKzrdKZe1umj9CFw7HK8fMWyjo2Xz9jk41TCCuuGx1gHw2B+mdjkgv1vhnjZWNiW5ujAWdY57mOeM9XcZRp9Jvpl8g1OYaL4xS/u9QpWKg4iS8yEWRxcUihgcdDZYj6pAtfx6xrLTiKygB7LSCreTWOhx0QOM2GhZ4khUmsVLm5ihzUyX4fLi1C1Idq2TJFxI1qGBmPacazRZ6IflW0MPjz1Z5TLWrMmXRZr7bDv80ydYOtg7qUO1r+Jc+0I5r6XTEg4L/Yz+VyNPhf9eONBjT4NTdc5+CzZsfahSIgrWjJenLO/RGjPTffLR8HGA3fUW6qQfGeJudmuA/wpm8so4kc943RxZKHHKOX2l9jbNH+ZvrQh+N7peCXibPlthBv9IPSLvtwZF97whje84W+A/+ImB30iUmRxs5fhlBzU1ljDH8dF40Gf8UD2cjyznrEtqIa/Bv5D7Sz2yfDXkINE0wc1ejX64S9tYX4K/PXloMZ+Gr0K/UiTg5oc1PRBDX9H/MeaHNTkoKYPavg74j/RdNJd8w961D9obHJQw18N/8l2FvtkIlDzUWz0seinGg9qPKjJQQ1/R3xoZ7Hue8lnyNFr9ZPLl/hofwxDbSZ8TvrpL2UBuSpOuuENb3jD3wz/mSYHfRSSjJ7FMHLNC/BXKY5+4VXe6Dy3yPvewGckB7W1+snwn2s8qPuIFS76jq6NY1+GvwrXOWlCZTMMdV91D64D15lLHPofNfyT4D/fzmIfDx9LOeiF8sWbyUE7VT/jUblMNX1QI0e/8KXx4w+A98De9IPIFxz+BnLQSduL5TJd8h/dluKnJfPl9Wy3jb5vanXEGr0F/eemD2rUfQwfgkafk/5rk4MaNWr0jvTfvlAh0ooJnW54wxve8NfF//uXuioy5V/b8IY3vOFvgf+PLy/z2ncmkv760Z32P+5U51pX1485DSruh8ed/bk/KyGGH3m66bmf9+uPsw/rs9hg+FGn+dj9vEDTz7Tz7P3hxvlxzRL93t+rPx2bceCx/nD4R+vPx1p3//NL+ORIn6jrE8PiSlmr1Gz19WOU8T+P3tu1YlMr+mrFqPfqDxfH9Gh/+Hio5+4PN86P9od77+/VHw5/rTX/0frz0dbd/3qRTtrZQka1Xj/zMfufx8faxTuudr9+tmPzP+/XH7e+Z7NdP/aw/ufx/nDtPHt/uHF+3MpPv/f36g8f7fsavOPj9edjrbv/3Wzz3etFWHiSHf02TcM/Kd7oJq2NB3WvEm9aY2JcfS3gBfsAmz3Nzi1/S6zkvC3g9EE92wdQgR7S7mobb8TSGK/axiVtRHSFJ463KgbXDD6ASva4Hfq+gu7nSg5DqLGsyMc6aSbuSo5zfGcC9XUHr1LnQbUSvWE9u4/s1Ld1cRf9fw==";

var F = Y();

function Y() {
  let t = new Uint8Array(H);
  for (let r = 2; r < m - 4; r++) for (let n = 1; n < P - 1; n++) if ((r === 2 || r === m - 5 || n === 1 || n === P - 2) && (n + r) % 2 === 0) t[r * P + n] = 255;
  return t;
}

var A = N();

function N() {
  let t = L(Buffer.from(S, "base64")), r = t.readUInt16LE(0), n = new Map, e = 2;
  for (let i = 0; i < r; i++) {
    let s = t.readUInt32LE(e);
    e += 4, n.set(s, t.subarray(e, e + H)), e += H;
  }
  return n;
}

function sn(t, r = {}) {
  let {scale: n = 1, paddingX: e = 48, paddingY: i = 48, borderRadius: s = 16, background: l = R} = r, o = W(t);
  while (o.length > 0 && o.at(-1).every(b => b.text.trim() === "")) o.pop();
  if (o.length === 0) o.push([ {
    text: "",
    color: l,
    bold: !1
  } ]);
  let g = Math.max(1, ...o.map(U)), a = o.length, f = (g * P + e * 2) * n, u = (a * m + i * 2) * n, c = new Uint8Array(f * u * 4);
  if (J(c, l), s > 0) Z(c, f, u, s * n);
  let d = e * n, p = i * n;
  for (let b = 0; b < a; b++) {
    let y = 0;
    for (let h of o[b]) for (let T of h.text) {
      let M = T.codePointAt(0), w = ie(T);
      if (w === 0) continue;
      let O = d + y * P * n, X = p + b * m * n, q = k[M];
      if (q !== void 0) B(c, f, O, X, h.color, l, q, n); else {
        let D = A.get(M) ?? F;
        K(c, f, O, X, D, h.color, h.bold, n);
      }
      y += w;
    }
  }
  return V(c, f, u);
}

function U(t) {
  let r = 0;
  for (let n of t) r += ie(n.text);
  return r;
}

function J(t, r) {
  for (let n = 0; n < t.length; n += 4) t[n] = r.r, t[n + 1] = r.g, t[n + 2] = r.b, 
  t[n + 3] = 255;
}

var k = {
  9617: .25,
  9618: .5,
  9619: .75,
  9608: 1
};

function B(t, r, n, e, i, s, l, o) {
  let g = Math.round(i.r * l + s.r * (1 - l)), a = Math.round(i.g * l + s.g * (1 - l)), f = Math.round(i.b * l + s.b * (1 - l)), u = P * o, c = m * o;
  for (let d = 0; d < c; d++) {
    let p = ((e + d) * r + n) * 4;
    for (let b = 0; b < u; b++) {
      let y = p + b * 4;
      t[y] = g, t[y + 1] = a, t[y + 2] = f;
    }
  }
}

function K(t, r, n, e, i, s, l, o) {
  for (let g = 0; g < m; g++) for (let a = 0; a < P; a++) {
    let f = i[g * P + a];
    if (f === 0) continue;
    if (l) f = Math.min(255, f * 1.4);
    let u = 255 - f;
    for (let c = 0; c < o; c++) {
      let d = ((e + g * o + c) * r + n + a * o) * 4;
      for (let p = 0; p < o; p++) {
        let b = d + p * 4;
        t[b] = s.r * f + t[b] * u >> 8, t[b + 1] = s.g * f + t[b + 1] * u >> 8, t[b + 2] = s.b * f + t[b + 2] * u >> 8;
      }
    }
  }
}

function Z(t, r, n, e) {
  let i = e * e;
  for (let s = 0; s < e; s++) for (let l = 0; l < e; l++) {
    let o = e - l - .5, g = e - s - .5;
    if (o * o + g * g <= i) continue;
    t[(s * r + l) * 4 + 3] = 0, t[(s * r + (r - 1 - l)) * 4 + 3] = 0, t[((n - 1 - s) * r + l) * 4 + 3] = 0, 
    t[((n - 1 - s) * r + (r - 1 - l)) * 4 + 3] = 0;
  }
}

var E = Buffer.from([ 137, 80, 78, 71, 13, 10, 26, 10 ]), I = Q();

function Q() {
  let t = new Uint32Array(256);
  for (let r = 0; r < 256; r++) {
    let n = r;
    for (let e = 0; e < 8; e++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
    t[r] = n >>> 0;
  }
  return t;
}

function C(t) {
  let r = 4294967295;
  for (let n = 0; n < t.length; n++) r = I[(r ^ t[n]) & 255] ^ r >>> 8;
  return (r ^ 4294967295) >>> 0;
}

function v(t, r) {
  let n = Buffer.alloc(4 + r.length);
  n.write(t, 0, "ascii"), n.set(r, 4);
  let e = Buffer.alloc(12 + r.length);
  return e.writeUInt32BE(r.length, 0), n.copy(e, 4), e.writeUInt32BE(C(n), 8 + r.length), 
  e;
}

function V(t, r, n) {
  let e = Buffer.alloc(13);
  e.writeUInt32BE(r, 0), e.writeUInt32BE(n, 4), e[8] = 8, e[9] = 6, e[10] = 0, e[11] = 0, 
  e[12] = 0;
  let i = r * 4, s = Buffer.alloc(n * (i + 1));
  for (let o = 0; o < n; o++) {
    let g = o * (i + 1);
    s[g] = 0, s.set(t.subarray(o * i, (o + 1) * i), g + 1);
  }
  let l = j(s);
  return Buffer.concat([ E, v("IHDR", e), v("IDAT", l), v("IEND", new Uint8Array(0)) ]);
}

export { sn as ansiToPng };
