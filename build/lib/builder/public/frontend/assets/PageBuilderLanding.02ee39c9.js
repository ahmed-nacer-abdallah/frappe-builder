var D = Object.defineProperty;
var C = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable;
var z = (r, e, t) =>
    e in r
      ? D(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  B = (r, e) => {
    for (var t in e || (e = {})) P.call(e, t) && z(r, t, e[t]);
    if (C) for (var t of C(e)) j.call(e, t) && z(r, t, e[t]);
    return r;
  };
var _ = (r, e, t) =>
  new Promise((s, o) => {
    var h = (a) => {
        try {
          l(t.next(a));
        } catch (i) {
          o(i);
        }
      },
      c = (a) => {
        try {
          l(t.throw(a));
        } catch (i) {
          o(i);
        }
      },
      l = (a) => (a.done ? s(a.value) : Promise.resolve(a.value).then(h, c));
    l((t = t.apply(r, e)).next());
  });
import {
  q as N,
  s as V,
  o as d,
  b as x,
  i as f,
  a as w,
  e as k,
  m as p,
  t as v,
  u as A,
  r as y,
  d as n,
  k as g,
  w as m,
  v as b,
  F as $,
  f as F,
  x as I,
  c as S,
  y as L,
  z as T,
  U,
  A as q,
} from "./index.e448aea1.js";
import { _ as E, a as M } from "./frappe_white.e12c4c4a.js";
import { w as u, c as Y } from "./helpers.4efe4ed6.js";
const G = N({
    __name: "Badge",
    props: {
      theme: { default: "gray" },
      size: { default: "md" },
      variant: { default: "subtle" },
      label: {},
    },
    setup(r) {
      const e = r,
        t = V(() => {
          let s = {
              gray: "text-white bg-gray-900",
              blue: "text-white bg-blue-500",
              green: "text-white bg-green-600",
              orange: "text-white bg-amber-600",
              red: "text-white bg-red-600",
            }[e.theme],
            o = {
              gray: "text-gray-700 bg-gray-100",
              blue: "text-blue-600 bg-blue-100",
              green: "text-green-800 bg-green-200",
              orange: "text-amber-700 bg-amber-100",
              red: "text-red-600 bg-red-100",
            }[e.theme],
            h = {
              gray: "text-gray-700 bg-white border border-gray-300",
              blue: "text-blue-600 bg-white border border-blue-300",
              green: "text-green-800 bg-white border border-green-300",
              orange: "text-amber-700 bg-white border border-amber-300",
              red: "text-red-600 bg-white border border-red-300",
            }[e.theme],
            c = {
              gray: "text-gray-700 bg-transparent",
              blue: "text-blue-600 bg-transparent",
              green: "text-green-800 bg-transparent",
              orange: "text-amber-700 bg-transparent",
              red: "text-red-600 bg-transparent",
            }[e.theme],
            l = { subtle: o, solid: s, outline: h, ghost: c }[e.variant],
            a = {
              sm: "h-4 text-xs px-1.5",
              md: "h-5 text-xs px-1.5",
              lg: "h-6 text-sm px-2",
            }[e.size];
          return [l, a];
        });
      return (s, o) => (
        d(),
        x(
          "div",
          {
            class: f([
              "inline-flex select-none items-center gap-1 rounded-full",
              t.value,
            ]),
          },
          [
            s.$slots.prefix
              ? (d(),
                x(
                  "div",
                  {
                    key: 0,
                    class: f([e.size == "lg" ? "max-h-6" : "max-h-4"]),
                  },
                  [w(s.$slots, "prefix")],
                  2
                ))
              : k("", !0),
            w(s.$slots, "default", {}, () => [p(v(e.label), 1)]),
            s.$slots.suffix
              ? (d(),
                x(
                  "div",
                  {
                    key: 1,
                    class: f([e.size == "lg" ? "max-h-6" : "max-h-4"]),
                  },
                  [w(s.$slots, "suffix")],
                  2
                ))
              : k("", !0),
          ],
          2
        )
      );
    },
  }),
  H = I(
    '<div class="toolbar flex h-14 justify-center bg-white p-2 shadow-sm dark:bg-zinc-900"><div class="absolute left-3 mt-2 flex items-center"><img src="' +
      E +
      '" alt="logo" class="h-5 dark:hidden"><img src="' +
      M +
      '" alt="logo" class="hidden h-5 dark:block"><h1 class="text-base text-gray-800 dark:text-gray-200">Builder</h1></div></div>',
    1
  ),
  J = { class: "max-w-800 m-auto mb-32 flex w-3/4 flex-col pt-10" },
  K = { class: "mb-6 flex justify-between" },
  O = n(
    "h1",
    { class: "mb-2 font-bold text-gray-800 dark:text-zinc-400" },
    "My Pages",
    -1
  ),
  Q = { class: "flex flex-wrap gap-6" },
  R = { key: 0, class: "flex flex-col items-center justify-center" },
  W = n(
    "p",
    { class: "mt-4 text-center text-gray-500" },
    ` You don't have any pages yet. Click on the "+ New" button to create a new page. `,
    -1
  ),
  X = [W],
  Z = {
    class:
      "group relative mr-2 w-full overflow-hidden rounded-md shadow hover:cursor-pointer dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",
  },
  ee = ["src"],
  te = {
    class:
      "flex items-center justify-between border-t-[1px] px-3 dark:border-zinc-800",
  },
  ae = { class: "py-2 text-sm text-gray-700 dark:text-zinc-200" },
  se = { class: "mt-1 block text-xs text-gray-500" },
  ie = N({
    __name: "PageBuilderLanding",
    setup(r) {
      const e = (s) =>
          _(this, null, function* () {
            (yield Y(
              `Are you sure you want to delete Page: ${s.page_name}?`
            )) && (yield u.delete.submit(s.name));
          }),
        t = (s) =>
          _(this, null, function* () {
            const o = B({}, s);
            (o.page_name = `${s.page_name}-copy`),
              (o.page_title = `${s.page_title} Copy`),
              yield u.insert.submit(o);
          });
      return (
        A(() => {
          u.fetch();
        }),
        (s, o) => {
          const h = y("Button"),
            c = y("router-link"),
            l = y("FeatherIcon");
          return (
            d(),
            x(
              $,
              null,
              [
                H,
                n("section", J, [
                  n("div", K, [
                    O,
                    g(
                      c,
                      { to: { name: "builder", params: { pageId: "new" } } },
                      {
                        default: m(() => [
                          g(
                            h,
                            { variant: "solid", "icon-left": "plus" },
                            { default: m(() => [p("New")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  n("div", Q, [
                    !b(u).data || !b(u).data.length
                      ? (d(), x("div", R, X))
                      : k("", !0),
                    (d(!0),
                    x(
                      $,
                      null,
                      F(
                        b(u).data,
                        (a) => (
                          d(),
                          S(
                            c,
                            {
                              key: a.page_name,
                              to: {
                                name: "builder",
                                params: { pageId: a.page_name },
                              },
                              class: "max-w-[250px] flex-grow basis-52",
                            },
                            {
                              default: m(() => [
                                n("div", Z, [
                                  n(
                                    "img",
                                    {
                                      width: "250",
                                      height: "140",
                                      src: a.preview,
                                      onerror:
                                        "this.src='/assets/website_builder/images/fallback.png'",
                                      class:
                                        "w-full rounded-sm bg-gray-50 object-cover p-2 dark:bg-zinc-900",
                                    },
                                    null,
                                    8,
                                    ee
                                  ),
                                  n("div", te, [
                                    n("p", ae, [
                                      p(
                                        v(a.page_title || a.page_name) + " ",
                                        1
                                      ),
                                      L(
                                        g(
                                          b(G),
                                          null,
                                          {
                                            default: m(() => [p("Draft")]),
                                            _: 2,
                                          },
                                          1536
                                        ),
                                        [[T, a.draft_blocks]]
                                      ),
                                      g(
                                        b(U),
                                        { time: a.creation },
                                        {
                                          default: m(({ timeAgo: i }) => [
                                            n("span", se, v(i), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["time"]
                                      ),
                                    ]),
                                    g(
                                      b(q),
                                      {
                                        options: [
                                          {
                                            label: "Duplicate",
                                            onClick: () => t(a),
                                            icon: "copy",
                                          },
                                          {
                                            label: "Delete",
                                            onClick: () => e(a),
                                            icon: "trash",
                                          },
                                        ],
                                        placement: "right",
                                      },
                                      {
                                        default: m(({ open: i }) => [
                                          g(
                                            l,
                                            {
                                              name: "more-vertical",
                                              class:
                                                "h-4 w-4 text-gray-500 group-hover:text-gray-700",
                                              onClick: i,
                                            },
                                            null,
                                            8,
                                            ["onClick"]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["options"]
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
export { ie as default };
//# sourceMappingURL=PageBuilderLanding.02ee39c9.js.map
