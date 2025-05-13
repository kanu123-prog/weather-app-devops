# 🌤️ Weather App (Node.js + Express)

## 📌 Overview
A simple weather web application that allows users to enter a city name and fetch real-time weather information using the OpenWeatherMap API. Built using Node.js and Express, and deployed on Render.

## 🔧 Features
- User input form to search for a city
- Fetches temperature, humidity, wind speed, and description
- Displays weather details dynamically on the frontend
- Fully deployed with environment variable support

## 🚀 Live Demo
**[🌐 Visit the App](https://weather-app-devops.onrender.com)**  


## 🛠️ Tech Stack
- Node.js
- Express.js
- HTML, CSS, JS
- EJS (optional)
- OpenWeatherMap API
- Render (deployment)

## 📁 Project Structure
weather-app/
├── views/
│ └── index.html
├── public/ # Optional static files
├── index.js # Main server file
├── .env # Contains API key
└── package.json


## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
# Create a .env file and add your OpenWeatherMap API key
echo "OPENWEATHERMAP_API_KEY=your_api_key_here" > .env
npm start
