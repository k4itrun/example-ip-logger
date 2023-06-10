const express = require('express');
const requestIp = require('request-ip');
const request = require('request');
const useragent = require('express-useragent');
const axios = require('axios')
const app = express();
const port = 3000;

// Middleware para obtener la dirección IP
app.use(requestIp.mw());

// Middleware para obtener los datos del agente de usuario
app.use(useragent.express());

// Endpoint para obtener datos de la IP y otros detalles del visitante y enviarlos a la API externa
app.get('/', (req, res) => {
  const ip = req.clientIp;
  const url = `http://ip-api.com/json/${ip}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const ipDetails = JSON.parse(body);
      const userAgent = req.useragent;
      const referrer = req.headers.referer || req.headers.referrer;
      const data = createData(ipDetails, userAgent, referrer, req.headers);

      // Enviar los datos a la API
      sendDataToExternalAPI(data)
        .then((response) => {
          console.log('Respuesta de la API:', response.data);
          res.send('Exito :)');
        })
        .catch((error) => {
          console.error('Error al enviar los datos a la API:', error);
          res.status(500).send('Error al enviar los datos a la API');
        });
    } else {
      res.status(500).send('Error al obtener los detalles de la IP');
    }
  });
});

// Función para crear un objeto con los detalles de la IP y otros datos
function createData(ipDetails, userAgent, referrer, headers) {
  const { query, city, regionName, country, zip, lat, lon, isp, org, timezone, as } = ipDetails;
  const { accept, accept_language, accept_encoding, connection, host, origin } = headers;

  const data = {
    ip: query,
    city,
    region: regionName,
    country,
    zip,
    lat,
    lon,
    isp,
    org,
    timezone,
    as,
    userAgent: {
      browser: userAgent.browser,
      version: userAgent.version,
      os: userAgent.os,
    },
    language: userAgent.language,
    referrer,
    headers: {
      accept,
      accept_language,
      accept_encoding,
      connection,
      host,
      origin,
    },
  };

  return data;
}

// Función para enviar los datos a la API
function sendDataToExternalAPI(data) {
  const externalAPIUrl = 'https://<apiUrl>/api/data'; //puedes usar replit para el host de la api
  return axios.post(externalAPIUrl, data);
}

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
