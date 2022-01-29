
var placa = ''
var estado = ''
var tipo = ''

const updateValue = (e) => {
  placa = e.target.value;
  console.log(placa)
}
const entrada = document.getElementById('placa').addEventListener('change', updateValue, false);

const getValueInput = () => {
  verificar()
  q0()
}

document.getElementById('ingresar').addEventListener('click', getValueInput, false);

function mostrarDatos() {
  var fila = "<tr><td>" + estado + "</td><td>" + tipo + "</td><td>" + placa + "</td></tr>";
  var btn = document.createElement("TR");
  btn.innerHTML = fila;
  document.getElementById("tablaDatos").appendChild(btn);
}

function verificar() {
  if (placa.length < 9) {
    alert("Debes ingresar un dato valido")
  }
  else {
    alert("Procesando")
  }
}

function q0() {
  if (placa.charAt(0) === 'C') {
    estado = 'Chiapas'
    tipo = 'Camion'
    q1()
  } else {
    if (placa.charAt(0) === 'D') {
      estado = 'Chiapas'
      q2()
    } else {
      if (placa.charAt(0) === 'V') {
        estado = 'Tabasco'
        tipo = 'Camion'
        q3()
      } else {
        if (placa.charAt(0) === 'W') {
          estado = 'Tabasco'
          tipo = 'Carro'
          q4()
        } else {
          alert("La placa ingresada no pertenece a los estados Validos")
        }
      }
    }
  }
}

function q1() {
  var letras = ['V', 'W', 'X', 'Y', 'Z']
  console.log(placa.charAt(1))
  q5()
}

function q2() {
  var letras = ['A', 'B', 'C']
  var letras2 = ['L', 'M', 'N', 'P', 'R', 'S']
  console.log(placa.charAt(1))
  q5()
  q17()
}

function q3() {
  var letras = ['L', 'M', 'N', 'P', 'R', 'S', 'T']
  console.log(placa.charAt(1))
  q5()
}

function q4() {
  var letras = ['L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W']
  console.log(placa.charAt(1))
  q17()
}

function q5() {
  var signo = '-'
  console.log(placa.charAt(2))
  q6()
}

function q6() {
  var numeros = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(3))
  q7()
  q10()
}

function q7() {
  var numeros = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(4))
  q8()
  q12()
}

function q8() {
  var numeros = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(5))
  q9()
  q13()
}

function q9() {
  var numeros = '1'
  var numeros2 = ['2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(6))
  q10()
  q14()
}

function q10() {
  var signo = '-'
  console.log(placa.charAt(7))
  q15()
}

function q11() {
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(4))
  q12()
}

function q12() {
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(5))
  q13()
}

function q13() {
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(6))
  q14()
}

function q14() {
  var signo = '-'
  console.log(placa.charAt(7))
  q15()
}

function q15() {
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(placa.charAt(8))
  q16()
}

function q16() {
  //Estado final
  mostrarDatos()
}

function q17() {
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(placa.charAt(2))
  q18()
}

function q18() {
  var signo = '-'
  console.log(placa.charAt(3))
  q19()
}

function q19() {
  var numeros = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(4))
  q20()
  q23()
}

function q20() {
  var numeros = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(5))
  q21()
  q24()
}

function q21() {
  var numeros = '1'
  var numeros2 = ['2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(6))
  q22()
  q25()
}

function q22() {
  var signo = '-'
  console.log(placa.charAt(7))
  q26()
}

function q23() {
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(5))
  q24()
}

function q24() {
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(placa.charAt(6))
  q25()
}

function q25() {
  var signo = '-'
  console.log(placa.charAt(7))
  q26()
}

function q26() {
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(placa.charAt(8))
  q27()
}

function q27() {
  //Estado final
  mostrarDatos()
}