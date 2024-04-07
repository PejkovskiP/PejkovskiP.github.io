const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('/api/quotes', cors()); // This will enable pre-flight request for `/api/quotes` endpoint

// Use dynamic import for fetch
let fetch;
import('node-fetch').then(mod => {
    fetch = mod.default;
});

app.get('/api/quotes', async (req, res) => {
    if (!fetch) {
        return res.status(503).json({ message: 'Fetch not ready' });
    }
    try {
        const response = await fetch('https://quoteapi.pythonanywhere.com/random');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// SPA route fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));