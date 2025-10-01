import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/health', (req, res) => {
    res.json({ ok: true, message: "backend is running! 🚀"})
})

app.listen(PORT, () => {
    console.log(`backend API is listening at http://localhost:${PORT}`);
});