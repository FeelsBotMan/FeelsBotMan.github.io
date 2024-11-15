var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MOCK_PRODUCTS = {
    mechanical: [
        {
            id: 1,
            name: "장시간 타이핑에 최적화된 키보드",
            price: 179000,
            discount: 0,
            description: "High performance for typing and gaming",
            imageUrl: "/images/categories/keyboard1.jpg",
            category: "mechanical",
            isNew: true
        },
        // 더 많은 기계식 키보드...
    ],
    wireless: [
        {
            id: 2,
            name: "프로그래머 필수 키보드",
            price: 149000,
            discount: 0,
            description: "Convenient and portable",
            imageUrl: "/images/categories/keyboard2.jpg",
            category: "wireless",
            isNew: true
        },
        // 더 많은 무선 키보드...
    ],
    // 다른 카테고리들...
};
// 상품 목록을 가져오는 함수
export function getProducts(category) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // 실제 API 구현 전까지는 목업 데이터 사용
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        if (category) {
                            resolve(MOCK_PRODUCTS[category] || []);
                        }
                        else {
                            resolve(Object.values(MOCK_PRODUCTS).flat());
                        }
                    }, 500);
                })];
        });
    });
}
// 특정 상품의 상세 정보를 가져오는 함수
export function getProductById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/products/".concat(id))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch product');
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// 특가 상품 목록을 가져오는 함수
export function getDeals() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/products/deals')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch deals');
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
