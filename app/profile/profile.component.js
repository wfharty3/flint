"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var profile_service_1 = require("./profile.service");
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(svc, router) {
        this.svc = svc;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getDef();
    };
    ProfileComponent.prototype.getDef = function () {
        var _this = this;
        this.svc.getDef().then(function (def) { return _this.def = def; });
    };
    ProfileComponent.prototype.isCommon = function (path) {
        if (path.startsWith('Resource') || path.startsWith('DomainResource')) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.isUsed = function (element) {
        if (element.max != 0 || element.mustSupport) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.getIndent = function (path) {
        return (path.split('.').length - 2) * 25 + 'px';
    };
    ProfileComponent.prototype.showElement = function (element) {
        if ((!this.isCommon(element.base.path) || this.showCommon)
            &&
                (this.isUsed(element) || this.showUnused))
            return true;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './profile.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map