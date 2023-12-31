// RootLayout.js
import React from 'react';
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Container from "@mui/material/Container";

export const metadata = {
  title: "The Dragon News",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Container className="min-h-screen">
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
