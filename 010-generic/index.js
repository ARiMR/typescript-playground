var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RestSerivce = /** @class */ (function () {
    function RestSerivce() {
    }

    RestSerivce.prototype.getItems = function (page) {
        console.log("Calling GET " + this.getBaseUrl() + "/?page=" + page);
        return {
            items: [],
            page: page,
            totalCount: 1000
        };
    };
    return RestSerivce;
}());
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);

    function ProductService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    ProductService.prototype.getBaseUrl = function () {
        return "/api/products";
    };
    return ProductService;
}(RestSerivce));
var productService = new ProductService();
var response = productService.getItems(42);
// ------------------------------------------------------------------------------------------------------------------ //
var identity = function (arg) {
    return arg;
};
var productService2 = identity(productService);
var productService3 = identity(productService);
