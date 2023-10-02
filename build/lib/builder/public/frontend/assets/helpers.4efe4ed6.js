var d = (t, e, n) =>
  new Promise((r, a) => {
    var s = (i) => {
        try {
          o(n.next(i));
        } catch (c) {
          a(c);
        }
      },
      f = (i) => {
        try {
          o(n.throw(i));
        } catch (c) {
          a(c);
        }
      },
      o = (i) => (i.done ? r(i.value) : Promise.resolve(i.value).then(s, f));
    o((n = n.apply(t, e)).next());
  });
import { B as g } from "./index.e448aea1.js";
const T = g({
  method: "GET",
  doctype: "Web Page Beta",
  fields: [
    "name",
    "route",
    "blocks",
    "page_name",
    "preview",
    "page_title",
    "creation",
    "page_data_script",
    "draft_blocks",
    "published",
    "dynamic_route",
  ],
  cache: "pages",
  orderBy: "creation desc",
  pageLength: 50,
});
function N(t) {
  return t ? (typeof t == "number" ? t : Number(t.replace("px", ""))) : 0;
}
function E(t, e = !0) {
  return (t = e ? Math.round(t) : t), `${t}px`;
}
function M(t) {
  var u;
  const [e, n, r] = ((u = t.replace("#", "").match(/.{1,2}/g)) == null
      ? void 0
      : u.map((p) => parseInt(p, 16))) || [0, 0, 0],
    a = Math.max(e, n, r),
    s = Math.min(e, n, r),
    f = a / 255,
    o = a - s,
    i = a === 0 ? 0 : o / a;
  return {
    h:
      (a === s
        ? 0
        : a === e
        ? (n - r) / o + (n < r ? 6 : 0)
        : a === n
        ? (r - e) / o + 2
        : (e - n) / o + 4) * 60,
    s: i,
    v: f,
  };
}
function S(t, e, n) {
  (e /= 100), (n /= 100), (t /= 360);
  let r = 0,
    a = 0,
    s = 0,
    f = Math.floor(t * 6),
    o = t * 6 - f,
    i = n * (1 - e),
    c = n * (1 - o * e),
    u = n * (1 - (1 - o) * e);
  switch (f % 6) {
    case 0:
      (r = n), (a = u), (s = i);
      break;
    case 1:
      (r = c), (a = n), (s = i);
      break;
    case 2:
      (r = i), (a = n), (s = u);
      break;
    case 3:
      (r = i), (a = c), (s = n);
      break;
    case 4:
      (r = u), (a = i), (s = n);
      break;
    case 5:
      (r = n), (a = i), (s = c);
      break;
  }
  return (
    (r = Math.round(r * 255)),
    (a = Math.round(a * 255)),
    (s = Math.round(s * 255)),
    `#${[r, a, s].map((p) => p.toString(16).padStart(2, "0")).join("")}`
  );
}
function x(t) {
  return d(this, null, function* () {
    return new Promise((e) => {
      const n = window.confirm(t);
      e(n);
    });
  });
}
function k(t) {
  if (!t || !l(t)) return t || "";
  const e = document.createElement("div");
  e.innerHTML = t || "";
  const n = e.textContent || e.innerText || "";
  return e.remove(), n;
}
function m(t) {
  const [e, n, r] = t
    .replace("rgb(", "")
    .replace(")", "")
    .split(",")
    .map((a) => parseInt(a));
  return `#${[e, n, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function C(t) {
  return t
    ? t.startsWith("rgb")
      ? m(t)
      : !t.startsWith("#") && t.match(/\b[a-fA-F0-9]{3,6}\b/g)
      ? `#${t}`
      : t
    : "#ffffff";
}
function l(t) {
  return /<[a-z][\s\S]*>/i.test(t);
}
function w(t, e, n = "text/plain") {
  var r;
  typeof t != "string" && (t = JSON.stringify(t)),
    (r = e.clipboardData) == null || r.setData(n, t);
}
function y(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? t : t.substr(0, e);
}
function I(t) {
  let e = 0,
    n = Number.MAX_VALUE,
    r = t.target;
  return (
    Array.from(r.children).forEach(function (s, f) {
      const o = s.getBoundingClientRect(),
        i = o.left + o.width / 2,
        c = o.top + o.height / 2,
        u = Math.sqrt(Math.pow(i - t.clientX, 2) + Math.pow(c - t.clientY, 2));
      u < n &&
        ((n = u),
        (e = f),
        s.compareDocumentPosition(t.target) &
          Node.DOCUMENT_POSITION_PRECEDING || (e += 1));
    }),
    e
  );
}
function P(t) {
  return t.replace(/-([a-z])/g, function (e) {
    return e[1].toUpperCase();
  });
}
function _(t) {
  try {
    JSON.parse(t);
  } catch (e) {
    return !1;
  }
  return !0;
}
function B(t) {
  const e = t.target,
    n = e.isContentEditable,
    r = e.tagName === "INPUT" || e.tagName === "TEXTAREA";
  return n || r;
}
export {
  S as H,
  E as a,
  C as b,
  x as c,
  M as d,
  w as e,
  I as f,
  N as g,
  _ as h,
  B as i,
  l as j,
  k,
  P as l,
  y as s,
  T as w,
};
//# sourceMappingURL=helpers.4efe4ed6.js.map
