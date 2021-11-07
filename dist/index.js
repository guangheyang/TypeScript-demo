var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('age');
setTimeout(() => { }, 1000);
const lodash_1 = __importDefault(require("lodash"));
const newArr = lodash_1.default.chunk([2, 4, 6, 7, 3, 8], 2);
console.log(newArr);
//# sourceMappingURL=index.js.map