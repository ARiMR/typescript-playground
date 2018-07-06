interface Point2D {
    x: number;
    y: number;
}

let p2d: Point2D = {x: 0, y: 0};

interface Point3D extends Point2D {
    z: number;
}

let p3d: Point3D = {x: 0, y: 0, z: 0};

interface Point3DWithAnyOtherProps extends Point3D {
    [key: string]: number
}

let p5d: Point3DWithAnyOtherProps = {x: 0, y: 0, z: 0, a: 1, b: 2};

let p: Point2D = p5d;