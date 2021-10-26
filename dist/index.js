var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function d() {
    return function (target, key) {
        console.log(target, key);
        if (!target.__props) {
            target.__props = [];
        }
        target.__props.push(key);
    };
}
class A {
}
__decorate([
    d()
], A.prototype, "prop1", void 0);
__decorate([
    d()
], A, "prop2", void 0);
const a = new A();
function enumerable(target, key, descriptor) {
    descriptor.enumerable = true;
}
function useless(target, key, descriptor) {
    descriptor.value = function () {
        console.warn(key + '该方法已过期');
    };
}
class B {
    methods1() {
    }
    methods2() {
    }
}
__decorate([
    enumerable
], B.prototype, "methods1", null);
__decorate([
    useless,
    enumerable
], B.prototype, "methods2", null);
const b = new B();
for (var key in b) {
    console.log(key, 'b');
}
b.methods2();
