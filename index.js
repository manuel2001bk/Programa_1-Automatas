
const entrada = document.getElementById('placa')
var placa
entrada.addEventListener('change', updateValue);

function updateValue(e) {
  placa =e.target.value;
  console.log(placa)
}


const getValueInput = () => {
    console.log(placa)
}
document.getElementById('ingresar').addEventListener('click', getValueInput, false);