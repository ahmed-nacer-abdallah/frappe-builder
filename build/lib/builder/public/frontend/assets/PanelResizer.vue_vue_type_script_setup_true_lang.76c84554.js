var P = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty,
  M = Object.prototype.propertyIsEnumerable;
var B = (i, e, t) =>
    e in i
      ? P(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  l = (i, e) => {
    for (var t in e || (e = {})) L.call(e, t) && B(i, t, e[t]);
    if (v) for (var t of v(e)) M.call(e, t) && B(i, t, e[t]);
    return i;
  };
var o = (i, e, t) => (B(i, typeof e != "symbol" ? e + "" : e, t), t);
var F = (i, e, t) =>
  new Promise((s, n) => {
    var c = (h) => {
        try {
          m(t.next(h));
        } catch (u) {
          n(u);
        }
      },
      d = (h) => {
        try {
          m(t.throw(h));
        } catch (u) {
          n(u);
        }
      },
      m = (h) => (h.done ? s(h.value) : Promise.resolve(h.value).then(c, d));
    m((t = t.apply(i, e)).next());
  });
import {
  c8 as N,
  V as a,
  c7 as w,
  c9 as H,
  ca as _,
  bP as O,
  aL as R,
  B as A,
  q as V,
  X as K,
  o as j,
  b as z,
  a as W,
  i as X,
} from "./index.e448aea1.js";
import { F as $ } from "./fileUploadHandler.147d8a7e.js";
import {
  s as U,
  w as p,
  k as J,
  l as E,
  g as I,
  a as b,
} from "./helpers.4efe4ed6.js";
function y(i) {
  switch (i) {
    case "html":
      return {
        name: "HTML",
        element: "div",
        originalElement: "__raw_html__",
        innerHTML:
          '<div style="color: #8e8e8e;background: #f4f4f4;display:flex;flex-direction:column;position:static;top:auto;left:auto;width: 600px;height: 275px;align-items:center;font-size: 30px;justify-content:center"><p>&lt;paste html&gt;</p></div>',
        baseStyles: { height: "fit-content", width: "fit-content" },
      };
    case "text":
      return {
        name: "Text",
        element: "p",
        innerHTML: "Text",
        baseStyles: {
          fontSize: "30px",
          width: "fit-content",
          height: "fit-content",
          lineHeight: "1",
          minWidth: "30px",
        },
      };
    case "image":
      return {
        name: "Image",
        element: "img",
        baseStyles: { objectFit: "cover" },
      };
    case "container":
      return {
        name: "Container",
        element: "div",
        blockName: "container",
        baseStyles: { display: "flex", flexDirection: "column" },
      };
    case "body":
      return {
        element: "div",
        originalElement: "body",
        attributes: {},
        editorStyles: { paddingBottom: "100px" },
        baseStyles: {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        },
        blockId: "root",
      };
    case "fit-container":
      return {
        name: "Container",
        element: "div",
        blockName: "container",
        baseStyles: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          width: "fit-content",
        },
      };
    case "fallback-component":
      return {
        name: "HTML",
        element: "p",
        originalElement: "__raw_html__",
        innerHTML:
          '<div style="color: red;background: #f4f4f4;display:flex;flex-direction:column;position:static;top:auto;left:auto;width: 600px;height: 275px;align-items:center;font-size: 30px;justify-content:center"><p>Component missing</p></div>',
        baseStyles: { height: "fit-content", width: "fit-content" },
      };
  }
}
const Y = N("store", {
    state: () => ({
      builderState: { editableBlock: null, blocks: [a(new k(y("body")))] },
      settingPage: !1,
      editingComponent: null,
      editingMode: "page",
      activeBreakpoint: "desktop",
      selectedPage: null,
      pageData: {},
      mode: "select",
      selectedBlocks: [],
      history: {},
      usedComponents: {},
      hoveredBlock: null,
      hoveredBreakpoint: null,
      routeVariables: {},
      autoSave: !0,
      builderLayout: { rightPanelWidth: 270, leftPanelWidth: 280 },
      flow: [
        {
          name: "Row",
          styleKey: "flexDirection",
          styleValue: "row",
          icon: "columns",
        },
        {
          name: "Column",
          styleKey: "flexDirection",
          styleValue: "column",
          icon: "credit-card",
        },
      ],
      alignments: [
        {
          name: "Left",
          styleKey: "justifyContent",
          styleValue: "flex-start",
          icon: "align-left",
        },
        {
          name: "Center",
          styleKey: "justifyContent",
          styleValue: "center",
          icon: "align-center",
        },
        {
          name: "Right",
          styleKey: "justifyContent",
          styleValue: "flex-end",
          icon: "align-right",
        },
        {
          name: "Justify",
          styleKey: "justifyContent",
          styleValue: "space-between",
          icon: "align-justify",
        },
      ],
      verticalAlignments: [
        {
          name: "Top",
          styleKey: "alignItems",
          styleValue: "flex-start",
          icon: "arrow-up",
        },
        {
          name: "Middle",
          styleKey: "alignItems",
          styleValue: "center",
          icon: "minus",
        },
        {
          name: "Bottom",
          styleKey: "alignItems",
          styleValue: "flex-end",
          icon: "arrow-down",
        },
      ],
      pageName: "Home",
      route: "/",
      pastelCssColors: [
        "#FFFFFF",
        "#F5FFFA",
        "#F8F8FF",
        "#F0F8FF",
        "#F5F5DC",
        "#FFE4C4",
        "#FFEBCD",
        "#FFDEAD",
        "#FFC1C1",
        "#FFB6C1",
        "#FFA07A",
        "#FF8C00",
        "#FF7F50",
        "#FF69B4",
        "#FF6347",
        "#FDB813",
        "#FDAB9F",
        "#FDA50F",
        "#F49AC2",
        "#FFB347",
        "#FFD700",
        "#ADFF2F",
        "#87CEFA",
        "#00BFFF",
        "#ADD8E6",
        "#B0E0E6",
        "#5F9EA0",
        "#FDD5B1",
        "#FCCDE3",
        "#FCC2D9",
        "#FCB4D5",
        "#FBB5A3",
        "#FBB917",
        "#FBB972",
        "#FBB9AC",
        "#FBCEB1",
        "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
        "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)",
        "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)",
        "linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%)",
        "black",
        "transparent",
      ],
      guides: { showX: !1, showY: !1, x: 0, y: 0 },
      textColors: [
        "#000000",
        "#424242",
        "#636363",
        "#808080",
        "#9C9C94",
        "#C0C0C0",
        "#CEC6CE",
        "#EFEFEF",
        "#F7F7F7",
        "#FFFFFF",
      ],
      deviceBreakpoints: [
        {
          icon: "monitor",
          device: "desktop",
          displayName: "Desktop",
          width: 1400,
          visible: !0,
        },
        {
          icon: "tablet",
          device: "tablet",
          displayName: "Tablet",
          width: 800,
          visible: !1,
        },
        {
          icon: "smartphone",
          device: "mobile",
          displayName: "Mobile",
          width: 420,
          visible: !1,
        },
      ],
      leftPanelActiveTab: "Components",
      rightPanelActiveTab: "Properties",
      showPanels: !0,
      blockEditorCanvas: {
        scale: 0.5,
        translateX: 0,
        translateY: 0,
        startX: 0,
        startY: 0,
        background: "",
        scaling: !1,
        panning: !1,
        settingCanvas: !0,
        overlayElement: null,
      },
      componentEditorCanvas: {
        scale: 0.5,
        translateX: 0,
        translateY: 0,
        startX: 0,
        startY: 0,
        background: "",
        scaling: !1,
        panning: !1,
        settingCanvas: !1,
        overlayElement: null,
      },
      copiedStyle: null,
      components: [],
    }),
    actions: {
      clearBlocks() {
        (this.builderState.blocks = []),
          this.builderState.blocks.push(this.getRootBlock());
      },
      pushBlocks(i) {
        let e = this.builderState.blocks[0];
        this.editingComponent &&
          (e = this.getComponentBlock(this.editingComponent));
        let t = this.getBlockInstance(i[0]);
        if (t.isRoot() && !this.editingComponent)
          this.builderState.blocks = [t];
        else for (let s of i) e.children.push(this.getBlockInstance(s));
      },
      getFirstBlock() {
        return this.editingComponent
          ? this.getComponentBlock(this.editingComponent)
          : this.builderState.blocks[0];
      },
      getBlockCopy(i, e = !1) {
        let t = JSON.parse(JSON.stringify(i));
        if (!e) {
          const s = (n) => {
            delete n.blockId;
            for (let c of n.children || []) s(c);
          };
          s(t);
        }
        return this.getBlockInstance(t);
      },
      getRootBlock() {
        return this.getBlockInstance(y("body"));
      },
      getPageData() {
        return this.builderState.blocks;
      },
      setPage(i) {
        return F(this, null, function* () {
          if (((this.settingPage = !0), !i)) return;
          const e = JSON.parse(i.draft_blocks || i.blocks || "[]");
          this.editPage(),
            this.clearBlocks(),
            this.pushBlocks(e),
            (this.pageName = i.page_name),
            (this.route =
              i.route || "/" + this.pageName.toLowerCase().replace(/ /g, "-")),
            (this.selectedPage = i.name);
          const t = localStorage.getItem(`${i.name}:routeVariables`) || "{}";
          (this.routeVariables = JSON.parse(t)),
            this.setPageData(),
            this.setupHistory(),
            (this.settingPage = !1);
        });
      },
      getImageBlock(i, e = "") {
        e = U(e);
        const t = y("image");
        return (
          t.attributes || (t.attributes = {}),
          (t.attributes.src = i),
          e && (t.attributes.alt = e),
          t
        );
      },
      findBlock(i, e) {
        e || (e = this.builderState.blocks);
        for (const t of e) {
          if (t.blockId === i) return t;
          if (t.children) {
            const s = this.findBlock(i, t.children);
            if (s) return s;
          }
        }
        return null;
      },
      findParentBlock(i, e) {
        e || (e = [this.getFirstBlock()]);
        for (const t of e)
          if (t.children) {
            for (const n of t.children) if (n.blockId === i) return t;
            const s = this.findParentBlock(i, t.children);
            if (s) return s;
          }
        return null;
      },
      selectBlock(i, e, t = !0) {
        var s;
        this.settingPage ||
          (e && e.shiftKey ? i.toggleSelectBlock() : i.selectBlock(),
          t &&
            ((s = document.querySelector(
              `[data-block-layer-id="${i.blockId}"]`
            )) == null ||
              s.scrollIntoView({ behavior: "instant", block: "center" })),
          (this.builderState.editableBlock = null));
      },
      getBlockInstance(i) {
        return a(new k(i));
      },
      editComponent(i) {
        i.isExtendedFromComponent() &&
          (this.editingComponent =
            i == null ? void 0 : i.extendedFromComponent),
          this.clearSelection(),
          (this.editingMode = "component");
      },
      isComponentUsed(i) {
        const e = (t) => {
          if (t.extendedFromComponent === i) return !0;
          if (t.children) {
            for (const s of t.children) if (e(s)) return !0;
          }
          return !1;
        };
        for (const t of this.builderState.blocks) if (e(t)) return !0;
        return !1;
      },
      editPage(i = !1) {
        this.clearSelection(),
          (this.editingMode = "page"),
          (this.builderState.editableBlock = null),
          this.editingComponent &&
            i &&
            C.setValue
              .submit({
                name: this.editingComponent,
                block: this.getComponentBlock(this.editingComponent),
              })
              .then(() => {
                w({ text: "Component saved!", position: "bottom-center" });
              }),
          (this.editingComponent = null);
      },
      getComponentBlock(i) {
        var e;
        return (
          ((e = this.getComponent(i)) == null ? void 0 : e.block) ||
          this.getFallbackBlock()
        );
      },
      getComponent(i) {
        return C.getRow(i);
      },
      createComponent(i) {
        this.getComponent(i.name) ||
          C.insert.submit(i).catch(() => {
            console.log(
              `There was an error while creating ${i.component_name}`
            );
          });
      },
      getFallbackBlock() {
        return this.getBlockInstance(y("fallback-component"));
      },
      getComponentName(i) {
        let e = C.getRow(i);
        return e ? e.component_name : i;
      },
      setupHistory() {
        const { builderState: i } = H(this);
        this.history = _(i, {
          capacity: 200,
          deep: !0,
          clone: (e) => {
            let t = Object.assign({}, e);
            return (
              (t.blocks = e.blocks.map((s) => this.getBlockCopy(s, !0))), t
            );
          },
          debounce: 200,
        });
      },
      uploadFile(i) {
        return new $()
          .upload(i, {
            private: !1,
            folder: "Home/Builder Uploads",
            optimize: !0,
          })
          .then((t) => ({
            fileURL: encodeURI(window.location.origin + t.file_url),
            fileName: t.file_name,
          }));
      },
      clearSelection() {
        this.selectedBlocks = [];
      },
      getActivePage() {
        return p.getRow(this.selectedPage);
      },
      publishPage() {
        return F(this, null, function* () {
          return p.runDocMethod
            .submit({ name: this.selectedPage, method: "publish" })
            .then((i) => {
              let e = i.message;
              this.getActivePage().dynamic_route &&
                this.pageData &&
                ((e == null ? void 0 : e.match(/<\w+>/g)) || [])
                  .map((s) => s.slice(1, -1))
                  .forEach((s) => {
                    this.routeVariables[s] &&
                      (e =
                        e == null
                          ? void 0
                          : e.replace(`<${s}>`, this.routeVariables[s]));
                  }),
                window.open(`/${e}`, "_blank");
            });
        });
      },
      savePage() {
        const i = JSON.stringify(this.getPageData()),
          e = { name: this.selectedPage, draft_blocks: i };
        p.setValue.submit(e);
      },
      setPageData() {
        const i = this.getActivePage();
        !i ||
          !i.page_data_script ||
          p.runDocMethod
            .submit(
              l({ method: "get_page_data", name: i.name }, this.routeVariables)
            )
            .then((e) => {
              this.pageData = e.message;
            })
            .catch(() => {
              w({
                text: "There was error in fetching page data",
                position: "top-right",
                icon: "disabled",
                iconClasses: "text-red-500",
              });
            });
      },
      setRouteVariable(i, e) {
        (this.routeVariables[i] = e),
          localStorage.setItem(
            `${this.selectedPage}:routeVariables`,
            JSON.stringify(this.routeVariables)
          ),
          this.setPageData();
      },
    },
  }),
  r = Y;
function T(i, e, t) {
  var s;
  delete i.innerHTML,
    delete i.element,
    (i.blockId = i.generateId()),
    (i.baseStyles = {}),
    (i.rawStyles = {}),
    (i.mobileStyles = {}),
    (i.tabletStyles = {}),
    (i.attributes = {}),
    (i.classes = []),
    (s = i.children) == null ||
      s.forEach((n, c) => {
        n.isChildOfComponent = e;
        const d = t[c];
        d && ((n.referenceBlockId = d.blockId), T(n, e, d.children));
      });
}
class g {
  constructor(e) {
    o(this, "blockId");
    o(this, "children");
    o(this, "baseStyles");
    o(this, "rawStyles");
    o(this, "mobileStyles");
    o(this, "tabletStyles");
    o(this, "attributes");
    o(this, "classes");
    o(this, "dataKey", null);
    o(this, "blockName");
    o(this, "element");
    o(this, "draggable");
    o(this, "innerText");
    o(this, "innerHTML");
    o(this, "extendedFromComponent");
    o(this, "originalElement");
    o(this, "isChildOfComponent");
    o(this, "referenceBlockId");
    o(this, "isRepeaterBlock");
    (this.element = e.element),
      (this.innerHTML = e.innerHTML),
      (this.extendedFromComponent = e.extendedFromComponent),
      (this.isRepeaterBlock = e.isRepeaterBlock),
      (this.isChildOfComponent = e.isChildOfComponent),
      (this.referenceBlockId = e.referenceBlockId),
      (this.dataKey = e.dataKey || null),
      e.innerText && (this.innerHTML = e.innerText),
      (this.originalElement = e.originalElement),
      !e.blockId || e.blockId === "root"
        ? (this.blockId = this.generateId())
        : (this.blockId = e.blockId),
      (this.children = (e.children || []).map((t) => a(new g(t)))),
      (this.baseStyles = a(e.styles || e.baseStyles || {})),
      (this.rawStyles = a(e.rawStyles || {})),
      (this.mobileStyles = a(e.mobileStyles || {})),
      (this.tabletStyles = a(e.tabletStyles || {})),
      (this.attributes = a(e.attributes || {})),
      (this.blockName = e.blockName),
      delete this.attributes.style,
      (this.classes = e.classes || []),
      this.isRoot() &&
        ((this.blockId = "root"),
        (this.draggable = !1),
        this.setBaseStyle("minHeight", "100vh"));
  }
  getStyles(e = "desktop") {
    let t = {};
    return (
      this.isExtendedFromComponent() && (t = this.getComponentStyles(e)),
      (t = l(l({}, t), this.baseStyles)),
      e === "mobile"
        ? (t = l(l({}, t), this.mobileStyles))
        : e === "tablet" && (t = l(l({}, t), this.tabletStyles)),
      (t = l(l({}, t), this.rawStyles)),
      t
    );
  }
  getComponent() {
    const e = r();
    if (this.extendedFromComponent)
      return e.getComponentBlock(this.extendedFromComponent);
    if (this.isChildOfComponent) {
      const t = e.getComponentBlock(this.isChildOfComponent);
      return (
        e.findBlock(this.referenceBlockId, [t]) ||
        e.findBlock(this.blockId, [t]) ||
        new g({})
      );
    }
    return this;
  }
  getComponentStyles(e) {
    var t;
    return (t = this.getComponent()) == null ? void 0 : t.getStyles(e);
  }
  getAttributes() {
    let e = {};
    return (
      this.isExtendedFromComponent() && (e = this.getComponentAttributes()),
      (e = l(l({}, e), this.attributes)),
      e
    );
  }
  getComponentAttributes() {
    var e;
    return ((e = this.getComponent()) == null ? void 0 : e.attributes) || {};
  }
  getClasses() {
    let e = [];
    return (
      this.isExtendedFromComponent() && (e = this.getComponentClasses()),
      (e = [...e, ...this.classes]),
      e
    );
  }
  getComponentClasses() {
    var e;
    return ((e = this.getComponent()) == null ? void 0 : e.classes) || [];
  }
  getChildren() {
    return this.children;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  getComponentChildren() {
    var e;
    return ((e = this.getComponent()) == null ? void 0 : e.children) || [];
  }
  getBlockDescription() {
    if (this.isExtendedFromComponent() && !this.isChildOfComponentBlock())
      return this.getComponentBlockDescription();
    if (this.isHTML()) return "raw";
    let e = this.blockName || this.originalElement || this.getElement();
    return (
      this.getTextContent() &&
        !this.blockName &&
        (e += " | " + this.getTextContent()),
      e
    );
  }
  getComponentBlockDescription() {
    return r().getComponentName(this.extendedFromComponent);
  }
  getTextContent() {
    let e = this.getEditor(),
      t = "";
    return (
      this.isText() && e && (t = e.getText()), t || J(this.getInnerHTML() || "")
    );
  }
  isImage() {
    return this.getElement() === "img";
  }
  isButton() {
    return this.getElement() === "button";
  }
  isLink() {
    return this.getElement() === "a";
  }
  isText() {
    return [
      "span",
      "h1",
      "p",
      "b",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "label",
      "a",
    ].includes(this.getElement());
  }
  isContainer() {
    return ["section", "div"].includes(this.getElement());
  }
  isInput() {
    return this.originalElement === "input" || this.getElement() === "input";
  }
  setStyle(e, t) {
    const s = r();
    let n = this.baseStyles;
    if (
      ((e = E(e)),
      s.activeBreakpoint === "mobile"
        ? (n = this.mobileStyles)
        : s.activeBreakpoint === "tablet" && (n = this.tabletStyles),
      t === null || t === "")
    ) {
      delete n[e];
      return;
    }
    n[e] = t;
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.getAttributes()[e];
  }
  removeStyle(e) {
    delete this.baseStyles[e],
      delete this.mobileStyles[e],
      delete this.tabletStyles[e];
  }
  setBaseStyle(e, t) {
    (e = E(e)), (this.baseStyles[e] = t);
  }
  getStyle(e) {
    const t = r();
    return t.activeBreakpoint === "mobile"
      ? this.mobileStyles[e] || this.baseStyles[e]
      : t.activeBreakpoint === "tablet"
      ? this.tabletStyles[e] || this.baseStyles[e]
      : this.baseStyles[e];
  }
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  getIcon() {
    switch (!0) {
      case this.isRoot():
        return "hash";
      case this.isRepeater():
        return "database";
      case this.isHTML():
        return "code";
      case this.isLink():
        return "link";
      case this.isText():
        return "type";
      case this.isContainer():
        return "square";
      case this.isImage():
        return "image";
      default:
        return "square";
    }
  }
  isRoot() {
    return this.originalElement === "body";
  }
  getTag() {
    return this.isButton() ? "div" : this.getElement() || "div";
  }
  getComponentTag() {
    var e;
    return ((e = this.getComponent()) == null ? void 0 : e.getTag()) || "div";
  }
  isDiv() {
    return this.getElement() === "div";
  }
  getStylesCopy() {
    return {
      baseStyles: Object.assign({}, this.baseStyles),
      mobileStyles: Object.assign({}, this.mobileStyles),
      tabletStyles: Object.assign({}, this.tabletStyles),
    };
  }
  isHovered() {
    return r().hoveredBlock === this.blockId;
  }
  isSelected() {
    return r().selectedBlocks.some((t) => t.blockId === this.blockId);
  }
  isMovable() {
    return this.getStyle("position") === "absolute";
  }
  move(e) {
    if (!this.isMovable()) return;
    let t = I(this.getStyle("top")) || 0,
      s = I(this.getStyle("left")) || 0;
    e === "up"
      ? ((t -= 10), this.setStyle("top", b(t)))
      : e === "down"
      ? ((t += 10), this.setStyle("top", b(t)))
      : e === "left"
      ? ((s -= 10), this.setStyle("left", b(s)))
      : e === "right" && ((s += 10), this.setStyle("left", b(s)));
  }
  addChild(e, t) {
    t === void 0 && (t = this.children.length),
      (t = O(t, 0, this.children.length));
    const s = a(new g(e));
    return this.children.splice(t, 0, s), s;
  }
  removeChild(e) {
    const t = this.getChildIndex(e);
    t > -1 && this.children.splice(t, 1);
  }
  getChildIndex(e) {
    return this.children.findIndex((t) => t.blockId === e.blockId);
  }
  addChildAfter(e, t) {
    const s = this.getChildIndex(t);
    return this.addChild(e, s + 1);
  }
  getEditorStyles() {
    const e = a({});
    return (
      this.isRoot() && ((e.width = "inherit"), (e.overflowX = "hidden")),
      this.isImage() &&
        !this.getAttribute("src") &&
        ((e.background =
          "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0px, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)"),
        (e.backgroundSize = "16px 16px")),
      this.isButton() &&
        this.children.length === 0 &&
        ((e.display = "flex"),
        (e.alignItems = "center"),
        (e.justifyContent = "center")),
      e
    );
  }
  selectBlock() {
    const e = r();
    e.selectedBlocks = [this];
  }
  toggleSelectBlock() {
    const e = r();
    this.isSelected()
      ? (e.selectedBlocks = e.selectedBlocks.filter(
          (t) => t.blockId !== this.blockId
        ))
      : e.selectedBlocks.push(this);
  }
  getParentBlock() {
    return r().findParentBlock(this.blockId);
  }
  canHaveChildren() {
    return this.isContainer() || this.isRoot() || this.isDiv();
  }
  updateStyles(e) {
    (this.baseStyles = Object.assign({}, this.baseStyles, e.baseStyles)),
      (this.mobileStyles = Object.assign(
        {},
        this.mobileStyles,
        e.mobileStyles
      )),
      (this.tabletStyles = Object.assign(
        {},
        this.tabletStyles,
        e.tabletStyles
      ));
  }
  getBackgroundColor() {
    return this.getStyle("backgroundColor") || "transparent";
  }
  getFontFamily() {
    const e = this.getEditor();
    return this.isText() && e && e.isEditable
      ? e.getAttributes("textStyle").fontFamily
      : this.getStyle("fontFamily");
  }
  setFontFamily(e) {
    const t = this.getEditor();
    this.isText() && t && t.isEditable
      ? t.chain().focus().setFontFamily(e).run()
      : this.setStyle("fontFamily", e);
  }
  getTextColor() {
    const e = this.getEditor();
    return this.isText() && e && e.isEditable
      ? e.getAttributes("textStyle").color
      : this.getStyle("color");
  }
  getEditor() {
    return null;
  }
  setTextColor(e) {
    const t = this.getEditor();
    this.isText() && t && t.isEditable
      ? t.chain().focus().setColor(e).run()
      : this.setStyle("color", e);
  }
  isHTML() {
    return this.originalElement === "__raw_html__";
  }
  makeBlockEditable() {
    const e = r();
    this.selectBlock(),
      (e.builderState.editableBlock = this),
      R(() => {
        var t;
        (t = this.getEditor()) == null || t.commands.focus("all");
      });
  }
  isExtendedFromComponent() {
    return (
      Boolean(this.extendedFromComponent) || Boolean(this.isChildOfComponent)
    );
  }
  convertToRepeater() {
    this.setBaseStyle("display", "flex"),
      this.setBaseStyle("flexDirection", "column"),
      this.setBaseStyle("alignItems", "flex-start"),
      this.setBaseStyle("justifyContent", "flex-start"),
      this.setBaseStyle("flexWrap", "wrap"),
      this.setBaseStyle("width", "fit-content"),
      this.setBaseStyle("height", "fit-content"),
      this.setBaseStyle("gap", "20px"),
      (this.isRepeaterBlock = !0);
  }
  moveChild(e, t) {
    const s = this.children.findIndex((n) => n.blockId === e.blockId);
    s > -1 && (this.children.splice(s, 1), this.children.splice(t, 0, e));
  }
  isRepeater() {
    return this.isRepeaterBlock;
  }
  getDataKey(e) {
    var t;
    return this.isExtendedFromComponent()
      ? (t = this.getComponent()) == null
        ? void 0
        : t.getDataKey(e)
      : (this.dataKey && this.dataKey[e]) || "";
  }
  setDataKey(e, t) {
    this.dataKey ||
      (this.dataKey = {
        key: "",
        type: this.isImage() || this.isLink() ? "attribute" : "key",
        property: this.isLink() ? "href" : this.isImage() ? "src" : "innerHTML",
      }),
      (this.dataKey[e] = t);
  }
  getInnerHTML() {
    let e = this.innerHTML || "";
    return (
      !e &&
        this.isExtendedFromComponent() &&
        (e = this.getComponent().getInnerHTML()),
      e
    );
  }
  setInnerHTML(e) {
    this.innerHTML = e;
  }
  toggleVisibility() {
    this.getStyle("display") === "none"
      ? this.setStyle("display", "block")
      : this.setStyle("display", "none");
  }
  isVisible() {
    return this.getStyle("display") !== "none";
  }
  extendFromComponent(e) {
    (this.extendedFromComponent = e), this.resetChanges();
  }
  isChildOfComponentBlock() {
    return Boolean(this.isChildOfComponent);
  }
  resetChanges() {
    const e = this.getComponent();
    T(this, this.extendedFromComponent, e.children);
  }
  convertToLink() {
    (this.element = "a"), (this.attributes.href = "#");
  }
  getElement() {
    var e;
    return this.isExtendedFromComponent()
      ? ((e = this.getComponent()) == null ? void 0 : e.element) || "div"
      : this.element;
  }
  getUsedComponentNames() {
    const e = r(),
      t = [];
    return (
      this.extendedFromComponent && t.push(this.extendedFromComponent),
      this.isChildOfComponent && t.push(this.isChildOfComponent),
      this.children.forEach((s) => {
        t.push(...s.getUsedComponentNames());
      }),
      t.forEach((s) => {
        t.push(...e.getComponentBlock(s).getUsedComponentNames());
      }),
      new Set(t)
    );
  }
}
const k = g,
  q = A({
    method: "GET",
    doctype: "Web Page Component",
    fields: ["component_name", "block", "name", "for_web_page", "component_id"],
    orderBy: "creation",
    cache: "components",
    start: 0,
    pageLength: 100,
    auto: !0,
    transform(i) {
      return (
        i.forEach((e) => {
          e.block instanceof k || (e.block = a(new k(JSON.parse(e.block))));
        }),
        i
      );
    },
  }),
  C = q,
  te = V({
    __name: "PanelResizer",
    props: {
      maxWidth: { type: Number, default: 350 },
      minWidth: { type: Number, default: 280 },
      width: { type: Number, default: 300 },
      side: { type: String, default: "right" },
      resizeSensitivity: { type: Number, default: 1 },
    },
    emits: { resize: (i) => i },
    setup(i, { emit: e }) {
      const t = i,
        s = K(!1);
      function n(c) {
        const d = c.clientX,
          m = t.width,
          h = c.target,
          u = document.body.style.cursor;
        document.body.style.cursor = window.getComputedStyle(h).cursor;
        const x = (f) => {
          const D =
            (f.clientX - d) *
            (t.side === "left" ? -1 : 1) *
            t.resizeSensitivity;
          let S = m + D;
          (S = Math.min(Math.max(t.minWidth, S), t.maxWidth)),
            e("resize", S),
            (s.value = !0),
            f.preventDefault();
        };
        document.addEventListener("mousemove", x),
          document.addEventListener(
            "mouseup",
            (f) => {
              (document.body.style.cursor = u),
                document.removeEventListener("mousemove", x),
                (s.value = !1),
                f.preventDefault();
            },
            { once: !0 }
          );
      }
      return (c, d) => (
        j(),
        z(
          "div",
          {
            class: X([
              "absolute bottom-0 top-0 w-1 bg-transparent hover:cursor-ew-resize",
              {
                "left-0": i.side === "left",
                "right-0": i.side === "right",
                "bg-gray-300 dark:bg-zinc-700": s.value,
              },
            ]),
            onMousedown: n,
          },
          [W(c.$slots, "default")],
          34
        )
      );
    },
  });
export { k as B, te as _, y as g, r as u, C as w };
//# sourceMappingURL=PanelResizer.vue_vue_type_script_setup_true_lang.76c84554.js.map
