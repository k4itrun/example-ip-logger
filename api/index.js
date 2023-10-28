const express = require('express');
const axios = require('axios');
const app = express();

const port = 3000; // port in server
const webhook = 'https://discord.com/api/webhooks/'; // replace and add your webhook

app.use(express.json());

app.post('/api/data', async (req, res) => {
  try {
    console.log('IP Data:', req.body);
    await processIPData(req.body);
    res.json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error processing IP details:', error);
    res.status(500).json({ error: 'Error processing IP details' });
  }
});

async function processIPData(data) {
  await sendToWebhook(data);
  // Add additional processing logic here if needed
}

async function sendToWebhook(data) {
  try {
    const embedFields = Object.entries(data).map(([key, value]) => ({
      name: key,
      value: typeof value === 'object' ? `\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`` : value.toString(),
    }));

    const webhookPayload = {
      content: 'New data received:',
      embeds: [
        {
          title: 'IP Data',
          fields: embedFields,
          footer: {
            text: 'Developed by k4itrun',
          },
        },
      ],
    };

    await axios.post(webhook, webhookPayload);
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
}

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
