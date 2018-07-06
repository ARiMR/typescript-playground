var x = 1;
let y = 1;
const z = 1;

console.log(`INITIAL x=${x} y=${y} z=${z}`);

for (let i = 0; i <= 10; i++) {
    var x = i;
    let y = i;
    const z = i;
    console.log(`ITERATION #${i} x=${x} y=${y} z=${z}`);
}

console.log(`FINAL x=${x} y=${y} z=${z}`);
