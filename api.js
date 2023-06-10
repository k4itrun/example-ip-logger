const express = require('express');
const requestIp = require('request-ip');
const axios = require('axios');
const app = express();
const port = 3000;

const webhookUrl = '<webhookUrl>';

app.use(express.json());

app.post('/api/data', async (req, res) => {

  try {
    console.log('Datos de la IP:', req.body);

    // Aquí puedes realizar el procesamiento adicional con los datos de la IP recibidos

    // Envía los datos a la webhook
    await sendWebhook(req.body);

    res.json({ message: 'Datos recibidos correctamente' });
  } catch (error) {
    console.error('Error al obtener los detalles de la IP:', error);
    res.status(500).json({ error: 'Error al obtener los detalles de la IP' });
  }
});

async function sendWebhook(data) {
  try {
    const fields = Object.entries(data).map(([key, value]) => ({
      name: key,
      value: typeof value === 'object' ? `\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`` : value.toString(),
    }));

    await axios.post(webhookUrl, {
      content: 'Nuevos datos recibidos:',
      embeds: [
        {
          title: 'Datos de la IP',
          fields: fields,
					footer: {
            text: 'Developed by k4itrun',
          }
        },
      ],
    });
  } catch (error) {
    console.error('Error al enviar la webhook:', error);
  }
}

app.listen(port, () => {
  console.log(`API en el puerto ${port}`);
});
