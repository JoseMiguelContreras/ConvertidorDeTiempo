const convertidor_de_tiempo = (tiempo, unidad) => {
  const tiempo_en_minutos = tiempo / 60;
  const tiempo_en_horas = tiempo / 3600;
  const tiempo_en_dias = tiempo / 86400;

  const resultadoElement = document.getElementById('resultado');

  if (tiempo < 0) {
      resultadoElement.innerHTML = "No se permiten números negativos";
  } else if (isNaN(tiempo)) {
      resultadoElement.innerHTML = "El tiempo debe ser un número";
  } else {
      switch (unidad) {
          case "segundos":
              resultadoElement.innerHTML = `${tiempo} segundos equivalen a ${tiempo.toFixed(2)} segundos`;
              break;
          case 'minutos':
              resultadoElement.innerHTML = `${tiempo} segundos equivalen a ${tiempo_en_minutos.toFixed(2)} minutos`;
              break;
          case 'horas':
              resultadoElement.innerHTML = `${tiempo} segundos equivalen a ${tiempo_en_horas.toFixed(2)} horas`;
              break;
          case 'dias':
              resultadoElement.innerHTML = `${tiempo} segundos equivalen a ${tiempo_en_dias.toFixed(2)} días`;
              break;
          default:
              resultadoElement.innerHTML = "Error: Tiene que elegir una de las opciones: 'minutos', 'horas' o 'días'.";
      }
  }
};

const convertirTiempo = () => {
  const tiempo = parseFloat(document.getElementById('tiempo').value);
  const unidad = document.getElementById('unidad').value;
  convertidor_de_tiempo(tiempo, unidad);
};
