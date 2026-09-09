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

// src/app/views/pages/page404/page404.component.ts
var _Page404Component = class _Page404Component {
  constructor() {
  }
};
_Page404Component.\u0275fac = function Page404Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Page404Component)();
};
_Page404Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page404Component, selectors: [["app-page404"]], decls: 17, vars: 0, consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-body-secondary", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]], template: function Page404Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "div", 3)(5, "h1", 4);
    \u0275\u0275text(6, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 5);
    \u0275\u0275text(8, "Oops! You're lost.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, " The page you are looking for was not found. ");
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
var Page404Component = _Page404Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page404Component, [{
    type: Component,
    args: [{ selector: "app-page404", imports: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective], template: `<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\r
  <c-container>\r
    <c-row class="justify-content-center">\r
      <c-col md="6">\r
        <div class="clearfix">\r
          <h1 class="float-start display-3 me-4">404</h1>\r
          <h4 class="pt-3">Oops! You're lost.</h4>\r
          <p class="text-body-secondary float-start">\r
            The page you are looking for was not found.\r
          </p>\r
        </div>\r
        <c-input-group class="input-prepend">\r
          <span cInputGroupText>\r
            <svg cIcon name="cilMagnifyingGlass"></svg>\r
          </span>\r
          <input cFormControl placeholder="What are you looking for?" type="text" />\r
          <button cButton color="info">Search</button>\r
        </c-input-group>\r
      </c-col>\r
    </c-row>\r
  </c-container>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page404Component, { className: "Page404Component", filePath: "src/app/views/pages/page404/page404.component.ts", lineNumber: 11 });
})();
export {
  Page404Component
};
//# sourceMappingURL=chunk-UOSU2YI2.js.map
