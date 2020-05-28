"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RegisterConfirmationComponent = /** @class */ (function () {
    function RegisterConfirmationComponent(apiService, location, route, router) {
        this.apiService = apiService;
        this.location = location;
        this.route = route;
        this.router = router;
    }
    RegisterConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.route.snapshot.paramMap.get('token');
        this.apiService.confirmationRegisterToken(this.token).subscribe(function (register) {
            console.log('Cofirmação de registro OK!');
            _this.router.navigate(['login']);
        }, function (error) {
            console.log('Error Cofirmação de registro! ', error);
            _this.router.navigate(['resend-register-token']);
        });
    };
    RegisterConfirmationComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterConfirmationComponent = __decorate([
        core_1.Component({
            selector: 'app-register-user',
            template: "\n        <div class=\"view overlay zoom\">\n            <p class=\"white-text\">Verificando solicita\u00E7\u00E3o de registro de usu\u00E1rio</p>\n        </div>\n  "
        })
    ], RegisterConfirmationComponent);
    return RegisterConfirmationComponent;
}());
exports.RegisterConfirmationComponent = RegisterConfirmationComponent;
//# sourceMappingURL=register-confirmation.component.js.map