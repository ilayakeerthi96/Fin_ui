import {
  ButtonDirective,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from "./chunk-U7YW3DHP.js";
import "./chunk-JKMYCEKN.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/pages/page500/page500.component.ts
var _Page500Component = class _Page500Component {
  constructor() {
  }
};
_Page500Component.\u0275fac = function Page500Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Page500Component)();
};
_Page500Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page500Component, selectors: [["app-page500"]], decls: 17, vars: 0, consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-body-secondary", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]], template: function Page500Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "span", 3)(5, "h1", 4);
    \u0275\u0275text(6, "500");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 5);
    \u0275\u0275text(8, "Houston, we have a problem!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, " The page you are looking for is temporarily unavailable. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "c-input-group", 7)(12, "span", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(13, "svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275text(16, "Search");
    \u0275\u0275elementEnd()()()()()();
  }
}, dependencies: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective], encapsulation: 2 });
var Page500Component = _Page500Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page500Component, [{
    type: Component,
    args: [{ selector: "app-page500", imports: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective], template: '<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\r\n  <c-container>\r\n    <c-row class="justify-content-center">\r\n      <c-col md="6">\r\n        <span class="clearfix">\r\n          <h1 class="float-start display-3 me-4">500</h1>\r\n          <h4 class="pt-3">Houston, we have a problem!</h4>\r\n          <p class="text-body-secondary float-start">\r\n            The page you are looking for is temporarily unavailable.\r\n          </p>\r\n        </span>\r\n        <c-input-group class="input-prepend">\r\n          <span cInputGroupText>\r\n            <svg cIcon name="cilMagnifyingGlass"></svg>\r\n          </span>\r\n          <input cFormControl placeholder="What are you looking for?" type="text" />\r\n          <button cButton color="info">Search</button>\r\n        </c-input-group>\r\n      </c-col>\r\n    </c-row>\r\n  </c-container>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page500Component, { className: "Page500Component", filePath: "src/app/views/pages/page500/page500.component.ts", lineNumber: 11 });
})();
export {
  Page500Component
};
//# sourceMappingURL=chunk-ZD2V2EXH.js.map
