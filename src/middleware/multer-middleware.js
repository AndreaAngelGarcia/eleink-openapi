const express = require('express');

const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');

const Booking = require('../models/booking');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'files/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), (req, res, next) => {
  const booking = req.body;

  // Leer la imagen cargada
  const image = req.file;
  const imageData = fs.readFileSync(image.path);

  // Crear un objeto de reserva
  const newBooking = new Booking({
    description: booking.description,
    bodyPlace: booking.bodyPlace,
    size: booking.size,
    image: { data: imageData, contentType: image.mimetype },
    date: booking.date,
    status: booking.status,
    price: booking.price,
    user: booking.user,
  });

  // Guardar la reserva en la base de datos
  /* newBooking.save((err, booking) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'La reserva se guardó correctamente' });
    }
  }); */
});

module.exports = router;
