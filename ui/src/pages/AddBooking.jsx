import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const AddBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [personName, setPersonName] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newBooking = {
      bookingId,
      roomNo,
      checkInDate,
      checkOutDate,
      personName
    };

    addBookingSubmit(newBooking);
    toast.success("New booking added");
    navigate("/home");
  };

  const addBookingSubmit = async (newBooking) => {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });
    return res;
  };

  return (
    
    <div>
      <section class="bg-white mb-20">
        <div class="container m-auto max-w-2xl py-2">
          <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
                New Booking
              </h2>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Booking Id
                </label>
                <input
                  type="text"
                  id="bookingId"
                  name="bookingId"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. 1"
                  required
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Room No
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={roomNo}
                  onChange={(e) => setRoomNo(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Check in Date
                </label>
                <input
                  type="date"
                  id="ingredients"
                  name="ingredients"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                Check Out Date
                </label>
                <input
                  type="date"
                  id="instructions"
                  name="instructions"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                Name of the Person
                </label>
                <input
                  type="text"
                  id="instructions"
                  name="instructions"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                />
              </div>

              <div>
                <button
                  class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBooking;

