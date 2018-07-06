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
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }

    Point2D.prototype.distance = function (p) {
        return Math.sqrt(this.square(p.x - this.x) + this.square(p.y - this.y));
    };
    Point2D.prototype.square = function (x) {
        return Math.pow(x, 2);
    };
    return Point2D;
}());
var p2d = new Point2D(0, 0);
console.log('p2d', p2d);
// ------------------------------------------------------------------------------------------------------------------ //
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);

    function Point3D(x, y, z) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (z === void 0) {
            z = 0;
        }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }

    Point3D.prototype.distance = function (p) {
        return Math.sqrt(this.square(p.x - this.x) + this.square(p.y - this.y) + this.square(p.z - this.z));
    };
    return Point3D;
}(Point2D));
var p3d = new Point3D();
console.log('p3d', p3d);
var p = p3d;
console.log('p', p);
