let generateIncrementNumberPromise = function (value: number) {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 1000);
    });
};

let simplePromiseResolve = function () {
    console.log('simplePromiseResolve function START');
    generateIncrementNumberPromise(42).then(value => {
        console.log(`simsimplePromiseResolve: resolved ${value}`);
        generateIncrementNumberPromise(value).then(value => {
            console.log(`simsimplePromiseResolve: resolved ${value}`);
            generateIncrementNumberPromise(value).then(value => {
                console.log(`simsimplePromiseResolve: resolved ${value}`);
            });
        });
    });
    console.log('simplePromiseResolve function END');
};

simplePromiseResolve();

// ------------------------------------------------------------------------------------------------------------------ //


let asyncAwaitPromiseResolve = async function () {

    console.log('asyncAwaitPromiseResolve function START');

    let value: number = await generateIncrementNumberPromise(42);
    console.log(`asyncAwaitPromiseResolve: resolved ${value}`);
    value = await generateIncrementNumberPromise(value);
    console.log(`asyncAwaitPromiseResolve: resolved ${value}`);
    value = await generateIncrementNumberPromise(value);
    console.log(`asyncAwaitPromiseResolve: resolved ${value}`);

    console.log('asyncAwaitPromiseResolve function END');
};

// asyncAwaitPromiseResolve();