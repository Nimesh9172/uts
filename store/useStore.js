import { create } from "zustand";

const useStore = create((set) => ({
  bookedTickets: [
    {
      id: 101,
      name: "NIMESH VISHWAKARMA",
      source: "VIRAR",
      bookingDate: "2024-10-20T16:51:00",
      fare: 1185,
      destination: "CHURCHGATE",
      uts_no: "X014NIVK369",
      phone_no: "7972861253",
      id_card_number: "767413120446",
      age: "25",
      validity_from: "2024-10-21",
      validity_to: "2024-11-20",
      hindi_text_dest:"चर्चगेट",
      hindi_text_source:"विरार"
    },
    {
      id: 102,
      name: "ABHISHEK YADAV",
      source: "VIRAR",
      bookingDate: "2024-10-21T16:51:00",
      fare: 1185,
      destination: "CHURCHGATE",
      uts_no: "X014ABHI369",
      phone_no: "8928775829",
      id_card_number: "657253362812",
      age: "25",
      validity_from: "2024-10-21",
      validity_to: "2024-11-20",
      hindi_text_dest:"चर्चगेट",
      hindi_text_source:"विरार"
    },
  ],

  // Action to add a booked ticket
  addBookedTicket: (ticket) =>
    set((state) => ({
      bookedTickets: [...state.bookedTickets, ticket],
    })),
}));

export default useStore;
