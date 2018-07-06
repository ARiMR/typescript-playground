class Point2D {

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distance(p: Point2D): number {
        return Math.sqrt(this.square(p.x - this.x) + this.square(p.y - this.y));
    }

    protected square(x: number): number {
        return Math.pow(x, 2);
    }
}

let p2d: Point2D = new Point2D(0, 0);
console.log('p2d', p2d);

// ------------------------------------------------------------------------------------------------------------------ //

class Point3D extends Point2D {

    constructor(x: number = 0, y: number = 0, public z: number = 0) {
        super(x, y);
    }

    public distance(p: Point3D): number {
        return Math.sqrt(this.square(p.x - this.x) + this.square(p.y - this.y) + this.square(p.z - this.z));
    }

}

let p3d: Point3D = new Point3D();
console.log('p3d', p3d);

let p: Point2D = p3d;
console.log('p', p);
