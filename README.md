#  Language Detection Service

A RESTful API built with **Node.js** and **Express.js** that detects the language of a given text or batch of texts using the **franc** library.

---

##  Features
- Detect language of a single text
- Detect language for multiple texts (batch)
- Health check endpoint
- Get list of supported languages
- Built-in error handling and logging middleware
- Support for 180+ languages
- Confidence scoring

---

##  Technology Stack
- **Runtime:** Node.js (v22+)
- **Framework:** Express.js
- **Language Detection:** franc
- **Environment Management:** dotenv
- **Dev Tool:** nodemon

---

##  Installation & Setup

1. Clone the repository 
2. Install dependencies: `npm install` 
3. Copy `.env.example` to `.env` 
4. Start the server: `npm start`

## API Endpoints

### POST /api/detect 
Detect language of a single text
Request Body
{
  "text": "Hello, how are you?"
}
Response (200)
{
  "language": "en",
  "confidence": 0.92,
  "detectedText": "Hello, how are you?"
}

### POST /api/detect/batch
Request Body
{
  {
  "texts": [
    "Hello there!",
    "مرحبا بك في خدمتنا",
    "Bonjour mon ami"
  ]
}

}
Response (200)
{
  {
  "results": [
    { "text": "Hello there!", "language": "en", "confidence": 0.9 },
    { "text": "مرحبا بك في خدمتنا", "language": "ar", "confidence": 0.95 },
    { "text": "Bonjour mon ami", "language": "fr", "confidence": 0.88 }
  ]
}

### GET /api/languages
Response (200):
{
  "languages": [
    { "code": "en", "name": "English" },
    { "code": "ar", "name": "Arabic" },
    { "code": "fr", "name": "French" },
    { "code": "es", "name": "Spanish" },
    { "code": "de", "name": "German" }
  ],
  "total": 187
}

### GET /health
Response (200):
{
  "status": "ok",
  "uptime": 12345,
  "version": "1.0.0",
  "timestamp": "2025-10-24T10:30:00Z"
}

}