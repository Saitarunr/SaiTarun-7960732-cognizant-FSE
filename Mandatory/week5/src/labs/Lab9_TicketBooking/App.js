import React, { useState } from "react";

// LAB 9: ticketbookingapp
// Objective: Conditional rendering - Guest page vs User page

function FlightList() {
  const flights = [
    { id: 1, from: "Chennai", to: "Delhi", time: "06:00 AM" },
    { id: 2, from: "Bengaluru", to: "Mumbai", time: "09:30 AM" },
    { id: 3, from: "Hyderabad", to: "Kolkata", time: "01:15 PM" }
  ];

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.id}>
          {flight.from} → {flight.to} at {flight.time}
        </li>
      ))}
    </ul>
  );
}

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome, Guest</h2>
      <p>Browse available flights below. Log in to book a ticket.</p>
      <FlightList />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome back!</h2>
      <p>You are logged in. You can now book tickets for the flights below.</p>
      <FlightList />
      <button>Book Ticket</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function Lab9_TicketBooking() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default Lab9_TicketBooking;
