(function () {
    function foo(num1, num2) {
        return num1 + num2;
    }

    console.log(foo(24, 36));
})();
(function () {
    var result = [1,2,3,4].map(function (item, index) {
        return item + 20;
    });

    console.log(result);
})();