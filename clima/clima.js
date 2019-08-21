const axios = require("axios");

const getClima = async (latitud, longitud) => {

    const respuesta = await axios.get(`htttps://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=c3573709c3d4a858adb8d32bdd2a69f1&units=metric`);

	// Respuesta
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
  };
  