let plus = document.getElementById("plus");
      plus.addEventListener("click", add);

      function add() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        console.log(+num1 + +num2);

        document.getElementById("result").textContent = +num1 + +num2;
      }

      let minus = document.getElementById("minus");
      minus.addEventListener("click", subtract);

      function subtract() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        console.log(+num1 - +num2);

        document.getElementById("result").textContent = +num1 - +num2;
      }

      let multiply = document.getElementById("multiply");
      multiply.addEventListener("click", times);

      function times() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        console.log(+num1 * +num2);

        document.getElementById("result").textContent = +num1 * +num2;
      }

      let divide = document.getElementById("divide");
      divide.addEventListener("click", division);

      function division() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        console.log(+num1 / +num2);

        document.getElementById("result").textContent = +num1 / +num2;
      }