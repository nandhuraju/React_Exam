const express = require("express");
const router = express.Router();
const bookings = require("../models/bookings");
const verifyToken = require("../middleware/authMiddleware")

router.get("/bookings",verifyToken, async (req, res) => {
  const details = await bookings.find({});
  res.json(details);
});

router.get("/bookings/:id", async (req, res) => {
  console.log('reached')

  const bookingId = req.params.id;
console.log(bookingId)

  const details = await bookings.find({ 'checkInDate': bookingId });
  console.log(details)
  res.json(details);
});



router.post("/bookings", async (req, res) => {
  try {
    const data = req.body;
    const result = await bookings.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

// router.get("/bookings/:id", async (req, res) => {
//   console.log('reached')

//   const checkInDate = req.params.id;
// console.log(checkInDate)
//   const details = await bookings.find({ 'checkInDate': checkInDate }, { _id: 0 });
//   res.json(details);
// });

module.exports=router




