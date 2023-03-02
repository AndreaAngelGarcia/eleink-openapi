const express = require('express');
const upload = require('../middleware/multer-middleware');

const {
  getAllBookings, createBooking, acceptBooking, cancelBooking, deleteBooking,
} = require('../controllers/booking');

const router = express.Router();

router.get('', getAllBookings);
router.post('', createBooking);
router.put('/:id', acceptBooking);
router.patch(':id', cancelBooking);
router.delete('', deleteBooking);

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Archivo subido exitosamente' });
});
module.exports = router;
