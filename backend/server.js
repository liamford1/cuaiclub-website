const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Initialize Express app
const app = express();

// CORS Configuration
const allowedOrigins = [
    'https://cuaiclub.org', // Secure version
    'http://cuaiclub.org',  // Non-secure version (if needed)
    'https://www.cuaiclub.org', // With "www"
    'http://www.cuaiclub.org',  // Non-secure with "www"
];
   // Replace with your Vercel frontend URL
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from allowed origins or with no origin (e.g., curl or Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
  })
);

// Apply Rate Limiting to All Requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Port (Elastic Beanstalk requires port 8080)
const PORT = process.env.PORT || 8080;

// Google Sheets setup
const SHEET_ID = process.env.SPREADSHEET_ID || '1TKPqivn1XP8QH2Xbz1W4gGZPaiA7FkiSFUdfaJF8kWQ'; // Replace with your spreadsheet ID
const CREDENTIALS = require('./google-sheets-key.json'); // JSON key file for the service account
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.GoogleAuth({
  credentials: CREDENTIALS,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/submit-suggestion', async (req, res) => {
  try {
    const { suggestion } = req.body;

    console.log('Received suggestion:', suggestion);

    if (!suggestion) {
      console.error('No suggestion provided');
      return res.status(400).json({ error: 'Suggestion is required' });
    }

    console.log('Appending suggestion to Google Sheet...');
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1TKPqivn1XP8QH2Xbz1W4gGZPaiA7FkiSFUdfaJF8kWQ",
      range: 'Sheet1!A:A', // Replace 'Sheet1' with the name of your tab
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[suggestion, new Date().toISOString()]],
      },
    });

    console.log('Suggestion appended successfully!');
    res.status(200).json({ message: 'Suggestion submitted successfully!' });
  } catch (error) {
    console.error('Error submitting suggestion:', error);
    res.status(500).json({ error: 'Failed to submit suggestion' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
