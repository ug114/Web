var result = document.getElementById("result");
result.value = "0";

document.getElementById("OK").addEventListener("click", function () {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    if (a < Number.EPSILON) {
        if (Math.abs(b) < Number.EPSILON) {
            if (Math.abs(c) < Number.EPSILON) {
                result.value = "Данное уравнение имеет бесконечное множество решений";
            } else {
                result.value = "Данное уравнение не имеет решений";
            }
        } else {
            result.value = "Данное уравнение не является квадратным, его решение: x = " + -c / b;
        }
    } else {
        var discriminant = Number(Math.pow(b, 2) - 4 * a * c);

        if (Math.abs(discriminant) < Number.EPSILON) {
            var x = Number(-b / (2 * a));
            result.value = "Решение уравнения: x = " + x;
        } else if (discriminant > 0) {
            var x1 = Number((-b + Math.sqrt(discriminant)) / (2 * a));
            var x2 = Number((-b - Math.sqrt(discriminant)) / (2 * a));
            result.value = "Решение уравнения: x1 = " + x1 + ", x2 = " + x2;
        } else {
            result.value = "По условию задачи данное квадратное уравнение не имеет решений";
        }
    }
});
