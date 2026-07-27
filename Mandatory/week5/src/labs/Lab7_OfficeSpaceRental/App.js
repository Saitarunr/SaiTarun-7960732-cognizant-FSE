import React from "react";

// LAB 7: officespacerentalapp
// Objective: JSX elements, attributes, JS expressions in JSX, inline CSS
const officeImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400";

// A single office object
const office = {
  name: "Skyline Business Hub",
  rent: 75000,
  address: "MG Road, Bengaluru"
};

// A list of office objects
const officeList = [
  { id: 1, name: "Tech Park Tower", rent: 45000, address: "Whitefield, Bengaluru" },
  { id: 2, name: "Skyline Business Hub", rent: 75000, address: "MG Road, Bengaluru" },
  { id: 3, name: "Green Valley Offices", rent: 58000, address: "Hitech City, Hyderabad" },
  { id: 4, name: "Downtown Suites", rent: 30000, address: "Anna Salai, Chennai" }
];

function Lab7_OfficeSpaceRental() {
  return (
    <div>
      {/* Element to display the heading of the page */}
      <h1>Office Space Rental</h1>

      {/* Attribute used to display an image */}
      <img src={officeImage} alt="Office space" width="300" />

      {/* Displaying details of a single office object using JS expressions in JSX */}
      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p>Address: {office.address}</p>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>

      {/* Looping through a list of office objects */}
      <h2>All Available Offices</h2>
      <ul>
        {officeList.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.address} -{" "}
            <span style={{ color: item.rent < 60000 ? "red" : "green" }}>
              ₹{item.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lab7_OfficeSpaceRental;
