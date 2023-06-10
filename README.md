# IpLogger
Gracias por querer otener este gran codigo, un iplogger que usa una api para enviar los datos cuando una persona visita la web

# ¿como funciona?
- ## Iniciar Api
* **1.** Primero valla a [replit.com](https://replit.com/) y cree un nuevo proyecto esto para poner en funcionamiento de la **Api**
* **2.** Copie todo lo que tiene la carpeta [api](https://github.com/k4itrun/IpLogger/blob/main/api/) y pegelo en el nuevo proyecto de **replit**
* **3.** Instale todo los paquetes necesarios con ` npm install ` 
* **4.** Recuerda agregar la **webhook** en `<webhookUrl>`
```js
7 const webhookUrl = '<webhookUrl>';
```

- ## Iniciar servidor local
* **1.** Copie todo lo que tiene la carpeta [IpLogger](https://github.com/k4itrun/IpLogger/blob/main/iplogger/) y pegelo en el nuevo proyecto **Local**
* **2.** Instale todo los paquetes necesarios con ` npm install ` 
* **3.** Cuando tenga la **api** online en replit edite `https://<apiUrl>/api/data` con la url de la api en [replit.com](https://replit.com/)
```js
80 // Función para enviar los datos a la API
81 function sendDataToExternalAPI(data) {
82   const externalAPIUrl = 'https://<apiUrl>/api/data'; //puedes usar replit para el host de la api
83   return axios.post(externalAPIUrl, data);
84 }
```

- ## Arrancar
* Cuando el servidor local este en [localhost:3000](https://localhost:3000) cada vez que se haga una visita a la web, el servidor enviara los datos tomados a la **api** y la **api** a la **webhook**


- ## Help?
* No creo que para esto se necesite ayuda por la razon de que es facil su funcionamiento, pero si necesita ayuda envieme un mensaje [yvk4itrun#6889](https://discord.com/users/1088554690268119103)
