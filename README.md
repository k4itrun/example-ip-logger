# example-ip-logger

Thanks for wanting to get this great code, an iplogger that uses an API to send data when a person visits the website.

## How does it work?

### Start API
- First go to [replit](https://replit.com/) and create a new project to get the API up and running.
- Copy the entire contents of the [api](https://github.com/k4itrun/IpLogger/blob/main/api/) folder and paste it into the new REPLIT project.
- Install all necessary packages with `npm install`.
- Remember to add the WEBHOOK in `webhook`.
```js
const webhook = 'https://discord.com/api/webhooks/';
```

## Start local server
- Copy the entire contents of the [IP](https://github.com/k4itrun/IpLogger/tree/main/iplogger) folder and paste it into the new *local project*.
- Install all necessary packages with `npm install`.
- Once you have the *api* online on *replit*, edit `https://server/api/data` with the *URL* of the *api* on [replit](https://replit.com/).
```js
const api = "http://localhost:3000/api/data" // You can use Replit for API hosting
```

## Start Up
Once the local server is running at http://localhost:3000, every time the website is visited, the server will send the captured data to the API, and the API to the WEBHOOK.

## Need Assistance?
I don't believe assistance will be required for this, as its operation is straightforward. However, if you need help, feel free to send a message to [k4itrun#6889](https://discord.com/users/1088554690268119103).
