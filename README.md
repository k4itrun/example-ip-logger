# IpLogger

Gracias por querer obtener este gran código, un iplogger que usa una API para enviar los datos cuando una persona visita la web.

## ¿Cómo funciona?

### Iniciar Api
1. Primero ve a [replit.com](https://replit.com/) y crea un nuevo proyecto para poner en funcionamiento la **API**.
2. Copia todo el contenido de la carpeta [api](https://github.com/k4itrun/IpLogger/blob/main/api/) y pégalo en el nuevo proyecto de **replit**.
3. Instala todos los paquetes necesarios con `npm install`.
4. Recuerda agregar la **webhook** en `<webhookUrl>`.
```js
7 const webhookUrl = '<webhookUrl>';
```

## Iniciar servidor local
1. Copia todo el contenido de la carpeta [IpLogger](https://github.com/k4itrun/IpLogger/tree/main/iplogger) y pégalo en el nuevo proyecto **Local**.
2. Instala todos los paquetes necesarios con `npm install`.
3. Cuando tengas la **API** en línea en Replit, edita `https://<apiUrl>/api/data` con la URL de la API en [replit.com](https://replit.com/).
```js
80   // Función para enviar los datos a la API
81   function sendDataToExternalAPI(data) {
82     const externalAPIUrl = 'https://<apiUrl>/api/data'; // Puedes usar Replit para el host de la API.
83     return axios.post(externalAPIUrl, data);
84   }
```

## Arrancar
Cuando el servidor local esté en [localhost:3000](http://localhost:3000), cada vez que se visite la web, el servidor enviará los datos capturados a la **API** y la **API** a la **WEBHOOK**.

## ¿Necesitas ayuda?
No creo que se necesite ayuda para esto, ya que su funcionamiento es sencillo. Pero si necesitas ayuda, envíame un mensaje a [yvk4itrun#6889](https://discord.com/users/1088554690268119103).
