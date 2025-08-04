const mockDonors = [
  {
    id: 1,
    name: "Alice Johnson",
    phone: "123-456-7890",
    email: "alice@example.com",
    pickupAddress: "123 Main St, Cityville",
    date: "2023-10-15",
    time: "10:00 AM",
    notes: "Please ring the doorbell.",
  },
  {
    id: 2,
    name: "Bob Smith",
    phone: "987-654-3210",
    email: "bob@example.com",
    pickupAddress: "456 Elm St, Townsville",
    date: "2023-10-16",
    time: "2:00 PM",
    notes: "Leave at the front porch.",
  },
];

const mockVolunteers = [
  {
    id: 1,
    name: "Charlie Brown",
    availability: "Weekends",
    roles: ["Sorting", "Delivery"],
  },
  {
    id: 2,
    name: "Diana Prince",
    availability: "Weekdays",
    roles: ["Fundraising", "Community Outreach"],
  },
];

export { mockDonors, mockVolunteers };