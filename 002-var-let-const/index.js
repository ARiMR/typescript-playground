var x = 1;
var y = 1;
var z = 1;
console.log("INITIAL x=" + x + " y=" + y + " z=" + z);
for (var i = 0; i <= 10; i++) {
    var x = i;
    var y_1 = i;
    var z_1 = i;
    console.log("ITERATION #" + i + " x=" + x + " y=" + y_1 + " z=" + z_1);
}
console.log("FINAL x=" + x + " y=" + y + " z=" + z);
