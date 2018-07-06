function fibonacci(n) {
    var a = 1;
    var b = 0;
    var c = null;
    while (n > 0) {
        c = a;
        a = b + a;
        b = c;
        n--;
    }
    return b;
}
window.addEventListener('DOMContentLoaded', function (event) {
    var text = 'Hello World!!!';
    var result = fibonacci(25);
    document.getElementById('content').innerHTML = text + '<br><br>fib(25) = ' + result;
});
