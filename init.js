import dotenv from 'dotenv';
import './db';
import app from './app';

import './models/video';
import './models/comment';

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
