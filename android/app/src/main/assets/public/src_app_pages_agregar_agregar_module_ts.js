"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_agregar_agregar_module_ts"],{

/***/ 8511:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/agregar/agregar.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title>{{ lista.titulo }}</ion-title>\n    <ion-note slot=\"end\" color=\"tertiary\">{{ lista.items.length }} items</ion-note>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n  <ion-list color=\"dark\">\n    <ion-item color=\"dark\">\n      <ion-label position=\"floating\">Nueva Tarea</ion-label>\n      <ion-input type=\"text\" \n                 [(ngModel)]=\"nombreItem\"\n                 (keyup.enter)=\"agregarItem()\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header color=\"dark\" *ngIf=\"lista.items.length > 0\">\n      <ion-label>Tareas por hacer</ion-label>\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let item of lista.items; let i = index\"\n                      class=\"animated fadeInDown\">\n      <ion-item color=\"dark\">\n        <ion-checkbox slot=\"start\"\n                      color=\"tertiary\"\n                      [(ngModel)]=\"item.completado\"\n                      (ionChange)=\"cambioCheck(item)\"></ion-checkbox>\n        <ion-label>{{ item.desc }}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\" color=\"dark\">\n        <ion-item-option (click)=\"borrar( i )\" color=\"danger\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 5272:
/*!********************************************!*\
  !*** ./src/app/models/lista-item.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaItem": () => (/* binding */ ListaItem)
/* harmony export */ });
class ListaItem {
    constructor(desc) {
        this.desc = desc;
        this.completado = false;
    }
}


/***/ }),

/***/ 5649:
/*!*********************************************************!*\
  !*** ./src/app/pages/agregar/agregar-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPageRoutingModule": () => (/* binding */ AgregarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar.page */ 2718);




const routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_0__.AgregarPage
    }
];
let AgregarPageRoutingModule = class AgregarPageRoutingModule {
};
AgregarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarPageRoutingModule);



/***/ }),

/***/ 8557:
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPageModule": () => (/* binding */ AgregarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-routing.module */ 5649);
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar.page */ 2718);







let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarPageRoutingModule
        ],
        declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_1__.AgregarPage]
    })
], AgregarPageModule);



/***/ }),

/***/ 2718:
/*!***********************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPage": () => (/* binding */ AgregarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Erick_Desktop_proyectos_tareas_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agregar.page.html */ 8511);
/* harmony import */ var _agregar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar.page.scss */ 5780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_tareas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tareas.service */ 4378);
/* harmony import */ var _models_lista_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/lista-item.model */ 5272);







let AgregarPage = class AgregarPage {
    constructor(tareasService, route) {
        this.tareasService = tareasService;
        this.route = route;
        this.nombreItem = '';
        const listaId = this.route.snapshot.paramMap.get('listaId');
        // @ts-ignore
        this.lista = this.tareasService.obtenerLista(listaId);
    }
    ngOnInit() {
    }
    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new _models_lista_item_model__WEBPACK_IMPORTED_MODULE_3__.ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.nombreItem = '';
        this.tareasService.guardarStorage();
    }
    cambioCheck(item) {
        const pendientes = this.lista.items
            .filter(itemData => !itemData.completado)
            .length;
        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        }
        else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }
        this.tareasService.guardarStorage();
    }
    borrar(i) {
        this.lista.items.splice(i, 1);
        this.tareasService.guardarStorage();
    }
};
AgregarPage.ctorParameters = () => [
    { type: _services_tareas_service__WEBPACK_IMPORTED_MODULE_2__.TareasService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
AgregarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-agregar',
        template: _C_Users_Erick_Desktop_proyectos_tareas_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agregar_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarPage);



/***/ }),

/***/ 5780:
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_agregar_agregar_module_ts.js.map