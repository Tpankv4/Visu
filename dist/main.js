(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<button (click)=\"load()\">Load <i class=\"fa fa-folder-open\"></i></button>\n<button (click)=\"save()\">Save <i class=\"fa fa-save\"></i></button>\n\n<div class=\"modeler\">\n  <div id=\"canvas\"></div>\n  <div id=\"properties\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#properties {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 260px;\n  z-index: 10;\n  border-left: 1px solid #ccc;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx0aW1tcFxcRGVza3RvcFxcSGl3aVxcaGl3aTItbWFzdGVyXFxoaXdpMi1tYXN0ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sVUFBUztFQUNULFNBQVE7RUFDUixhQUFZO0VBQ1osWUFBVztFQUNYLDRCQUEyQjtFQUMzQixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvcGVydGllcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMjYwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpmn-js/bpmn-js */ "./src/app/bpmn-js/bpmn-js.ts");
/* harmony import */ var _props_provider_CustomPaletteProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./props-provider/CustomPaletteProvider */ "./src/app/props-provider/CustomPaletteProvider.ts");
/* harmony import */ var _services_winery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/winery.service */ "./src/app/services/winery.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var customModdle = {
    name: "customModdle",
    uri: "http://example.com/custom-moddle",
    prefix: "custom",
    xml: {
        tagAlias: "lowerCase"
    },
    associations: [],
    types: [
        {
            "name": "ExtUserTask",
            "extends": [
                "bpmn:UserTask"
            ],
            "properties": [
                {
                    "name": "worklist",
                    "isAttr": true,
                    "type": "String"
                }
            ]
        },
    ]
};
var AppComponent = /** @class */ (function () {
    function AppComponent(http, route, wineryService) {
        this.http = http;
        this.route = route;
        this.wineryService = wineryService;
        this.title = 'bpmn.io for Winery';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        this.modeler = new _bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["Modeler"]({
            container: '#canvas',
            width: '100%',
            height: '600px',
            additionalModules: [
                _bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["PropertiesPanelModule"],
                _bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["OriginalPropertiesProvider"],
                (_a = {}, _a[_bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["InjectionNames"].originalPaletteProvider] = ['type', _bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["OriginalPaletteProvider"]], _a),
                (_b = {}, _b[_bpmn_js_bpmn_js__WEBPACK_IMPORTED_MODULE_3__["InjectionNames"].paletteProvider] = ['type', _props_provider_CustomPaletteProvider__WEBPACK_IMPORTED_MODULE_4__["CustomPaletteProvider"]], _b),
            ],
            propertiesPanel: {
                parent: '#properties'
            },
            moddleExtension: {
                custom: customModdle
            }
        });
        this.route.queryParams.subscribe(function (params) { _this.wineryService.setRequestParam(params); });
        this.initiate();
    };
    AppComponent.prototype.handleError = function (err) {
        if (err) {
            console.warn('Ups, error: ', err);
        }
    };
    AppComponent.prototype.initiate = function () {
        var _this = this;
        var url = '/assets/bpmn/initial.bpmn';
        this.http.get(url, {
            headers: { observe: 'response' }, responseType: 'text'
        }).subscribe(function (x) {
            console.log('Fetched XML, now importing: ', x);
            _this.modeler.importXML(x, _this.handleError);
        }, this.handleError);
    };
    AppComponent.prototype.load = function () {
        this.wineryService.loadPlan2(this.modeler);
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        this.modeler.saveXML(function (err, xml) {
            console.log('Result of saving XML: ', err, xml);
            var temp = JSON.stringify(xml);
            _this.wineryService.save(temp);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_winery_service__WEBPACK_IMPORTED_MODULE_5__["WineryService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_winery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/winery.service */ "./src/app/services/winery.service.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/broadcast.service */ "./src/app/services/broadcast.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/http.service */ "./src/app/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([])
            ],
            providers: [_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"], _services_winery_service__WEBPACK_IMPORTED_MODULE_4__["WineryService"], _util_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bpmn-js/bpmn-js.ts":
/*!************************************!*\
  !*** ./src/app/bpmn-js/bpmn-js.ts ***!
  \************************************/
/*! exports provided: InjectionNames, Modeler, PropertiesPanelModule, EntryFactory, OriginalPaletteProvider, OriginalPropertiesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionNames", function() { return InjectionNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modeler", function() { return Modeler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPanelModule", function() { return PropertiesPanelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFactory", function() { return EntryFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginalPaletteProvider", function() { return OriginalPaletteProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginalPropertiesProvider", function() { return OriginalPropertiesProvider; });
/* harmony import */ var bpmn_js_dist_bpmn_modeler_production_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmn-js/dist/bpmn-modeler.production.min.js */ "./node_modules/bpmn-js/dist/bpmn-modeler.production.min.js");
/* harmony import */ var bpmn_js_dist_bpmn_modeler_production_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_dist_bpmn_modeler_production_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js-properties-panel */ "./node_modules/bpmn-js-properties-panel/index.js");
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmn_js_properties_panel_lib_provider_bpmn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js-properties-panel/lib/provider/bpmn */ "./node_modules/bpmn-js-properties-panel/lib/provider/bpmn/index.js");
/* harmony import */ var bpmn_js_properties_panel_lib_provider_bpmn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel_lib_provider_bpmn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmn_js_properties_panel_lib_factory_EntryFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-js-properties-panel/lib/factory/EntryFactory */ "./node_modules/bpmn-js-properties-panel/lib/factory/EntryFactory.js");
/* harmony import */ var bpmn_js_properties_panel_lib_factory_EntryFactory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel_lib_factory_EntryFactory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bpmn_js_lib_features_palette_PaletteProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmn-js/lib/features/palette/PaletteProvider */ "./node_modules/bpmn-js/lib/features/palette/PaletteProvider.js");
// import _Modeler from 'bpmn-js/lib/Modeler.js';





var InjectionNames = {
    eventBus: 'eventBus',
    bpmnFactory: 'bpmnFactory',
    elementRegistry: 'elementRegistry',
    translate: 'translate',
    propertiesProvider: 'propertiesProvider',
    bpmnPropertiesProvider: 'bpmnPropertiesProvider',
    paletteProvider: 'paletteProvider',
    originalPaletteProvider: 'originalPaletteProvider',
};
var Modeler = bpmn_js_dist_bpmn_modeler_production_min_js__WEBPACK_IMPORTED_MODULE_0__;
var PropertiesPanelModule = bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__;
var EntryFactory = bpmn_js_properties_panel_lib_factory_EntryFactory__WEBPACK_IMPORTED_MODULE_3__;
var OriginalPaletteProvider = bpmn_js_lib_features_palette_PaletteProvider__WEBPACK_IMPORTED_MODULE_4__["default"];
var OriginalPropertiesProvider = bpmn_js_properties_panel_lib_provider_bpmn__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "./src/app/props-provider/CustomPaletteProvider.ts":
/*!*********************************************************!*\
  !*** ./src/app/props-provider/CustomPaletteProvider.ts ***!
  \*********************************************************/
/*! exports provided: CustomPaletteProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaletteProvider", function() { return CustomPaletteProvider; });
var CustomPaletteProvider = /** @class */ (function () {
    // Note that names of arguments must match injected modules, see InjectionNames.
    // I don't know why originalPaletteProvider matters but it breaks if it isn't there.
    // I guess since this component is injected, and it requires an instance of originalPaletteProvider,
    // originalPaletteProvider will be new'ed and thus call palette.registerProvider for itself.
    // There probably is a better way.
    function CustomPaletteProvider(palette, originalPaletteProvider, elementFactory) {
        this.palette = palette;
        this.originalPaletteProvider = originalPaletteProvider;
        // console.log(this.constructor.name, "constructing", palette, originalPaletteProvider);
        palette.registerProvider(this);
        this.elementFactory = elementFactory;
    }
    CustomPaletteProvider.prototype.getPaletteEntries = function () {
        var _this = this;
        // console.log(this.constructor.name, "getPaletteEntries", this.palette, this.originalPaletteProvider);
        return {
            save: {
                group: 'tools',
                className: ['fa-save', 'fa'],
                title: 'TEST',
                action: {
                    click: function () { return console.log('TEST Action clicked! Elementfactory: ', _this.elementFactory); }
                }
            }
        };
    };
    CustomPaletteProvider.$inject = ['palette', 'originalPaletteProvider', 'elementFactory'];
    return CustomPaletteProvider;
}());



/***/ }),

/***/ "./src/app/services/broadcast.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/broadcast.service.ts ***!
  \***********************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

/*******************************************************************************
 * Copyright (c) 2017 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *******************************************************************************/


/**
 * BroadcastService
 * All of the observable subject should be registered to this service.
 * It provider a broadcast method to broadcast data. the broadcast method would catch error while broadcasting.
 */
var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this.jsPlumbInstance = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.jsPlumbInstance$ = this.jsPlumbInstance.asObservable();
        this.showProperty = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showProperty$ = this.showProperty.asObservable();
        this.planModel = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.planModel$ = this.planModel.asObservable();
        this.saveEvent = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.saveEvent$ = this.saveEvent.asObservable();
        this.nodeProperty = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nodeProperty$ = this.nodeProperty.asObservable();
    }
    /**
     * broadcast datas
     * this method will catch the exceptions for the broadcast
     * @param subject will broadcast data
     * @param data will be broadcated
     */
    BroadcastService.prototype.broadcast = function (subject, data) {
        try {
            subject.next(data);
        }
        catch (err) {
            console.error(err);
        }
    };
    BroadcastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BroadcastService);
    return BroadcastService;
}());



/***/ }),

/***/ "./src/app/services/winery.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/winery.service.ts ***!
  \********************************************/
/*! exports provided: WineryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineryService", function() { return WineryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/http.service */ "./src/app/util/http.service.ts");
/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broadcast.service */ "./src/app/services/broadcast.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*******************************************************************************
 * Copyright (c) 2017-2019 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *******************************************************************************/





/**
 * WineryService
 * provides operation about winery. It can load and save data from winery.
 */
var WineryService = /** @class */ (function () {
    function WineryService(broadcastService, httpService) {
        var _this = this;
        this.broadcastService = broadcastService;
        this.httpService = httpService;
        this.broadcastService.saveEvent$.subscribe(function (data) { return _this.save(data); });
    }
    WineryService.prototype.setRequestParam = function (queryParams) {
        this.repositoryURL = queryParams.repositoryURL;
        this.namespace = queryParams.namespace;
        this.serviceTemplateId = queryParams.id;
        this.plan = queryParams.plan;
        if (this.repositoryURL) {
            this.loadPlan();
        }
    };
    WineryService.prototype.save = function (data) {
        console.log(data);
        console.log(this.namespace);
        var url = 'servicetemplates/' + this.encode(this.namespace)
            + '/' + this.encode(this.serviceTemplateId) + '/plans/' + this.encode(this.plan) + '/file';
        var xml;
        xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
            '<bpmn:process id="Process_1" isExecutable="false">\n' +
            '<bpmn:startEvent id="StartEvent_1">\n' +
            '<bpmn:outgoing>SequenceFlow_0e3dski</bpmn:outgoing>\n' +
            '</bpmn:startEvent>\n' +
            '<bpmn:intermediateThrowEvent id="IntermediateThrowEvent_14m4gg5">\n' +
            '<bpmn:incoming>SequenceFlow_0e3dski</bpmn:incoming>\n' +
            '</bpmn:intermediateThrowEvent>\n' +
            '<bpmn:sequenceFlow id="SequenceFlow_0e3dski" sourceRef="StartEvent_1" targetRef="IntermediateThrowEvent_14m4gg5" />\n' +
            '</bpmn:process>\n' +
            '<bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
            '<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
            '<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds x="173" y="102" width="36" height="36" />\n' +
            '</bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_14m4gg5_di" bpmnElement="IntermediateThrowEvent_14m4gg5">\n' +
            '<dc:Bounds x="358" y="135" width="36" height="36" />\n' +
            '</bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0e3dski_di" bpmnElement="SequenceFlow_0e3dski">\n' +
            '<di:waypoint x="209" y="120" />\n' +
            '<di:waypoint x="284" y="120" />\n' +
            '<di:waypoint x="284" y="153" />\n' +
            '<di:waypoint x="358" y="153" />\n' +
            '</bpmndi:BPMNEdge>\n' +
            '</bpmndi:BPMNPlane>\n' +
            '</bpmndi:BPMNDiagram>\n' +
            '</bpmn:definitions>';
        console.log(JSON.stringify(xml));
        var requestData = '-----------------------------7da24f2e50046\r\n'
            + 'Content-Disposition: form-data; name=\"file\"; filename=\"file.json\"\r\n'
            + 'Content-type: plain/text\r\n\r\n'
            + data + '\r\n-----------------------------7da24f2e50046--\r\n';
        console.log(this.getFullUrl(url));
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, "text/xml");
        console.log(xmlDoc);
        console.log(xmlDoc.getElementsByTagName('bpmn:startEvent'));
        console.log(xmlDoc.getElementsByTagName('bpmn:sequenceFlow')[0].getAttribute('sourceRef'));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data; boundary=---------------------------7da24f2e50046' });
        this.httpService.put(this.getFullUrl(url), requestData, { headers: headers })
            .subscribe(function (response) { return console.log('save date success'); });
    };
    WineryService.prototype.loadPlan = function () {
        var _this = this;
        var url = 'servicetemplates/' + this.encode(this.namespace)
            + '/' + this.encode(this.serviceTemplateId) + '/plans/' + this.encode(this.plan) + '/file';
        this.httpService.get(this.getFullUrl(url)).subscribe(function (response) {
            var nodes = JSON.stringify(response) === '{}' ? [] : response;
            console.log(_this.broadcastService.planModel);
            console.log(nodes);
            _this.broadcastService.broadcast(_this.broadcastService.planModel, nodes);
            console.log("hier");
            return nodes;
        });
    };
    WineryService.prototype.loadPlan2 = function (modeler) {
        var _this = this;
        var url = 'servicetemplates/' + this.encode(this.namespace)
            + '/' + this.encode(this.serviceTemplateId) + '/plans/' + this.encode(this.plan) + '/file';
        this.httpService.get(this.getFullUrl(url)).subscribe(function (response) {
            var nodes = JSON.stringify(response) === '{}' ? [] : response;
            console.log(_this.broadcastService.planModel);
            console.log(nodes);
            _this.broadcastService.broadcast(_this.broadcastService.planModel, nodes);
            console.log("hier");
            modeler.importXML(nodes);
            return nodes;
        });
    };
    WineryService.prototype.encode = function (param) {
        return encodeURIComponent(encodeURIComponent(param));
    };
    WineryService.prototype.getFullUrl = function (relativePath) {
        return this.repositoryURL + relativePath;
    };
    WineryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broadcast_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"],
            _util_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], WineryService);
    return WineryService;
}());



/***/ }),

/***/ "./src/app/util/http.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*******************************************************************************
 * Copyright (c) 2017-2018 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *******************************************************************************/


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (uri) {
        return this.http.get(uri);
    };
    HttpService.prototype.put = function (uri, data, options) {
        return this.http.put(uri, data, options);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\timmp\Desktop\Hiwi\hiwi2-master\hiwi2-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map