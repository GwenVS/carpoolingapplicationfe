(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guarded-routes-guarded-routes-module-ngfactory~material-widgets-material-widgets-module-ngfactory~ta~d04c99ff"],{

/***/ "./node_modules/@angular/cdk/esm5/accordion.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/accordion.es5.js ***!
  \*********************************************************/
/*! exports provided: CdkAccordionItem, CdkAccordion, CdkAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 */
var /** @type {?} */ nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
var CdkAccordion = /** @class */ (function () {
    function CdkAccordion() {
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = "cdk-accordion-" + nextId++;
        this._multi = false;
    }
    Object.defineProperty(CdkAccordion.prototype, "multi", {
        get: /**
         * Whether the accordion should allow multiple expanded accordion items simultaneously.
         * @return {?}
         */
        function () { return this._multi; },
        set: /**
         * @param {?} multi
         * @return {?}
         */
        function (multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(multi); },
        enumerable: true,
        configurable: true
    });
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    CdkAccordion.prototype.openAll = /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    function () {
        this._openCloseAll(true);
    };
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    CdkAccordion.prototype.closeAll = /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    function () {
        this._openCloseAll(false);
    };
    /**
     * @param {?} expanded
     * @return {?}
     */
    CdkAccordion.prototype._openCloseAll = /**
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    };
    CdkAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-accordion, [cdkAccordion]',
                    exportAs: 'cdkAccordion',
                },] },
    ];
    /** @nocollapse */
    CdkAccordion.propDecorators = {
        "multi": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CdkAccordion;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 */
var /** @type {?} */ nextId$1 = 0;
var ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
var CdkAccordionItem = /** @class */ (function () {
    function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */
        this.id = "cdk-accordion-child-" + nextId$1++;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = function () { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen(function (id, accordionId) {
                if (_this.accordion && !_this.accordion.multi &&
                    _this.accordion.id === accordionId && _this.id !== id) {
                    _this.expanded = false;
                }
            });
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
        get: /**
         * Whether the AccordionItem is expanded.
         * @return {?}
         */
        function () { return this._expanded; },
        set: /**
         * @param {?} expanded
         * @return {?}
         */
        function (expanded) {
            expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(expanded);
            // Only emit events and update the internal value if the value changes.
            if (this._expanded !== expanded) {
                this._expanded = expanded;
                this.expandedChange.emit(expanded);
                if (expanded) {
                    this.opened.emit();
                    /**
                     * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                     * the name value is the id of the accordion.
                     */
                    var /** @type {?} */ accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
                // Ensures that the animation will run when the value is set outside of an `@Input`.
                // This includes cases like the open, close and toggle methods.
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
        get: /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(disabled); },
        enumerable: true,
        configurable: true
    });
    /** Emits an event for the accordion item being destroyed. */
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    CdkAccordionItem.prototype.ngOnDestroy = /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    function () {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    };
    /** Toggles the expanded state of the accordion item. */
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    CdkAccordionItem.prototype.toggle = /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    };
    /** Sets the expanded state of the accordion item to false. */
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    CdkAccordionItem.prototype.close = /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = false;
        }
    };
    /** Sets the expanded state of the accordion item to true. */
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    CdkAccordionItem.prototype.open = /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = true;
        }
    };
    /**
     * @return {?}
     */
    CdkAccordionItem.prototype._subscribeToOpenCloseAllActions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.accordion._openCloseAllActions.subscribe(function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this.disabled) {
                _this.expanded = expanded;
            }
        });
    };
    CdkAccordionItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-accordion-item, [cdkAccordionItem]',
                    exportAs: 'cdkAccordionItem',
                    providers: [
                        // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                        // to the same accordion.
                        { provide: CdkAccordion, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    CdkAccordionItem.ctorParameters = function () { return [
        { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], },
    ]; };
    CdkAccordionItem.propDecorators = {
        "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "destroyed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "expandedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "expanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CdkAccordionItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CdkAccordionModule = /** @class */ (function () {
    function CdkAccordionModule() {
    }
    CdkAccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [CdkAccordion, CdkAccordionItem],
                    declarations: [CdkAccordion, CdkAccordionItem],
                },] },
    ];
    return CdkAccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=accordion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/stepper.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/stepper.es5.js ***!
  \*******************************************************/
/*! exports provided: StepperSelectionEvent, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CdkStepLabel = /** @class */ (function () {
    function CdkStepLabel(template) {
        this.template = template;
    }
    CdkStepLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepLabel]',
                },] },
    ];
    /** @nocollapse */
    CdkStepLabel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return CdkStepLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Used to generate unique ID for each stepper component.
 */
var /** @type {?} */ nextId = 0;
/**
 * Change event emitted on selection changes.
 */
var  /**
 * Change event emitted on selection changes.
 */
StepperSelectionEvent = /** @class */ (function () {
    function StepperSelectionEvent() {
    }
    return StepperSelectionEvent;
}());
var CdkStep = /** @class */ (function () {
    function CdkStep(_stepper) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._customCompleted = null;
    }
    Object.defineProperty(CdkStep.prototype, "editable", {
        get: /**
         * Whether the user can return to this step once it has been marked as complted.
         * @return {?}
         */
        function () { return this._editable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "optional", {
        get: /**
         * Whether the completion of step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "completed", {
        get: /**
         * Whether step is marked as completed.
         * @return {?}
         */
        function () {
            return this._customCompleted == null ? this._defaultCompleted : this._customCompleted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customCompleted = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "_defaultCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        },
        enumerable: true,
        configurable: true
    });
    /** Selects this step component. */
    /**
     * Selects this step component.
     * @return {?}
     */
    CdkStep.prototype.select = /**
     * Selects this step component.
     * @return {?}
     */
    function () {
        this._stepper.selected = this;
    };
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    CdkStep.prototype.reset = /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    function () {
        this.interacted = false;
        if (this._customCompleted != null) {
            this._customCompleted = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    /**
     * @return {?}
     */
    CdkStep.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    };
    CdkStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-step',
                    exportAs: 'cdkStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkStepper; }),] },] },
    ]; };
    CdkStep.propDecorators = {
        "stepLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel,] },],
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
        "stepControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "optional": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "completed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CdkStep;
}());
var CdkStepper = /** @class */ (function () {
    function CdkStepper(_dir, _changeDetectorRef) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
    }
    Object.defineProperty(CdkStepper.prototype, "linear", {
        get: /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */
        function () { return this._linear; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
        get: /**
         * The index of the selected step.
         * @return {?}
         */
        function () { return this._selectedIndex; },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._steps) {
                // Ensure that the index can't be out of bounds.
                if (index < 0 || index > this._steps.length - 1) {
                    throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                }
                if (this._selectedIndex != index &&
                    !this._anyControlsInvalidOrPending(index) &&
                    (index >= this._selectedIndex || this._steps.toArray()[index].editable)) {
                    this._updateSelectedItemIndex(index);
                }
            }
            else {
                this._selectedIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selected", {
        get: /**
         * The step that is selected.
         * @return {?}
         */
        function () {
            // @deletion-target 7.0.0 Change return type to `CdkStep | undefined`.
            return this._steps ? this._steps.toArray()[this.selectedIndex] : /** @type {?} */ ((undefined));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this.selectedIndex = this._steps ? this._steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? /** @type {?} */ (this._dir.change) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function (direction) { return _this._keyManager.withHorizontalOrientation(direction); });
        this._keyManager.updateActiveItemIndex(this._selectedIndex);
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Selects and focuses the next step in list. */
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    CdkStepper.prototype.next = /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this._steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    CdkStepper.prototype.previous = /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    CdkStepper.prototype.reset = /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    function () {
        this._updateSelectedItemIndex(0);
        this._steps.forEach(function (step) { return step.reset(); });
        this._stateChanged();
    };
    /** Returns a unique id for each step label element. */
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepLabelId = /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-label-" + this._groupId + "-" + i;
    };
    /** Returns unique id for each step content element. */
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepContentId = /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-content-" + this._groupId + "-" + i;
    };
    /** Marks the component to be change detected. */
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    CdkStepper.prototype._stateChanged = /**
     * Marks the component to be change detected.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /** Returns position state of the step with the given index. */
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getAnimationDirection = /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    };
    /** Returns the type of icon to be displayed. */
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getIndicatorType = /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ step = this._steps.toArray()[index];
        if (!step.completed || this._selectedIndex == index) {
            return 'number';
        }
        else {
            return step.editable ? 'edit' : 'done';
        }
    };
    /** Returns the index of the currently-focused step header. */
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    CdkStepper.prototype._getFocusIndex = /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    function () {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    };
    /**
     * @param {?} newIndex
     * @return {?}
     */
    CdkStepper.prototype._updateSelectedItemIndex = /**
     * @param {?} newIndex
     * @return {?}
     */
    function (newIndex) {
        var /** @type {?} */ stepsArray = this._steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        this._keyManager.updateActiveItemIndex(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CdkStepper.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        if (this._keyManager.activeItemIndex != null && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = this._keyManager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            this._keyManager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else {
            this._keyManager.onKeydown(event);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._anyControlsInvalidOrPending = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ steps = this._steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some(function (step) {
                var /** @type {?} */ control = step.stepControl;
                var /** @type {?} */ isIncomplete = control ?
                    (control.invalid || control.pending || !step.interacted) :
                    !step.completed;
                return isIncomplete && !step.optional;
            });
        }
        return false;
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype._layoutDirection = /**
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    CdkStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepper]',
                    exportAs: 'cdkStepper',
                },] },
    ];
    /** @nocollapse */
    CdkStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    CdkStepper.propDecorators = {
        "_steps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] },],
        "linear": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CdkStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    CdkStepperNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper, },
    ]; };
    CdkStepperNext.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CdkStepperNext;
}());
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    CdkStepperPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper, },
    ]; };
    CdkStepperPrevious.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CdkStepperPrevious;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
    }
    CdkStepperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                    exports: [CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
                    declarations: [CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
                },] },
    ];
    return CdkStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/autocomplete.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/autocomplete.es5.js ***!
  \*****************************************************************/
/*! exports provided: MatAutocompleteSelectedEvent, MatAutocompleteBase, _MatAutocompleteMixinBase, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocomplete, MatAutocompleteModule, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, getMatAutocompleteMissingPanelError, MatAutocompleteTrigger, ɵa28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return MatAutocompleteSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteBase", function() { return MatAutocompleteBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteMixinBase", function() { return _MatAutocompleteMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return MatAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return MatAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return AUTOCOMPLETE_OPTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return AUTOCOMPLETE_PANEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return MAT_AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return getMatAutocompleteMissingPanelError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return MatAutocompleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa28", function() { return MatAutocompleteOrigin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var /** @type {?} */ _uniqueAutocompleteIdCounter = 0;
/**
 * Event object that is emitted when an autocomplete option is selected.
 */
var  /**
 * Event object that is emitted when an autocomplete option is selected.
 */
MatAutocompleteSelectedEvent = /** @class */ (function () {
    function MatAutocompleteSelectedEvent(source, option) {
        this.source = source;
        this.option = option;
    }
    return MatAutocompleteSelectedEvent;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatAutocompleteBase = /** @class */ (function () {
    function MatAutocompleteBase() {
    }
    return MatAutocompleteBase;
}());
var /** @type {?} */ _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatAutocompleteBase);
/**
 * Injection token to be used to override the default options for `mat-autocomplete`.
 */
var /** @type {?} */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
var MatAutocomplete = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatAutocomplete, _super);
    function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */
        _this.showPanel = false;
        _this._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */
        _this.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */
        _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */
        _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */
        _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */
        _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
        _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this;
    }
    Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
        /** Whether the autocomplete panel is open. */
        get: /**
         * Whether the autocomplete panel is open.
         * @return {?}
         */
        function () { return this._isOpen && this.showPanel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
        get: /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */
        function () { return this._autoActiveFirstOption; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "classList", {
        set: /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value && value.length) {
                value.split(' ').forEach(function (className) { return _this._classList[className.trim()] = true; });
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAutocomplete.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["ActiveDescendantKeyManager"](this.options).withWrap();
        // Set the initial visibility state.
        this._setVisibility();
    };
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    MatAutocomplete.prototype._setScrollTop = /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    };
    /** Returns the panel's scrollTop. */
    /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    MatAutocomplete.prototype._getScrollTop = /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    function () {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    };
    /** Panel should hide itself when the option list is empty. */
    /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    MatAutocomplete.prototype._setVisibility = /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this._classList['mat-autocomplete-visible'] = this.showPanel;
        this._classList['mat-autocomplete-hidden'] = !this.showPanel;
        this._changeDetectorRef.markForCheck();
    };
    /** Emits the `select` event. */
    /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    MatAutocomplete.prototype._emitSelectEvent = /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var /** @type {?} */ event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    };
    MatAutocomplete.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-autocomplete',
                    template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
                    styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}@media screen and (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    exportAs: 'matAutocomplete',
                    inputs: ['disableRipple'],
                    host: {
                        'class': 'mat-autocomplete'
                    },
                    providers: [
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatAutocomplete }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatAutocomplete.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] },] },
    ]; };
    MatAutocomplete.propDecorators = {
        "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
        "panel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['panel',] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOption"], { descendants: true },] },],
        "optionGroups": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptgroup"],] },],
        "displayWith": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "autoActiveFirstOption": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "optionSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "classList": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] },],
    };
    return MatAutocomplete;
}(_MatAutocompleteMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
var MatAutocompleteOrigin = /** @class */ (function () {
    function MatAutocompleteOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    MatAutocompleteOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matAutocompleteOrigin]',
                    exportAs: 'matAutocompleteOrigin',
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    ]; };
    return MatAutocompleteOrigin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The height of each autocomplete option.
 */
var /** @type {?} */ AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 */
var /** @type {?} */ AUTOCOMPLETE_PANEL_HEIGHT = 256;
/**
 * Injection token that determines the scroll handling while the autocomplete panel is open.
 */
var /** @type {?} */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-autocomplete-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * \@docs-private
 */
var /** @type {?} */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MatAutocompleteTrigger; }),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @return {?}
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
var MatAutocompleteTrigger = /** @class */ (function () {
    function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, _scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this = this;
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */
        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */
        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
        /**
         * Stream of keyboard events that can close the panel.
         */
        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = function () { };
        /**
         * `View -> model callback called when autocomplete has been touched`
         */
        this._onTouched = function () { };
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */
        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */
        this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(function () {
            if (_this.autocomplete && _this.autocomplete.options) {
                return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, _this.autocomplete.options.map(function (option) { return option.onSelectionChange; }));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return _this._zone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () { return _this.optionSelections; }));
        });
    }
    Object.defineProperty(MatAutocompleteTrigger.prototype, "autocompleteDisabled", {
        get: /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         * @return {?}
         */
        function () { return this._autocompleteDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelOpen", {
        /** Whether or not the autocomplete panel is open. */
        get: /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */
        function () {
            return this._overlayAttached && this.autocomplete.showPanel;
        },
        enumerable: true,
        configurable: true
    });
    /** Opens the autocomplete suggestion panel. */
    /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.openPanel = /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._attachOverlay();
        this._floatLabel();
    };
    /** Closes the autocomplete suggestion panel. */
    /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.closePanel = /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._resetLabel();
        if (!this._overlayAttached) {
            return;
        }
        if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
        }
        this.autocomplete._isOpen = this._overlayAttached = false;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._closingActionsSubscription.unsubscribe();
        }
        // Note that in some cases this can end up being called after the component is destroyed.
        // Add a check to ensure that we don't try to run change detection on a destroyed view.
        if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
        }
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelClosingActions", {
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         */
        get: /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */
        function () {
            var _this = this;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._overlayAttached; })), this._closeKeyEventStream, this._outsideClickStream, this._overlayRef ?
                this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._overlayAttached; })) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])()).pipe(
            // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (event) { return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionSelectionChange"] ? event : null; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocompleteTrigger.prototype, "activeOption", {
        /** The currently active option, coerced to MatOption type. */
        get: /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */
        function () {
            if (this.autocomplete && this.autocomplete._keyManager) {
                return this.autocomplete._keyManager.activeItem;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocompleteTrigger.prototype, "_outsideClickStream", {
        get: /**
         * Stream of clicks outside of the autocomplete panel.
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._document) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'touchend'))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
                var /** @type {?} */ clickTarget = /** @type {?} */ (event.target);
                var /** @type {?} */ formField = _this._formField ?
                    _this._formField._elementRef.nativeElement : null;
                return _this._overlayAttached &&
                    clickTarget !== _this._element.nativeElement &&
                    (!formField || !formField.contains(clickTarget)) &&
                    (!!_this._overlayRef && !_this._overlayRef.overlayElement.contains(clickTarget));
            }));
        },
        enumerable: true,
        configurable: true
    });
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        Promise.resolve(null).then(function () { return _this._setTriggerValue(value); });
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"]) {
            event.preventDefault();
        }
        // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
        if (this.panelOpen && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"] || (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] && event.altKey))) {
            this._resetActiveItem();
            this._closeKeyEventStream.next();
            event.stopPropagation();
        }
        else if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else {
            var /** @type {?} */ prevActiveItem = this.autocomplete._keyManager.activeItem;
            var /** @type {?} */ isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"];
            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        var /** @type {?} */ value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._previousValue !== value && document.activeElement === event.target) {
            this._previousValue = value;
            this._onChange(value);
            if (this._canOpen()) {
                this.openPanel();
            }
        }
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    };
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._floatLabel = /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    function (shouldAnimate) {
        if (shouldAnimate === void 0) { shouldAnimate = false; }
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    };
    /**
     * If the label has been manually elevated, return it to its normal state.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetLabel = /**
     * If the label has been manually elevated, return it to its normal state.
     * @return {?}
     */
    function () {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    };
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._scrollToOption = /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.autocomplete._keyManager.activeItemIndex || 0;
        var /** @type {?} */ labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);
        var /** @type {?} */ newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
        this.autocomplete._setScrollTop(newScrollPosition);
    };
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._subscribeToClosingActions = /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1));
        var /** @type {?} */ optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return _this._positionStrategy.reapplyLastPosition(); }), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0));
        // When the zone is stable initially, and when the option list changes...
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () {
            _this._resetActiveItem();
            _this.autocomplete._setVisibility();
            if (_this.panelOpen) {
                /** @type {?} */ ((_this._overlayRef)).updatePosition();
            }
            return _this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function (event) { return _this._setValueAndClose(event); });
    };
    /**
     * Destroys the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._destroyPanel = /**
     * Destroys the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setTriggerValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        var /** @type {?} */ inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setValueAndClose = /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._clearPreviousSelectedOption = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this.autocomplete.options.forEach(function (option) {
            if (option != skip && option.selected) {
                option.deselect();
            }
        });
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._attachOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
        }
        if (!this._overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            this._overlayRef = this._overlay.create(this._getOverlayConfig());
            if (this._viewportRuler) {
                this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                    if (_this.panelOpen && _this._overlayRef) {
                        _this._overlayRef.updateSize({ width: _this._getHostWidth() });
                    }
                });
            }
        }
        else {
            // Update the panel width and direction, in case anything has changed.
            this._overlayRef.updateSize({ width: this._getHostWidth() });
        }
        if (this._overlayRef && !this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        var /** @type {?} */ wasOpen = this.panelOpen;
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._overlayAttached = true;
        // We need to do an extra `panelOpen` check in here, because the
        // autocomplete won't be shown if there are no options.
        if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
        }
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getHostWidth(),
            direction: this._dir
        });
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayPosition = /**
     * @return {?}
     */
    function () {
        this._positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this._getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions([
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' }
        ]);
        return this._positionStrategy;
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getConnectedElement = /**
     * @return {?}
     */
    function () {
        if (this.connectedTo) {
            return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    };
    /**
     * Returns the width of the input element, so the panel width can match it.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getHostWidth = /**
     * Returns the width of the input element, so the panel width can match it.
     * @return {?}
     */
    function () {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetActiveItem = /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @return {?}
     */
    function () {
        this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
    };
    /**
     * Determines whether the panel can be opened.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._canOpen = /**
     * Determines whether the panel can be opened.
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    };
    MatAutocompleteTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "input[matAutocomplete], textarea[matAutocomplete]",
                    host: {
                        '[attr.autocomplete]': 'autocompleteAttribute',
                        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                        '[attr.aria-activedescendant]': 'activeOption?.id',
                        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                        '[attr.aria-owns]': 'autocompleteDisabled ? null : autocomplete?.id',
                        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                        // a little earlier. This avoids issues where IE delays the focusing of the input.
                        '(focusin)': '_handleFocus()',
                        '(blur)': '_onTouched()',
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeydown($event)',
                    },
                    exportAs: 'matAutocompleteTrigger',
                    providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteTrigger.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] },] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], },
    ]; };
    MatAutocompleteTrigger.propDecorators = {
        "autocomplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matAutocomplete',] },],
        "connectedTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matAutocompleteConnectedTo',] },],
        "autocompleteAttribute": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['autocomplete',] },],
        "autocompleteDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matAutocompleteDisabled',] },],
    };
    return MatAutocompleteTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatAutocompleteModule = /** @class */ (function () {
    function MatAutocompleteModule() {
    }
    MatAutocompleteModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
                    exports: [
                        MatAutocomplete,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                        MatAutocompleteTrigger,
                        MatAutocompleteOrigin,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]
                    ],
                    declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
                },] },
    ];
    return MatAutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=autocomplete.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/datepicker.es5.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/datepicker.es5.js ***!
  \***************************************************************/
/*! exports provided: MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContentBase, _MatDatepickerContentMixinBase, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView, ɵa34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return MatDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return MatCalendarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return MatCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return MatCalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return MatCalendarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContentBase", function() { return MatDatepickerContentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDatepickerContentMixinBase", function() { return _MatDatepickerContentMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return MatDatepickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return MatDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return matDatepickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return MAT_DATEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return MAT_DATEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return MatDatepickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return MatDatepickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return MatDatepickerIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return MatDatepickerToggleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return MatDatepickerToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return MatMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return MatYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa34", function() { return MatMultiYearView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error("MatDatepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " +
        "custom implementation.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Datepicker data that requires internationalization.
 */
var MatDatepickerIntl = /** @class */ (function () {
    function MatDatepickerIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * A label for the calendar popup (used by screen readers).
         */
        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */
        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */
        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */
        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    MatDatepickerIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatDatepickerIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
    return MatDatepickerIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
var  /**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
MatCalendarCell = /** @class */ (function () {
    function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MatCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
var MatCalendarBody = /** @class */ (function () {
    function MatCalendarBody(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * Whether to allow selection of disabled cells.
         */
        this.allowDisabledSelection = false;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    MatCalendarBody.prototype._cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MatCalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: /**
         * The number of blank cells to put at the beginning for the first row.
         * @return {?}
         */
        function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    MatCalendarBody.prototype._isActiveCell = /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        var /** @type {?} */ cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatCalendarBody.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active').focus();
            });
        });
    };
    MatCalendarBody.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: '[mat-calendar-body]',
                    template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                    styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}@media screen and (-ms-high-contrast:active){.mat-calendar-body-cell-content{border:none}}@media screen and (-ms-high-contrast:active){.mat-calendar-body-selected,.mat-datepicker-popup{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                    host: {
                        'class': 'mat-calendar-body',
                        'role': 'grid',
                        'attr.aria-readonly': 'true'
                    },
                    exportAs: 'matCalendarBody',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendarBody.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    MatCalendarBody.propDecorators = {
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "todayValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelMinRequiredCells": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numCols": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "allowDisabledSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeCell": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cellAspectRatio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MatCalendarBody;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 * @template D
 */
var MatMonthView = /** @class */ (function () {
    function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        var /** @type {?} */ firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        var /** @type {?} */ narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        var /** @type {?} */ longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        var /** @type {?} */ weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMonthView.prototype, "activeDate", {
        get: /**
         * The date to display in this month view (everything other than the month and year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            var /** @type {?} */ validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedDate = this._getDateInCurrentMonth(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMonthView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._dateSelected = /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this._selectedDate != date) {
            var /** @type {?} */ selectedYear = this._dateAdapter.getYear(this.activeDate);
            var /** @type {?} */ selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            var /** @type {?} */ selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit();
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MatMonthView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        var /** @type {?} */ oldActiveDate = this._activeDate;
        var /** @type {?} */ isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected(this._dateAdapter.getDate(this._activeDate));
                    this._userSelection.emit();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Initializes this month view. */
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatMonthView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatMonthView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /**
     * Creates MatCalendarCells for the dates in this month.
     * @return {?}
     */
    MatMonthView.prototype._createWeekCells = /**
     * Creates MatCalendarCells for the dates in this month.
     * @return {?}
     */
    function () {
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        var /** @type {?} */ dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (var /** @type {?} */ i = 0, /** @type {?} */ cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            var /** @type {?} */ date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            var /** @type {?} */ enabled = this._shouldEnableDate(date);
            var /** @type {?} */ ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Date filter for the month
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._shouldEnableDate = /**
     * Date filter for the month
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._getDateInCurrentMonth = /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    };
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    MatMonthView.prototype._hasSameMonthAndYear = /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    function (d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMonthView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    MatMonthView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-month-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matMonthView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatMonthView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] },] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    MatMonthView.propDecorators = {
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_userSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_matCalendarBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody,] },],
    };
    return MatMonthView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ yearsPerPage = 24;
var /** @type {?} */ yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * \@docs-private
 * @template D
 */
var MatMultiYearView = /** @class */ (function () {
    function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new year is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMultiYearView.prototype, "activeDate", {
        get: /**
         * The date to display in this multi-year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            var /** @type {?} */ validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (Math.floor(this._dateAdapter.getYear(oldActiveDate) / yearsPerPage) !=
                Math.floor(this._dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMultiYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Initializes this multi-year view. */
    /**
     * Initializes this multi-year view.
     * @return {?}
     */
    MatMultiYearView.prototype._init = /**
     * Initializes this multi-year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        var /** @type {?} */ activeYear = this._dateAdapter.getYear(this._activeDate);
        var /** @type {?} */ activeOffset = activeYear % yearsPerPage;
        this._years = [];
        for (var /** @type {?} */ i = 0, /** @type {?} */ row = []; i < yearsPerPage; i++) {
            row.push(activeYear - activeOffset + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map(function (year) { return _this._createCellForYear(year); }));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /** Handles when a new year is selected. */
    /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._yearSelected = /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        var /** @type {?} */ month = this._dateAdapter.getMonth(this.activeDate);
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    MatMultiYearView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        var /** @type {?} */ oldActiveDate = this._activeDate;
        var /** @type {?} */ isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -this._dateAdapter.getYear(this._activeDate) % yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this._dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                this._yearSelected(this._dateAdapter.getYear(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    MatMultiYearView.prototype._getActiveCell = /**
     * @return {?}
     */
    function () {
        return this._dateAdapter.getYear(this.activeDate) % yearsPerPage;
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatMultiYearView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /**
     * Creates an MatCalendarCell for the given year.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._createCellForYear = /**
     * Creates an MatCalendarCell for the given year.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        var /** @type {?} */ yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
    };
    /**
     * Whether the given year is enabled.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._shouldEnableYear = /**
     * Whether the given year is enabled.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        var /** @type {?} */ firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (var /** @type {?} */ date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMultiYearView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    MatMultiYearView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatMultiYearView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-multi-year-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body allowDisabledSelection=\"true\" [rows]=\"_years\" [todayValue]=\"_todayYear\" [selectedValue]=\"_selectedYear\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_getActiveCell()\" (selectedValueChange)=\"_yearSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matMultiYearView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatMultiYearView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    MatMultiYearView.propDecorators = {
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "yearSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_matCalendarBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody,] },],
    };
    return MatMultiYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * An internal component used to display a single year in the datepicker.
 * \@docs-private
 * @template D
 */
var MatYearView = /** @class */ (function () {
    function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatYearView.prototype, "activeDate", {
        get: /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            var /** @type {?} */ validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._monthSelected = /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        var /** @type {?} */ normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Handles keydown events on the calendar body when calendar is in year view. */
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    MatYearView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        var /** @type {?} */ oldActiveDate = this._activeDate;
        var /** @type {?} */ isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                this._monthSelected(this._dateAdapter.getMonth(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Initializes this year view. */
    /**
     * Initializes this year view.
     * @return {?}
     */
    MatYearView.prototype._init = /**
     * Initializes this year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        var /** @type {?} */ monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
            return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); });
        });
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatYearView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    MatYearView.prototype._getMonthInCurrentYear = /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    };
    /**
     * Creates an MatCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MatYearView.prototype._createCellForMonth = /**
     * Creates an MatCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    function (month, monthName) {
        var /** @type {?} */ ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
    };
    /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._shouldEnableMonth = /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        var /** @type {?} */ activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (var /** @type {?} */ date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthAfterMaxDate = /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.maxDate) {
            var /** @type {?} */ maxYear = this._dateAdapter.getYear(this.maxDate);
            var /** @type {?} */ maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthBeforeMinDate = /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.minDate) {
            var /** @type {?} */ minYear = this._dateAdapter.getYear(this.minDate);
            var /** @type {?} */ minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatYearView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    MatYearView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatYearView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-year-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body allowDisabledSelection=\"true\" [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matYearView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatYearView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] },] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    MatYearView.propDecorators = {
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "monthSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_matCalendarBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody,] },],
    };
    return MatYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default header for MatCalendar
 * @template D
 */
var MatCalendarHeader = /** @class */ (function () {
    function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatCalendarHeader.prototype, "periodButtonText", {
        /** The label for the current calendar view. */
        get: /**
         * The label for the current calendar view.
         * @return {?}
         */
        function () {
            if (this.calendar.currentView == 'month') {
                return this._dateAdapter
                    .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            }
            if (this.calendar.currentView == 'year') {
                return this._dateAdapter.getYearName(this.calendar.activeDate);
            }
            var /** @type {?} */ activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
            var /** @type {?} */ firstYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear - activeYear % 24, 0, 1));
            var /** @type {?} */ lastYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear + yearsPerPage - 1 - activeYear % 24, 0, 1));
            return firstYearInView + " \u2013 " + lastYearInView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "periodButtonLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.calendar.currentView == 'month' ?
                this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "prevButtonLabel", {
        /** The label for the the previous button. */
        get: /**
         * The label for the the previous button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.prevMonthLabel,
                'year': this._intl.prevYearLabel,
                'multi-year': this._intl.prevMultiYearLabel
            }[this.calendar.currentView];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "nextButtonLabel", {
        /** The label for the the next button. */
        get: /**
         * The label for the the next button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.nextMonthLabel,
                'year': this._intl.nextYearLabel,
                'multi-year': this._intl.nextMultiYearLabel
            }[this.calendar.currentView];
        },
        enumerable: true,
        configurable: true
    });
    /** Handles user clicks on the period label. */
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    MatCalendarHeader.prototype.currentPeriodClicked = /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    function () {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    };
    /** Handles user clicks on the previous button. */
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    MatCalendarHeader.prototype.previousClicked = /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    function () {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    };
    /** Handles user clicks on the next button. */
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    MatCalendarHeader.prototype.nextClicked = /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    function () {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    };
    /** Whether the previous period button is enabled. */
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    MatCalendarHeader.prototype.previousEnabled = /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    function () {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    };
    /** Whether the next period button is enabled. */
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    MatCalendarHeader.prototype.nextEnabled = /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    function () {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    };
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    MatCalendarHeader.prototype._isSameView = /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return Math.floor(this._dateAdapter.getYear(date1) / yearsPerPage) ==
            Math.floor(this._dateAdapter.getYear(date2) / yearsPerPage);
    };
    MatCalendarHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-calendar-header',
                    template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button type=\"button\" class=\"mat-calendar-period-button\" (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\" cdkAriaLive=\"polite\">{{periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div></button><div class=\"mat-calendar-spacer\"></div><button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\" [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\" [attr.aria-label]=\"prevButtonLabel\"></button> <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\" [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\" [attr.aria-label]=\"nextButtonLabel\"></button></div></div>",
                    exportAs: 'matCalendarHeader',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendarHeader.ctorParameters = function () { return [
        { type: MatDatepickerIntl, },
        { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MatCalendar; }),] },] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    return MatCalendarHeader;
}());
/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
var MatCalendar = /** @class */ (function () {
    function MatCalendar(_intl, _dateAdapter, _dateFormats, changeDetectorRef) {
        var _this = this;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe(function () {
            changeDetectorRef.markForCheck();
            _this.stateChanges.next();
        });
    }
    Object.defineProperty(MatCalendar.prototype, "startAt", {
        get: /**
         * A date representing the period (month or year) to start the calendar in.
         * @return {?}
         */
        function () { return this._startAt; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */
        function () { return this._clampedActiveDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "currentView", {
        /** Whether the calendar is in month view. */
        get: /**
         * Whether the calendar is in month view.
         * @return {?}
         */
        function () { return this._currentView; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentView = value;
            this._moveFocusOnNextTick = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatCalendar.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ change = changes["minDate"] || changes["maxDate"] || changes["dateFilter"];
        if (change && !change.firstChange) {
            var /** @type {?} */ view = this._getCurrentViewComponent();
            if (view) {
                view._init();
            }
        }
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.focusActiveCell = /**
     * @return {?}
     */
    function () {
        this._getCurrentViewComponent()._focusActiveCell();
    };
    /** Handles date selection in the month view. */
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    MatCalendar.prototype._dateSelected = /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    };
    /** Handles year selection in the multiyear view. */
    /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    MatCalendar.prototype._yearSelectedInMultiYearView = /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Handles month selection in the year view. */
    /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    MatCalendar.prototype._monthSelectedInYearView = /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype._userSelected = /**
     * @return {?}
     */
    function () {
        this._userSelection.emit();
    };
    /** Handles year/month selection in the multi-year/year views. */
    /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    MatCalendar.prototype._goToDateInView = /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    function (date, view) {
        this.activeDate = date;
        this.currentView = view;
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatCalendar.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Returns the component instance that corresponds to the current calendar view.
     * @return {?}
     */
    MatCalendar.prototype._getCurrentViewComponent = /**
     * Returns the component instance that corresponds to the current calendar view.
     * @return {?}
     */
    function () {
        return this.monthView || this.yearView || this.multiYearView;
    };
    MatCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-calendar',
                    template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template><div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\"><mat-month-view *ngSwitchCase=\"'month'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (selectedChange)=\"_dateSelected($event)\" (_userSelection)=\"_userSelected()\"></mat-month-view><mat-year-view *ngSwitchCase=\"'year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (monthSelected)=\"_monthSelectedInYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'month')\"></mat-year-view><mat-multi-year-view *ngSwitchCase=\"'multi-year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (yearSelected)=\"_yearSelectedInMultiYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'year')\"></mat-multi-year-view></div>",
                    styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                    host: {
                        'class': 'mat-calendar',
                    },
                    exportAs: 'matCalendar',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendar.ctorParameters = function () { return [
        { type: MatDatepickerIntl, },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    MatCalendar.propDecorators = {
        "headerComponent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startAt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "yearSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "monthSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_userSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "monthView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMonthView,] },],
        "yearView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatYearView,] },],
        "multiYearView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMultiYearView,] },],
    };
    return MatCalendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by the Material datepicker.
 */
var /** @type {?} */ matDatepickerAnimations = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'scale(1, 0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'scale(1, 1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])('@fadeInCalendar', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })))
    ]),
    /** Fades in the content of the calendar. */
    fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInCalendar', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Used to generate a unique ID for each datepicker instance.
 */
var /** @type {?} */ datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 */
var /** @type {?} */ MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-datepicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatDatepickerContentBase = /** @class */ (function () {
    function MatDatepickerContentBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatDatepickerContentBase;
}());
var /** @type {?} */ _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
var MatDatepickerContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(MatDatepickerContent, _super);
    function MatDatepickerContent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    /**
     * @return {?}
     */
    MatDatepickerContent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._calendar.focusActiveCell();
    };
    MatDatepickerContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker-content',
                    template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\" [selected]=\"datepicker._selected\" [@fadeInCalendar]=\"'enter'\" (selectedChange)=\"datepicker._select($event)\" (yearSelected)=\"datepicker._selectYear($event)\" (monthSelected)=\"datepicker._selectMonth($event)\" (_userSelection)=\"datepicker.close()\"></mat-calendar>",
                    styles: [".mat-datepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;border-radius:2px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                    host: {
                        'class': 'mat-datepicker-content',
                        '[@transformPanel]': '"enter"',
                        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    },
                    animations: [
                        matDatepickerAnimations.transformPanel,
                        matDatepickerAnimations.fadeInCalendar,
                    ],
                    exportAs: 'matDatepickerContent',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['color'],
                },] },
    ];
    /** @nocollapse */
    MatDatepickerContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    MatDatepickerContent.propDecorators = {
        "_calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendar,] },],
    };
    return MatDatepickerContent;
}(_MatDatepickerContentMixinBase));
/**
 * Component responsible for managing the datepicker popup/dialog.
 * @template D
 */
var MatDatepicker = /** @class */ (function () {
    function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "mat-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
    }
    Object.defineProperty(MatDatepicker.prototype, "startAt", {
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "color", {
        get: /**
         * Color palette to use on the datepicker's calendar.
         * @return {?}
         */
        function () {
            return this._color ||
                (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "touchUi", {
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () { return this._touchUi; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "disabled", {
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "opened", {
        get: /**
         * Whether the calendar is open.
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { value ? this.open() : this.close(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._validSelected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MatDatepicker.prototype._select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
        }
    };
    /** Emits the selected year in multiyear view */
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    MatDatepicker.prototype._selectYear = /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Emits selected month in year view */
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    MatDatepicker.prototype._selectMonth = /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    MatDatepicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        var /** @type {?} */ completeClose = function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this._opened) {
                _this._opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    MatDatepicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    function () {
        var _this = this;
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    };
    /**
     * Open the calendar as a popup.
     * @return {?}
     */
    MatDatepicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
    };
    /**
     * Create the popup.
     * @return {?}
     */
    MatDatepicker.prototype._createPopup = /**
     * Create the popup.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"] ||
                (_this._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]);
        }))).subscribe(function () { return _this.close(); });
    };
    /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    MatDatepicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    function () {
        return this._overlay.position()
            .flexibleConnectedTo(this._datepickerInput.getPopupConnectionElementRef())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withPush(false)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepicker.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Passes the current theme color along to the calendar overlay.
     * @return {?}
     */
    MatDatepicker.prototype._setColor = /**
     * Passes the current theme color along to the calendar overlay.
     * @return {?}
     */
    function () {
        var /** @type {?} */ color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    };
    MatDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker',
                    template: '',
                    exportAs: 'matDatepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatDatepicker.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"], },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATEPICKER_SCROLL_STRATEGY,] },] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"],] },] },
    ]; };
    MatDatepicker.propDecorators = {
        "calendarHeaderComponent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startAt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "touchUi": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "yearSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "monthSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "panelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openedStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['opened',] },],
        "closedStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['closed',] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return MatDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MatDatepickerInput; }),
    multi: true
};
var /** @type {?} */ MAT_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MatDatepickerInput; }),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
var  /**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
MatDatepickerInputEvent = /** @class */ (function () {
    function MatDatepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatepickerInputEvent;
}());
/**
 * Directive used to connect an input to a MatDatepicker.
 * @template D
 */
var MatDatepickerInput = /** @class */ (function () {
    function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onTouched = function () { };
        this._cvaOnChange = function () { };
        this._validatorOnChange = function () { };
        this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = function () {
            return _this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': _this._elementRef.nativeElement.value } };
        };
        /**
         * The form control validator for the min date.
         */
        this._minValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDate(_this.min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': _this.min, 'actual': controlValue } };
        };
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDate(_this.max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': _this.max, 'actual': controlValue } };
        };
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        };
        /**
         * The combined form control validator for this input.
         */
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepicker", {
        set: /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype.registerDatepicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    };
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepickerFilter", {
        set: /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateFilter = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "value", {
        get: /**
         * The value of the input.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._getValidDateOrNull(value);
            var /** @type {?} */ oldDate = this.value;
            this._value = value;
            this._formatValue(value);
            if (!this._dateAdapter.sameDate(oldDate, value)) {
                this._valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "min", {
        get: /**
         * The minimum valid date.
         * @return {?}
         */
        function () { return this._min; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "max", {
        get: /**
         * The maximum valid date.
         * @return {?}
         */
        function () { return this._max; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "disabled", {
        get: /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        function () { return !!this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
            var /** @type {?} */ element = this._elementRef.nativeElement;
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
            // We need to null check the `blur` method, because it's undefined during SSR.
            if (newValue && element.blur) {
                // Normally, native input elements automatically blur if they turn disabled. This behavior
                // is problematic, because it would mean that it triggers another change detection cycle,
                // which then causes a changed after checked error if the input element was focused before.
                element.blur();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker) {
            this._datepickerSubscription = this._datepicker._selectedChanged.subscribe(function (selected) {
                _this.value = selected;
                _this._cvaOnChange(selected);
                _this._onTouched();
                _this.dateInput.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                _this.dateChange.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
            });
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnValidatorChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorOnChange = fn;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    MatDatepickerInput.prototype.validate = /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * @deprecated
     * @deletion-target 7.0.0 Use `getConnectedOverlayOrigin` instead
     */
    /**
     * @deprecated
     * \@deletion-target 7.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    MatDatepickerInput.prototype.getPopupConnectionElementRef = /**
     * @deprecated
     * \@deletion-target 7.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    function () {
        return this.getConnectedOverlayOrigin();
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    MatDatepickerInput.prototype.getConnectedOverlayOrigin = /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    function () {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatDatepickerInput.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerInput.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype._onInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        if (!this._dateAdapter.sameDate(date, this._value)) {
            this._value = date;
            this._cvaOnChange(date);
            this._valueChange.emit(date);
            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype._onChange = /**
     * @return {?}
     */
    function () {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /** Returns the palette used by the input's form field, if any. */
    /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    MatDatepickerInput.prototype._getThemePalette = /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    function () {
        return this._formField ? this._formField.color : undefined;
    };
    /** Handles blur events on the input. */
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    MatDatepickerInput.prototype._onBlur = /**
     * Handles blur events on the input.
     * @return {?}
     */
    function () {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    };
    /**
     * Formats a value and sets it on the input element.
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype._formatValue = /**
     * Formats a value and sets it on the input element.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepickerInput.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatDatepickerInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[matDatepicker]',
                    providers: [
                        MAT_DATEPICKER_VALUE_ACCESSOR,
                        MAT_DATEPICKER_VALIDATORS,
                        { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatepickerInput },
                    ],
                    host: {
                        '[attr.aria-haspopup]': 'true',
                        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                        '[disabled]': 'disabled',
                        '(input)': '_onInput($event.target.value)',
                        '(change)': '_onChange()',
                        '(blur)': '_onBlur()',
                        '(keydown)': '_onKeydown($event)',
                    },
                    exportAs: 'matDatepickerInput',
                },] },
    ];
    /** @nocollapse */
    MatDatepickerInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] },] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    MatDatepickerInput.propDecorators = {
        "matDatepicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "matDatepickerFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "min": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dateInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MatDatepickerInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Can be used to override the icon of a `matDatepickerToggle`.
 */
var MatDatepickerToggleIcon = /** @class */ (function () {
    function MatDatepickerToggleIcon() {
    }
    MatDatepickerToggleIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matDatepickerToggleIcon]'
                },] },
    ];
    return MatDatepickerToggleIcon;
}());
/**
 * @template D
 */
var MatDatepickerToggle = /** @class */ (function () {
    function MatDatepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
    }
    Object.defineProperty(MatDatepickerToggle.prototype, "disabled", {
        get: /**
         * Whether the toggle button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined ? this.datepicker.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["datepicker"]) {
            this._watchStateChanges();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._watchStateChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerToggle.prototype._open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype._watchStateChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        var /** @type {?} */ inputDisabled = this.datepicker && this.datepicker._datepickerInput ?
            this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        var /** @type {?} */ datepickerToggled = this.datepicker ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        this._stateChanges.unsubscribe();
        this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    MatDatepickerToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker-toggle',
                    template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\" [disabled]=\"disabled\" (click)=\"_open($event)\"><svg *ngIf=\"!_customIcon\" class=\"mat-datepicker-toggle-default-icon\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" fill=\"currentColor\" focusable=\"false\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg><ng-content select=\"[matDatepickerToggleIcon]\"></ng-content></button>",
                    styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}"],
                    host: {
                        'class': 'mat-datepicker-toggle',
                        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                    },
                    exportAs: 'matDatepickerToggle',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatDatepickerToggle.ctorParameters = function () { return [
        { type: MatDatepickerIntl, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    MatDatepickerToggle.propDecorators = {
        "datepicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['for',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_customIcon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatDatepickerToggleIcon,] },],
    };
    return MatDatepickerToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatDatepickerModule = /** @class */ (function () {
    function MatDatepickerModule() {
    }
    MatDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"],
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["A11yModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                    ],
                    exports: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                        MatCalendarHeader,
                    ],
                    declarations: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                        MatCalendarHeader,
                    ],
                    providers: [
                        MatDatepickerIntl,
                        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                    ],
                    entryComponents: [
                        MatDatepickerContent,
                        MatCalendarHeader,
                    ]
                },] },
    ];
    return MatDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=datepicker.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/dialog.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/dialog.es5.js ***!
  \***********************************************************/
/*! exports provided: MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
var  /**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
MatDialogConfig = /** @class */ (function () {
    function MatDialogConfig() {
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Custom class for the backdrop,
         */
        this.backdropClass = '';
        /**
         * Whether the user can use escape or clicking on the backdrop to close the modal.
         */
        this.disableClose = false;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw
         */
        this.maxWidth = '80vw';
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * Aria label to assign to the dialog element
         */
        this.ariaLabel = null;
        /**
         * Whether the dialog should focus the first focusable element on open.
         */
        this.autoFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         */
        this.closeOnNavigation = true;
    }
    return MatDialogConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by MatDialog.
 */
var /** @type {?} */ matDialogAnimations = {
    /** Animation that slides the dialog in and out of view and fades the opacity. */
    slideDialog: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDialog', [
        // Note: The `enter` animation doesn't transition to something like `translate3d(0, 0, 0)
        // scale(1)`, because for some reason specifying the transform explicitly, causes IE both
        // to blur the dialog content and decimate the animation performance. Leaving it as `none`
        // solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * \@docs-private
 * @return {?}
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * \@docs-private
 */
var MatDialogContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatDialogContainer, _super);
    function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        _this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */
        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */
        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */
        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * ID of the element that should be considered as the dialog's label.
         */
        _this._ariaLabelledBy = null;
        return _this;
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    MatDialogContainer.prototype.attachComponentPortal = /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    function (portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    MatDialogContainer.prototype.attachTemplatePortal = /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    function (portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    MatDialogContainer.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * Restores focus to the element that was focused before the dialog opened.
     * @return {?}
     */
    MatDialogContainer.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the dialog opened.
     * @return {?}
     */
    function () {
        var /** @type {?} */ toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /**
     * Saves a reference to the element that was focused before the dialog was opened.
     * @return {?}
     */
    MatDialogContainer.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the dialog was opened.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = /** @type {?} */ (this._document.activeElement);
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
            }
        }
    };
    /** Callback, invoked whenever an animation on the host completes. */
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    MatDialogContainer.prototype._onAnimationDone = /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
    };
    /** Callback, invoked when an animation on the host starts. */
    /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    MatDialogContainer.prototype._onAnimationStart = /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationStateChanged.emit(event);
    };
    /** Starts the dialog exit animation. */
    /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    MatDialogContainer.prototype._startExitAnimation = /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    function () {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    };
    MatDialogContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-dialog-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>",
                    styles: [".mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:block;padding:24px;border-radius:2px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media screen and (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:12px 0;display:flex;flex-wrap:wrap;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button+.mat-button,.mat-dialog-actions .mat-button+.mat-raised-button,.mat-dialog-actions .mat-raised-button+.mat-button,.mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-button+.mat-raised-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:0;margin-right:8px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                    animations: [matDialogAnimations.slideDialog],
                    host: {
                        'class': 'mat-dialog-container',
                        'tabindex': '-1',
                        'aria-modal': 'true',
                        '[attr.id]': '_id',
                        '[attr.role]': '_config.role',
                        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                        '[attr.aria-label]': '_config.ariaLabel',
                        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                        '[@slideDialog]': '_state',
                        '(@slideDialog.start)': '_onAnimationStart($event)',
                        '(@slideDialog.done)': '_onAnimationDone($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    MatDialogContainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
        { type: MatDialogConfig, },
    ]; };
    MatDialogContainer.propDecorators = {
        "_portalOutlet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"],] },],
    };
    return MatDialogContainer;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
var /** @type {?} */ uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
var  /**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
MatDialogRef = /** @class */ (function () {
    function MatDialogRef(_overlayRef, _containerInstance, location, id) {
        if (id === void 0) { id = "mat-dialog-" + uniqueId++; }
        var _this = this;
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */
        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */
        this._afterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */
        this._beforeClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subscription to changes in the user's location.
         */
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function () {
            _this._afterOpen.next();
            _this._afterOpen.complete();
        });
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () { return _this._overlayRef.dispose(); });
        _overlayRef.detachments().subscribe(function () {
            _this._beforeClose.next(_this._result);
            _this._beforeClose.complete();
            _this._locationChanges.unsubscribe();
            _this._afterClosed.next(_this._result);
            _this._afterClosed.complete();
            _this.componentInstance = /** @type {?} */ ((null));
            _this._overlayRef.dispose();
        });
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"] && !_this.disableClose; }))
            .subscribe(function () { return _this.close(); });
        if (location) {
            // Close the dialog when the user goes forwards/backwards in history or when the location
            // hash changes. Note that this usually doesn't include clicking on links (unless the user
            // is using the `HashLocationStrategy`).
            this._locationChanges = location.subscribe(function () {
                if (_this._containerInstance._config.closeOnNavigation) {
                    _this.close();
                }
            });
        }
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    MatDialogRef.prototype.close = /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    function (dialogResult) {
        var _this = this;
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'start'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function () {
            _this._beforeClose.next(dialogResult);
            _this._beforeClose.complete();
            _this._overlayRef.detachBackdrop();
        });
        this._containerInstance._startExitAnimation();
    };
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    MatDialogRef.prototype.afterOpen = /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    function () {
        return this._afterOpen.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    MatDialogRef.prototype.afterClosed = /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    MatDialogRef.prototype.beforeClose = /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    function () {
        return this._beforeClose.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    MatDialogRef.prototype.backdropClick = /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._overlayRef.backdropClick();
    };
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    MatDialogRef.prototype.keydownEvents = /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    function () {
        return this._overlayRef.keydownEvents();
    };
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    /**
     * Updates the dialog's position.
     * @param {?=} position New dialog position.
     * @return {?}
     */
    MatDialogRef.prototype.updatePosition = /**
     * Updates the dialog's position.
     * @param {?=} position New dialog position.
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    /**
     * Updates the dialog's width and height.
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {?}
     */
    MatDialogRef.prototype.updateSize = /**
     * Updates the dialog's width and height.
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {?}
     */
    function (width, height) {
        if (width === void 0) { width = ''; }
        if (height === void 0) { height = ''; }
        this._getPositionStrategy().width(width).height(height);
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Fetches the position strategy object from the overlay ref.
     * @return {?}
     */
    MatDialogRef.prototype._getPositionStrategy = /**
     * Fetches the position strategy object from the overlay ref.
     * @return {?}
     */
    function () {
        return /** @type {?} */ (this._overlayRef.getConfig().positionStrategy);
    };
    return MatDialogRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a dialog.
 */
var /** @type {?} */ MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/**
 * Injection token that can be used to specify default dialog options.
 */
var /** @type {?} */ MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 */
var /** @type {?} */ MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
var MatDialog = /** @class */ (function () {
    function MatDialog(_overlay, _injector, _location, _defaultOptions, _scrollStrategy, _parentDialog, _overlayContainer) {
        var _this = this;
        this._overlay = _overlay;
        this._injector = _injector;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._scrollStrategy = _scrollStrategy;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._afterOpenAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._ariaHiddenElements = new Map();
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["defer"])(function () {
            return _this.openDialogs.length ?
                _this._afterAllClosed :
                _this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(undefined));
        });
    }
    Object.defineProperty(MatDialog.prototype, "openDialogs", {
        /** Keeps track of the currently-open dialogs. */
        get: /**
         * Keeps track of the currently-open dialogs.
         * @return {?}
         */
        function () {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDialog.prototype, "afterOpen", {
        /** Stream that emits when a dialog has been opened. */
        get: /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */
        function () {
            return this._parentDialog ? this._parentDialog.afterOpen : this._afterOpenAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDialog.prototype, "_afterAllClosed", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ parent = this._parentDialog;
            return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    MatDialog.prototype.open = /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    function (componentOrTemplateRef, config) {
        var _this = this;
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }
        var /** @type {?} */ overlayRef = this._createOverlay(config);
        var /** @type {?} */ dialogContainer = this._attachDialogContainer(overlayRef, config);
        var /** @type {?} */ dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
        this.afterOpen.next(dialogRef);
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     */
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    MatDialog.prototype.closeAll = /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    function () {
        var /** @type {?} */ i = this.openDialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            this.openDialogs[i].close();
        }
    };
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    MatDialog.prototype.getDialogById = /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    function (id) {
        return this.openDialogs.find(function (dialog) { return dialog.id === id; });
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    MatDialog.prototype._createOverlay = /**
     * Creates the overlay into which the dialog will be loaded.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    function (config) {
        var /** @type {?} */ overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    };
    /**
     * Creates an overlay config from a dialog config.
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    MatDialog.prototype._getOverlayConfig = /**
     * Creates an overlay config from a dialog config.
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    function (dialogConfig) {
        var /** @type {?} */ state$$1 = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight
        });
        if (dialogConfig.backdropClass) {
            state$$1.backdropClass = dialogConfig.backdropClass;
        }
        return state$$1;
    };
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    MatDialog.prototype._attachDialogContainer = /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    function (overlay, config) {
        var /** @type {?} */ userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var /** @type {?} */ injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatDialogConfig, config]
        ]));
        var /** @type {?} */ containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector);
        var /** @type {?} */ containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    MatDialog.prototype._attachDialogContent = /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var /** @type {?} */ dialogRef = new MatDialogRef(overlayRef, dialogContainer, this._location, config.id);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](componentOrTemplateRef, /** @type {?} */ ((null)), /** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef })));
        }
        else {
            var /** @type {?} */ injector = this._createInjector(config, dialogRef, dialogContainer);
            var /** @type {?} */ contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    };
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    MatDialog.prototype._createInjector = /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    function (config, dialogRef, dialogContainer) {
        var /** @type {?} */ userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
        // content are created out of the same ViewContainerRef and as such, are siblings for injector
        // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
        // added to the injection tokens.
        var /** @type {?} */ injectionTokens = new WeakMap([
            [MatDialogContainer, dialogContainer],
            [MAT_DIALOG_DATA, config.data],
            [MatDialogRef, dialogRef]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])()
            });
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, injectionTokens);
    };
    /**
     * Removes a dialog from the array of open dialogs.
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    MatDialog.prototype._removeOpenDialog = /**
     * Removes a dialog from the array of open dialogs.
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    function (dialogRef) {
        var /** @type {?} */ index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    };
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @return {?}
     */
    MatDialog.prototype._hideNonDialogContentFromAssistiveTechnology = /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @return {?}
     */
    function () {
        var /** @type {?} */ overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            var /** @type {?} */ siblings = overlayContainer.parentElement.children;
            for (var /** @type {?} */ i = siblings.length - 1; i > -1; i--) {
                var /** @type {?} */ sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    };
    MatDialog.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    MatDialog.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] },] },
        { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] },] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"], },
    ]; };
    return MatDialog;
}());
/**
 * Applies default options to the dialog config.
 * @param {?=} config Config to be modified.
 * @param {?=} defaultOptions Default options provided.
 * @return {?} The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, defaultOptions, config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Counter used to generate unique IDs for dialog elements.
 */
var /** @type {?} */ dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var MatDialogClose = /** @class */ (function () {
    function MatDialogClose(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Screenreader label for the button.
         */
        this.ariaLabel = 'Close dialog';
    }
    /**
     * @return {?}
     */
    MatDialogClose.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = /** @type {?} */ ((getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDialogClose.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    MatDialogClose.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "button[mat-dialog-close], button[matDialogClose]",
                    exportAs: 'matDialogClose',
                    host: {
                        '(click)': 'dialogRef.close(dialogResult)',
                        '[attr.aria-label]': 'ariaLabel',
                        'type': 'button',
                    }
                },] },
    ];
    /** @nocollapse */
    MatDialogClose.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: MatDialog, },
    ]; };
    MatDialogClose.propDecorators = {
        "ariaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] },],
        "dialogResult": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-dialog-close',] },],
        "_matDialogClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matDialogClose',] },],
    };
    return MatDialogClose;
}());
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var MatDialogTitle = /** @class */ (function () {
    function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-" + dialogElementUid++;
    }
    /**
     * @return {?}
     */
    MatDialogTitle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._dialogRef) {
            this._dialogRef = /** @type {?} */ ((getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
        if (this._dialogRef) {
            Promise.resolve().then(function () {
                var /** @type {?} */ container = _this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = _this.id;
                }
            });
        }
    };
    MatDialogTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mat-dialog-title], [matDialogTitle]',
                    exportAs: 'matDialogTitle',
                    host: {
                        'class': 'mat-dialog-title',
                        '[id]': 'id',
                    },
                },] },
    ];
    /** @nocollapse */
    MatDialogTitle.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: MatDialog, },
    ]; };
    MatDialogTitle.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return MatDialogTitle;
}());
/**
 * Scrollable content container of a dialog.
 */
var MatDialogContent = /** @class */ (function () {
    function MatDialogContent() {
    }
    MatDialogContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
                    host: { 'class': 'mat-dialog-content' }
                },] },
    ];
    return MatDialogContent;
}());
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var MatDialogActions = /** @class */ (function () {
    function MatDialogActions() {
    }
    MatDialogActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
                    host: { 'class': 'mat-dialog-actions' }
                },] },
    ];
    return MatDialogActions;
}());
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param {?} element Element relative to which to look for a dialog.
 * @param {?} openDialogs References to the currently-open dialogs.
 * @return {?}
 */
function getClosestDialog(element, openDialogs) {
    var /** @type {?} */ parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(function (dialog) { return dialog.id === /** @type {?} */ ((parent)).id; }) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatDialogModule = /** @class */ (function () {
    function MatDialogModule() {
    }
    MatDialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    exports: [
                        MatDialogContainer,
                        MatDialogClose,
                        MatDialogTitle,
                        MatDialogContent,
                        MatDialogActions,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    declarations: [
                        MatDialogContainer,
                        MatDialogClose,
                        MatDialogTitle,
                        MatDialogActions,
                        MatDialogContent,
                    ],
                    providers: [
                        MatDialog,
                        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    ],
                    entryComponents: [MatDialogContainer],
                },] },
    ];
    return MatDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=dialog.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/expansion.es5.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/expansion.es5.js ***!
  \**************************************************************/
/*! exports provided: MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive for a Material Design Accordion.
 */
var MatAccordion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatAccordion, _super);
    function MatAccordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hideToggle = false;
        /**
         * The display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the reset of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        _this.displayMode = 'default';
        return _this;
    }
    Object.defineProperty(MatAccordion.prototype, "hideToggle", {
        get: /**
         * Whether the expansion indicator should be hidden.
         * @return {?}
         */
        function () { return this._hideToggle; },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(show); },
        enumerable: true,
        configurable: true
    });
    MatAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-accordion',
                    exportAs: 'matAccordion',
                    host: {
                        class: 'mat-accordion'
                    }
                },] },
    ];
    /** @nocollapse */
    MatAccordion.propDecorators = {
        "hideToggle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "displayMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return MatAccordion;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordion"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time and timing curve for expansion panel animations.
 */
var /** @type {?} */ EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 */
var /** @type {?} */ matExpansionAnimations = {
    /** Animation that rotates the indicator arrow. */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /** Animation that expands and collapses the panel header height. */
    expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('expansionHeight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /** Animation that expands and collapses the panel content. */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
var MatExpansionPanelContent = /** @class */ (function () {
    function MatExpansionPanelContent(_template) {
        this._template = _template;
    }
    MatExpansionPanelContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'ng-template[matExpansionPanelContent]'
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanelContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
    ]; };
    return MatExpansionPanelContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Counter for generating unique element ids.
 */
var /** @type {?} */ uniqueId = 0;
var ɵ0 = undefined;
/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
var MatExpansionPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatExpansionPanel, _super);
    function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef) {
        var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._hideToggle = false;
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        _this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        _this._headerId = "mat-expansion-panel-header-" + uniqueId++;
        _this.accordion = accordion;
        return _this;
    }
    Object.defineProperty(MatExpansionPanel.prototype, "hideToggle", {
        get: /**
         * Whether the toggle indicator should be hidden.
         * @return {?}
         */
        function () { return this._hideToggle; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the expansion indicator should be hidden. */
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    MatExpansionPanel.prototype._getHideToggle = /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    function () {
        if (this.accordion) {
            return this.accordion.hideToggle;
        }
        return this.hideToggle;
    };
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    MatExpansionPanel.prototype._hasSpacing = /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    function () {
        if (this.accordion) {
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    };
    /** Gets the expanded state string. */
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    MatExpansionPanel.prototype._getExpandedState = /**
     * Gets the expanded state string.
     * @return {?}
     */
    function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    /**
     * @return {?}
     */
    MatExpansionPanel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(/** @type {?} */ ((null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return _this.expanded && !_this._portal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
                _this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](_this._lazyContent._template, _this._viewContainerRef);
            });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatExpansionPanel.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._inputChanges.next(changes);
    };
    /**
     * @return {?}
     */
    MatExpansionPanel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this._inputChanges.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatExpansionPanel.prototype._bodyAnimation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ classList = event.element.classList;
        var /** @type {?} */ cssClass = 'mat-expanded';
        var phaseName = event.phaseName, toState = event.toState;
        // Toggle the body's `overflow: hidden` class when closing starts or when expansion ends in
        // order to prevent the cases where switching too early would cause the animation to jump.
        // Note that we do it directly on the DOM element to avoid the slight delay that comes
        // with doing it via change detection.
        if (phaseName === 'done' && toState === 'expanded') {
            classList.add(cssClass);
        }
        else if (phaseName === 'start' && toState === 'collapsed') {
            classList.remove(cssClass);
        }
    };
    MatExpansionPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{styles: [".mat-expansion-panel{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);box-sizing:content-box;display:block;margin:0;transition:margin 225ms cubic-bezier(.4,0,.2,1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content{overflow:hidden}.mat-expansion-panel-content.mat-expanded{overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"],
                    selector: 'mat-expansion-panel',
                    exportAs: 'matExpansionPanel',
                    template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content><div class=\"mat-expansion-panel-content\" role=\"region\" [@bodyExpansion]=\"_getExpandedState()\" (@bodyExpansion.done)=\"_bodyAnimation($event)\" (@bodyExpansion.start)=\"_bodyAnimation($event)\" [attr.aria-labelledby]=\"_headerId\" [id]=\"id\" #body><div class=\"mat-expansion-panel-body\"><ng-content></ng-content><ng-template [cdkPortalOutlet]=\"_portal\"></ng-template></div><ng-content select=\"mat-action-row\"></ng-content></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disabled', 'expanded'],
                    outputs: ['opened', 'closed', 'expandedChange'],
                    animations: [matExpansionAnimations.bodyExpansion],
                    providers: [
                        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                        // to the same accordion.
                        { provide: MatAccordion, useValue: ɵ0 },
                    ],
                    host: {
                        'class': 'mat-expansion-panel',
                        '[class.mat-expanded]': 'expanded',
                        '[class.mat-expansion-panel-spacing]': '_hasSpacing()',
                    }
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanel.ctorParameters = function () { return [
        { type: MatAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["UniqueSelectionDispatcher"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    MatExpansionPanel.propDecorators = {
        "hideToggle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "_lazyContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatExpansionPanelContent,] },],
    };
    return MatExpansionPanel;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionItem"]));
var MatExpansionPanelActionRow = /** @class */ (function () {
    function MatExpansionPanelActionRow() {
    }
    MatExpansionPanelActionRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-action-row',
                    host: {
                        class: 'mat-action-row'
                    }
                },] },
    ];
    return MatExpansionPanelActionRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
var MatExpansionPanelHeader = /** @class */ (function () {
    function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef) {
        var _this = this;
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to  subscribe and trigger change detection manually.
        this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(panel.opened, panel.closed, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (changes) { return !!(changes["hideToggle"] || changes["disabled"]); })))
            .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        _focusMonitor.monitor(_element.nativeElement);
    }
    /** Toggles the expanded state of the panel. */
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._toggle = /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    function () {
        this.panel.toggle();
    };
    /** Gets whether the panel is expanded. */
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._isExpanded = /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    function () {
        return this.panel.expanded;
    };
    /** Gets the expanded state string of the panel. */
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._getExpandedState = /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    function () {
        return this.panel._getExpandedState();
    };
    /** Gets the panel id. */
    /**
     * Gets the panel id.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._getPanelId = /**
     * Gets the panel id.
     * @return {?}
     */
    function () {
        return this.panel.id;
    };
    /** Gets whether the expand indicator should be shown. */
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._showToggle = /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    function () {
        return !this.panel.hideToggle && !this.panel.disabled;
    };
    /** Handle keydown event calling to toggle() if appropriate. */
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._keydown = /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
                event.preventDefault();
                this._toggle();
                break;
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    MatExpansionPanelHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    MatExpansionPanelHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-expansion-panel-header',
                    styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],
                    template: "<span class=\"mat-content\"><ng-content select=\"mat-panel-title\"></ng-content><ng-content select=\"mat-panel-description\"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\" class=\"mat-expansion-indicator\"></span>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        matExpansionAnimations.indicatorRotate,
                        matExpansionAnimations.expansionHeaderHeight
                    ],
                    host: {
                        'class': 'mat-expansion-panel-header',
                        'role': 'button',
                        '[attr.id]': 'panel._headerId',
                        '[attr.tabindex]': 'panel.disabled ? -1 : 0',
                        '[attr.aria-controls]': '_getPanelId()',
                        '[attr.aria-expanded]': '_isExpanded()',
                        '[attr.aria-disabled]': 'panel.disabled',
                        '[class.mat-expanded]': '_isExpanded()',
                        '(click)': '_toggle()',
                        '(keydown)': '_keydown($event)',
                        '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }",
                    },
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanelHeader.ctorParameters = function () { return [
        { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    ]; };
    MatExpansionPanelHeader.propDecorators = {
        "expandedHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "collapsedHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return MatExpansionPanelHeader;
}());
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelDescription = /** @class */ (function () {
    function MatExpansionPanelDescription() {
    }
    MatExpansionPanelDescription.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-panel-description',
                    host: {
                        class: 'mat-expansion-panel-header-description'
                    }
                },] },
    ];
    return MatExpansionPanelDescription;
}());
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelTitle = /** @class */ (function () {
    function MatExpansionPanelTitle() {
    }
    MatExpansionPanelTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'mat-panel-title',
                    host: {
                        class: 'mat-expansion-panel-header-title'
                    }
                },] },
    ];
    return MatExpansionPanelTitle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatExpansionModule = /** @class */ (function () {
    function MatExpansionModule() {
    }
    MatExpansionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"]],
                    exports: [
                        MatAccordion,
                        MatExpansionPanel,
                        MatExpansionPanelActionRow,
                        MatExpansionPanelHeader,
                        MatExpansionPanelTitle,
                        MatExpansionPanelDescription,
                        MatExpansionPanelContent,
                    ],
                    declarations: [
                        MatAccordion,
                        MatExpansionPanel,
                        MatExpansionPanelActionRow,
                        MatExpansionPanelHeader,
                        MatExpansionPanelTitle,
                        MatExpansionPanelDescription,
                        MatExpansionPanelContent,
                    ],
                },] },
    ];
    return MatExpansionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=expansion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/progress-spinner.es5.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/progress-spinner.es5.js ***!
  \*********************************************************************/
/*! exports provided: MatProgressSpinnerModule, MatProgressSpinnerBase, _MatProgressSpinnerMixinBase, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return MatProgressSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerBase", function() { return MatProgressSpinnerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatProgressSpinnerMixinBase", function() { return _MatProgressSpinnerMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function() { return MatProgressSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function() { return MatSpinner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base reference size of the spinner.
 * \@docs-private
 */
var /** @type {?} */ BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 */
var /** @type {?} */ BASE_STROKE_WIDTH = 10;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatProgressSpinnerBase = /** @class */ (function () {
    function MatProgressSpinnerBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatProgressSpinnerBase;
}());
var /** @type {?} */ _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatProgressSpinnerBase, 'primary');
/**
 * Injection token to be used to override the default options for `mat-progress-spinner`.
 */
var /** @type {?} */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-progress-spinner-default-options', {
    providedIn: 'root',
    factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
    return { diameter: BASE_SIZE };
}
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/material2/issues/8984
var /** @type {?} */ INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
/**
 * `<mat-progress-spinner>` component.
 */
var MatProgressSpinner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatProgressSpinner, _super);
    function MatProgressSpinner(_elementRef, platform, _document, 
    // @deletion-target 7.0.0 animationMode and defaults parameters to be made required.
    animationMode, defaults) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._document = _document;
        _this.animationMode = animationMode;
        _this.defaults = defaults;
        _this._value = 0;
        _this._fallbackAnimation = false;
        /**
         * Whether the _mat-animation-noopable class should be applied, disabling animations.
         */
        _this._noopAnimations = _this.animationMode === 'NoopAnimations' && (!!_this.defaults && !_this.defaults._forceAnimations);
        _this._diameter = BASE_SIZE;
        /**
         * Mode of the progress circle
         */
        _this.mode = 'determinate';
        _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        if (defaults) {
            if (defaults.diameter) {
                _this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                _this.strokeWidth = defaults.strokeWidth;
            }
        }
        // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.
        var /** @type {?} */ animationClass = "mat-progress-spinner-indeterminate" + (_this._fallbackAnimation ? '-fallback' : '') + "-animation";
        _elementRef.nativeElement.classList.add(animationClass);
        return _this;
    }
    Object.defineProperty(MatProgressSpinner.prototype, "diameter", {
        get: /**
         * The diameter of the progress spinner (will set width and height of svg).
         * @return {?}
         */
        function () { return this._diameter; },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(size);
            if (!this._fallbackAnimation && !MatProgressSpinner.diameters.has(this._diameter)) {
                this._attachStyleNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "strokeWidth", {
        get: /**
         * Stroke width of the progress spinner.
         * @return {?}
         */
        function () {
            return this._strokeWidth || this.diameter / 10;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "value", {
        get: /**
         * Value of the progress circle.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? this._value : 0;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(newValue)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_circleRadius", {
        /** The radius of the spinner, adjusted for stroke width. */
        get: /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */
        function () {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_viewBox", {
        /** The view box of the spinner's svg element. */
        get: /**
         * The view box of the spinner's svg element.
         * @return {?}
         */
        function () {
            var /** @type {?} */ viewBox = this._circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this._circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._strokeCircumference * (100 - this._value) / 100;
            }
            // In fallback mode set the circle to 80% and rotate it with CSS.
            if (this._fallbackAnimation && this.mode === 'indeterminate') {
                return this._strokeCircumference * 0.2;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    MatProgressSpinner.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    function () {
        var /** @type {?} */ styleTag = MatProgressSpinner.styleTag;
        if (!styleTag) {
            styleTag = this._document.createElement('style');
            this._document.head.appendChild(styleTag);
            MatProgressSpinner.styleTag = styleTag;
        }
        if (styleTag && styleTag.sheet) {
            (/** @type {?} */ (styleTag.sheet)).insertRule(this._getAnimationText(), 0);
        }
        MatProgressSpinner.diameters.add(this.diameter);
    };
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    MatProgressSpinner.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    function () {
        return INDETERMINATE_ANIMATION_TEMPLATE
            .replace(/START_VALUE/g, "" + 0.95 * this._strokeCircumference)
            .replace(/END_VALUE/g, "" + 0.2 * this._strokeCircumference)
            .replace(/DIAMETER/g, "" + this.diameter);
    };
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100)
     */
    MatProgressSpinner.diameters = new Set([BASE_SIZE]);
    /**
     * Used for storing all of the generated keyframe animations.
     * \@dynamic
     */
    MatProgressSpinner.styleTag = null;
    MatProgressSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-progress-spinner',
                    exportAs: 'matProgressSpinner',
                    host: {
                        'role': 'progressbar',
                        'class': 'mat-progress-spinner',
                        '[class._mat-animation-noopable]': "_noopAnimations",
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter',
                        '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                        '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.mode]': 'mode',
                    },
                    inputs: ['color'],
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><circle cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                    styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatProgressSpinner.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] },] },
    ]; };
    MatProgressSpinner.propDecorators = {
        "diameter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "strokeWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "mode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return MatProgressSpinner;
}(_MatProgressSpinnerMixinBase));
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
var MatSpinner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSpinner, _super);
    function MatSpinner(elementRef, platform, document, 
    // @deletion-targets 7.0.0 animationMode and defaults parameters to be made required.
    animationMode, defaults) {
        var _this = _super.call(this, elementRef, platform, document, animationMode, defaults) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    MatSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-spinner',
                    host: {
                        'role': 'progressbar',
                        'mode': 'indeterminate',
                        'class': 'mat-spinner mat-progress-spinner',
                        '[class._mat-animation-noopable]': "_noopAnimations",
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter',
                    },
                    inputs: ['color'],
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><circle cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                    styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatSpinner.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] },] },
    ]; };
    return MatSpinner;
}(MatProgressSpinner));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatProgressSpinnerModule = /** @class */ (function () {
    function MatProgressSpinnerModule() {
    }
    MatProgressSpinnerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
                    exports: [
                        MatProgressSpinner,
                        MatSpinner,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                    ],
                    declarations: [
                        MatProgressSpinner,
                        MatSpinner
                    ],
                },] },
    ];
    return MatProgressSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=progress-spinner.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/radio.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/radio.es5.js ***!
  \**********************************************************/
/*! exports provided: MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroupBase, _MatRadioGroupMixinBase, MatRadioGroup, MatRadioButtonBase, _MatRadioButtonMixinBase, MatRadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return MatRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return MatRadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroupBase", function() { return MatRadioGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioGroupMixinBase", function() { return _MatRadioGroupMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return MatRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButtonBase", function() { return MatRadioButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioButtonMixinBase", function() { return _MatRadioButtonMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return MatRadioButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Increasing integer for generating unique ids for radio components.
var /** @type {?} */ nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * \@docs-private
 */
var /** @type {?} */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatRadioGroup; }),
    multi: true
};
/**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
var  /**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
MatRadioChange = /** @class */ (function () {
    function MatRadioChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatRadioChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatRadioGroupBase = /** @class */ (function () {
    function MatRadioGroupBase() {
    }
    return MatRadioGroupBase;
}());
var /** @type {?} */ _MatRadioGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatRadioGroupBase);
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
var MatRadioGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioGroup, _super);
    function MatRadioGroup(_changeDetector) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        /**
         * Selected value for the radio group.
         */
        _this._value = null;
        /**
         * The HTML name attribute applied to radio buttons in this group.
         */
        _this._name = "mat-radio-group-" + nextUniqueId++;
        /**
         * The currently selected radio button. Should match value.
         */
        _this._selected = null;
        /**
         * Whether the `value` has been set to its initial value.
         */
        _this._isInitialized = false;
        /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         */
        _this._labelPosition = 'after';
        /**
         * Whether the radio group is disabled.
         */
        _this._disabled = false;
        /**
         * Whether the radio group is required.
         */
        _this._required = false;
        /**
         * The method to be called in order to update ngModel
         */
        _this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        _this.onTouched = function () { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(MatRadioGroup.prototype, "name", {
        get: /**
         * Name of the radio button group. All radio buttons inside this group will use this name.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "labelPosition", {
        get: /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._labelPosition = v === 'before' ? 'before' : 'after';
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "value", {
        get: /**
         * Value for the radio-group. Should equal the value of the selected radio button if there is
         * a corresponding radio button with a matching value. If there is not such a corresponding
         * radio button, this value persists to be applied in case a new radio button is added with a
         * matching value.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                // Set this before proceeding to ensure no circular loop occurs with selection.
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._checkSelectedRadioButton = /**
     * @return {?}
     */
    function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    Object.defineProperty(MatRadioGroup.prototype, "selected", {
        get: /**
         * The currently selected radio button. If set to a new radio button, the radio group value
         * will be updated to match the new selected button.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "disabled", {
        get: /**
         * Whether the radio group is disabled
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "required", {
        get: /**
         * Whether the radio group is required
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    MatRadioGroup.prototype.ngAfterContentInit = /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    function () {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    };
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    MatRadioGroup.prototype._touch = /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._updateRadioButtonNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach(function (radio) {
                radio.name = _this.name;
            });
        }
    };
    /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    MatRadioGroup.prototype._updateSelectedRadioFromValue = /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        var /** @type {?} */ isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatRadioGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(/** @type {?} */ ((this._selected)), this._value));
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._markRadiosForCheck = /**
     * @return {?}
     */
    function () {
        if (this._radios) {
            this._radios.forEach(function (radio) { return radio._markForCheck(); });
        }
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatRadioGroup.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    MatRadioGroup.prototype.setDisabledState = /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    };
    MatRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-radio-group',
                    exportAs: 'matRadioGroup',
                    providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                    host: {
                        'role': 'radiogroup',
                        'class': 'mat-radio-group',
                    },
                    inputs: ['disabled'],
                },] },
    ];
    /** @nocollapse */
    MatRadioGroup.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], },
    ]; };
    MatRadioGroup.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] },],
        "_radios": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatRadioButton; }), { descendants: true },] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "labelPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
    };
    return MatRadioGroup;
}(_MatRadioGroupMixinBase));
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatRadioButtonBase = /** @class */ (function () {
    function MatRadioButtonBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatRadioButtonBase;
}());
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
var /** @type {?} */ _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(MatRadioButtonBase)), 'accent');
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
var MatRadioButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioButton, _super);
    function MatRadioButton(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetector = _changeDetector;
        _this._focusMonitor = _focusMonitor;
        _this._radioDispatcher = _radioDispatcher;
        _this._animationMode = _animationMode;
        _this._uniqueId = "mat-radio-" + ++nextUniqueId;
        /**
         * The unique ID for the radio button.
         */
        _this.id = _this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Whether this radio is checked.
         */
        _this._checked = false;
        /**
         * Value assigned to this radio.
         */
        _this._value = null;
        /**
         * Unregister function for _radioDispatcher
         */
        _this._removeUniqueSelectionListener = function () { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        _this.radioGroup = radioGroup;
        _this._removeUniqueSelectionListener =
            _radioDispatcher.listen(function (id, name) {
                if (id !== _this.id && name === _this.name) {
                    _this.checked = false;
                }
            });
        return _this;
    }
    Object.defineProperty(MatRadioButton.prototype, "checked", {
        get: /**
         * Whether this radio button is checked.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
                if (newCheckedState) {
                    // Notify all radio buttons with the same name to un-check.
                    this._radioDispatcher.notify(this.id, this.name);
                }
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "value", {
        get: /**
         * The value of this radio button.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "labelPosition", {
        get: /**
         * Whether the label should appear after or before the radio button. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._labelPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "disabled", {
        get: /**
         * Whether the radio button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newDisabledState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._disabled !== newDisabledState) {
                this._disabled = newDisabledState;
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "required", {
        get: /**
         * Whether the radio button is required.
         * @return {?}
         */
        function () {
            return this._required || (this.radioGroup && this.radioGroup.required);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "inputId", {
        /** ID of the native input element inside `<mat-radio-button>` */
        get: /**
         * ID of the native input element inside `<mat-radio-button>`
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    /** Focuses the radio button. */
    /**
     * Focuses the radio button.
     * @return {?}
     */
    MatRadioButton.prototype.focus = /**
     * Focuses the radio button.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
    };
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatRadioButton.prototype._markForCheck = /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._inputElement.nativeElement)
            .subscribe(function (focusOrigin) { return _this._onInputFocusChange(focusOrigin); });
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
        this._removeUniqueSelectionListener();
    };
    /**
     * Dispatch change event with current value.
     * @return {?}
     */
    MatRadioButton.prototype._emitChangeEvent = /**
     * Dispatch change event with current value.
     * @return {?}
     */
    function () {
        this.change.emit(new MatRadioChange(this, this._value));
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputChange = /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        var /** @type {?} */ groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    };
    /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    MatRadioButton.prototype._onInputFocusChange = /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    function (focusOrigin) {
        // TODO(paul): support `program`. See https://github.com/angular/material2/issues/9889
        if (!this._focusRipple && focusOrigin === 'keyboard') {
            this._focusRipple = this._ripple.launch(0, 0, { persistent: true });
        }
        else if (!focusOrigin) {
            if (this.radioGroup) {
                this.radioGroup._touch();
            }
            if (this._focusRipple) {
                this._focusRipple.fadeOut();
                this._focusRipple = null;
            }
        }
    };
    MatRadioButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-radio-button',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label><div class=\"mat-radio-container\"><div class=\"mat-radio-outer-circle\"></div><div class=\"mat-radio-inner-circle\"></div><div mat-ripple class=\"mat-radio-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"true\" [matRippleRadius]=\"23\" [matRippleAnimation]=\"{enterDuration: 150}\"></div></div><input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [tabIndex]=\"tabIndex\" [attr.name]=\"name\" [required]=\"required\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-describedby]=\"ariaDescribedby\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></div></label>",
                    styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}@media screen and (-ms-high-contrast:active){.mat-radio-checked .mat-radio-inner-circle{border:solid 10px}}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:calc(50% - 25px);top:calc(50% - 25px);height:50px;width:50px;z-index:1;pointer-events:none}"],
                    inputs: ['color', 'disableRipple', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    exportAs: 'matRadioButton',
                    host: {
                        'class': 'mat-radio-button',
                        '[class.mat-radio-checked]': 'checked',
                        '[class.mat-radio-disabled]': 'disabled',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '[attr.id]': 'id',
                        // Note: under normal conditions focus shouldn't land on this element, however it may be
                        // programmatically set, for example inside of a focus trap, in this case we want to forward
                        // the focus to the native element.
                        '(focus)': '_inputElement.nativeElement.focus()',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatRadioButton.ctorParameters = function () { return [
        { type: MatRadioGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"], },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] },] },
    ]; };
    MatRadioButton.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "ariaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] },],
        "ariaDescribedby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-describedby',] },],
        "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "labelPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] },],
        "_ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"],] },],
        "_inputElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['input',] },],
    };
    return MatRadioButton;
}(_MatRadioButtonMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
    MatRadioModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                    exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                    declarations: [MatRadioGroup, MatRadioButton],
                },] },
    ];
    return MatRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=radio.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/select.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/select.es5.js ***!
  \***********************************************************/
/*! exports provided: MatSelectModule, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectBase, _MatSelectMixinBase, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectBase", function() { return MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectMixinBase", function() { return _MatSelectMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return transformPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return fadeInContent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 */
var /** @type {?} */ matSelectAnimations = {
    /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            // 32px = 2 * 16px padding
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            // 64px = 48px padding on the left + 16px padding on the right
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@fadeInContent', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms 100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ]),
    /**
       * This animation fades in the background color and text content of the
       * select's options. It is time delayed to occur 100ms after the overlay
       * panel has transformed in.
       */
    fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * \@deletion-target 7.0.0
 */
var /** @type {?} */ transformPanel = matSelectAnimations.transformPanel;
/**
 * @deprecated
 * \@deletion-target 7.0.0
 */
var /** @type {?} */ fadeInContent = matSelectAnimations.fadeInContent;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * \@docs-private
 * @return {?}
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * \@docs-private
 * @return {?}
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 * @return {?}
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ nextUniqueId = 0;
/**
 * The max height of the select's overlay panel
 */
var /** @type {?} */ SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis
 */
var /** @type {?} */ SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 */
var /** @type {?} */ SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 */
var /** @type {?} */ SELECT_ITEM_HEIGHT_EM = 3;
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * (SELECT_PANEL_PADDING_X * 1.5) + 20 = 44
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 20px.
 */
var /** @type {?} */ SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 20;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
var /** @type {?} */ SELECT_PANEL_VIEWPORT_PADDING = 8;
/**
 * Injection token that determines the scroll handling while a select is open.
 */
var /** @type {?} */ MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Change event object that is emitted when the select value has changed.
 */
var  /**
 * Change event object that is emitted when the select value has changed.
 */
MatSelectChange = /** @class */ (function () {
    function MatSelectChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatSelectChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatSelectBase = /** @class */ (function () {
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatSelectBase;
}());
var /** @type {?} */ _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
var MatSelectTrigger = /** @class */ (function () {
    function MatSelectTrigger() {
    }
    MatSelectTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"], args: [{
                    selector: 'mat-select-trigger'
                },] },
    ];
    return MatSelectTrigger;
}());
var MatSelect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSelect, _super);
    function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, _scrollStrategyFactory) {
        var _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._viewportRuler = _viewportRuler;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._ngZone = _ngZone;
        _this._dir = _dir;
        _this._parentFormField = _parentFormField;
        _this.ngControl = ngControl;
        _this._scrollStrategyFactory = _scrollStrategyFactory;
        /**
         * Whether or not the overlay panel is open.
         */
        _this._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */
        _this._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */
        _this._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */
        _this._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */
        _this._compareWith = function (o1, o2) { return o1 === o2; };
        /**
         * Unique id for this input.
         */
        _this._uid = "mat-select-" + nextUniqueId++;
        /**
         * Emits whenever the component is destroyed.
         */
        _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */
        _this._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */
        _this._onChange = function () { };
        /**
         * `View -> model callback called when select has been touched`
         */
        _this._onTouched = function () { };
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */
        _this._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */
        _this._transformOrigin = 'top';
        /**
         * Whether the panel's animation is done.
         */
        _this._panelDoneAnimating = false;
        /**
         * Emits when the panel element is finished transforming in.
         */
        _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Strategy that will be used to handle scrolling while the select panel is open.
         */
        _this._scrollStrategy = _this._scrollStrategyFactory();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        _this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        _this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */
        _this._disableOptionCentering = false;
        _this._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        _this.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */
        _this.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */
        _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(function () {
            if (_this.options) {
                return rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"].apply(void 0, _this.options.map(function (option) { return option.onSelectionChange; }));
            }
            return _this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () { return _this.optionSelectionChanges; }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */
        _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */
        _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) { return o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () { }));
        /**
         * Event emitted when the select has been closed.
         */
        _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) { return !o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () { }));
        /**
         * Event emitted when the selected value has been changed by the user.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        if (_this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this.ngControl.valueAccessor = _this;
        }
        _this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        return _this;
    }
    Object.defineProperty(MatSelect.prototype, "focused", {
        /** Whether the select is focused. */
        get: /**
         * Whether the select is focused.
         * @return {?}
         */
        function () {
            return this._focused || this._panelOpen;
        },
        /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * @deletion-target 8.0.0
         */
        set: /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * \@deletion-target 8.0.0
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "placeholder", {
        get: /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "required", {
        get: /**
         * Whether the component is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "multiple", {
        get: /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._selectionModel) {
                throw getMatSelectDynamicMultipleError();
            }
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "disableOptionCentering", {
        get: /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */
        function () { return this._disableOptionCentering; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "compareWith", {
        get: /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw getMatSelectNonFunctionValueError();
            }
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "value", {
        get: /**
         * Value of the select control.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (newValue !== this._value) {
                this.writeValue(newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "id", {
        get: /**
         * Unique id of the element.
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value || this._uid;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe(function () {
            if (_this.panelOpen) {
                _this._scrollTop = 0;
                _this.openedChange.emit(true);
            }
            else {
                _this.openedChange.emit(false);
                _this._panelDoneAnimating = false;
                _this.overlayDir.offsetX = 0;
                _this._changeDetectorRef.markForCheck();
            }
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initKeyManager(); /** @type {?} */
        ((this._selectionModel.onChange)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function (event) {
            event.added.forEach(function (option) { return option.select(); });
            event.removed.forEach(function (option) { return option.deselect(); });
        });
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
            _this._resetOptions();
            _this._initializeSelection();
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatSelect.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes["disabled"]) {
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    };
    /** Toggles the overlay panel open or closed. */
    /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    MatSelect.prototype.toggle = /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    /**
     * Opens the overlay panel.
     * @return {?}
     */
    MatSelect.prototype.open = /**
     * Opens the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
        }
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.
        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement)['font-size']);
        this._panelOpen = true;
        this._keyManager.withHorizontalOrientation(null);
        this._calculateOverlayPosition();
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        // Set the font size on the panel element once it exists.
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
            if (_this._triggerFontSize && _this.overlayDir.overlayRef &&
                _this.overlayDir.overlayRef.overlayElement) {
                _this.overlayDir.overlayRef.overlayElement.style.fontSize = _this._triggerFontSize + "px";
            }
        });
    };
    /** Closes the overlay panel and focuses the host element. */
    /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    MatSelect.prototype.close = /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    MatSelect.prototype.writeValue = /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    function (value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    MatSelect.prototype.registerOnChange = /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    MatSelect.prototype.registerOnTouched = /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    MatSelect.prototype.setDisabledState = /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    Object.defineProperty(MatSelect.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */
        function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "selected", {
        /** The currently selected option. */
        get: /**
         * The currently selected option.
         * @return {?}
         */
        function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: /**
         * The value displayed in the trigger.
         * @return {?}
         */
        function () {
            if (this.empty) {
                return '';
            }
            if (this._multiple) {
                var /** @type {?} */ selectedOptions = this._selectionModel.selected.map(function (option) { return option.viewValue; });
                if (this._isRtl()) {
                    selectedOptions.reverse();
                }
                // TODO(crisbeto): delimiter should be configurable for proper localization.
                return selectedOptions.join(', ');
            }
            return this._selectionModel.selected[0].viewValue;
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the element is in RTL mode. */
    /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    MatSelect.prototype._isRtl = /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    /** Handles all keydown events on the select. */
    /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleKeydown = /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    };
    /**
     * Handles keyboard events while the select is closed.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleClosedKeydown = /**
     * Handles keyboard events while the select is closed.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        var /** @type {?} */ isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"];
        var /** @type {?} */ isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"];
        // Open the select on ALT + arrow key to match the native <select>
        if (isOpenKey || ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            this._keyManager.onKeydown(event);
        }
    };
    /**
     * Handles keyboard events when the selected is open.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleOpenKeydown = /**
     * Handles keyboard events when the selected is open.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        var /** @type {?} */ isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"];
        var /** @type {?} */ manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
        }
        else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
        }
        else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]) && manager.activeItem) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["A"] && event.ctrlKey) {
            event.preventDefault();
            var /** @type {?} */ hasDeselectedOptions_1 = this.options.some(function (option) { return !option.selected; });
            this.options.forEach(function (option) { return hasDeselectedOptions_1 ? option.select() : option.deselect(); });
        }
        else {
            var /** @type {?} */ previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    };
    /**
     * When the panel content is done fading in, the _panelDoneAnimating property is
     * set so the proper class can be added to the panel.
     */
    /**
     * When the panel content is done fading in, the _panelDoneAnimating property is
     * set so the proper class can be added to the panel.
     * @return {?}
     */
    MatSelect.prototype._onFadeInDone = /**
     * When the panel content is done fading in, the _panelDoneAnimating property is
     * set so the proper class can be added to the panel.
     * @return {?}
     */
    function () {
        this._panelDoneAnimating = this.panelOpen;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MatSelect.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    MatSelect.prototype._onBlur = /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    function () {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    };
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    MatSelect.prototype._onAttached = /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    function () {
        var _this = this;
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
            _this._changeDetectorRef.detectChanges();
            _this._calculateOverlayOffsetX();
            _this.panel.nativeElement.scrollTop = _this._scrollTop;
        });
    };
    /** Returns the theme to be used on the panel. */
    /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    MatSelect.prototype._getPanelTheme = /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    function () {
        return this._parentFormField ? "mat-" + this._parentFormField.color : '';
    };
    Object.defineProperty(MatSelect.prototype, "empty", {
        /** Whether the select has a value. */
        get: /**
         * Whether the select has a value.
         * @return {?}
         */
        function () {
            return !this._selectionModel || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelect.prototype._initializeSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(function () {
            _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value);
        });
    };
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @param {?} value
     * @return {?}
     */
    MatSelect.prototype._setSelectionByValue = /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
            }
            this._selectionModel.clear();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
            this._sortValues();
        }
        else {
            this._selectionModel.clear();
            var /** @type {?} */ correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.setActiveItem(correspondingOption);
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Finds and selects and option based on its value.
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    MatSelect.prototype._selectValue = /**
     * Finds and selects and option based on its value.
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    function (value) {
        var _this = this;
        var /** @type {?} */ correspondingOption = this.options.find(function (option) {
            try {
                // Treat null as a special reset value.
                return option.value != null && _this._compareWith(option.value, value);
            }
            catch (/** @type {?} */ error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    };
    /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @return {?}
     */
    MatSelect.prototype._initKeyManager = /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            _this.focus();
            _this.close();
        });
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
            if (_this._panelOpen && _this.panel) {
                _this._scrollActiveOptionIntoView();
            }
            else if (!_this._panelOpen && !_this.multiple && _this._keyManager.activeItem) {
                _this._keyManager.activeItem._selectViaInteraction();
            }
        });
    };
    /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @return {?}
     */
    MatSelect.prototype._resetOptions = /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
            _this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !_this.multiple && _this._panelOpen) {
                _this.close();
                _this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"].apply(void 0, this.options.map(function (option) { return option._stateChanges; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
            .subscribe(function () {
            _this._changeDetectorRef.markForCheck();
            _this.stateChanges.next();
        });
        this._setOptionIds();
    };
    /**
     * Invoked when an option is clicked.
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    MatSelect.prototype._onSelect = /**
     * Invoked when an option is clicked.
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    function (option, isUserInput) {
        var /** @type {?} */ wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            this._propagateChanges(option.value);
        }
        else {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    };
    /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @return {?}
     */
    MatSelect.prototype._sortValues = /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @return {?}
     */
    function () {
        if (this.multiple) {
            var /** @type {?} */ options_1 = this.options.toArray();
            this._selectionModel.sort(function (a, b) { return options_1.indexOf(a) - options_1.indexOf(b); });
            this.stateChanges.next();
        }
    };
    /**
     * Emits change event to set the model value.
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatSelect.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        var /** @type {?} */ valueToEmit = null;
        if (this.multiple) {
            valueToEmit = (/** @type {?} */ (this.selected)).map(function (option) { return option.value; });
        }
        else {
            valueToEmit = this.selected ? (/** @type {?} */ (this.selected)).value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Records option IDs to pass to the aria-owns property.
     * @return {?}
     */
    MatSelect.prototype._setOptionIds = /**
     * Records option IDs to pass to the aria-owns property.
     * @return {?}
     */
    function () {
        this._optionIds = this.options.map(function (option) { return option.id; }).join(' ');
    };
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @return {?}
     */
    MatSelect.prototype._highlightCorrectOption = /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @return {?}
     */
    function () {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    };
    /**
     * Scrolls the active option into view.
     * @return {?}
     */
    MatSelect.prototype._scrollActiveOptionIntoView = /**
     * Scrolls the active option into view.
     * @return {?}
     */
    function () {
        var /** @type {?} */ activeOptionIndex = this._keyManager.activeItemIndex || 0;
        var /** @type {?} */ labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    };
    /** Focuses the select element. */
    /**
     * Focuses the select element.
     * @return {?}
     */
    MatSelect.prototype.focus = /**
     * Focuses the select element.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * Gets the index of the provided option in the option list.
     * @param {?} option
     * @return {?}
     */
    MatSelect.prototype._getOptionIndex = /**
     * Gets the index of the provided option in the option list.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayPosition = /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @return {?}
     */
    function () {
        var /** @type {?} */ itemHeight = this._getItemHeight();
        var /** @type {?} */ items = this._getItemCount();
        var /** @type {?} */ panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        var /** @type {?} */ scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        var /** @type {?} */ maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        var /** @type {?} */ selectedOptionOffset = this.empty ? 0 : /** @type {?} */ ((this._getOptionIndex(this._selectionModel.selected[0])));
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        var /** @type {?} */ scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    };
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayScroll = /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        var /** @type {?} */ itemHeight = this._getItemHeight();
        var /** @type {?} */ optionOffsetFromScrollTop = itemHeight * selectedIndex;
        var /** @type {?} */ halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        var /** @type {?} */ optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    };
    /** Returns the aria-label of the select component. */
    /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabel = /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    function () {
        // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
        // `aria-labelledby` value by setting the ariaLabel to the placeholder.
        return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
    };
    /** Returns the aria-labelledby of the select component. */
    /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabelledby = /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    function () {
        if (this.ariaLabelledby) {
            return this.ariaLabelledby;
        }
        // Note: we use `_getAriaLabel` here, because we want to check whether there's a
        // computed label. `this.ariaLabel` is only the user-specified label.
        if (!this._parentFormField || this._getAriaLabel()) {
            return null;
        }
        return this._parentFormField._labelId || null;
    };
    /** Determines the `aria-activedescendant` to be set on the host. */
    /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    MatSelect.prototype._getAriaActiveDescendant = /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    function () {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    };
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetX = /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @return {?}
     */
    function () {
        var /** @type {?} */ overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        var /** @type {?} */ isRtl = this._isRtl();
        var /** @type {?} */ paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        var /** @type {?} */ offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else {
            var /** @type {?} */ selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        var /** @type {?} */ leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        var /** @type {?} */ rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    };
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetY = /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        var /** @type {?} */ itemHeight = this._getItemHeight();
        var /** @type {?} */ optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        var /** @type {?} */ maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        var /** @type {?} */ optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this._disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            var /** @type {?} */ firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            var /** @type {?} */ selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            var /** @type {?} */ partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    };
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._checkOverlayWithinViewport = /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @param {?} maxScroll
     * @return {?}
     */
    function (maxScroll) {
        var /** @type {?} */ itemHeight = this._getItemHeight();
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        var /** @type {?} */ topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        var /** @type {?} */ bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        var /** @type {?} */ panelHeightTop = Math.abs(this._offsetY);
        var /** @type {?} */ totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        var /** @type {?} */ panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    };
    /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    MatSelect.prototype._adjustPanelUp = /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    function (panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        var /** @type {?} */ distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
        }
    };
    /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._adjustPanelDown = /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    function (panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        var /** @type {?} */ distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
        }
    };
    /**
     * Sets the transform origin point based on the selected option.
     * @return {?}
     */
    MatSelect.prototype._getOriginBasedOnOption = /**
     * Sets the transform origin point based on the selected option.
     * @return {?}
     */
    function () {
        var /** @type {?} */ itemHeight = this._getItemHeight();
        var /** @type {?} */ optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        var /** @type {?} */ originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return "50% " + originY + "px 0px";
    };
    /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @return {?}
     */
    MatSelect.prototype._getItemCount = /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @return {?}
     */
    function () {
        return this.options.length + this.optionGroups.length;
    };
    /**
     * Calculates the height of the select's options.
     * @return {?}
     */
    MatSelect.prototype._getItemHeight = /**
     * Calculates the height of the select's options.
     * @return {?}
     */
    function () {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatSelect.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this._ariaDescribedby = ids.join(' ');
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    MatSelect.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focus();
        this.open();
    };
    Object.defineProperty(MatSelect.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._panelOpen || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    MatSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{selector: 'mat-select',
                    exportAs: 'matSelect',
                    template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [class.mat-select-panel-done-animating]=\"_panelDoneAnimating\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><div class=\"mat-select-content\" [@fadeInContent]=\"'showing'\" (@fadeInContent.done)=\"_onFadeInDone()\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"],
                    inputs: ['disabled', 'disableRipple', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        '[attr.id]': 'id',
                        '[attr.tabindex]': 'tabIndex',
                        '[attr.aria-label]': '_getAriaLabel()',
                        '[attr.aria-labelledby]': '_getAriaLabelledby()',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                        '[class.mat-select-disabled]': 'disabled',
                        '[class.mat-select-invalid]': 'errorState',
                        '[class.mat-select-required]': 'required',
                        'class': 'mat-select',
                        '(keydown)': '_handleKeydown($event)',
                        '(focus)': '_onFocus()',
                        '(blur)': '_onBlur()',
                    },
                    animations: [
                        matSelectAnimations.transformPanel,
                        matSelectAnimations.fadeInContent
                    ],
                    providers: [
                        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"], useExisting: MatSelect },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                    ],
                },] },
    ];
    /** @nocollapse */
    MatSelect.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"], },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"], },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] },] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] },] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] },] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] },] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"], args: ['tabindex',] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] },] },
    ]; };
    MatSelect.propDecorators = {
        "trigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['trigger',] },],
        "panel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['panel',] },],
        "overlayDir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"],] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], { descendants: true },] },],
        "optionGroups": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"],] },],
        "panelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "customTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [MatSelectTrigger,] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "multiple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "disableOptionCentering": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "compareWith": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "ariaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-labelledby',] },],
        "errorStateMatcher": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        "openedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] },],
        "_openedStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['opened',] },],
        "_closedStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['closed',] },],
        "selectionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] },],
        "valueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] },],
    };
    return MatSelect;
}(_MatSelectMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatSelectModule = /** @class */ (function () {
    function MatSelectModule() {
    }
    MatSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                    ],
                    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
                    declarations: [MatSelect, MatSelectTrigger],
                    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
                },] },
    ];
    return MatSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=select.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/slide-toggle.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/slide-toggle.es5.js ***!
  \*****************************************************************/
/*! exports provided: MatSlideToggleModule, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggleBase, _MatSlideToggleMixinBase, MatSlideToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return MatSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return MatSlideToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleBase", function() { return MatSlideToggleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleMixinBase", function() { return _MatSlideToggleMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return MatSlideToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Increasing integer for generating unique ids for slide-toggle components.
var /** @type {?} */ nextUniqueId = 0;
var /** @type {?} */ MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatSlideToggle; }),
    multi: true
};
/**
 * Change event object emitted by a MatSlideToggle.
 */
var  /**
 * Change event object emitted by a MatSlideToggle.
 */
MatSlideToggleChange = /** @class */ (function () {
    function MatSlideToggleChange(source, checked) {
        this.source = source;
        this.checked = checked;
    }
    return MatSlideToggleChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatSlideToggleBase = /** @class */ (function () {
    function MatSlideToggleBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatSlideToggleBase;
}());
var /** @type {?} */ _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
/**
 * Represents a slidable "switch" toggle that can be moved between on and off.
 */
var MatSlideToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSlideToggle, _super);
    function MatSlideToggle(elementRef, /**
                   * @deprecated The `_platform` parameter to be removed.
                   * @deletion-target 7.0.0
                   */
    /**
     * @deprecated The `_platform` parameter to be removed.
     * @deletion-target 7.0.0
     */
    _platform, _focusMonitor, _changeDetectorRef, tabIndex, _ngZone, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._focusMonitor = _focusMonitor;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._ngZone = _ngZone;
        _this._animationMode = _animationMode;
        _this.onChange = function (_) { };
        _this.onTouched = function () { };
        _this._uniqueId = "mat-slide-toggle-" + ++nextUniqueId;
        _this._required = false;
        _this._checked = false;
        /**
         * Whether the thumb is currently being dragged.
         */
        _this._dragging = false;
        /**
         * Name value will be applied to the input element if present
         */
        _this.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */
        _this.id = _this._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'
         */
        _this.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */
        _this.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */
        _this.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatSlideToggle.prototype, "required", {
        get: /**
         * Whether the slide-toggle is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "checked", {
        get: /**
         * Whether the slide-toggle element is checked or not
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "inputId", {
        /** Returns the unique id for the visual hidden input. */
        get: /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSlideToggle.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._inputElement.nativeElement)
            .subscribe(function (focusOrigin) { return _this._onInputFocusChange(focusOrigin); });
    };
    /**
     * @return {?}
     */
    MatSlideToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
    };
    /** Method being called whenever the underlying input emits a change event. */
    /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    MatSlideToggle.prototype._onChangeEvent = /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        // Releasing the pointer over the `<label>` element while dragging triggers another
        // click event on the `<label>` element. This means that the checked state of the underlying
        // input changed unintentionally and needs to be changed back.
        if (this._dragging) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    };
    /** Method being called whenever the slide-toggle has been clicked. */
    /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    MatSlideToggle.prototype._onInputClick = /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatSlideToggle.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSlideToggle.prototype.registerOnChange = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSlideToggle.prototype.registerOnTouched = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /** Implemented as a part of ControlValueAccessor. */
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSlideToggle.prototype.setDisabledState = /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the slide-toggle. */
    /**
     * Focuses the slide-toggle.
     * @return {?}
     */
    MatSlideToggle.prototype.focus = /**
     * Focuses the slide-toggle.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
    };
    /** Toggles the checked state of the slide-toggle. */
    /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    MatSlideToggle.prototype.toggle = /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this.onChange(this.checked);
    };
    /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    MatSlideToggle.prototype._onInputFocusChange = /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    function (focusOrigin) {
        // TODO(paul): support `program`. See https://github.com/angular/material2/issues/9889
        if (!this._focusRipple && focusOrigin === 'keyboard') {
            // For keyboard focus show a persistent ripple as focus indicator.
            this._focusRipple = this._ripple.launch(0, 0, { persistent: true });
        }
        else if (!focusOrigin) {
            this.onTouched();
            // Fade out and clear the focus ripple if one is currently present.
            if (this._focusRipple) {
                this._focusRipple.fadeOut();
                this._focusRipple = null;
            }
        }
    };
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     * @return {?}
     */
    MatSlideToggle.prototype._emitChangeEvent = /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     * @return {?}
     */
    function () {
        this.onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    };
    /**
     * Retrieves the percentage of thumb from the moved distance. Percentage as fraction of 100.
     * @param {?} distance
     * @return {?}
     */
    MatSlideToggle.prototype._getDragPercentage = /**
     * Retrieves the percentage of thumb from the moved distance. Percentage as fraction of 100.
     * @param {?} distance
     * @return {?}
     */
    function (distance) {
        var /** @type {?} */ percentage = (distance / this._thumbBarWidth) * 100;
        // When the toggle was initially checked, then we have to start the drag at the end.
        if (this._previousChecked) {
            percentage += 100;
        }
        return Math.max(0, Math.min(percentage, 100));
    };
    /**
     * @return {?}
     */
    MatSlideToggle.prototype._onDragStart = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && !this._dragging) {
            var /** @type {?} */ thumbEl = this._thumbEl.nativeElement;
            this._thumbBarWidth = this._thumbBarEl.nativeElement.clientWidth - thumbEl.clientWidth;
            thumbEl.classList.add('mat-dragging');
            this._previousChecked = this.checked;
            this._dragging = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlideToggle.prototype._onDrag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._dragging) {
            this._dragPercentage = this._getDragPercentage(event.deltaX);
            // Calculate the moved distance based on the thumb bar width.
            var /** @type {?} */ dragX = (this._dragPercentage / 100) * this._thumbBarWidth;
            this._thumbEl.nativeElement.style.transform = "translate3d(" + dragX + "px, 0, 0)";
        }
    };
    /**
     * @return {?}
     */
    MatSlideToggle.prototype._onDragEnd = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._dragging) {
            var /** @type {?} */ newCheckedValue = this._dragPercentage > 50;
            if (newCheckedValue !== this.checked) {
                this.checked = newCheckedValue;
                this._emitChangeEvent();
            }
            // The drag should be stopped outside of the current event handler, otherwise the
            // click event will be fired before it and will revert the drag change.
            this._ngZone.runOutsideAngular(function () {
                return setTimeout(function () {
                    if (_this._dragging) {
                        _this._dragging = false;
                        _this._thumbEl.nativeElement.classList.remove('mat-dragging');
                        // Reset the transform because the component will take care
                        // of the thumb position after drag.
                        // Reset the transform because the component will take care
                        // of the thumb position after drag.
                        _this._thumbEl.nativeElement.style.transform = '';
                    }
                });
            });
        }
    };
    /** Method being called whenever the label text changes. */
    /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    MatSlideToggle.prototype._onLabelTextChange = /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    function () {
        // This method is getting called whenever the label of the slide-toggle changes.
        // Since the slide-toggle uses the OnPush strategy we need to notify it about the change
        // that has been recognized by the cdkObserveContent directive.
        this._changeDetectorRef.markForCheck();
    };
    MatSlideToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-slide-toggle',
                    exportAs: 'matSlideToggle',
                    host: {
                        'class': 'mat-slide-toggle',
                        '[id]': 'id',
                        '[class.mat-checked]': 'checked',
                        '[class.mat-disabled]': 'disabled',
                        '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    },
                    template: "<label class=\"mat-slide-toggle-label\" #label><div #toggleBar class=\"mat-slide-toggle-bar\" [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\"><input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [tabIndex]=\"tabIndex\" [checked]=\"checked\" [disabled]=\"disabled\" [attr.name]=\"name\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (change)=\"_onChangeEvent($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-slide-toggle-thumb-container\" #thumbContainer (slidestart)=\"_onDragStart()\" (slide)=\"_onDrag($event)\" (slideend)=\"_onDragEnd()\"><div class=\"mat-slide-toggle-thumb\"></div><div class=\"mat-slide-toggle-ripple\" mat-ripple [matRippleTrigger]=\"label\" [matRippleDisabled]=\"disableRipple || disabled\" [matRippleCentered]=\"true\" [matRippleRadius]=\"23\" [matRippleAnimation]=\"{enterDuration: 150}\"></div></div></div><span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\"><ng-content></ng-content></span></label>",
                    styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging,.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing;transition-duration:0s}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:solid 1px #000}}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-bar{background:#fff}}.mat-slide-toggle-input{bottom:0;left:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle-ripple{position:absolute;top:calc(50% - 23px);left:calc(50% - 23px);height:46px;width:46px;z-index:1;pointer-events:none}"],
                    providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                    inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatSlideToggle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] },] },
    ]; };
    MatSlideToggle.propDecorators = {
        "_thumbEl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['thumbContainer',] },],
        "_thumbBarEl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['toggleBar',] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "labelPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "ariaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] },],
        "_inputElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['input',] },],
        "_ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"],] },],
    };
    return MatSlideToggle;
}(_MatSlideToggleMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatSlideToggleModule = /** @class */ (function () {
    function MatSlideToggleModule() {
    }
    MatSlideToggleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"]],
                    exports: [MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                    declarations: [MatSlideToggle],
                    providers: [
                        { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"] }
                    ],
                },] },
    ];
    return MatSlideToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=slide-toggle.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/stepper.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/stepper.es5.js ***!
  \************************************************************/
/*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIntl, matStepperAnimations, MatStepperIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepLabel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepLabel, _super);
    function MatStepLabel(template) {
        return _super.call(this, template) || this;
    }
    MatStepLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matStepLabel]',
                },] },
    ];
    /** @nocollapse */
    MatStepLabel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
    ]; };
    return MatStepLabel;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepLabel"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
    return MatStepperIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepHeader = /** @class */ (function () {
    function MatStepHeader(_intl, _focusMonitor, _element, changeDetectorRef) {
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    /**
     * @return {?}
     */
    MatStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MatStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MatStepHeader.prototype._templateLabel = /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    MatStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._element.nativeElement;
    };
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    MatStepHeader.prototype._getIconContext = /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    function () {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    };
    /**
     * @return {?}
     */
    MatStepHeader.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._getHostElement().focus();
    };
    MatStepHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-step-header',
                    template: "<div class=\"mat-step-header-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div><div [class.mat-step-icon]=\"state !== 'number' || selected\" [class.mat-step-icon-not-touched]=\"state == 'number' && !selected\" [ngSwitch]=\"state\"><ng-container *ngSwitchCase=\"'number'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.number)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.number\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><span *ngSwitchDefault>{{index + 1}}</span></ng-container><ng-container *ngSwitchCase=\"'edit'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.edit)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.edit\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><mat-icon *ngSwitchDefault>create</mat-icon></ng-container><ng-container *ngSwitchCase=\"'done'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.done)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.done\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><mat-icon *ngSwitchDefault>done</mat-icon></ng-container></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional\">{{_intl.optionalLabel}}</div></div>",
                    styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box}.mat-step-optional{font-size:12px}.mat-step-icon,.mat-step-icon-not-touched{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex;flex-shrink:0}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    host: {
                        'class': 'mat-step-header',
                        'role': 'tab',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl, },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    ]; };
    MatStepHeader.propDecorators = {
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "iconOverrides": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "optional": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return MatStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 */
var /** @type {?} */ matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'none', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    MatStepperIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'ng-template[matStepperIcon]',
                },] },
    ];
    /** @nocollapse */
    MatStepperIcon.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
    ]; };
    MatStepperIcon.propDecorators = {
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matStepperIcon',] },],
    };
    return MatStepperIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStep = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStep, _super);
    function MatStep(stepper, _errorStateMatcher) {
        var _this = _super.call(this, stepper) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MatStep.prototype.isErrorState = /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        var /** @type {?} */ originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        var /** @type {?} */ customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    MatStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-step',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], useExisting: MatStep }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    exportAs: 'matStep',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStep.ctorParameters = function () { return [
        { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MatStepper; }),] },] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] },] },
    ]; };
    MatStep.propDecorators = {
        "stepLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatStepLabel,] },],
    };
    return MatStep;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStep"]));
var MatStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event emitted when the current step is done transitioning in.
         */
        _this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        _this._iconOverrides = {};
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ icons = this._icons.toArray();
        ['edit', 'done', 'number'].forEach(function (name) {
            var /** @type {?} */ override = icons.find(function (icon) { return icon.name === name; });
            if (override) {
                _this._iconOverrides[name] = override.templateRef;
            }
        });
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatStepper.prototype._animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((/** @type {?} */ (event.toState)) === 'current') {
            this.animationDone.emit();
        }
    };
    MatStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matStepper]'
                },] },
    ];
    /** @nocollapse */
    MatStepper.propDecorators = {
        "_stepHeader": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [MatStepHeader,] },],
        "_steps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStep,] },],
        "_icons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStepperIcon,] },],
        "animationDone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return MatStepper;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"]));
var MatHorizontalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHorizontalStepper, _super);
    function MatHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHorizontalStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-horizontal-stepper',
                    exportAs: 'matHorizontalStepper',
                    template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"_steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of _steps; let i = index\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-horizontal',
                        'aria-orientation': 'horizontal',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.horizontalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatHorizontalStepper }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    return MatHorizontalStepper;
}(MatStepper));
var MatVerticalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatVerticalStepper, _super);
    function MatVerticalStepper(dir, changeDetectorRef) {
        var _this = _super.call(this, dir, changeDetectorRef) || this;
        _this._orientation = 'vertical';
        return _this;
    }
    MatVerticalStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-vertical-stepper',
                    exportAs: 'matVerticalStepper',
                    template: "<div class=\"mat-step\" *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"_steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-vertical',
                        'aria-orientation': 'vertical',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.verticalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatVerticalStepper }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatVerticalStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    ]; };
    return MatVerticalStepper;
}(MatStepper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var MatStepperNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperNext, _super);
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'button[matStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }]
                },] },
    ];
    return MatStepperNext;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperNext"]));
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MatStepperPrevious = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperPrevious, _super);
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'button[matStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }]
                },] },
    ];
    return MatStepperPrevious;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperPrevious"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
    MatStepperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    ],
                    exports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    declarations: [
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    providers: [MatStepperIntl, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]],
                },] },
    ];
    return MatStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ })

}]);
//# sourceMappingURL=guarded-routes-guarded-routes-module-ngfactory~material-widgets-material-widgets-module-ngfactory~ta~d04c99ff.js.map