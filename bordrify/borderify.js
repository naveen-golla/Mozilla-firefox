document.body.innerHTML = ` <div class="ml-auto">

number1: <input type="text" id="num1"><br> number2: <input type="text" id="num2"><br><br>

<form>

    <input type="radio" name="operator" id="op1" value="+">Addition<br>
    <input type="radio" name="operator" id="op2" value="-">Substraction<br>
    <input type="radio" name="operator" id="op3" value="*">multiplication<br>
    <input type="radio" name="operator" id="op4" value="/">division<br>
</form>

<input type="button" id="button" value="Calculate">
<p id="result"></p>
</div>
`;
const button = document.getElementById('button')

function calculator() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result;
    if (document.getElementById('op1').checked) {
        result = num1 + num2;
    } else if (document.getElementById('op2').checked) {
        result = num1 - num2;
    } else if (document.getElementById('op3').checked) {
        result = num1 * num2;
    } else if (document.getElementById('op4').checked) {
        result = num1 / num2;
    }
    document.getElementById('result').innerHTML = "The Result is: " + result;

}
button.addEventListener('click', calculator)