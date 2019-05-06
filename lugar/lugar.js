const axios = require("axios");

const getLugarLatLong = async dir => {
  const encodedURL = encodeURI(dir);

  let instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
      "X-RapidAPI-Key": "e24d5ac5cbmsh843e589e17e6dbdp14c8ebjsn97fcae7ae8d4"
    }
  });

  const respuesta = await instance.get();  

  if (respuesta.data.Results.length === 0)
    throw new Error(`No hay resultados para ${dir}`);

  const data = respuesta.data.Results[0];
  const direccion = data.name;
  const latitud = data.lat;
  const longitud = data.lon;

  return {
    direccion,
    latitud,
    longitud
  };
};

module.exports = {
  getLugarLatLong
};
