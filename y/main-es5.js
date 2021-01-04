function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- open poss....\n<ul>\n  <li (click)=\"moditem(item.id)\" *ngFor=\"let item of items | async\">{{item.Nome}}</li>\n</ul>\n\n<button (click)=\"addItem()\">Add</button>\n<br>\n<input type=\"text\" (change)=\"findItem(telSrc)\" [(ngModel)]=\"telSrc\"> -->\n<div fxLayout=\"row\" style=\"height: 100%;\">\n  <div fxLayout=\"column\" style=\"width: 80px; height: 100%;\" fxLayoutAlign=\"start center\">\n    <a routerLink=\"/cassa\" class=\"menuIcon\" routerLinkActive=\"active\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <fa-icon icon=\"cash-register\"></fa-icon>\n    </a>\n    <a routerLink=\"/utenti\" class=\"menuIcon\" routerLinkActive=\"active\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <fa-icon icon=\"users\"></fa-icon>\n    </a>\n    <a routerLink=\"/impostazioni\" class=\"menuIcon\" routerLinkActive=\"active\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <fa-icon icon=\"cogs\"></fa-icon>\n    </a>\n    <div fxFlex fxLayoutAlign=\"center end\">\n      <img src=\"../assets/logo.png\" width=\"80%\" style=\"margin-bottom: 10px;\">\n    </div>\n  </div>\n  <div fxLayout=\"column\" style=\"width: calc(100% - 80px); height: 100%;\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calcolatore/calcolatore.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calcolatore/calcolatore.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalcolatoreCalcolatoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" style=\"height: 100%;width: 100%;\" fxLayoutGap=\"10px\">\n    <div fxFlex=\"full ? 80 : 100\" fxLayout=\"column\" fxLayoutGap=\"10px\" style=\"height: 100%;\">\n        <div style=\"height: 25%; width: 100%; margin-top: 30px;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(7)\"  fxLayoutAlign=\"center center\">7</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(8)\" fxLayoutAlign=\"center center\">8</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(9)\" fxLayoutAlign=\"center center\">9</div>\n        </div>\n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(4)\" fxLayoutAlign=\"center center\">4</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(5)\" fxLayoutAlign=\"center center\">5</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(6)\" fxLayoutAlign=\"center center\">6</div>\n        </div>\n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(1)\" fxLayoutAlign=\"center center\">1</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(2)\" fxLayoutAlign=\"center center\">2</div>\n            <div fxFlex=\"33\" class=\"calcBtn\" (click)=\"clickNum(3)\" fxLayoutAlign=\"center center\">3</div>\n        </div>\n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"full ? 66 : 100\" class=\"calcBtn\" (click)=\"clickNum(0)\" fxLayoutAlign=\"center center\">0</div>\n        </div>\n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\" *ngIf=\"!full\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"canc()\" fxLayoutAlign=\"center center\">C</div>\n        </div> \n    </div>\n    <div fxFlex=\"20\" fxLayout=\"column\" fxLayoutGap=\"10px\" style=\"height: 100%;\" *ngIf=\"full\">\n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"canc()\" fxLayoutAlign=\"center center\">C</div>\n        </div> \n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"sub()\" fxLayoutAlign=\"center center\">-</div>\n        </div> \n        <div style=\"height: 25%; width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"multi()\" fxLayoutAlign=\"center center\">X</div>\n        </div>  \n        <div style=\"width: 100%;height: 25%\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"sum('varie')\" fxLayoutAlign=\"center center\">+</div>\n        </div> \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cassa/cassa.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cassa/cassa.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCassaCassaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" style=\"width: 100%; height: 40px; background-color:#fff; padding:10px;\">\n    <input style=\"width: 0px;padding: 0px;border: 0px;\"  id=\"txtcardinput\" type=\"text\" [(ngModel)]=\"cardSrc\" (keyup.enter)=\"cercaUtente(cardSrc)\" >\n    <div fxFlex fxLayoutAlign=\"start center\" *ngIf=\"userSelected\">Carta numero {{usercardNo}} di {{userSelected.Nome}} {{userSelected.Cognome}} SALDO CARTA {{userSelectedSaldo | currency:'€'}}</div>\n    <div fxFlex fxLayoutAlign=\"end center\"> <mat-icon>settings</mat-icon></div>\n</div>\n<div fxLayout=\"row\" style=\"width: 100%; height: calc(100% - 40px); background-color:#f5f5f5; padding:10px;\" fxLayoutGap=\"10px\">\n    <div fxLayout=\"column\" fxFlex=\"40\" fxLayoutGap=\"10px\">\n        <div class=\"display\">\n            {{displayText}}\n        </div>\n        <calcolatore fxFlex (display)=\"displayText = $event\" (calcEv)=\"sum($event,'varie')\"></calcolatore>\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"26\" fxLayoutGap=\"10px\" style=\"overflow-y: scroll;\">\n        <div style=\"width: 100%;height: 16%; min-height: 100px;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"sumPreset(this.displayText,'varie')\" fxLayoutAlign=\"center center\">Varie</div>\n        </div>\n        <div *ngFor=\"let listItem of listino | async\" style=\"width: 100%;height: 16%; min-height: 100px;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"sumPreset(listItem.importo, listItem.tag)\" fxLayoutAlign=\"center center\">{{listItem.descrizione}}</div>\n        </div> \n    </div>\n    <div fxLayout=\"column\" fxFlex=\"27\" fxLayoutGap=\"10px\" >\n        <div class=\"prevTotale\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n           € {{calcVal.toFixed(2).replace('.',',')}}\n        </div>\n        <div style=\"width: 100%;height: 16%;min-height: 100px;\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <div fxFlex=\"200\" class=\"calcBtn\" (click)=\"addebita()\" style=\"background-color: #5fbd7f;border-color: #fff;color: #404040;\" fxLayoutAlign=\"center center\">Addebita</div>\n        </div>\n        <div *ngIf=\"totItem > 0\" style=\"width: 100%;padding:10px;background-color: #fff;overflow-y: scroll;\" fxLayout=\"column\" fxLayoutGap=\"5px\">\n            <div class=\"itemScontrino\" fxLayout=\"row\" *ngFor=\"let item of importi | async\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"30\">{{item.tag}}</div>\n                <div fxFlex=\"50\"> € {{item.importo.toFixed(2).replace('.',',')}}</div>\n                <div fxFlex fxLayoutAlign=\"end center\" style=\"cursor: pointer;\" (click)=\"remove(item)\"> \n                    <div style=\"font-size: 20px;color:#ff0000;\">x</div>\n                </div>\n            </div>\n        </div>\n    </div> \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-detail/card-detail.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-detail/card-detail.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtentiCardDetailCardDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>\n  <span class=\"material-icons\">\n  credit_card\n  </span>\n  {{card.IdCard}}\n</h1>\n\n<mat-dialog-content>\n  <div mat-line>\n    <span class=\"material-icons\">\n      receipt_long\n      </span>\n    <b>Movimenti</b>\n  </div>\n  <div *ngIf=\"card.Movimenti.length > 0; else nomovimenti\" mat-dialog-content>\n    <mat-list>\n      <mat-list-item *ngFor=\"let mov of card.Movimenti\">\n        <div mat-line>\n          {{mov.Data.toDate() | date: 'dd/MM/yyyy'}} - {{mov.Importo | currency: '€'}}\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <ng-template #nomovimenti>\n    nessun movimento presente\n  </ng-template>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-edit/card-edit.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-edit/card-edit.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtentiCardEditCardEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{titolo}}</h1>\n<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width: 300px;\">\n  <input style=\"height: 30px;width: 100%;margin-bottom: 20px;\" type=\"text\" [(ngModel)]=\"cardNumber\" placeholder=\"inserisci numero carta\" [disabled]=\"disableInput\">\n  <input style=\"height: 30px;text-align: right;\" type=\"text\" [(ngModel)]=\"importo\" placeholder=\"\">\n  <calcolatore style=\"width: 100%; margin-top:30px;\" [tipo]=\"'noop'\" (display)=\"importo = $event\"></calcolatore>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button color=\"warn\" [disabled]=\"!cardNumber\" (click)=\"salvaCard()\">{{btnName}}</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtentiDettaglioUtentiDettaglioUtentiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Utente</h1>\n<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width: 300px;\">\n    <div fxLayout=\"column\" *ngIf=\"usrObj\">\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Nome</mat-label>\n            <input matInput [(ngModel)]=\"usrObj.Nome\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Cognome</mat-label>\n            <input matInput [(ngModel)]=\"usrObj.Cognome\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Numero di telefono</mat-label>\n            <input matInput [(ngModel)]=\"usrObj.Telefono\">\n        </mat-form-field>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/utenti.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/utenti.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtentiUtentiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\"\n    style=\"width: 100%; height: 100%; background-color:#f5f5f5; padding:0px;\"\n    fxLayoutGap=\"10px\">\n    <!-- <div fxLayout=\"row\" style=\"width: 100%; height: 80px; background-color:#fff; padding:10px;\">\n        <mat-form-field floatLabel='never'>\n            <mat-label>Ricerca</mat-label>\n            <input matInput placeholder=\"Ex. Pizza\" [(ngModel)]=\"srcObj.Nome\">\n        </mat-form-field>\n    </div> -->\n    <div fxLayout=\"row\">\n        <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n            <div style=\"padding-top:20px;\" fxLayoutAlign=\"start center\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <input  style=\"width: 0px;padding: 0px;border: 0px;\" \n                (keyup.enter)=\"cercaUtente(srcNumeroCarta)\" \n                id=\"inputCard\" \n                [(ngModel)]=\"srcNumeroCarta\" type=\"text\">\n                <button mat-stroked-button (click)=\"setCercaCard()\" >Cerca Card</button>\n            </div>\n        </div>\n        <div fxFlex fxLayoutAlign=\"end center\">\n            <fa-icon (click)=\"addusr()\"style=\"font-size: 32px;margin-right: 20px;\" icon=\"user-plus\"></fa-icon> \n        </div>\n    </div>\n    <div fxLayout=\"column\" style=\"padding: 10px; padding-top:20px;\">\n        <div fxLayout=\"column\" class=\"userBox\" *ngIf=\"newUserRow\">\n            <div fxLayout=\"row\">\n                <div class=\"userAvatar\">{{newUsr.Nome.charAt(0)}}{{newUsr.Cognome.charAt(0)}}</div>\n                <div fxFlex fxLayout=\"column\" style=\"margin-left: 10px;\">\n                    <div  fxLayout=\"row\" fxLayoutGap=\"10px\"> \n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>Nome</mat-label>\n                            <input id=\"Nome\" matInput \n                            (focus)=\"onInputFocus($event)\"\n                            (change)=\"onInputChange($event)\"\n                            [(ngModel)]=\"newUsr.Nome\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>Cognome</mat-label>\n                            <input id=\"Cognome\" matInput \n                            (focus)=\"onInputFocus($event)\"\n                            (change)=\"onInputChange($event)\"\n                            [(ngModel)]=\"newUsr.Cognome\">\n                        </mat-form-field>\n                     </div>\n                    <div style=\"margin-top: -10px;margin-left: -25px;\"> \n                        <mat-icon style=\"font-size:13px;\">phone</mat-icon> \n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>Telefono</mat-label>\n                            <input id=\"Telefono\" matInput \n                            (focus)=\"onInputFocus($event)\"\n                            (change)=\"onInputChange($event)\"\n                            [(ngModel)]=\"newUsr.Telefono\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div fxFlex=\"10\" fxLayoutAlign=\"end start\">\n                    <button mat-icon-button (click)=\"closeNew()\">\n                        <fa-icon  style=\"color: #a83939;font-size: 30px;\" icon=\"times\"></fa-icon>\n                    </button>\n                </div>\n            </div>\n            <div fxLayout=\"row\">\n                <button style=\"width: 100%;\" mat-flat-button color=\"primary\" (click)=\"aggiungiUtente()\" >Salva</button>\n            </div>\n        </div>\n        <div fxLayout=\"column\" *ngFor=\"let utente of utenti | async\" class=\"userBox\">\n            <div fxLayout=\"row\" (click)=\"getDettaglio(utente)\">\n                <div class=\"userAvatar\">{{utente.Nome.charAt(0)}}{{utente.Cognome.charAt(0)}}</div>\n                <div fxFlex fxLayout=\"column\" style=\"margin-left: 10px;\">\n                    <div> {{utente.Nome}} {{utente.Cognome}}</div>\n                    <div style=\"margin-top: 10px;\"> \n                        <mat-icon style=\"font-size:13px;\">phone</mat-icon> \n                        {{utente.Telefono}}\n                    </div>\n                </div>\n                <div fxFlex=\"10\" fxLayoutAlign=\"end center\">\n                    <button mat-icon-button (click)=\"elimina(utente.id)\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"cardContainer\" *ngIf=\"utente.id == userIdOpen\">\n                <div fxFlex=\"30\" fxLayout=\"column\" *ngFor=\"let card of utente.Carte; let l = last; let im = index\" class=\"cardItem\">\n                    <div fxLayout=\"row\" fxFlex=\"33\" fxFlexAlign=\"center start\">\n                        <div fxFlex style=\"font-size: 24px;margin-top:12px;\">{{card.IdCard}}</div>\n                        <div fxLayout=\"row\" fxFlexAlign=\"center center\" style=\"width: 60px; font-size: 22px;cursor: pointer;\" (click)=\"deleteCard(card, utente.Carte, utente.id)\"> \n                            <fa-icon style=\"text-align: center;width: 100%;margin-top: 12px;color: #a83939;\" icon=\"trash\"></fa-icon>\n                        </div>\n                    </div>\n                    <div fxLayout=\"row\" fxFlex=\"33\"  style=\"font-size: 40px;;\" fxFlexAlign=\"center start\" (click)=\"apriCard(card)\">\n                        {{SaldoCarta(card.Movimenti) | currency: '€'}}\n                    </div>\n                    <div fxLayout=\"row\" style=\"width: 100%;margin-top: 20px;\">\n                        <button style=\"width: 100%;\" mat-flat-button color=\"primary\" (click)=\"cardEdit(utente, card)\" >Ricarica Card</button>\n                    </div>\n                </div>\n                <div fxFlex=\"30\" fxLayout=\"column\" class=\"cardItem\" fxLayoutAlign=\"center center\" (click)=\"cardEdit(utente, null)\">\n                    <fa-icon style=\"font-size: 40px;\" icon=\"plus\"></fa-icon> \n                </div>\n            </div>\n            <!-- <mat-card class=\"carte\" *ngIf=\"l\" (click)=\"nuovaCard(utente)\">+</mat-card> -->\n        </div>\n    </div>\n</div>\n<div class=\"simple-keyboard\" [hidden]=\"keyboardHidden\" style=\"position: absolute; z-index: 99999; bottom: 0px;\nheight: 30%; width: 100%;min-height: 240px;left: 0px;\"></div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cassa_cassa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cassa/cassa.component */
    "./src/app/cassa/cassa.component.ts");
    /* harmony import */


    var _utenti_utenti_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utenti/utenti.component */
    "./src/app/utenti/utenti.component.ts");

    var routes = [{
      path: '',
      component: _cassa_cassa_component__WEBPACK_IMPORTED_MODULE_3__["CassaComponent"]
    }, {
      path: 'cassa',
      component: _cassa_cassa_component__WEBPACK_IMPORTED_MODULE_3__["CassaComponent"]
    }, {
      path: 'utenti',
      component: _utenti_utenti_component__WEBPACK_IMPORTED_MODULE_4__["UtentiComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menuIcon {\n  font-size: 30px;\n  cursor: pointer;\n  width: 100%;\n  height: 80px;\n  color: #333333;\n}\n\n.active {\n  background-color: whitesmoke;\n  color: #414141;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2NoaW8vRGVza3RvcC9vcGVucG9zL29wZW5wb3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51SWNvbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICBjb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xufSIsIi5tZW51SWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjNDE0MTQxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(firestore) {
        _classCallCheck(this, AppComponent);

        this.firestore = firestore;
        this.title = 'openpos';
        this.telSrc = '';
        firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().enablePersistence(); // this.items = firestore.collection('user').snapshotChanges().pipe( map(actions => actions.map(a => {
        //   const data = a.payload.doc.data() as any;
        //   const id = a.payload.doc.id;
        //   return { id, ...data };
        // })))
        // this.firestore.collection('user').get().subscribe( p => {
        //   p.docs.forEach(k => {
        //     console.log(k.id)
        //   })
        // })
      }

      _createClass(AppComponent, [{
        key: "addItem",
        value: function addItem() {
          var p = {
            Nome: 'Giovanni',
            Cognome: 'Cosi',
            Telefono: '1212121221'
          };
          this.firestore.collection('user').add(p);
        }
      }, {
        key: "moditem",
        value: function moditem(id) {
          this.firestore.collection('user').doc(id).update({
            Nome: 'GGGGG'
          }).then(function (r) {});
        }
      }, {
        key: "findItem",
        value: function findItem(serch) {
          this.items = this.firestore.collection('user', function (q) {
            return q.where('Telefono', '>=', serch);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _cassa_cassa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cassa/cassa.component */
    "./src/app/cassa/cassa.component.ts");
    /* harmony import */


    var _utenti_utenti_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./utenti/utenti.component */
    "./src/app/utenti/utenti.component.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _mat_module_mat_module_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./mat-module/mat-module.module */
    "./src/app/mat-module/mat-module.module.ts");
    /* harmony import */


    var _utenti_card_detail_card_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./utenti/card-detail/card-detail.component */
    "./src/app/utenti/card-detail/card-detail.component.ts");
    /* harmony import */


    var _utenti_card_edit_card_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./utenti/card-edit/card-edit.component */
    "./src/app/utenti/card-edit/card-edit.component.ts");
    /* harmony import */


    var _calcolatore_calcolatore_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./calcolatore/calcolatore.component */
    "./src/app/calcolatore/calcolatore.component.ts");
    /* harmony import */


    var _utenti_dettaglio_utenti_dettaglio_utenti_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./utenti/dettaglio-utenti/dettaglio-utenti.component */
    "./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.ts");

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["fas"]);
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconLibrary"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _cassa_cassa_component__WEBPACK_IMPORTED_MODULE_11__["CassaComponent"], _utenti_utenti_component__WEBPACK_IMPORTED_MODULE_12__["UtentiComponent"], _utenti_card_detail_card_detail_component__WEBPACK_IMPORTED_MODULE_18__["CardDetailComponent"], _utenti_utenti_component__WEBPACK_IMPORTED_MODULE_12__["DialogContentCard"], _utenti_card_edit_card_edit_component__WEBPACK_IMPORTED_MODULE_19__["CardEditComponent"], _calcolatore_calcolatore_component__WEBPACK_IMPORTED_MODULE_20__["CalcolatoreComponent"], _utenti_dettaglio_utenti_dettaglio_utenti_component__WEBPACK_IMPORTED_MODULE_21__["DettaglioUtentiComponent"]],
      imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _mat_module_mat_module_module__WEBPACK_IMPORTED_MODULE_17__["CustomMaterialModule"]],
      entryComponents: [_utenti_utenti_component__WEBPACK_IMPORTED_MODULE_12__["DialogContentCard"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/calcolatore/calc.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/calcolatore/calc.service.ts ***!
    \*********************************************/

  /*! exports provided: CalcService */

  /***/
  function srcAppCalcolatoreCalcServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalcService", function () {
      return CalcService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! events */
    "./node_modules/events/events.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);

    var CalcService = /*#__PURE__*/function () {
      function CalcService() {
        _classCallCheck(this, CalcService);

        this.resetEv = new events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(CalcService, [{
        key: "resetCalc",
        value: function resetCalc() {
          console.log('reset');
          this.resetEv.emit('reset');
        }
      }]);

      return CalcService;
    }();

    CalcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CalcService);
    /***/
  },

  /***/
  "./src/app/calcolatore/calcolatore.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/calcolatore/calcolatore.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalcolatoreCalcolatoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".calcBtn {\n  height: 100%;\n  font-size: 30px;\n  border: 1px solid #646464;\n  cursor: pointer;\n  border-radius: 20px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2NoaW8vRGVza3RvcC9vcGVucG9zL29wZW5wb3Mvc3JjL2FwcC9jYWxjb2xhdG9yZS9jYWxjb2xhdG9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FsY29sYXRvcmUvY2FsY29sYXRvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhbGNvbGF0b3JlL2NhbGNvbGF0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGNCdG57XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNjQ2NDY0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59IiwiLmNhbGNCdG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0NjQ2NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/calcolatore/calcolatore.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/calcolatore/calcolatore.component.ts ***!
    \******************************************************/

  /*! exports provided: CalcolatoreComponent */

  /***/
  function srcAppCalcolatoreCalcolatoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalcolatoreComponent", function () {
      return CalcolatoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _calc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calc.service */
    "./src/app/calcolatore/calc.service.ts");

    var CalcolatoreComponent = /*#__PURE__*/function () {
      function CalcolatoreComponent(calc) {
        var _this = this;

        _classCallCheck(this, CalcolatoreComponent);

        this.calc = calc;
        this.display = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.calcEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipo = 'full';
        this.ClearEv = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.displayText = '0,00';
        this.unitCount = 0;
        this.falgmulti = false;
        this.valmulti = 0;
        this.full = true;
        this.calc.resetEv.on('reset', function (e) {
          _this.displayText = "0,00";
          _this.unitCount = 0;

          _this.display.emit(_this.displayText);
        });
      }

      _createClass(CalcolatoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tipo == 'noop') {
            this.full = false;
          }
        }
      }, {
        key: "clickNum",
        value: function clickNum(n) {
          if (this.falgmulti == true) {
            if (this.unitCount == 0) {
              this.displayText = n;
            } else {
              this.displayText = this.displayText.toString() + n;
            }

            this.unitCount = this.unitCount + 1;
            this.display.emit(this.displayText);
            return;
          }

          this.displayText = this.displayText.replace(',', '');

          if (this.unitCount == 0) {
            this.displayText = '00' + n;
          }

          if (this.unitCount == 1) {
            this.displayText = '0' + this.displayText.substring(this.displayText.length - 1, this.displayText.length) + n;
          }

          if (this.unitCount > 1) {
            if (this.displayText.substring(0, 1) == '0') {
              this.displayText = this.displayText.substring(1, this.displayText.length);
            }

            this.displayText = this.displayText + n;
          }

          this.unitCount = this.unitCount + 1;
          this.displayText = this.displayText.substring(0, this.displayText.length - 2) + ',' + this.displayText.substring(this.displayText.length - 2, this.displayText.length); //this.calcVal=  Number(this.displayText.replace(',','.'))

          this.display.emit(this.displayText);
        }
      }, {
        key: "canc",
        value: function canc() {
          if (this.unitCount <= 0) {
            this.display.emit(this.displayText);
            return;
          }

          if (this.falgmulti == true) {
            if (this.unitCount == 1) {
              this.displayText = '0';
              this.unitCount = this.unitCount - 1;
              this.display.emit(this.displayText);
              return;
            }

            this.displayText = this.displayText.substring(0, this.displayText.length - 1);
            this.unitCount = this.unitCount - 1;
            this.display.emit(this.displayText);
            return;
          }

          this.displayText = this.displayText.replace(',', '');
          this.unitCount = this.unitCount - 1;

          if (this.unitCount == 0) {
            this.displayText = '0' + this.displayText.substring(0, this.displayText.length - 1);
          }

          if (this.unitCount == 1) {
            this.displayText = '0' + this.displayText.substring(0, this.displayText.length - 1);
          }

          if (this.unitCount == 2) {
            this.displayText = '0' + this.displayText.substring(0, this.displayText.length - 1);
          }

          if (this.unitCount > 2) {
            this.displayText = this.displayText.substring(0, this.displayText.length - 1);
          }

          this.displayText = this.displayText.substring(0, this.displayText.length - 2) + ',' + this.displayText.substring(this.displayText.length - 2, this.displayText.length); //this.calcVal=  Number(this.displayText.replace(',','.'))

          this.display.emit(this.displayText);
        }
      }, {
        key: "sub",
        value: function sub() {
          if (this.falgmulti == true) {
            //this.addToSumArray(Number(this.displayText)*this.valmulti*-1)
            this.calcEv.emit(Number(this.displayText) * this.valmulti * -1);
            this.falgmulti = false;
            this, this.valmulti = 0;
          } else {
            //this.addToSumArray(-1 * Number(this.displayText.replace(',','.')))
            this.calcEv.emit(-1 * Number(this.displayText.replace(',', '.')));
          }

          this.displayText = "0,00";
          this.unitCount = 0;
          this.display.emit(this.displayText);
        }
      }, {
        key: "sum",
        value: function sum() {
          if (this.falgmulti == true) {
            //this.addToSumArray(Number(this.displayText)*this.valmulti,tag)
            this.calcEv.emit(Number(this.displayText) * this.valmulti);
            this.falgmulti = false;
            this, this.valmulti = 0;
          } else {
            this.calcEv.emit(Number(this.displayText.replace(',', '.'))); //this.addToSumArray(Number(this.displayText.replace(',','.')),tag)
          }

          this.displayText = "0,00";
          this.unitCount = 0;
          this.display.emit(this.displayText);
        }
      }, {
        key: "multi",
        value: function multi() {
          console.log('qui');
          this.falgmulti = true;
          this.valmulti = Number(this.displayText.replace(',', '.'));
          console.log(this.valmulti);
          this.displayText = "0";
          this.unitCount = 0;
          this.display.emit(this.displayText);
        }
      }]);

      return CalcolatoreComponent;
    }();

    CalcolatoreComponent.ctorParameters = function () {
      return [{
        type: _calc_service__WEBPACK_IMPORTED_MODULE_3__["CalcService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalcolatoreComponent.prototype, "display", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalcolatoreComponent.prototype, "calcEv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalcolatoreComponent.prototype, "tipo", void 0);
    CalcolatoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'calcolatore',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calcolatore.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calcolatore/calcolatore.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calcolatore.component.scss */
      "./src/app/calcolatore/calcolatore.component.scss"))["default"]]
    })], CalcolatoreComponent);
    /***/
  },

  /***/
  "./src/app/cassa/cassa.component.scss":
  /*!********************************************!*\
    !*** ./src/app/cassa/cassa.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCassaCassaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\n.display {\n  height: 16%;\n  width: 100%;\n  background-color: #fff;\n  font-size: 75px;\n  text-align: right;\n}\n\n.calcBtn {\n  height: 100%;\n  font-size: 30px;\n  border: 1px solid #646464;\n  cursor: pointer;\n  border-radius: 20px;\n  background-color: #fff;\n}\n\n.prevTotale {\n  font-size: 75px;\n  text-align: right;\n  width: 100%;\n  height: 16%;\n  min-height: 100px;\n}\n\n.itemScontrino {\n  height: 40px;\n  padding: 10px;\n  border: 1px solid #9e9e9e;\n  background-color: #efefef;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2NoaW8vRGVza3RvcC9vcGVucG9zL29wZW5wb3Mvc3JjL2FwcC9jYXNzYS9jYXNzYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2Fzc2EvY2Fzc2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jYXNzYS9jYXNzYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5kaXNwbGF5e1xuICAgIGhlaWdodDogMTYlO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTo3NXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhbGNCdG57XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNjQ2NDY0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucHJldlRvdGFsZXtcbiAgICBmb250LXNpemU6NzVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2JTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5pdGVtU2NvbnRyaW5ve1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzcGxheSB7XG4gIGhlaWdodDogMTYlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA3NXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhbGNCdG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0NjQ2NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucHJldlRvdGFsZSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2JTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5pdGVtU2NvbnRyaW5vIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cassa/cassa.component.ts":
  /*!******************************************!*\
    !*** ./src/app/cassa/cassa.component.ts ***!
    \******************************************/

  /*! exports provided: CassaComponent */

  /***/
  function srcAppCassaCassaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CassaComponent", function () {
      return CassaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _calcolatore_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../calcolatore/calc.service */
    "./src/app/calcolatore/calc.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);

    var CassaComponent = /*#__PURE__*/function () {
      function CassaComponent(firestore, http, calcServ) {
        var _this2 = this;

        _classCallCheck(this, CassaComponent);

        this.firestore = firestore;
        this.http = http;
        this.calcServ = calcServ;
        this.displayText = '0,00';
        this.calcVal = 0.00;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.importi = this.subject.asObservable();
        this.subjectListino = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listino = this.subjectListino.asObservable();
        this.subjectUsr = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.utenti = this.subjectUsr.asObservable();
        this.falgmulti = false;
        this.valmulti = 0;
        this.totItem = 0;
        this.cardSrc = '';
        this.userSelectedSaldo = 0;
        this.usercardNo = '';
        this.importi.subscribe(function (k) {
          _this2.calcVal = 0;
          _this2.totItem = 0;
          k.forEach(function (obj) {
            _this2.totItem++;
            _this2.calcVal = _this2.calcVal + obj.importo;
          });
        });
      }

      _createClass(CassaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setInterval(function () {
            document.getElementById('txtcardinput').focus();
          }, 500);
          this.listino = this.firestore.collection('listino').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "sum",
        value: function sum(ev, tag) {
          this.addToSumArray(ev, tag);
        }
      }, {
        key: "cercaUtente",
        value: function cercaUtente(srcNumeroCarta) {
          var _this3 = this;

          if (srcNumeroCarta != "") {
            this.firestore.collection('user').get().subscribe(function (p) {
              p.docs.forEach(function (u) {
                var thisu = Object.assign({
                  id: u.id
                }, u.data());
                var card = thisu.Carte.find(function (p) {
                  return p.IdCard == srcNumeroCarta;
                });

                if (card) {
                  _this3.userSelected = thisu;
                  _this3.usercardNo = srcNumeroCarta;
                  _this3.userSelectedSaldo = 0;
                  card.Movimenti.forEach(function (el) {
                    _this3.userSelectedSaldo = _this3.userSelectedSaldo + el.Importo;
                  });
                  document.getElementById('txtcardinput').focus();
                  _this3.cardSrc = '';
                  return;
                }
              });
            });
          }
        }
      }, {
        key: "sumPreset",
        value: function sumPreset(importo, tag) {
          if (typeof importo == 'string') {
            importo = Number(importo.replace(',', '.'));
          }

          this.addToSumArray(importo, tag);
          this.calcServ.resetCalc(); //this.displayText = "0,00";
          //this.unitCount=0;
        }
      }, {
        key: "addToSumArray",
        value: function addToSumArray(toadd, tag) {
          var _this4 = this;

          if (tag == null) {
            tag = '';
          }

          this.importi.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (val) {
            var obj = {
              importo: toadd,
              tag: tag,
              descrizione: ''
            };
            var newArr = [].concat(_toConsumableArray(val), [obj]);

            _this4.subject.next(newArr);
          });
        }
      }, {
        key: "remove",
        value: function remove(item) {
          var _this5 = this;

          this.importi.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (val) {
            var thisarray = val.filter(function (k) {
              return k != item;
            });

            var newArr = _toConsumableArray(thisarray);

            _this5.subject.next(newArr);
          });
        }
      }, {
        key: "addebita",
        value: function addebita() {
          var _this6 = this;

          var Movimento = {
            Data: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].Timestamp.fromDate(new Date()),
            Importo: this.calcVal * -1
          };
          this.userSelected.Carte.find(function (p) {
            return p.IdCard == _this6.usercardNo;
          }).Movimenti.push(Movimento);
          this.firestore.collection('user').doc(this.userSelected.id).update({
            Carte: this.userSelected.Carte
          });
          this.userSelected = null;
          this.userSelectedSaldo = 0;
          this.usercardNo = '';
          this.importi.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (val) {
            var newArr = [];

            _this6.subject.next(newArr);
          });
          this.calcServ.resetCalc();
        }
      }]);

      return CassaComponent;
    }();

    CassaComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _calcolatore_calc_service__WEBPACK_IMPORTED_MODULE_6__["CalcService"]
      }];
    };

    CassaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cassa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cassa.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cassa/cassa.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cassa.component.scss */
      "./src/app/cassa/cassa.component.scss"))["default"]]
    })], CassaComponent);
    /***/
  },

  /***/
  "./src/app/mat-module/mat-module.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/mat-module/mat-module.module.ts ***!
    \*************************************************/

  /*! exports provided: CustomMaterialModule */

  /***/
  function srcAppMatModuleMatModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function () {
      return CustomMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");

    var CustomMaterialModule = function CustomMaterialModule() {
      _classCallCheck(this, CustomMaterialModule);
    };

    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], CustomMaterialModule);
    /**  Copyright 2020 Google LLC. All Rights Reserved.
        Use of this source code is governed by an MIT-style license that
        can be found in the LICENSE file at http://angular.io/license */

    /***/
  },

  /***/
  "./src/app/utenti/card-detail/card-detail.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/utenti/card-detail/card-detail.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtentiCardDetailCardDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9jYXJkLWRldGFpbC9jYXJkLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/utenti/card-detail/card-detail.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/utenti/card-detail/card-detail.component.ts ***!
    \*************************************************************/

  /*! exports provided: CardDetailComponent */

  /***/
  function srcAppUtentiCardDetailCardDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailComponent", function () {
      return CardDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var CardDetailComponent = /*#__PURE__*/function () {
      function CardDetailComponent(firestore) {
        _classCallCheck(this, CardDetailComponent);

        this.firestore = firestore;
      }

      _createClass(CardDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardDetailComponent;
    }();

    CardDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardDetailComponent.prototype, "card", void 0);
    CardDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-detail/card-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-detail.component.scss */
      "./src/app/utenti/card-detail/card-detail.component.scss"))["default"]]
    })], CardDetailComponent);
    /***/
  },

  /***/
  "./src/app/utenti/card-edit/card-edit.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/utenti/card-edit/card-edit.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtentiCardEditCardEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9jYXJkLWVkaXQvY2FyZC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/utenti/card-edit/card-edit.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/utenti/card-edit/card-edit.component.ts ***!
    \*********************************************************/

  /*! exports provided: CardEditComponent */

  /***/
  function srcAppUtentiCardEditCardEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardEditComponent", function () {
      return CardEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);

    var CardEditComponent = /*#__PURE__*/function () {
      function CardEditComponent(firestore) {
        _classCallCheck(this, CardEditComponent);

        this.firestore = firestore;
        this.importo = '0,00';
        this.titolo = '';
        this.btnName = '';
        this.disableInput = false;
      }

      _createClass(CardEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.card);

          if (this.card != null) {
            this.cardNumber = this.card.IdCard;
            this.disableInput = true;
            this.titolo = 'Ricarcia Carta';
            this.btnName = 'Ricarica';
          } else {
            this.titolo = 'Nuova Carta';
            this.btnName = 'Crea';
          }
        }
      }, {
        key: "salvaCard",
        value: function salvaCard() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var checkCard, Movimento, _Movimento;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.btnName == 'Crea')) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 3;
                    return Promise.resolve(this.VerificaCard(this.cardNumber));

                  case 3:
                    checkCard = _context.sent;

                    if (!(checkCard != null)) {
                      _context.next = 7;
                      break;
                    }

                    alert("Carta già registrata");
                    return _context.abrupt("return");

                  case 7:
                    this.user.Carte.push({
                      IdCard: this.cardNumber,
                      Movimenti: []
                    });

                    if (this.importo != '' || this.importo != null) {
                      Movimento = {
                        Data: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.fromDate(new Date()),
                        Importo: Number(this.importo.replace(',', '.'))
                      };
                      this.user.Carte[this.user.Carte.length - 1].Movimenti.push(Movimento);
                      console.log(this.user.Carte);
                    }

                    this.firestore.collection('user').doc(this.user.id).update({
                      Carte: this.user.Carte
                    });
                    _context.next = 15;
                    break;

                  case 12:
                    _Movimento = {
                      Data: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.fromDate(new Date()),
                      Importo: Number(this.importo.replace(',', '.'))
                    };
                    this.user.Carte.find(function (p) {
                      return p.IdCard == _this7.card.IdCard;
                    }).Movimenti.push(_Movimento);
                    this.firestore.collection('user').doc(this.user.id).update({
                      Carte: this.user.Carte
                    });

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "VerificaCard",
        value: function VerificaCard(srcNumeroCarta) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this8 = this;

            var prom;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    prom = new Promise(function (res, rej) {
                      _this8.firestore.collection('user').get().subscribe(function (p) {
                        p.docs.forEach(function (u) {
                          var thisu = Object.assign({
                            id: u.id
                          }, u.data());
                          var card = thisu.Carte.find(function (p) {
                            return p.IdCard == srcNumeroCarta;
                          });

                          if (card) {
                            console.log(card);
                            res(thisu);
                          }
                        });
                      });
                    });
                    return _context2.abrupt("return", prom);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return CardEditComponent;
    }();

    CardEditComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CardEditComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CardEditComponent.prototype, "card", void 0);
    CardEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-card-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/card-edit/card-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-edit.component.scss */
      "./src/app/utenti/card-edit/card-edit.component.scss"))["default"]]
    })], CardEditComponent);
    /***/
  },

  /***/
  "./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtentiDettaglioUtentiDettaglioUtentiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9kZXR0YWdsaW8tdXRlbnRpL2RldHRhZ2xpby11dGVudGkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DettaglioUtentiComponent */

  /***/
  function srcAppUtentiDettaglioUtentiDettaglioUtentiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DettaglioUtentiComponent", function () {
      return DettaglioUtentiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DettaglioUtentiComponent = /*#__PURE__*/function () {
      function DettaglioUtentiComponent() {
        _classCallCheck(this, DettaglioUtentiComponent);

        this.Nome = '';
        this.Cognome = '';
        this.NumeroTelefono = '';
      }

      _createClass(DettaglioUtentiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.usrObj = {
            Carte: [],
            Nome: '',
            Cognome: '',
            Telefono: ''
          };
        }
      }]);

      return DettaglioUtentiComponent;
    }();

    DettaglioUtentiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dettaglio-utenti',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dettaglio-utenti.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dettaglio-utenti.component.scss */
      "./src/app/utenti/dettaglio-utenti/dettaglio-utenti.component.scss"))["default"]]
    })], DettaglioUtentiComponent);
    /***/
  },

  /***/
  "./src/app/utenti/utenti.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/utenti/utenti.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtentiUtentiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\n.mat-card.carte {\n  margin: 5px;\n  cursor: pointer;\n}\n\n.userBox {\n  min-height: 80px;\n  padding: 14px;\n  border: 1px solid #969696;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  background-color: #fff;\n}\n\n.userAvatar {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background-color: #c2c2c2;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.cardContainer {\n  margin-top: 15px;\n  flex-wrap: wrap !important;\n}\n\n.cardItem {\n  height: 180px;\n  border: 1px solid #969696;\n  background-color: #f5f5f5;\n  border-radius: 18px;\n  margin-bottom: 15px;\n  padding: 10px;\n  box-shadow: 10px 8px 6px 0px rgba(0, 0, 0, 0.14);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2NoaW8vRGVza3RvcC9vcGVucG9zL29wZW5wb3Mvc3JjL2FwcC91dGVudGkvdXRlbnRpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91dGVudGkvdXRlbnRpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGdEQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC91dGVudGkvdXRlbnRpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0LWNhcmQuY2FydGUge1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlckJveHtcbiAgbWluLWhlaWdodDogODBweDtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk2OTY5NjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnVzZXJBdmF0YXJ7XG4gIGhlaWdodDogNTBweDsgXG4gIHdpZHRoOiA1MHB4OyBcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmRDb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuLmNhcmRJdGVte1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggOHB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjE0KTsgXG4gIGJveC1zaGFkb3c6IDEwcHggOHB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjE0KTtcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1jYXJkLmNhcnRlIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJCb3gge1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udXNlckF2YXRhciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEl0ZW0ge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggOHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgYm94LXNoYWRvdzogMTBweCA4cHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/utenti/utenti.component.ts":
  /*!********************************************!*\
    !*** ./src/app/utenti/utenti.component.ts ***!
    \********************************************/

  /*! exports provided: UtentiComponent, DialogContentCard */

  /***/
  function srcAppUtentiUtentiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtentiComponent", function () {
      return UtentiComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogContentCard", function () {
      return DialogContentCard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var simple_keyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! simple-keyboard */
    "./node_modules/simple-keyboard/build/index.js");
    /* harmony import */


    var simple_keyboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_7__);

    var UtentiComponent = /*#__PURE__*/function () {
      function UtentiComponent(firestore, http, dialog) {
        var _this9 = this;

        _classCallCheck(this, UtentiComponent);

        this.firestore = firestore;
        this.http = http;
        this.dialog = dialog;
        this.value = '';
        this.inputName = "Nome";
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.utenti = this.subject.asObservable();
        this.userIdOpen = '';
        this.newUserRow = false;
        this.keyboardHidden = true;
        this.rowcount = 0;

        this.onInputFocus = function (event) {
          _this9.inputName = event.target.id;
          console.log("Focused input", _this9.inputName);

          _this9.keyboard.setOptions({
            inputName: event.target.id
          });
        };

        this.setInputCaretPosition = function (elem, pos) {
          if (elem.setSelectionRange) {
            elem.focus();
            elem.setSelectionRange(pos, pos);
          }
        };

        this.onInputChange = function (event) {
          _this9.keyboard.setInput(event.target.value, event.target.id);
        };

        this.onChange = function (input) {
          _this9.newUsr[_this9.inputName] = input;
          console.log("Input changed", input);
          /**
           * Synchronizing input caret position
           * This part is optional and only relevant if using the option "preventMouseDownDefault: true"
           */

          var caretPosition = _this9.keyboard.caretPosition;
          if (caretPosition !== null) _this9.setInputCaretPosition(document.querySelector("#".concat(_this9.inputName)), caretPosition);
          console.log("caretPosition", caretPosition);
        };

        this.onKeyPress = function (button) {
          console.log("Button pressed", button);
          /**
           * If you want to handle the shift and caps lock buttons
           */

          if (button === "{shift}" || button === "{lock}") _this9.handleShift();
        };

        this.handleShift = function () {
          var currentLayout = _this9.keyboard.options.layoutName;
          var shiftToggle = currentLayout === "default" ? "shift" : "default";

          _this9.keyboard.setOptions({
            layoutName: shiftToggle
          });
        };
      }

      _createClass(UtentiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newUsr = {
            Nome: '',
            Cognome: '',
            Telefono: '',
            Carte: []
          };
          this.utenti = this.firestore.collection('user').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var idopen = '';
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
          this.clearNewUser();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this10 = this;

          this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_7___default.a({
            debug: true,
            inputName: this.inputName,
            onChange: function onChange(input) {
              return _this10.onChange(input);
            },
            onKeyPress: function onKeyPress(button) {
              return _this10.onKeyPress(button);
            },
            preventMouseDownDefault: true // If you want to keep focus on input

          });
          /**
           * Since we have default values for our inputs,
           * we must sync them with simple-keyboard
           */
          //this.keyboard.replaceInput(this.newUsr);
        }
      }, {
        key: "keysrcuser",
        value: function keysrcuser(ev) {
          console.log(ev);
        }
      }, {
        key: "cercaUtente",
        value: function cercaUtente(ncard) {
          console.log('qui');

          if (ncard != "") {} else {}
        }
      }, {
        key: "getDettaglio",
        value: function getDettaglio(u) {
          if (u.id != this.userIdOpen) {
            this.userIdOpen = u.id;
          } else {
            this.userIdOpen = '';
          }
        }
      }, {
        key: "clearNewUser",
        value: function clearNewUser() {
          this.newUsr = {
            Nome: '',
            Cognome: '',
            Telefono: '',
            Carte: []
          };
        }
      }, {
        key: "aggiungiUtente",
        value: function aggiungiUtente() {
          this.firestore.collection('user').add(this.newUsr);
          this.closeNew();
        }
      }, {
        key: "SaldoCarta",
        value: function SaldoCarta(movimentiCard) {
          var sum = 0;
          movimentiCard.forEach(function (el) {
            sum = sum + el.Importo;
          });
          return sum;
        }
      }, {
        key: "deleteCard",
        value: function deleteCard(card, userCard, id) {
          var arrcard = userCard.filter(function (k) {
            return k != card;
          });

          if (window.confirm('Sicuro di voler eliminare questa carta?')) {
            this.firestore.collection('user').doc(id).update({
              Carte: arrcard
            });
          }
        }
      }, {
        key: "apriCard",
        value: function apriCard(card, isNuovo) {
          var dialogCard = this.dialog.open(DialogContentCard, {
            data: {
              Card: card
            }
          });
        }
      }, {
        key: "cardEdit",
        value: function cardEdit(user, card) {
          var dialogCard = this.dialog.open(DialogContentCard, {
            data: {
              User: user,
              Card: card
            }
          });
        }
      }, {
        key: "elimina",
        value: function elimina(id) {
          this.firestore.collection('user').doc(id)["delete"]().then(function () {});
        }
      }, {
        key: "setCercaCard",
        value: function setCercaCard() {
          setTimeout(function () {
            // this will make the execution after the above boolean has changed
            document.getElementById('inputCard').focus();
          }, 0);
        }
      }, {
        key: "addusr",
        value: function addusr() {
          this.newUsr = {
            Carte: [],
            Nome: '',
            Cognome: '',
            Telefono: ''
          };
          this.newUserRow = true;
          this.keyboardHidden = false;
        }
      }, {
        key: "closeNew",
        value: function closeNew() {
          this.newUsr = {
            Carte: [],
            Nome: '',
            Cognome: '',
            Telefono: ''
          };
          this.newUserRow = false;
          this.keyboardHidden = true;
        }
      }]);

      return UtentiComponent;
    }();

    UtentiComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    UtentiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-utenti',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./utenti.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/utenti.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./utenti.component.scss */
      "./src/app/utenti/utenti.component.scss"))["default"]]
    })], UtentiComponent); // <app-card-detail *ngIf="data.Card" [card]="data.Card" style="width: 400px;"></app-card-detail>

    var DialogContentCard =
    /**
     *
     */
    function DialogContentCard(data) {
      _classCallCheck(this, DialogContentCard);

      this.data = data;
    };

    DialogContentCard.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogContentCard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dialog-card-content',
      template: "<app-card-edit *ngIf=\"data.User\" [user]=\"data.User\" [card]=\"data.Card\"></app-card-edit>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))], DialogContentCard);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDjD_7f6WQbtTvVxxNxOLZ255xX_C4A6Hw",
        authDomain: "openpos-e5a41.firebaseapp.com",
        databaseURL: "https://openpos-e5a41-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "openpos-e5a41",
        storageBucket: "openpos-e5a41.appspot.com",
        messagingSenderId: "287076226970",
        appId: "1:287076226970:web:e0d5eb61ddeb6391f1cc23",
        measurementId: "G-CCQDC11F9R"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/icchio/Desktop/openpos/openpos/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map