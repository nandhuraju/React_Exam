const { Schema} =require('mongoose');
const { model} =require('mongoose');

const bookingSchema = new Schema({
   bookingId: { type: String, required: true },
   roomNo: { type: String, required: true },
   checkInDate: { type: String, required: true },
   checkOutDate: { type: String, required: true },
   personName: {type: String, required: true}
});

const bookings = model('bookings', bookingSchema);

module.exports = bookings;
