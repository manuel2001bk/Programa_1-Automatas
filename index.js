
var placa = ''

var estado = ''
var tipo = ''

const updateValue = (e) => {
  placa = e.target.value;
  console.log(placa)
}
const entrada = document.getElementById('placa').addEventListener('change', updateValue, false);

const getValueInput = () => {
  if(verificar()){
    q0()
  }
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
    return false
  }
  else {
    return true
  }
}
function error() {
  alert("La placa ingresada esta fuera de los rangos establecidos por el estado \n introdusca una Placa valida")
}

function q0() {
  var lectura = placa.charAt(0)
  console.log(placa.charAt(0))
  if (lectura === 'C') {
    estado = 'Chiapas'
    tipo = 'Camion'
    q1()
  } else {
    if (lectura === 'D') {
      estado = 'Chiapas'
      q2()
    } else {
      if (lectura === 'V') {
        estado = 'Tabasco'
        tipo = 'Camion'
        q3()
      } else {
        if (lectura === 'W') {
          estado = 'Tabasco'
          tipo = 'Carro'
          q4()
        } else {
          error()
        }
      }
    }
  }
}

function q1() {
  var lectura = placa.charAt(1)
  var valido = false
  console.log(lectura)
  var letras = ['V', 'W', 'X', 'Y', 'Z']
  for (i in letras) {
    if (lectura == letras[i]) {
      valido = true
    }
  }
  if (valido) {
    q5()
  } else {
    error()
  }

}

function q2() {
  var lectura = placa.charAt(1)
  var valido = false
  console.log(lectura)
  var letras = ['A', 'B', 'C']
  var letras2 = ['L', 'M', 'N', 'P', 'R', 'S']
  for (i in letras) {
    if (lectura == letras[i]) {
      valido = true
      tipo = 'Camion'
    }
  }
  if (valido) {
    q5()
  }
  else {
    for (i in letras2) {
      if (lectura == letras2[i]) {
        valido = true
        tipo = 'Carro'
      }
    }
    if (valido) {
      q17()
    }
    else {
      error()
    }
  }
}

function q3() {
  var lectura = String(placa.charAt(1))
  var valido = false
  console.log(lectura)
  var letras = ['L', 'M', 'N', 'P', 'R', 'S', 'T']
  for (i in letras) {
    if (lectura === letras[i]) {
      valido = true
    }
  }
  if (valido) {
    q5()
  } else {
    error()
  }
}

function q4() {
  var lectura = placa.charAt(1)
  var valido = false
  console.log(lectura)
  var letras = ['L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W']
  for (i in letras) {
    if (lectura === letras[i]) {
      valido = true
    }
  }
  if (valido) {
    q17()
  } else {
    error()
  }
}

function q5() {
  var lectura = placa.charAt(2)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q6()
  } else {
    error()
  }
}

function q6() {
  var lectura = placa.charAt(3)
  var valido = false
  console.log(lectura)
  var numero = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q7()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q11()
    }
    else {
      error()
    }
  }
}

function q7() {
  var lectura = placa.charAt(4)
  var valido = false
  console.log(lectura)
  var numero = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura === numero) {
    q8()
  } else {
    for (i in numeros2) {
      console.log("Ingreso", numeros2[i])
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q12()
    }
    else {
      error()
    }
  }
}

function q8() {
  var lectura = placa.charAt(5)
  var valido = false
  console.log(lectura)
  var numero = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q9()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q13()
    }
    else {
      error()
    }
  }
}

function q9() {
  var lectura = placa.charAt(6)
  var valido = false
  console.log(lectura)
  var numero = '1'
  var numeros2 = ['2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q10()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q14()
    }
    else {
      error()
    }
  }
}

function q10() {
  var lectura = placa.charAt(7)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q15()
  } else {
    error()
  }
}

function q11() {
  var lectura = placa.charAt(4)
  var valido = false
  console.log(lectura)
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (i in numeros) {
    if (lectura == numeros[i]) {
      valido = true
    }
  }
  if (valido) {
    q12()
  } else {
    error()
  }
}

function q12() {
  var lectura = placa.charAt(5)
  var valido = false
  console.log(lectura)
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (i in numeros) {
    if (lectura == numeros[i]) {
      valido = true
    }
  }
  if (valido) {
    q13()
  } else {
    error()
  }
}

function q13() {
  var lectura = placa.charAt(6)
  var valido = false
  console.log(lectura)
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (i in numeros) {
    if (lectura == numeros[i]) {
      valido = true
    }
  }
  if (valido) {
    q14()
  } else {
    error()
  }
}

function q14() {
  var lectura = placa.charAt(7)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q15()
  } else {
    error()
  }
}

function q15() {
  var lectura = placa.charAt(8)
  var valido = false
  console.log(lectura)
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for (i in abecedario) {
    if (lectura === abecedario[i]) {
      valido = true
    }
  }
  if (valido) {
    q16()
  } else {
    error()
  }
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
  var lectura = placa.charAt(3)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q19()
  } else {
    error()
  }
}

function q19() {
  var lectura = placa.charAt(4)
  var valido = false
  console.log(lectura)
  var numero = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q20()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q23()
    }
    else {
      error()
    }
  }
}

function q20() {
  var lectura = placa.charAt(5)
  var valido = false
  console.log(lectura)
  var numero = '0'
  var numeros2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q21()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q24()
    }
    else {
      error()
    }
  }
}

function q21() {
  var lectura = placa.charAt(6)
  var valido = false
  console.log(lectura)
  var numero = '1'
  var numeros2 = ['2', '3', '4', '5', '6', '7', '8', '9']
  if (lectura == numero) {
    q22()
  } else {
    for (i in numeros2) {
      if (lectura == numeros2[i]) {
        valido = true
      }
    }
    if (valido) {
      q25()
    }
    else {
      error()
    }
  }
}

function q22() {
  var lectura = placa.charAt(7)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q26()
  } else {
    error()
  }
}

function q23() {
  var lectura = placa.charAt(5)
  var valido = false
  console.log(lectura)
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (i in numeros) {
    if (lectura == numeros[i]) {
      valido = true
    }
  }
  if (valido) {
    q24()
  } else {
    error()
  }
}

function q24() {
  var lectura = placa.charAt(6)
  var valido = false
  console.log(lectura)
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (i in numeros) {
    if (lectura == numeros[i]) {
      valido = true
    }
  }
  if (valido) {
    q25()
  } else {
    error()
  }
}

function q25() {
  var lectura = placa.charAt(7)
  console.log(lectura)
  var signo = '-'
  if (lectura == signo) {
    q26()
  } else {
    error()
  }
}

function q26() {
  var lectura = placa.charAt(8)
  var valido = false
  console.log(lectura)
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for (i in abecedario) {
    if (lectura === abecedario[i]) {
      valido = true
    }
  }
  if (valido) {
    q27()
  } else {
    error()
  }
}

function q27() {
  //Estado final
  mostrarDatos()
}