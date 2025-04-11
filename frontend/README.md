# Manhwa Reader

A sophisticated web application for reading and discovering manhwa, built with React and styled with Apple-inspired design aesthetics.

## Database Setup (New!)

This application now uses a JSON server to store data. Follow these steps to set it up:

1. Make sure you have all dependencies installed:
```bash
npm install
```

2. Start the JSON server (keep this terminal open):
```bash
npm run server
```
The server will run on http://localhost:3001

3. In a separate terminal, start the frontend application:
```bash
npm run dev
```

## API Endpoints

- `GET /manga` - Get all manga
- `GET /manga/:id` - Get a specific manga by ID
- `GET /categories` - Get all categories
- `POST /manga` - Add a new manga
- `PUT /manga/:id` - Update a manga
- `DELETE /manga/:id` - Delete a manga

## Features

- **Modern UI/UX**: Clean, minimal design inspired by Apple's design philosophy
- **Responsive Design**: Seamless experience across all devices
- **Database Storage**: Manga data is now stored in a JSON server database
- **API Integration**: Fetch and update data through REST API endpoints
- **External Links**: Manga cards link to official sources
- **Category Filtering**: Quick access to different genres
- **Favorite System**: Save your favorite manga with a heart button
- **Search Functionality**: Find manga by title or genre

## Project Structure

```
frontend/
├── db/
│   └── db.json         # JSON database file
├── public/
│   └── images/         # Manga cover images
├── src/
│   ├── components/     # React components
│   ├── pages/          # Application pages
│   ├── services/       # API service functions
│   ├── css/            # CSS styling files
│   └── main.jsx        # Application entry point
└── package.json        # Project dependencies and scripts
```

Made with ❤️ 