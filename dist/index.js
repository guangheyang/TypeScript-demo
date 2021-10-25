var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function d(target) {
}
let A = class A {
};
A = __decorate([
    d
], A);
const a = new A();
function t(params) {
    return function (params) {
    };
}
let B = class B {
};
B = __decorate([
    t('a')
], B);
function d1(params) {
    console.log('d1');
}
function d2(params) {
    console.log('d2');
}
let C = class C {
};
C = __decorate([
    d1,
    d2
], C);
function d3() {
    console.log('d3');
    return function (params) {
        console.log('d3 decorator');
    };
}
function d4() {
    console.log('d4');
    return function (params) {
        console.log('d4 decorator');
    };
}
let D = class D {
};
D = __decorate([
    d3(),
    d4()
], D);
