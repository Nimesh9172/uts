import { Colors } from "./Colors";

export const Fonts = {
  regular: "Inter-Black", // You can add more font weights/styles if needed
  // bold: "Inter-Bold", // Example of a potential future font
};

export const Theme = {
  // Font styles
  interFont: {
    fontFamily: Fonts.regular,
  },
  interFontTextBlue: {
    fontFamily: Fonts.regular,
    color: Colors.textDarkBlue,
    fontWeight: "bold",
    fontSize:12
  },
  fonts: {
    regular: Fonts.regular, // Use your custom font here
    bold: Fonts.regular, // Use your custom font here
  },
};
