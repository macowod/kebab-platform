import express from 'express';
import React from 'react';
import { woker } from '../db/models';
import bcrypt from 'bcrypt'
import Layout from '../components/Layout';
import { renderToString } from 'react-dom/server';

const route = express.Router();

route.post('/', async (req, res) => {
  const { name, email, password, tel } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const user = await woker.findOne({ where: { email } });
    if (!user) {
      const newUser = await woker.create({ email, name, tel, password: hashPassword, });
      // req.session.userSession = { email: newUser.email, id: newUser.id };
      return res.json({ email: newUser.email });
    }
    res.status(400).json({ message: 'Такой email уже занят' });
  } catch (err) {
    console.error(err);
  }
});

route.get('/', (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
export default route;