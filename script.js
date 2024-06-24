
async function obtenerMonto() {
    const monto = document.getElementById("monto").value;
    const monedaBase = document.getElementById("monedaBase").value;
    const monedaConvertir = document.getElementById("monedaConvertir").value;
    try {
      let respuesta = await fetch('https://v6.exchangerate-api.com/v6/4e5d7010bf277fe59e13f254/pair/' + monedaBase +'/' + monedaConvertir + '/' + monto);
      let datos = await respuesta.json();
      let resultado = datos.conversion_result.toLocaleString();
      document.getElementById("resultado").innerHTML = monedaConvertir + ": " + resultado;
    } catch (error) {
      console.error(error);
    }
  }


