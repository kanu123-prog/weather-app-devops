import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const port = 5000;

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public')); // Static file serving (for images or CSS if needed)
app.set('view engine', 'ejs'); // Use EJS templating (optional, but useful)
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Route to serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to handle the weather request
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  console.log(city)
  if (!city) {
    return res.json({ error: 'City is required' });
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    console.log(weatherData)

    const result = {
      city: weatherData.name,
      temperature: `${weatherData.main.temp}°C`,
      description: weatherData.weather[0].description,
      humidity: `${weatherData.main.humidity}%`,
      wind: `${weatherData.wind.speed} m/s`
    };

    res.json(result);
    console.log(result);
  } catch (error) {
    res.json({ error: 'Unable to fetch weather data. Please check the city name.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
