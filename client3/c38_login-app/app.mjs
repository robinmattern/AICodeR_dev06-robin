// app.mjs
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/auth.mjs';
import { mongodb } from './config/keys.mjs';
import './config/passport-setup.mjs';
import path from 'path';

const app = express();

// Middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve('public/login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
