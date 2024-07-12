import React, { useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddBooking from "./pages/AddBooking";
import BookingCards from "./components/BookingCards";

function App() {
  const [bookings, setBookings] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/addbookings" element={<AddBooking />} />
          <Route path="/bookings" element={<BookingCards />} />
        
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
