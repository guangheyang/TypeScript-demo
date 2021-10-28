Object.defineProperty(exports, "__esModule", { value: true });
exports.printObj = exports.descriptor = void 0;
require("reflect-metadata");
const key = Symbol.for('descriptor');
function descriptor(descriptor) {
    return Reflect.metadata(key, descriptor);
}
exports.descriptor = descriptor;
function printObj(obj) {
    const cons = Object.getPrototypeOf(obj);
    if (Reflect.hasMetadata(key, cons)) {
        console.log(Reflect.getMetadata(key, cons));
    }
    else {
        console.log(cons.constructor.name);
    }
    for (const prop in obj) {
        if (Reflect.hasMetadata(key, obj, prop)) {
            console.log(`\t${Reflect.getMetadata(key, obj, prop)}: ${obj[prop]}`);
        }
        else {
            console.log(`\t${prop}: ${obj[key]}`);
        }
    }
}
exports.printObj = printObj;
