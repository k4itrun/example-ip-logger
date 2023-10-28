const express = require('express');
const requestIp = require('request-ip');
const request = require('request');
const useragent = require('express-useragent');
const axios = require('axios');
const app = express();

const port = 8000; // port in client
const api = "http://localhost:3000/api/data" // You can use Replit for API hosting

app.use(requestIp.mw());
app.use(useragent.express());

app.get('/', async (req, res) => {
  try {
    const ip = req.clientIp;
    const ipDetails = await getIpDetails(ip);
    const userAgent = req.useragent;
    const referrer = req.headers.referer || req.headers.referrer;
    const data = createData(ipDetails, userAgent, referrer, req.headers);

    await sendDataToAPI(data);

    console.log('Data sent to API');
    res.send('Success :)');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error occurred');
  }
});

async function getIpDetails(ip) {
  return new Promise((resolve, reject) => {
    const url = `http://ip-api.com/json/${ip}`;
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject('Error getting IP details');
      }
    });
  });
}

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
      os: userAgent.os
    },
    language: userAgent.language,
    referrer,
    headers: { accept, accept_language, accept_encoding, connection, host, origin }
  };
  return data;
}

async function sendDataToAPI(data) {
  await axios.post(api, data);
}

app.listen(port, () => {
  console.log(`Server Client is listening on port ${port}`);
});
