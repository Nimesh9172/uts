export const BookingCardData = [
  {
    img: require("../assets/images/journey.png"),
    text: "Journey Ticket",
  },
  {
    img: require("../assets/images/qr.png"),
    text: "QR Booking",
  },
  {
    img: require("../assets/images/quick.png"),
    text: "Quick Booking",
  },
  {
    img: require("../assets/images/platform.png"),
    text: "Platform Ticket",
  },
  {
    img: require("../assets/images/season.png"),
    text: "Season Ticket",
  },
];

export const ProfileBookingCardsData = [
  {
    img: require("../assets/images/cancel.png"),
    text: "CANCEL TICKET",
    height:28,
    width:28
  },
  {
    img: require("../assets/images/booking_history.png"),
    text: "BOOKING HISTORY",
    height:26,
    width:26
  },
  {
    img: require("../assets/images/show.png"),
    text: "SHOW TICKET",
    height:28,
    width:28
  },
  {
    img: require("../assets/images/wallet.png"),
    text: "R-WALLET",
    height:24,
    width:20
  },
  {
    img: require("../assets/images/profile.png"),
    text: "PROFILE",
    height:28,
    width:28
  },
  {
    img: require("../assets/images/transactions.png"),
    text: "TRANSACTIONS",
    height:23,
    width:30
  },
];

export const screenMapping = {
  "cancel ticket": "CancelTicketScreen",
  "booking history": "MainTicketScreen",
  "show ticket": "ShowTicketScreen",
  "r-wallet": "RWalletScreen",
  "profile": "ProfileScreen",
  "transactions": "TransactionsScreen",
};