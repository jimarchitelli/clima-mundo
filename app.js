const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const getInfo = async direccion => {
  try {
    let lug = await lugar.getLugarLatLong(direccion);
    let temp = await clima.getClima(lug.latitud, lug.longitud);

    return `El clima de ${lug.direccion} es de ${temp}ºC`;
  } catch {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
