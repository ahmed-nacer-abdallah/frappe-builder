var V = Object.defineProperty;
var k = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty,
  F = Object.prototype.propertyIsEnumerable;
var z = (o, s, t) =>
    s in o
      ? V(o, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (o[s] = t),
  E = (o, s) => {
    for (var t in s || (s = {})) B.call(s, t) && z(o, t, s[t]);
    if (k) for (var t of k(s)) F.call(s, t) && z(o, t, s[t]);
    return o;
  };
import {
  q as N,
  c5 as P,
  X as p,
  s as S,
  bJ as $,
  bj as M,
  bi as q,
  r as C,
  o as c,
  b as u,
  d as v,
  k as m,
  w as g,
  v as w,
  F as T,
  f as H,
  e as L,
  h as J,
  m as O,
  i as W,
  bH as U,
} from "./index.e448aea1.js";
import {
  u as X,
  _ as I,
} from "./PanelResizer.vue_vue_type_script_setup_true_lang.76c84554.js";
import "./fileUploadHandler.147d8a7e.js";
import "./helpers.4efe4ed6.js";
const A = {
    class:
      "flex h-screen flex-col items-center bg-gray-100 p-5 dark:bg-zinc-900",
  },
  D = { class: "relative flex w-full items-center justify-center" },
  G = { class: "flex gap-1 text-gray-500 dark:bg-zinc-900 dark:text-zinc-500" },
  K = ["onClick"],
  Q = v(
    "div",
    {
      class:
        "resize-handler-left h-full w-2 rounded-sm bg-gray-200 dark:bg-zinc-600",
    },
    null,
    -1
  ),
  Y = ["src"],
  Z = {
    key: 1,
    class:
      "absolute flex h-full w-full flex-1 items-center justify-center bg-white bg-opacity-50 text-gray-600",
  },
  ee = v(
    "div",
    {
      class:
        "resize-handler-left h-full w-2 rounded-sm bg-gray-200 dark:bg-zinc-600",
    },
    null,
    -1
  ),
  b = 400,
  ne = N({
    __name: "PagePreview",
    setup(o) {
      const s = P(),
        t = window.innerWidth * 0.92;
      let h = p("");
      const r = p(t),
        _ = p(!1),
        x = X(),
        { deviceBreakpoints: f } = x,
        y = S(() => {
          const a = f.find((i) => i.device === "tablet"),
            e = f.find((i) => i.device === "mobile");
          return r.value <= ((e == null ? void 0 : e.width) || b)
            ? "mobile"
            : r.value <= ((a == null ? void 0 : a.width) || t)
            ? "tablet"
            : "desktop";
        }),
        d = p(null);
      $(document, "keydown", (a) => {
        a.key === "Escape" && history.back();
      }),
        M(() => {
          d.value &&
            ((_.value = !0),
            d.value.addEventListener("load", () => {
              var a, e, i;
              setTimeout(() => {
                _.value = !1;
              }, 100),
                (a = d.value) == null ||
                  a.addEventListener("mousedown", (l) => {
                    document.dispatchEvent(new MouseEvent("mousedown", l));
                  }),
                (i = (e = d.value) == null ? void 0 : e.contentWindow) ==
                  null ||
                  i.document.addEventListener("mouseup", (l) => {
                    document.dispatchEvent(new MouseEvent("mouseup", l));
                  });
            }));
        });
      const j = (a) => {
          const e = f.find((i) => i.device === a);
          e && (e.device === "desktop" ? (r.value = t) : (r.value = e.width));
        },
        R = () => {
          let a = E({ page: s.params.pageId }, x.routeVariables);
          h.value = `/api/method/website_builder.website_builder.doctype.web_page_beta.web_page_beta.get_page_preview_html?${Object.entries(
            a
          )
            .map(([e, i]) => `${e}=${i}`)
            .join("&")}`;
        };
      return (
        q(
          () => s.params.pageId,
          () => {
            R();
          },
          { immediate: !0 }
        ),
        (a, e) => {
          const i = C("FeatherIcon"),
            l = C("router-link");
          return (
            c(),
            u("div", A, [
              v("div", D, [
                m(
                  l,
                  {
                    to: {
                      name: "builder",
                      params: { pageId: w(s).params.pageId || "new" },
                    },
                    class:
                      "absolute left-5 flex w-fit text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100",
                  },
                  {
                    default: g(() => [
                      m(i, {
                        name: "arrow-left",
                        class: "mr-4 h-4 w-4 cursor-pointer",
                      }),
                      O(" Back to builder "),
                    ]),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
                v("div", G, [
                  (c(!0),
                  u(
                    T,
                    null,
                    H(
                      w(f),
                      (n) => (
                        c(),
                        u(
                          "div",
                          {
                            class: W([
                              "w-auto cursor-pointer rounded-md p-1 px-[8px]",
                              {
                                "bg-white shadow-sm dark:bg-zinc-700":
                                  y.value === n.device,
                              },
                            ]),
                            key: n.device,
                            onClick: U(() => j(n.device), ["stop"]),
                          },
                          [
                            m(
                              i,
                              {
                                name: n.icon,
                                class: W([
                                  "h-6 w-5",
                                  {
                                    "text-gray-700   dark:text-zinc-50":
                                      y.value === n.device,
                                  },
                                ]),
                              },
                              null,
                              8,
                              ["name", "class"]
                            ),
                          ],
                          10,
                          K
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              v(
                "div",
                {
                  class: "relative mt-5 flex h-[85vh] bg-white",
                  style: J({ width: r.value + "px" }),
                },
                [
                  m(
                    I,
                    {
                      class: "ml-[-12px]",
                      side: "left",
                      width: r.value,
                      minWidth: b,
                      maxWidth: t,
                      resizeSensitivity: 2,
                      onResize: e[0] || (e[0] = (n) => (r.value = n)),
                    },
                    { default: g(() => [Q]), _: 1 },
                    8,
                    ["width"]
                  ),
                  w(h)
                    ? (c(),
                      u(
                        "iframe",
                        {
                          key: 0,
                          src: w(h),
                          frameborder: "0",
                          class: "flex-1 rounded-sm",
                          ref_key: "previewWindow",
                          ref: d,
                        },
                        null,
                        8,
                        Y
                      ))
                    : L("", !0),
                  _.value ? (c(), u("div", Z, " Loading... ")) : L("", !0),
                  m(
                    I,
                    {
                      class: "mr-[-8px]",
                      side: "right",
                      width: r.value,
                      minWidth: b,
                      maxWidth: t,
                      resizeSensitivity: 2,
                      onResize: e[1] || (e[1] = (n) => (r.value = n)),
                    },
                    { default: g(() => [ee]), _: 1 },
                    8,
                    ["width"]
                  ),
                ],
                4
              ),
            ])
          );
        }
      );
    },
  });
export { ne as default };
//# sourceMappingURL=PagePreview.49954040.js.map
