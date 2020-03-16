function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tree-tree-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
    \*****************************************************************/

  /*! exports provided: BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
      return BaseTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
      return CDK_TREE_NODE_OUTLET_NODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
      return CdkNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
      return CdkTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
      return CdkTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
      return CdkTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
      return CdkTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
      return CdkTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
      return CdkTreeNodeOutletContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
      return CdkTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
      return CdkTreeNodeToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
      return FlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
      return NestedTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
      return getTreeControlFunctionsMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
      return getTreeControlMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
      return getTreeMissingMatchingNodeDefError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
      return getTreeMultipleDefaultNodeDefsError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
      return getTreeNoValidDataSourceError;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/base-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
     * @abstract
     * @template T
     */


    var BaseTreeControl =
    /*#__PURE__*/
    function () {
      function BaseTreeControl() {
        _classCallCheck(this, BaseTreeControl);

        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
      }
      /**
       * Toggles one single data node's expanded/collapsed state.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(BaseTreeControl, [{
        key: "toggle",
        value: function toggle(dataNode) {
          this.expansionModel.toggle(dataNode);
        }
        /**
         * Expands one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(dataNode) {
          this.expansionModel.select(dataNode);
        }
        /**
         * Collapses one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(dataNode) {
          this.expansionModel.deselect(dataNode);
        }
        /**
         * Whether a given data node is expanded or not. Returns true if the data node is expanded.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "isExpanded",
        value: function isExpanded(dataNode) {
          return this.expansionModel.isSelected(dataNode);
        }
        /**
         * Toggles a subtree rooted at `node` recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "toggleDescendants",
        value: function toggleDescendants(dataNode) {
          this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
        }
        /**
         * Collapse all dataNodes in the tree.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.expansionModel.clear();
        }
        /**
         * Expands a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expandDescendants",
        value: function expandDescendants(dataNode) {
          var _this$expansionModel;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, toBeProcessed);
        }
        /**
         * Collapses a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapseDescendants",
        value: function collapseDescendants(dataNode) {
          var _this$expansionModel2;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, toBeProcessed);
        }
      }]);

      return BaseTreeControl;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/flat-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
     * @template T
     */


    var FlatTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl) {
      _inherits(FlatTreeControl, _BaseTreeControl);

      /**
       * Construct with flat tree data node functions getLevel and isExpandable.
       * @param {?} getLevel
       * @param {?} isExpandable
       */
      function FlatTreeControl(getLevel, isExpandable) {
        var _this;

        _classCallCheck(this, FlatTreeControl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlatTreeControl).call(this));
        _this.getLevel = getLevel;
        _this.isExpandable = isExpandable;
        return _this;
      }
      /**
       * Gets a list of the data node's subtree of descendent data nodes.
       *
       * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
       * with correct levels.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(FlatTreeControl, [{
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var startIndex = this.dataNodes.indexOf(dataNode);
          /** @type {?} */

          var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
          // The level of descendants of a tree node must be greater than the level of the given
          // tree node.
          // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
          // If we reach a node whose level is greater than the level of the tree node, we hit a
          // sibling of an ancestor.

          for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
          }

          return results;
        }
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this$expansionModel3;

          (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes));
        }
      }]);

      return FlatTreeControl;
    }(BaseTreeControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/nested-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
     * @template T
     */


    var NestedTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl2) {
      _inherits(NestedTreeControl, _BaseTreeControl2);

      /**
       * Construct with nested tree function getChildren.
       * @param {?} getChildren
       */
      function NestedTreeControl(getChildren) {
        var _this2;

        _classCallCheck(this, NestedTreeControl);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NestedTreeControl).call(this));
        _this2.getChildren = getChildren;
        return _this2;
      }
      /**
       * Expands all dataNodes in the tree.
       *
       * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
       * data nodes of the tree.
       * @return {?}
       */


      _createClass(NestedTreeControl, [{
        key: "expandAll",
        value: function expandAll() {
          var _this3 = this,
              _this$expansionModel4;

          this.expansionModel.clear();
          /** @type {?} */

          var allNodes = this.dataNodes.reduce(
          /**
          * @param {?} accumulator
          * @param {?} dataNode
          * @return {?}
          */
          function (accumulator, dataNode) {
            return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this3.getDescendants(dataNode)), [dataNode]);
          }, []);

          (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes));
        }
        /**
         * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var descendants = [];

          this._getDescendants(descendants, dataNode); // Remove the node itself


          return descendants.splice(1);
        }
        /**
         * A helper function to get descendants recursively.
         * @protected
         * @param {?} descendants
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "_getDescendants",
        value: function _getDescendants(descendants, dataNode) {
          var _this4 = this;

          descendants.push(dataNode);
          /** @type {?} */

          var childrenNodes = this.getChildren(dataNode);

          if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              return _this4._getDescendants(descendants, child);
            });
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /** @type {?} */
            Boolean)).subscribe(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var child = _step.value;

                  _this4._getDescendants(descendants, child);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        }
      }]);

      return NestedTreeControl;
    }(BaseTreeControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree control interface. User can implement TreeControl to expand/collapse dataNodes in the tree.
     * The CDKTree will use this TreeControl to expand/collapse a node.
     * User can also use it outside the `<cdk-tree>` to control the expansion status of the tree.
     * @record
     * @template T
     */


    function TreeControl() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var CdkTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function CdkTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, CdkTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
      return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8));
    };

    CdkTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeOutlet,
      selectors: [["", "cdkTreeNodeOutlet", ""]]
    });
    /** @nocollapse */

    CdkTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TREE_NODE_OUTLET_NODE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TREE_NODE_OUTLET_NODE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Context provided to the tree node component.
     * @template T
     */


    var CdkTreeNodeOutletContext =
    /**
     * @param {?} data
     */
    function CdkTreeNodeOutletContext(data) {
      _classCallCheck(this, CdkTreeNodeOutletContext);

      this.$implicit = data;
    };

    if (false) {}
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     * @template T
     */


    var CdkTreeNodeDef =
    /**
     * \@docs-private
     * @param {?} template
     */
    function CdkTreeNodeDef(template) {
      _classCallCheck(this, CdkTreeNodeDef);

      this.template = template;
    };

    CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
      return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeDef,
      selectors: [["", "cdkTreeNodeDef", ""]],
      inputs: {
        when: ["cdkTreeNodeDefWhen", "when"]
      }
    });
    /** @nocollapse */

    CdkTreeNodeDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeDef]',
          inputs: ['when: cdkTreeNodeDefWhen']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when there is no usable data.
     * \@docs-private
     * @return {?}
     */


    function getTreeNoValidDataSourceError() {
      return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTreeMultipleDefaultNodeDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * \@docs-private
     * @return {?}
     */


    function getTreeMissingMatchingNodeDefError() {
      return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlMissingError() {
      return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlFunctionsMissingError() {
      return Error("Could not find functions for nested/flat tree in tree control.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     * @template T
     */


    var CdkTree =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       */
      function CdkTree(_differs, _changeDetectorRef) {
        _classCallCheck(this, CdkTree);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */

        this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });
      }
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       * @return {?}
       */


      _createClass(CdkTree, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._dataDiffer = this._differs.find([]).create(this.trackBy);

          if (!this.treeControl) {
            throw getTreeControlMissingError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._nodeOutlet.viewContainer.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var defaultNodeDefs = this._nodeDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
          }

          this._defaultNodeDef = defaultNodeDefs[0];

          if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
          }
        } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.

        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          } // Remove the all dataNodes if there is now no data source


          if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;

          if (this._nodeDefs) {
            this._observeRenderChanges();
          }
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this5 = this;

          /** @type {?} */
          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(this._dataSource)) {
            dataStream = this._dataSource;
          } else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
          }

          if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this5.renderNodeChanges(data);
            });
          } else {
            throw getTreeNoValidDataSourceError();
          }
        }
        /**
         * Check for changes made in the data and render each change (node added/removed/moved).
         * @param {?} data
         * @param {?=} dataDiffer
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "renderNodeChanges",
        value: function renderNodeChanges(data) {
          var _this6 = this;

          var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
          var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
          var parentData = arguments.length > 3 ? arguments[3] : undefined;

          /** @type {?} */
          var changes = dataDiffer.diff(data);

          if (!changes) {
            return;
          }

          changes.forEachOperation(
          /**
          * @param {?} item
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
              _this6.insertNode(data[
              /** @type {?} */
              currentIndex],
              /** @type {?} */
              currentIndex, viewContainer, parentData);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              adjustedPreviousIndex);

              _this6._levels.delete(item.item);
            } else {
              /** @type {?} */
              var view = viewContainer.get(
              /** @type {?} */
              adjustedPreviousIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          });

          this._changeDetectorRef.detectChanges();
        }
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         * @param {?} data
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getNodeDef",
        value: function _getNodeDef(data, i) {
          if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
          }
          /** @type {?} */


          var nodeDef = this._nodeDefs.find(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.when && def.when(i, data);
          }) || this._defaultNodeDef;

          if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
          }

          return nodeDef;
        }
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         * @param {?} nodeData
         * @param {?} index
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "insertNode",
        value: function insertNode(nodeData, index, viewContainer, parentData) {
          /** @type {?} */
          var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

          /** @type {?} */


          var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
          // Otherwise, use the level of parent node.

          if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
          } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level =
            /** @type {?} */
            this._levels.get(parentData) + 1;
          } else {
            context.level = 0;
          }

          this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

          /** @type {?} */


          var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
          container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
          // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
          //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

          if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
          }
        }
      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
      }]);

      return CdkTree;
    }();

    CdkTree.ɵfac = function CdkTree_Factory(t) {
      return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    CdkTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTree,
      selectors: [["cdk-tree"]],
      contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
        }
      },
      viewQuery: function CdkTree_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: ["role", "tree", 1, "cdk-tree"],
      inputs: {
        dataSource: "dataSource",
        treeControl: "treeControl",
        trackBy: "trackBy"
      },
      exportAs: ["cdkTree"],
      decls: 1,
      vars: 0,
      consts: [["cdkTreeNodeOutlet", ""]],
      template: function CdkTree_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkTreeNodeOutlet],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    CdkTree.propDecorators = {
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      treeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkTreeNodeOutlet, {
          static: true
        }]
      }],
      _nodeDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeDef, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-tree',
          exportAs: 'cdkTree',
          template: "<ng-container cdkTreeNodeOutlet></ng-container>",
          host: {
            'class': 'cdk-tree',
            'role': 'tree'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
          // The view for `CdkTree` consists entirely of templates declared in other views. As they are
          // declared elsewhere, they are checked when their declaration points are checked.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        treeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkTreeNodeOutlet, {
            static: true
          }]
        }],
        _nodeDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeDef, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     * @template T
     */


    var CdkTreeNode =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _tree
       */
      function CdkTreeNode(_elementRef, _tree) {
        _classCallCheck(this, CdkTreeNode);

        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */

        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */

        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode =
        /** @type {?} */
        this;
      }
      /**
       * The tree node's data.
       * @return {?}
       */


      _createClass(CdkTreeNode, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          // If this is the last tree node being destroyed,
          // clear out the reference to avoid leaking memory.
          if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
          }

          this._dataChanges.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Focuses the menu item. Implements for FocusableOption.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_setRoleFromData",
        value: function _setRoleFromData() {
          var _this7 = this;

          if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
          } else {
            if (!this._tree.treeControl.getChildren) {
              throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */


            var childrenNodes = this._tree.treeControl.getChildren(this._data);

            if (Array.isArray(childrenNodes)) {
              this._setRoleFromChildren(
              /** @type {?} */
              childrenNodes);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                return _this7._setRoleFromChildren(children);
              });
            }
          }
        }
        /**
         * @protected
         * @param {?} children
         * @return {?}
         */

      }, {
        key: "_setRoleFromChildren",
        value: function _setRoleFromChildren(children) {
          this.role = children && children.length ? 'group' : 'treeitem';
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._data) {
            this._data = value;

            this._setRoleFromData();

            this._dataChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._tree.treeControl.isExpanded(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "level",
        get: function get() {
          return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        }
      }]);

      return CdkTreeNode;
    }();

    CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
      return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree));
    };

    CdkTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNode,
      selectors: [["cdk-tree-node"]],
      hostAttrs: [1, "cdk-tree-node"],
      hostVars: 3,
      hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
        }
      },
      inputs: {
        role: "role"
      },
      exportAs: ["cdkTreeNode"]
    });
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */

    CdkTreeNode.mostRecentTreeNode = null;
    /** @nocollapse */

    CdkTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }];
    };

    CdkTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-tree-node',
          exportAs: 'cdkTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.aria-level]': 'role === "treeitem" ? level : null',
            '[attr.role]': 'role',
            'class': 'cdk-tree-node'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/nested-node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * The children of node will be automatically added to `cdkTreeNodeOutlet`.
     * @template T
     */


    var CdkNestedTreeNode =
    /*#__PURE__*/
    function (_CdkTreeNode) {
      _inherits(CdkNestedTreeNode, _CdkTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       */
      function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this8;

        _classCallCheck(this, CdkNestedTreeNode);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CdkNestedTreeNode).call(this, _elementRef, _tree));
        _this8._elementRef = _elementRef;
        _this8._tree = _tree;
        _this8._differs = _differs;
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(CdkNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this9 = this;

          this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

          if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
          }
          /** @type {?} */


          var childrenNodes = this._tree.treeControl.getChildren(this.data);

          if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(
            /** @type {?} */
            childrenNodes);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this9.updateChildrenNodes(result);
            });
          }

          this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this9.updateChildrenNodes();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._clear();

          _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Add children dataNodes to the NodeOutlet
         * @protected
         * @param {?=} children
         * @return {?}
         */

      }, {
        key: "updateChildrenNodes",
        value: function updateChildrenNodes(children) {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (children) {
            this._children = children;
          }

          if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;

            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
          } else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
          }
        }
        /**
         * Clear the children dataNodes.
         * @protected
         * @return {?}
         */

      }, {
        key: "_clear",
        value: function _clear() {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (outlet) {
            outlet.viewContainer.clear();

            this._dataDiffer.diff([]);
          }
        }
        /**
         * Gets the outlet for the current node.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNodeOutlet",
        value: function _getNodeOutlet() {
          var _this10 = this;

          /** @type {?} */
          var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
          // that we don't pick up the outlet of a child node by accident.

          return outlets && outlets.find(
          /**
          * @param {?} outlet
          * @return {?}
          */
          function (outlet) {
            return !outlet._node || outlet._node === _this10;
          });
        }
      }]);

      return CdkNestedTreeNode;
    }(CdkTreeNode);

    CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
      return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
    };

    CdkNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkNestedTreeNode,
      selectors: [["cdk-nested-tree-node"]],
      contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
        }
      },
      hostAttrs: [1, "cdk-tree-node", "cdk-nested-tree-node"],
      hostVars: 2,
      hostBindings: function CdkNestedTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
        }
      },
      exportAs: ["cdkNestedTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };

    CdkNestedTreeNode.propDecorators = {
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-nested-tree-node',
          exportAs: 'cdkNestedTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.role]': 'role',
            'class': 'cdk-tree-node cdk-nested-tree-node'
          },
          providers: [{
            provide: CdkTreeNode,
            useExisting: CdkNestedTreeNode
          }, {
            provide: CDK_TREE_NODE_OUTLET_NODE,
            useExisting: CdkNestedTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      }, {
        nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeOutlet, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/padding.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */


    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var CdkTreeNodePadding =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this11 = this;

        _classCallCheck(this, CdkTreeNodePadding);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._indent = 40;

        this._setPadding();

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this11._setPadding(true);
          });
        } // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.


        _treeNode._dataChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this11._setPadding();
        });
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(CdkTreeNodePadding, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level == null ? nodeLevel : this._level;
          return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
        }
        /**
         * @param {?=} forceChange
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var padding = this._paddingIndent();

          if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */

            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */

            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';

            this._renderer.setStyle(element, paddingProp, padding);

            this._renderer.setStyle(element, resetProp, null);

            this._currentPadding = padding;
          }
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Set to null as the fallback value so that _setPadding can fall back to the node level if the
          // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
          // they set 0 explicitly.
          this._level =
          /** @type {?} */
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return CdkTreeNodePadding;
    }();

    CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
      return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
    };

    CdkTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodePadding,
      selectors: [["", "cdkTreeNodePadding", ""]],
      inputs: {
        level: ["cdkTreeNodePadding", "level"],
        indent: ["cdkTreeNodePaddingIndent", "indent"]
      }
    });
    /** @nocollapse */

    CdkTreeNodePadding.ctorParameters = function () {
      return [{
        type: CdkTreeNode
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePaddingIndent']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodePadding]'
        }]
      }], function () {
        return [{
          type: CdkTreeNode
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePaddingIndent']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Node toggle to expand/collapse the node.
     * @template T
     */


    var CdkTreeNodeToggle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _tree
       * @param {?} _treeNode
       */
      function CdkTreeNodeToggle(_tree, _treeNode) {
        _classCallCheck(this, CdkTreeNodeToggle);

        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
      }
      /**
       * Whether expand/collapse the node recursively.
       * @return {?}
       */


      _createClass(CdkTreeNodeToggle, [{
        key: "_toggle",
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _toggle(event) {
          this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
          event.stopPropagation();
        }
      }, {
        key: "recursive",
        get: function get() {
          return this._recursive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTreeNodeToggle;
    }();

    CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
      return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode));
    };

    CdkTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeToggle,
      selectors: [["", "cdkTreeNodeToggle", ""]],
      hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
            return ctx._toggle($event);
          });
        }
      },
      inputs: {
        recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
      }
    });
    /** @nocollapse */

    CdkTreeNodeToggle.ctorParameters = function () {
      return [{
        type: CdkTree
      }, {
        type: CdkTreeNode
      }];
    };

    CdkTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodeToggleRecursive']
      }],
      _toggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeToggle]'
        }]
      }], function () {
        return [{
          type: CdkTree
        }, {
          type: CdkTreeNode
        }];
      }, {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodeToggleRecursive']
        }],
        _toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

    var CdkTreeModule = function CdkTreeModule() {
      _classCallCheck(this, CdkTreeModule);
    };

    CdkTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkTreeModule
    });
    CdkTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CdkTreeModule_Factory(t) {
        return new (t || CdkTreeModule)();
      },
      providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTreeModule, {
        declarations: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
        exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: EXPORTED_DECLARATIONS,
          declarations: EXPORTED_DECLARATIONS,
          providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tree.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js ***!
    \**********************************************************************/

  /*! exports provided: MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function () {
      return MatNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTree", function () {
      return MatTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function () {
      return MatTreeFlatDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function () {
      return MatTreeFlattener;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeModule", function () {
      return MatTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function () {
      return MatTreeNestedDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNode", function () {
      return MatTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function () {
      return MatTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function () {
      return MatTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function () {
      return MatTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function () {
      return MatTreeNodeToggle;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
    /**
     * Wrapper for the CdkTree node with Material design styles.
     * @template T
     */


    var MatTreeNode =
    /*#__PURE__*/
    function (_MatTreeNodeMixinBase2) {
      _inherits(MatTreeNode, _MatTreeNodeMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} tabIndex
       */
      function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this12;

        _classCallCheck(this, MatTreeNode);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNode).call(this, _elementRef, _tree));
        _this12._elementRef = _elementRef;
        _this12._tree = _tree;
        _this12.role = 'treeitem';
        _this12.tabIndex = Number(tabIndex) || 0;
        return _this12;
      }

      return MatTreeNode;
    }(_MatTreeNodeMixinBase);

    MatTreeNode.ɵfac = function MatTreeNode_Factory(t) {
      return new (t || MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
    };

    MatTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNode,
      selectors: [["mat-tree-node"]],
      hostAttrs: [1, "mat-tree-node"],
      hostVars: 3,
      hostBindings: function MatTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
        }
      },
      inputs: {
        disabled: "disabled",
        tabIndex: "tabIndex",
        role: "role"
      },
      exportAs: ["matTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
        useExisting: MatTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-tree-node',
          exportAs: 'matTreeNode',
          inputs: ['disabled', 'tabIndex'],
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.aria-level]': 'role === "treeitem" ? level : null',
            '[attr.role]': 'role',
            'class': 'mat-tree-node'
          },
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
            useExisting: MatTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the CdkTree node definition with Material design styles.
     * @template T
     */


    var MatTreeNodeDef =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE) {
      _inherits(MatTreeNodeDef, _angular_cdk_tree__WE);

      function MatTreeNodeDef() {
        _classCallCheck(this, MatTreeNodeDef);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodeDef).apply(this, arguments));
      }

      return MatTreeNodeDef;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"]);

    MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) {
      return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef);
    };

    MatTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeDef,
      selectors: [["", "matTreeNodeDef", ""]],
      inputs: {
        when: ["matTreeNodeDefWhen", "when"],
        data: ["matTreeNode", "data"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
        useExisting: MatTreeNodeDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodeDef.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNode']
      }]
    };

    var ɵMatTreeNodeDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeDef]',
          inputs: ['when: matTreeNodeDefWhen'],
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
            useExisting: MatTreeNodeDef
          }]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNode']
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the CdkTree nested node with Material design styles.
     * @template T
     */


    var MatNestedTreeNode =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE2) {
      _inherits(MatNestedTreeNode, _angular_cdk_tree__WE2);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       * @param {?} tabIndex
       */
      function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this13;

        _classCallCheck(this, MatNestedTreeNode);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(MatNestedTreeNode).call(this, _elementRef, _tree, _differs));
        _this13._elementRef = _elementRef;
        _this13._tree = _tree;
        _this13._differs = _differs;
        _this13._disabled = false;
        _this13.tabIndex = Number(tabIndex) || 0;
        return _this13;
      }
      /**
       * Whether the node is disabled.
       * @return {?}
       */


      _createClass(MatNestedTreeNode, [{
        key: "ngAfterContentInit",
        // This is a workaround for https://github.com/angular/angular/issues/23091
        // In aot mode, the lifecycle hooks from parent class are not called.
        // TODO(tinayuangao): Remove when the angular issue #23091 is fixed

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Tabindex for the node.
         * @return {?}
         */

      }, {
        key: "tabIndex",
        get: function get() {
          return this.disabled ? -1 : this._tabIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // If the specified tabIndex value is null or undefined, fall back to the default value.
          this._tabIndex = value != null ? value : 0;
        }
      }]);

      return MatNestedTreeNode;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"]);

    MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) {
      return new (t || MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
    };

    MatNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatNestedTreeNode,
      selectors: [["mat-nested-tree-node"]],
      hostAttrs: [1, "mat-nested-tree-node"],
      hostVars: 2,
      hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
        }
      },
      inputs: {
        tabIndex: "tabIndex",
        disabled: "disabled",
        node: ["matNestedTreeNode", "node"]
      },
      exportAs: ["matNestedTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
        useExisting: MatNestedTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatNestedTreeNode.propDecorators = {
      node: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matNestedTreeNode']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-nested-tree-node',
          exportAs: 'matNestedTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.role]': 'role',
            'class': 'mat-nested-tree-node'
          },
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
            useExisting: MatNestedTreeNode
          }, {
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
            useExisting: MatNestedTreeNode
          }, {
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
            useExisting: MatNestedTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matNestedTreeNode']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/padding.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree padding with Material design styles.
     * @template T
     */


    var MatTreeNodePadding =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE3) {
      _inherits(MatTreeNodePadding, _angular_cdk_tree__WE3);

      function MatTreeNodePadding() {
        _classCallCheck(this, MatTreeNodePadding);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodePadding).apply(this, arguments));
      }

      return MatTreeNodePadding;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"]);

    MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) {
      return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding);
    };

    MatTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodePadding,
      selectors: [["", "matTreeNodePadding", ""]],
      inputs: {
        level: ["matTreeNodePadding", "level"],
        indent: ["matTreeNodePaddingIndent", "indent"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
        useExisting: MatTreeNodePadding
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePaddingIndent']
      }]
    };

    var ɵMatTreeNodePadding_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodePadding);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodePadding]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
            useExisting: MatTreeNodePadding
          }]
        }]
      }], null, {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodePaddingIndent']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */


    var MatTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function MatTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, MatTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) {
      return new (t || MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], 8));
    };

    MatTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeOutlet,
      selectors: [["", "matTreeNodeOutlet", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
        useExisting: MatTreeNodeOutlet
      }])]
    });
    /** @nocollapse */

    MatTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeOutlet]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
            useExisting: MatTreeNodeOutlet
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var MatTree =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE4) {
      _inherits(MatTree, _angular_cdk_tree__WE4);

      function MatTree() {
        _classCallCheck(this, MatTree);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTree).apply(this, arguments));
      }

      return MatTree;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]);

    MatTree.ɵfac = function MatTree_Factory(t) {
      return ɵMatTree_BaseFactory(t || MatTree);
    };

    MatTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatTree,
      selectors: [["mat-tree"]],
      viewQuery: function MatTree_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](MatTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: ["role", "tree", 1, "mat-tree"],
      exportAs: ["matTree"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
        useExisting: MatTree
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["matTreeNodeOutlet", ""]],
      template: function MatTree_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],
      encapsulation: 2
    });
    MatTree.propDecorators = {
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [MatTreeNodeOutlet, {
          static: true
        }]
      }]
    };

    var ɵMatTree_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTree);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-tree',
          exportAs: 'matTree',
          template: "<ng-container matTreeNodeOutlet></ng-container>",
          host: {
            'class': 'mat-tree',
            'role': 'tree'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          // See note on CdkTree for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
            useExisting: MatTree
          }],
          styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
        }]
      }], null, {
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [MatTreeNodeOutlet, {
            static: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree's toggle with Material design styles.
     * @template T
     */


    var MatTreeNodeToggle =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE5) {
      _inherits(MatTreeNodeToggle, _angular_cdk_tree__WE5);

      function MatTreeNodeToggle() {
        var _this14;

        _classCallCheck(this, MatTreeNodeToggle);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodeToggle).apply(this, arguments));
        _this14.recursive = false;
        return _this14;
      }

      return MatTreeNodeToggle;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"]);

    MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) {
      return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle);
    };

    MatTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeToggle,
      selectors: [["", "matTreeNodeToggle", ""]],
      inputs: {
        recursive: ["matTreeNodeToggleRecursive", "recursive"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
        useExisting: MatTreeNodeToggle
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodeToggleRecursive']
      }]
    };

    var ɵMatTreeNodeToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeToggle);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeToggle]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
            useExisting: MatTreeNodeToggle
          }]
        }]
      }], null, {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodeToggleRecursive']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/tree-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

    var MatTreeModule = function MatTreeModule() {
      _classCallCheck(this, MatTreeModule);
    };

    MatTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatTreeModule
    });
    MatTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatTreeModule_Factory(t) {
        return new (t || MatTreeModule)();
      },
      imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatTreeModule, {
        declarations: function declarations() {
          return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
        },
        imports: function imports() {
          return [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: MAT_TREE_DIRECTIVES,
          declarations: MAT_TREE_DIRECTIVES
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/data-source/flat-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T` to flattened nodes of type `F`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F` with additional information.
     * @template T, F
     */


    var MatTreeFlattener =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} transformFunction
       * @param {?} getLevel
       * @param {?} isExpandable
       * @param {?} getChildren
       */
      function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
        _classCallCheck(this, MatTreeFlattener);

        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
      }
      /**
       * @param {?} node
       * @param {?} level
       * @param {?} resultNodes
       * @param {?} parentMap
       * @return {?}
       */


      _createClass(MatTreeFlattener, [{
        key: "_flattenNode",
        value: function _flattenNode(node, level, resultNodes, parentMap) {
          var _this15 = this;

          /** @type {?} */
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);

          if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);

            if (childrenNodes) {
              if (Array.isArray(childrenNodes)) {
                this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
              } else {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
                /**
                * @param {?} children
                * @return {?}
                */
                function (children) {
                  _this15._flattenChildren(children, level, resultNodes, parentMap);
                });
              }
            }
          }

          return resultNodes;
        }
        /**
         * @param {?} children
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenChildren",
        value: function _flattenChildren(children, level, resultNodes, parentMap) {
          var _this16 = this;

          children.forEach(
          /**
          * @param {?} child
          * @param {?} index
          * @return {?}
          */
          function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);

            _this16._flattenNode(child, level + 1, resultNodes, childParentMap);
          });
        }
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         * @param {?} structuredData
         * @return {?}
         */

      }, {
        key: "flattenNodes",
        value: function flattenNodes(structuredData) {
          var _this17 = this;

          /** @type {?} */
          var resultNodes = [];
          structuredData.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return _this17._flattenNode(node, 0, resultNodes, []);
          });
          return resultNodes;
        }
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         * @param {?} nodes
         * @param {?} treeControl
         * @return {?}
         */

      }, {
        key: "expandFlattenedNodes",
        value: function expandFlattenedNodes(nodes, treeControl) {
          var _this18 = this;

          /** @type {?} */
          var results = [];
          /** @type {?} */

          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            /** @type {?} */
            var expand = true;

            for (var i = 0; i <= _this18.getLevel(node); i++) {
              expand = expand && currentExpand[i];
            }

            if (expand) {
              results.push(node);
            }

            if (_this18.isExpandable(node)) {
              currentExpand[_this18.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
          });
          return results;
        }
      }]);

      return MatTreeFlattener;
    }();

    if (false) {}
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `MatTree`.
     * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
     * to type `F` for `MatTree` to consume.
     * @template T, F
     */


    var MatTreeFlatDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti) {
      _inherits(MatTreeFlatDataSource, _angular_cdk_collecti);

      /**
       * @param {?} _treeControl
       * @param {?} _treeFlattener
       * @param {?=} initialData
       */
      function MatTreeFlatDataSource(_treeControl, _treeFlattener) {
        var _this19;

        var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, MatTreeFlatDataSource);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeFlatDataSource).call(this));
        _this19._treeControl = _treeControl;
        _this19._treeFlattener = _treeFlattener;
        _this19._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this19._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this19._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        return _this19;
      }
      /**
       * @return {?}
       */


      _createClass(MatTreeFlatDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this20 = this;

          /** @type {?} */
          var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            _this20._expandedData.next(_this20._treeFlattener.expandFlattenedNodes(_this20._flattenedData.value, _this20._treeControl));

            return _this20._expandedData.value;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);

          this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

          this._treeControl.dataNodes = this._flattenedData.value;
        }
      }]);

      return MatTreeFlatDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/data-source/nested-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Data source for nested tree.
     *
     * The data source for nested tree doesn't have to consider node flattener, or the way to expand
     * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
     * @template T
     */


    var MatTreeNestedDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti2) {
      _inherits(MatTreeNestedDataSource, _angular_cdk_collecti2);

      function MatTreeNestedDataSource() {
        var _this21;

        _classCallCheck(this, MatTreeNestedDataSource);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNestedDataSource).apply(this, arguments));
        _this21._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        return _this21;
      }
      /**
       * Data for the nested tree
       * @return {?}
       */


      _createClass(MatTreeNestedDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this22 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this22.data;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);
        }
      }]);

      return MatTreeNestedDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tree.js.map

    /***/

  },

  /***/
  "./src/app/tree/check-tree/check-tree.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tree/check-tree/check-tree.component.ts ***!
    \*********************************************************/

  /*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, ChecktreeComponent */

  /***/
  function srcAppTreeCheckTreeCheckTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemNode", function () {
      return TodoItemNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function () {
      return TodoItemFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function () {
      return ChecklistDatabase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChecktreeComponent", function () {
      return ChecktreeComponent;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ChecktreeComponent_mat_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r731 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-checkbox", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ChecktreeComponent_mat_tree_node_5_Template_mat_checkbox_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r731);

          var node_r729 = ctx.$implicit;

          var ctx_r730 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r730.todoLeafItemSelectionToggle(node_r729);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r729 = ctx.$implicit;

        var ctx_r726 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r726.checklistSelection.isSelected(node_r729));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r729.item);
      }
    }

    function ChecktreeComponent_mat_tree_node_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r735 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tree-node", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "New item...");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChecktreeComponent_mat_tree_node_6_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r735);

          var node_r732 = ctx.$implicit;

          var _r733 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r734 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r734.saveNode(node_r732, _r733.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ChecktreeComponent_mat_tree_node_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r738 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tree-node", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-checkbox", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ChecktreeComponent_mat_tree_node_7_Template_mat_checkbox_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r738);

          var node_r736 = ctx.$implicit;

          var ctx_r737 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r737.todoItemSelectionToggle(node_r736);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChecktreeComponent_mat_tree_node_7_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r738);

          var node_r736 = ctx.$implicit;

          var ctx_r739 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r739.addNewItem(node_r736);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r736 = ctx.$implicit;

        var ctx_r728 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "toggle " + node_r736.filename);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r728.treeControl.isExpanded(node_r736) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r728.descendantsAllSelected(node_r736))("indeterminate", ctx_r728.descendantsPartiallySelected(node_r736));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", node_r736.item, "");
      }
    }

    var TodoItemNode = function TodoItemNode() {
      _classCallCheck(this, TodoItemNode);
    };
    /** Flat to-do item node with expandable and level information */


    var TodoItemFlatNode = function TodoItemFlatNode() {
      _classCallCheck(this, TodoItemFlatNode);
    };
    /**
     * The Json object for to-do list data.
     */


    var TREE_DATA = {
      Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
          Apple: null,
          Berries: ['Blueberry', 'Raspberry'],
          Orange: null
        }
      },
      Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular']
    };
    /**
     * Checklist database, it can build a tree structured Json object.
     * Each node in Json object represents a to-do item or a category.
     * If a node is a category, it has children items and new items can be added under the category.
     */

    var ChecklistDatabase =
    /*#__PURE__*/
    function () {
      function ChecklistDatabase() {
        _classCallCheck(this, ChecklistDatabase);

        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize();
      }

      _createClass(ChecklistDatabase, [{
        key: "initialize",
        value: function initialize() {
          // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
          //     file node as children.
          var data = this.buildFileTree(TREE_DATA, 0); // Notify the change.

          this.dataChange.next(data);
        }
        /**
         * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
         * The return value is the list of `TodoItemNode`.
         */

      }, {
        key: "buildFileTree",
        value: function buildFileTree(obj, level) {
          var _this23 = this;

          return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;

            if (value != null) {
              if (typeof value === 'object') {
                node.children = _this23.buildFileTree(value, level + 1);
              } else {
                node.item = value;
              }
            }

            return accumulator.concat(node);
          }, []);
        }
        /** Add an item to to-do list */

      }, {
        key: "insertItem",
        value: function insertItem(parent, name) {
          if (parent.children) {
            parent.children.push({
              item: name
            });
            this.dataChange.next(this.data);
          }
        }
      }, {
        key: "updateItem",
        value: function updateItem(node, name) {
          node.item = name;
          this.dataChange.next(this.data);
        }
      }, {
        key: "data",
        get: function get() {
          return this.dataChange.value;
        }
      }]);

      return ChecklistDatabase;
    }();

    ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) {
      return new (t || ChecklistDatabase)();
    };

    ChecklistDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ChecklistDatabase,
      factory: ChecklistDatabase.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChecklistDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var ChecktreeComponent =
    /*#__PURE__*/
    function () {
      function ChecktreeComponent(_database) {
        var _this24 = this;

        _classCallCheck(this, ChecktreeComponent);

        this._database = _database;
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */

        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */

        this.selectedParent = null;
        /** The new item's name */

        this.newItemName = '';
        /** The selection for checklist */

        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true
        /* multiple */
        );

        this.getLevel = function (node) {
          return node.level;
        };

        this.isExpandable = function (node) {
          return node.expandable;
        };

        this.getChildren = function (node) {
          return node.children;
        };

        this.hasChild = function (_, _nodeData) {
          return _nodeData.expandable;
        };

        this.hasNoContent = function (_, _nodeData) {
          return _nodeData.item === '';
        };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */


        this.transformer = function (node, level) {
          var existingNode = _this24.nestedNodeMap.get(node);

          var flatNode = existingNode && existingNode.item === node.item ? existingNode : new TodoItemFlatNode();
          flatNode.item = node.item;
          flatNode.level = level;
          flatNode.expandable = !!node.children;

          _this24.flatNodeMap.set(flatNode, node);

          _this24.nestedNodeMap.set(node, flatNode);

          return flatNode;
        };

        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);

        _database.dataChange.subscribe(function (data) {
          _this24.dataSource.data = data;
        });
      }
      /** Whether all the descendants of the node are selected. */


      _createClass(ChecktreeComponent, [{
        key: "descendantsAllSelected",
        value: function descendantsAllSelected(node) {
          var _this25 = this;

          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.every(function (child) {
            return _this25.checklistSelection.isSelected(child);
          });
          return descAllSelected;
        }
        /** Whether part of the descendants are selected */

      }, {
        key: "descendantsPartiallySelected",
        value: function descendantsPartiallySelected(node) {
          var _this26 = this;

          var descendants = this.treeControl.getDescendants(node);
          var result = descendants.some(function (child) {
            return _this26.checklistSelection.isSelected(child);
          });
          return result && !this.descendantsAllSelected(node);
        }
        /** Toggle the to-do item selection. Select/deselect all the descendants node */

      }, {
        key: "todoItemSelectionToggle",
        value: function todoItemSelectionToggle(node) {
          var _this$checklistSelect,
              _this$checklistSelect2,
              _this27 = this;

          this.checklistSelection.toggle(node);
          var descendants = this.treeControl.getDescendants(node);
          this.checklistSelection.isSelected(node) ? (_this$checklistSelect = this.checklistSelection).select.apply(_this$checklistSelect, _toConsumableArray(descendants)) : (_this$checklistSelect2 = this.checklistSelection).deselect.apply(_this$checklistSelect2, _toConsumableArray(descendants)); // Force update for the parent

          descendants.every(function (child) {
            return _this27.checklistSelection.isSelected(child);
          });
          this.checkAllParentsSelection(node);
        }
        /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */

      }, {
        key: "todoLeafItemSelectionToggle",
        value: function todoLeafItemSelectionToggle(node) {
          this.checklistSelection.toggle(node);
          this.checkAllParentsSelection(node);
        }
        /* Checks all the parents when a leaf node is selected/unselected */

      }, {
        key: "checkAllParentsSelection",
        value: function checkAllParentsSelection(node) {
          var parent = this.getParentNode(node);

          while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
          }
        }
        /** Check root node checked state and change it accordingly */

      }, {
        key: "checkRootNodeSelection",
        value: function checkRootNodeSelection(node) {
          var _this28 = this;

          var nodeSelected = this.checklistSelection.isSelected(node);
          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.every(function (child) {
            return _this28.checklistSelection.isSelected(child);
          });

          if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
          } else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
          }
        }
        /* Get the parent node of a node */

      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = this.getLevel(node);

          if (currentLevel < 1) {
            return null;
          }

          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

          for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];

            if (this.getLevel(currentNode) < currentLevel) {
              return currentNode;
            }
          }

          return null;
        }
        /** Select the category so we can insert the new item. */

      }, {
        key: "addNewItem",
        value: function addNewItem(node) {
          var parentNode = this.flatNodeMap.get(node);

          this._database.insertItem(parentNode, '');

          this.treeControl.expand(node);
        }
        /** Save the node to database */

      }, {
        key: "saveNode",
        value: function saveNode(node, itemValue) {
          var nestedNode = this.flatNodeMap.get(node);

          this._database.updateItem(nestedNode, itemValue);
        }
      }]);

      return ChecktreeComponent;
    }();

    ChecktreeComponent.ɵfac = function ChecktreeComponent_Factory(t) {
      return new (t || ChecktreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ChecklistDatabase));
    };

    ChecktreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChecktreeComponent,
      selectors: [["app-check-tree"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([ChecklistDatabase])],
      decls: 8,
      vars: 4,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "Ex. Lettuce"], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]],
      template: function ChecktreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tree with checkboxes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChecktreeComponent_mat_tree_node_5_Template, 4, 2, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChecktreeComponent_mat_tree_node_6_Template, 9, 0, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChecktreeComponent_mat_tree_node_7_Template, 9, 5, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasNoContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvY2hlY2stdHJlZS9jaGVjay10cmVlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChecktreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-check-tree',
          templateUrl: './check-tree.component.html',
          styleUrls: ['./check-tree.component.scss'],
          providers: [ChecklistDatabase]
        }]
      }], function () {
        return [{
          type: ChecklistDatabase
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/dynamic-tree/dynamic-tree.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tree/dynamic-tree/dynamic-tree.component.ts ***!
    \*************************************************************/

  /*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, DynamictreeComponent */

  /***/
  function srcAppTreeDynamicTreeDynamicTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function () {
      return DynamicFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function () {
      return DynamicDatabase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function () {
      return DynamicDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamictreeComponent", function () {
      return DynamictreeComponent;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function DynamictreeComponent_mat_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r742 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r742.item, " ");
      }
    }

    function DynamictreeComponent_mat_tree_node_6_mat_progress_bar_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 8);
      }
    }

    function DynamictreeComponent_mat_tree_node_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamictreeComponent_mat_tree_node_6_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r743 = ctx.$implicit;

        var ctx_r741 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r743.filename);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r741.treeControl.isExpanded(node_r743) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r743.item, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", node_r743.isLoading);
      }
    }

    var DynamicFlatNode = function DynamicFlatNode(item) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var expandable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, DynamicFlatNode);

      this.item = item;
      this.level = level;
      this.expandable = expandable;
      this.isLoading = isLoading;
    };
    /**
     * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
     * the descendants data from the database.
     */


    var DynamicDatabase =
    /*#__PURE__*/
    function () {
      function DynamicDatabase() {
        _classCallCheck(this, DynamicDatabase);

        this.dataMap = new Map([['Fruits', ['Apple', 'Orange', 'Banana']], ['Vegetables', ['Tomato', 'Potato', 'Onion']], ['Apple', ['Fuji', 'Macintosh']], ['Onion', ['Yellow', 'White', 'Purple']]]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
      }
      /** Initial data from database */


      _createClass(DynamicDatabase, [{
        key: "initialData",
        value: function initialData() {
          return this.rootLevelNodes.map(function (name) {
            return new DynamicFlatNode(name, 0, true);
          });
        }
      }, {
        key: "getChildren",
        value: function getChildren(node) {
          return this.dataMap.get(node);
        }
      }, {
        key: "isExpandable",
        value: function isExpandable(node) {
          return this.dataMap.has(node);
        }
      }]);

      return DynamicDatabase;
    }();

    DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) {
      return new (t || DynamicDatabase)();
    };

    DynamicDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DynamicDatabase,
      factory: DynamicDatabase.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * File database, it can build a tree structured Json object from string.
     * Each node in Json object represents a file or a directory. For a file, it has filename and type.
     * For a directory, it has filename and children (a list of files or directories).
     * The input will be a json object string, and the output is a list of `FileNode` with nested
     * structure.
     */


    var DynamicDataSource =
    /*#__PURE__*/
    function () {
      function DynamicDataSource(_treeControl, _database) {
        _classCallCheck(this, DynamicDataSource);

        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
      }

      _createClass(DynamicDataSource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          var _this29 = this;

          this._treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added || change.removed) {
              _this29.handleTreeControl(change);
            }
          });

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this29.data;
          }));
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {}
        /** Handle expand/collapse behaviors */

      }, {
        key: "handleTreeControl",
        value: function handleTreeControl(change) {
          var _this30 = this;

          if (change.added) {
            change.added.forEach(function (node) {
              return _this30.toggleNode(node, true);
            });
          }

          if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) {
              return _this30.toggleNode(node, false);
            });
          }
        }
        /**
         * Toggle the node, remove from display list
         */

      }, {
        key: "toggleNode",
        value: function toggleNode(node, expand) {
          var _this31 = this;

          var children = this._database.getChildren(node.item);

          var index = this.data.indexOf(node);

          if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
          }

          node.isLoading = true;
          setTimeout(function () {
            if (expand) {
              var _this31$data;

              var nodes = children.map(function (name) {
                return new DynamicFlatNode(name, node.level + 1, _this31._database.isExpandable(name));
              });

              (_this31$data = _this31.data).splice.apply(_this31$data, [index + 1, 0].concat(_toConsumableArray(nodes)));
            } else {
              var count = 0;

              for (var i = index + 1; i < _this31.data.length && _this31.data[i].level > node.level; i++, count++) {}

              _this31.data.splice(index + 1, count);
            } // notify the change


            _this31.dataChange.next(_this31.data);

            node.isLoading = false;
          }, 1000);
        }
      }, {
        key: "data",
        get: function get() {
          return this.dataChange.value;
        },
        set: function set(value) {
          this._treeControl.dataNodes = value;
          this.dataChange.next(value);
        }
      }]);

      return DynamicDataSource;
    }();

    var DynamictreeComponent = function DynamictreeComponent(database) {
      _classCallCheck(this, DynamictreeComponent);

      this.getLevel = function (node) {
        return node.level;
      };

      this.isExpandable = function (node) {
        return node.expandable;
      };

      this.hasChild = function (_, _nodeData) {
        return _nodeData.expandable;
      };

      this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this.getLevel, this.isExpandable);
      this.dataSource = new DynamicDataSource(this.treeControl, database);
      this.dataSource.data = database.initialData();
    };

    DynamictreeComponent.ɵfac = function DynamictreeComponent_Factory(t) {
      return new (t || DynamictreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DynamicDatabase));
    };

    DynamictreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DynamictreeComponent,
      selectors: [["app-dynamic-tree"]],
      decls: 7,
      vars: 3,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]],
      template: function DynamictreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tree with dynamic data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamictreeComponent_mat_tree_node_5_Template, 3, 1, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DynamictreeComponent_mat_tree_node_6_Template, 6, 4, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvZHluYW1pYy10cmVlL2R5bmFtaWMtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamictreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dynamic-tree',
          templateUrl: './dynamic-tree.component.html',
          styleUrls: ['./dynamic-tree.component.scss']
        }]
      }], function () {
        return [{
          type: DynamicDatabase
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/flat-tree/flat-tree.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tree/flat-tree/flat-tree.component.ts ***!
    \*******************************************************/

  /*! exports provided: FlattreeComponent */

  /***/
  function srcAppTreeFlatTreeFlatTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlattreeComponent", function () {
      return FlattreeComponent;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FlattreeComponent_mat_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r747 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r747.name, " ");
      }
    }

    function FlattreeComponent_mat_tree_node_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r748 = ctx.$implicit;

        var ctx_r746 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r748.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r746.treeControl.isExpanded(node_r748) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r748.name, " ");
      }
    }

    var TREE_DATA = [{
      name: 'Fruit',
      children: [{
        name: 'Apple'
      }, {
        name: 'Banana'
      }, {
        name: 'Fruit loops'
      }]
    }, {
      name: 'Vegetables',
      children: [{
        name: 'Green',
        children: [{
          name: 'Broccoli'
        }, {
          name: 'Brussels sprouts'
        }]
      }, {
        name: 'Orange',
        children: [{
          name: 'Pumpkins'
        }, {
          name: 'Carrots'
        }]
      }]
    }];

    var FlattreeComponent = function FlattreeComponent() {
      _classCallCheck(this, FlattreeComponent);

      this._transformer = function (node, level) {
        return {
          expandable: !!node.children && node.children.length > 0,
          name: node.name,
          level: level
        };
      };

      this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](function (node) {
        return node.level;
      }, function (node) {
        return node.expandable;
      });
      this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, function (node) {
        return node.level;
      }, function (node) {
        return node.expandable;
      }, function (node) {
        return node.children;
      });
      this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);

      this.hasChild = function (_, node) {
        return node.expandable;
      };

      this.dataSource.data = TREE_DATA;
    };

    FlattreeComponent.ɵfac = function FlattreeComponent_Factory(t) {
      return new (t || FlattreeComponent)();
    };

    FlattreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FlattreeComponent,
      selectors: [["app-flat-tree"]],
      decls: 7,
      vars: 3,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]],
      template: function FlattreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tree with flat nodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FlattreeComponent_mat_tree_node_5_Template, 3, 1, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FlattreeComponent_mat_tree_node_6_Template, 5, 3, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvZmxhdC10cmVlL2ZsYXQtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlattreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-flat-tree',
          templateUrl: './flat-tree.component.html',
          styleUrls: ['./flat-tree.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/load-tree/load-tree.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tree/load-tree/load-tree.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoadmoreNode, LoadmoreFlatNode, LoadmoreDatabase, LoadtreeComponent */

  /***/
  function srcAppTreeLoadTreeLoadTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadmoreNode", function () {
      return LoadmoreNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadmoreFlatNode", function () {
      return LoadmoreFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadmoreDatabase", function () {
      return LoadmoreDatabase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadtreeComponent", function () {
      return LoadtreeComponent;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function LoadtreeComponent_mat_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r752 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r752.item, " ");
      }
    }

    function LoadtreeComponent_mat_tree_node_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r755 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadtreeComponent_mat_tree_node_6_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r755);

          var node_r753 = ctx.$implicit;

          var ctx_r754 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r754.loadChildren(node_r753);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r753 = ctx.$implicit;

        var ctx_r750 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r753.filename);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r750.treeControl.isExpanded(node_r753) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r753.item, " ");
      }
    }

    function LoadtreeComponent_mat_tree_node_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r758 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadtreeComponent_mat_tree_node_7_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r758);

          var node_r756 = ctx.$implicit;

          var ctx_r757 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r757.loadMore(node_r756.loadMoreParentItem);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Load more... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var LOAD_MORE = 'LOAD_MORE';
    /** Nested node */

    var LoadmoreNode =
    /*#__PURE__*/
    function () {
      function LoadmoreNode(item) {
        var hasChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var loadMoreParentItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, LoadmoreNode);

        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(LoadmoreNode, [{
        key: "children",
        get: function get() {
          return this.childrenChange.value;
        }
      }]);

      return LoadmoreNode;
    }();
    /** Flat node with expandable and level information */


    var LoadmoreFlatNode = function LoadmoreFlatNode(item) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var expandable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var loadMoreParentItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _classCallCheck(this, LoadmoreFlatNode);

      this.item = item;
      this.level = level;
      this.expandable = expandable;
      this.loadMoreParentItem = loadMoreParentItem;
    };
    /**
     * A database that only load part of the data initially. After user clicks on the `Load more`
     * button, more data will be loaded.
     */


    var LoadmoreDatabase =
    /*#__PURE__*/
    function () {
      function LoadmoreDatabase() {
        _classCallCheck(this, LoadmoreDatabase);

        this.batchNumber = 5;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.nodeMap = new Map();
        /** The data */

        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([['Fruits', ['Apple', 'Orange', 'Banana']], ['Vegetables', ['Tomato', 'Potato', 'Onion']], ['Apple', ['Fuji', 'Macintosh']], ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']]]);
      }

      _createClass(LoadmoreDatabase, [{
        key: "initialize",
        value: function initialize() {
          var _this32 = this;

          var data = this.rootLevelNodes.map(function (name) {
            return _this32._generateNode(name);
          });
          this.dataChange.next(data);
        }
        /** Expand a node whose children are not loaded */

      }, {
        key: "loadMore",
        value: function loadMore(item) {
          var _this33 = this;

          var onlyFirstTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
          }

          var parent = this.nodeMap.get(item);
          var children = this.dataMap.get(item);

          if (onlyFirstTime && parent.children.length > 0) {
            return;
          }

          var newChildrenNumber = parent.children.length + this.batchNumber;
          var nodes = children.slice(0, newChildrenNumber).map(function (name) {
            return _this33._generateNode(name);
          });

          if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
          }

          parent.childrenChange.next(nodes);
          this.dataChange.next(this.dataChange.value);
        }
      }, {
        key: "_generateNode",
        value: function _generateNode(item) {
          if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
          }

          var result = new LoadmoreNode(item, this.dataMap.has(item));
          this.nodeMap.set(item, result);
          return result;
        }
      }]);

      return LoadmoreDatabase;
    }();

    LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) {
      return new (t || LoadmoreDatabase)();
    };

    LoadmoreDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadmoreDatabase,
      factory: LoadmoreDatabase.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadmoreDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();

    var LoadtreeComponent =
    /*#__PURE__*/
    function () {
      function LoadtreeComponent(_database) {
        var _this34 = this;

        _classCallCheck(this, LoadtreeComponent);

        this._database = _database;
        this.nodeMap = new Map();

        this.getChildren = function (node) {
          return node.childrenChange;
        };

        this.transformer = function (node, level) {
          var existingNode = _this34.nodeMap.get(node.item);

          if (existingNode) {
            return existingNode;
          }

          var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);

          _this34.nodeMap.set(node.item, newNode);

          return newNode;
        };

        this.getLevel = function (node) {
          return node.level;
        };

        this.isExpandable = function (node) {
          return node.expandable;
        };

        this.hasChild = function (_, _nodeData) {
          return _nodeData.expandable;
        };

        this.isLoadMore = function (_, _nodeData) {
          return _nodeData.item === LOAD_MORE;
        };

        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);

        _database.dataChange.subscribe(function (data) {
          _this34.dataSource.data = data;
        });

        _database.initialize();
      }
      /** Load more nodes from data source */


      _createClass(LoadtreeComponent, [{
        key: "loadMore",
        value: function loadMore(item) {
          this._database.loadMore(item);
        }
      }, {
        key: "loadChildren",
        value: function loadChildren(node) {
          this._database.loadMore(node.item, true);
        }
      }]);

      return LoadtreeComponent;
    }();

    LoadtreeComponent.ɵfac = function LoadtreeComponent_Factory(t) {
      return new (t || LoadtreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LoadmoreDatabase));
    };

    LoadtreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadtreeComponent,
      selectors: [["app-load-tree"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LoadmoreDatabase])],
      decls: 8,
      vars: 4,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]],
      template: function LoadtreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tree with partially loaded data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoadtreeComponent_mat_tree_node_5_Template, 3, 1, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoadtreeComponent_mat_tree_node_6_Template, 5, 3, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoadtreeComponent_mat_tree_node_7_Template, 3, 0, "mat-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.isLoadMore);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvbG9hZC10cmVlL2xvYWQtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadtreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-load-tree',
          templateUrl: './load-tree.component.html',
          styleUrls: ['./load-tree.component.scss'],
          providers: [LoadmoreDatabase]
        }]
      }], function () {
        return [{
          type: LoadmoreDatabase
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/nested-tree/nested-tree.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tree/nested-tree/nested-tree.component.ts ***!
    \***********************************************************/

  /*! exports provided: NestedtreeComponent */

  /***/
  function srcAppTreeNestedTreeNestedTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedtreeComponent", function () {
      return NestedtreeComponent;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NestedtreeComponent_mat_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r761 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r761.name, " ");
      }
    }

    function NestedtreeComponent_mat_nested_tree_node_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nested-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](8, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r762 = ctx.$implicit;

        var ctx_r760 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r762.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r760.treeControl.isExpanded(node_r762) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r762.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-tree-invisible", !ctx_r760.treeControl.isExpanded(node_r762));
      }
    }

    var TREE_DATA = [{
      name: 'Fruit',
      children: [{
        name: 'Apple'
      }, {
        name: 'Banana'
      }, {
        name: 'Fruit loops'
      }]
    }, {
      name: 'Vegetables',
      children: [{
        name: 'Green',
        children: [{
          name: 'Broccoli'
        }, {
          name: 'Brussels sprouts'
        }]
      }, {
        name: 'Orange',
        children: [{
          name: 'Pumpkins'
        }, {
          name: 'Carrots'
        }]
      }]
    }];

    var NestedtreeComponent = function NestedtreeComponent() {
      _classCallCheck(this, NestedtreeComponent);

      this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"](function (node) {
        return node.children;
      });
      this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();

      this.hasChild = function (_, node) {
        return !!node.children && node.children.length > 0;
      };

      this.dataSource.data = TREE_DATA;
    };

    NestedtreeComponent.ɵfac = function NestedtreeComponent_Factory(t) {
      return new (t || NestedtreeComponent)();
    };

    NestedtreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NestedtreeComponent,
      selectors: [["app-nested-tree"]],
      decls: 7,
      vars: 3,
      consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]],
      template: function NestedtreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tree with nested nodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NestedtreeComponent_mat_tree_node_5_Template, 4, 1, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NestedtreeComponent_mat_nested_tree_node_6_Template, 9, 5, "mat-nested-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatNestedTreeNode"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeOutlet"]],
      styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none; }\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS9uZXN0ZWQtdHJlZS9EOlxcU291cmNlQ29kZVxcUHJvamVjdHNcXE1pbmluZ1xcbWF0ZXJpYWxwcm8tYW5ndWxhcjlcXHBhY2thZ2VcXG1haW4vc3JjXFxhcHBcXHRyZWVcXG5lc3RlZC10cmVlXFxuZXN0ZWQtdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJlZS9uZXN0ZWQtdHJlZS9uZXN0ZWQtdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlIHVsLFxyXG4uZXhhbXBsZS10cmVlIGxpIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NestedtreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-nested-tree',
          templateUrl: './nested-tree.component.html',
          styleUrls: ['./nested-tree.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/tree.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tree/tree.module.ts ***!
    \*************************************/

  /*! exports provided: TreeModule */

  /***/
  function srcAppTreeTreeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeModule", function () {
      return TreeModule;
    });
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../demo-material-module */
    "./src/app/demo-material-module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _tree_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tree.routing */
    "./src/app/tree/tree.routing.ts");
    /* harmony import */


    var _check_tree_check_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./check-tree/check-tree.component */
    "./src/app/tree/check-tree/check-tree.component.ts");
    /* harmony import */


    var _dynamic_tree_dynamic_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dynamic-tree/dynamic-tree.component */
    "./src/app/tree/dynamic-tree/dynamic-tree.component.ts");
    /* harmony import */


    var _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./flat-tree/flat-tree.component */
    "./src/app/tree/flat-tree/flat-tree.component.ts");
    /* harmony import */


    var _load_tree_load_tree_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./load-tree/load-tree.component */
    "./src/app/tree/load-tree/load-tree.component.ts");
    /* harmony import */


    var _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./nested-tree/nested-tree.component */
    "./src/app/tree/nested-tree/nested-tree.component.ts");

    var TreeModule = function TreeModule() {
      _classCallCheck(this, TreeModule);
    };

    TreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TreeModule
    });
    TreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TreeModule_Factory(t) {
        return new (t || TreeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tree_routing__WEBPACK_IMPORTED_MODULE_8__["TreeRoutes"]), _demo_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeModule, {
        declarations: [_check_tree_check_tree_component__WEBPACK_IMPORTED_MODULE_9__["ChecktreeComponent"], _dynamic_tree_dynamic_tree_component__WEBPACK_IMPORTED_MODULE_10__["DynamictreeComponent"], _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_11__["FlattreeComponent"], _load_tree_load_tree_component__WEBPACK_IMPORTED_MODULE_12__["LoadtreeComponent"], _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_13__["NestedtreeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tree_routing__WEBPACK_IMPORTED_MODULE_8__["TreeRoutes"]), _demo_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          declarations: [_check_tree_check_tree_component__WEBPACK_IMPORTED_MODULE_9__["ChecktreeComponent"], _dynamic_tree_dynamic_tree_component__WEBPACK_IMPORTED_MODULE_10__["DynamictreeComponent"], _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_11__["FlattreeComponent"], _load_tree_load_tree_component__WEBPACK_IMPORTED_MODULE_12__["LoadtreeComponent"], _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_13__["NestedtreeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/tree.routing.ts":
  /*!**************************************!*\
    !*** ./src/app/tree/tree.routing.ts ***!
    \**************************************/

  /*! exports provided: TreeRoutes */

  /***/
  function srcAppTreeTreeRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeRoutes", function () {
      return TreeRoutes;
    });
    /* harmony import */


    var _check_tree_check_tree_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./check-tree/check-tree.component */
    "./src/app/tree/check-tree/check-tree.component.ts");
    /* harmony import */


    var _dynamic_tree_dynamic_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dynamic-tree/dynamic-tree.component */
    "./src/app/tree/dynamic-tree/dynamic-tree.component.ts");
    /* harmony import */


    var _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./flat-tree/flat-tree.component */
    "./src/app/tree/flat-tree/flat-tree.component.ts");
    /* harmony import */


    var _load_tree_load_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./load-tree/load-tree.component */
    "./src/app/tree/load-tree/load-tree.component.ts");
    /* harmony import */


    var _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nested-tree/nested-tree.component */
    "./src/app/tree/nested-tree/nested-tree.component.ts");

    var TreeRoutes = [{
      path: '',
      children: [{
        path: 'check-tree',
        component: _check_tree_check_tree_component__WEBPACK_IMPORTED_MODULE_0__["ChecktreeComponent"],
        data: {
          title: 'Checkbox with tree',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Checkbox with tree'
          }]
        }
      }, {
        path: 'dynamic-tree',
        component: _dynamic_tree_dynamic_tree_component__WEBPACK_IMPORTED_MODULE_1__["DynamictreeComponent"],
        data: {
          title: 'Dynamic Data with tree',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Dynamic Data with tree'
          }]
        }
      }, {
        path: 'flat-tree',
        component: _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_2__["FlattreeComponent"],
        data: {
          title: 'Flat Data with Tree',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Flat Data with Tree'
          }]
        }
      }, {
        path: 'load-tree',
        component: _load_tree_load_tree_component__WEBPACK_IMPORTED_MODULE_3__["LoadtreeComponent"],
        data: {
          title: 'Loaded Data with Tree',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Loaded Data with Tree'
          }]
        }
      }, {
        path: 'nested-tree',
        component: _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_4__["NestedtreeComponent"],
        data: {
          title: 'Nested Tree',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Nested Tree'
          }]
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=tree-tree-module-es5.js.map