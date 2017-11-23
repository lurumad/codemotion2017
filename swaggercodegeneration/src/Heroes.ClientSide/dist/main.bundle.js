webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .heroes li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .heroes li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .heroes li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .heroes .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .heroes .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\" \n    (click)=\"onSelect(hero)\" \n    [class.selected]=\"hero === selectedHero\">\n  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n<hero-detail [hero]=\"selectedHero\"></hero-detail>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services__ = __webpack_require__("../../../../../src/app/services/services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(heroesClient) {
        this.heroesClient = heroesClient;
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroesClient.get().subscribe(function (data) { return _this.heroes = data; });
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        var name = hero.name;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_services__["c" /* HeroesClient */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_services__["c" /* HeroesClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_services__["c" /* HeroesClient */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__("../../../../../src/app/services/services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_6__services_services__["a" /* API_BASE_URL */],
                useValue: "http://localhost:5000"
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div><label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services__ = __webpack_require__("../../../../../src/app/services/services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    return HeroDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_services__["b" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_services__["b" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'hero-detail',
        template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
    })
], HeroDetailComponent);

var _a;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HeroesClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hero; });
/* unused harmony export SwaggerException */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.11.0.0 (NJsonSchema v9.9.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["Q" /* OpaqueToken */]('API_BASE_URL');
var HeroesClient = (function () {
    function HeroesClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    HeroesClient.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Heroes";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    HeroesClient.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                    var item = resultData200_1[_i];
                    result200.push(Hero.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    HeroesClient.prototype.getBy = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Heroes/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetBy(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetBy(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    HeroesClient.prototype.processGetBy = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Hero.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    return HeroesClient;
}());
HeroesClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["R" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["A" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
], HeroesClient);

var Hero = (function () {
    function Hero(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Hero.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
        }
    };
    Hero.fromJS = function (data) {
        var result = new Hero();
        result.init(data);
        return result;
    };
    Hero.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    };
    return Hero;
}());

var SwaggerException = (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(this.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
var _a;
//# sourceMappingURL=services.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map