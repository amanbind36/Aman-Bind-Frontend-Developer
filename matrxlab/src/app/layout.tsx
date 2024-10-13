import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0,backgroundColor:"rgb(0, 22, 28)" }}
      >
        {/* Video in the background with a lower z-index */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute", // Keeps the video fixed in the background
            top: 0,
            left: 0,
            width:"1600px", // Fixed width in pixels
            height: "700px", // Fixed height in pixels
            margin: "auto", // Centers the video horizontally
            objectFit: "cover", // Ensures the video covers the defined dimensions
            zIndex: "-1", // Places the video behind all content
            right: 0, // These ensure the video is centered both vertically and horizontally
           
          
           
          }}
        >
          <source src="/MatrixVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Wrapper for header and content */}
        <div
          style={{
            position: "relative", // Content positioned relative to ensure it's above the video
            zIndex: 1,
            maxWidth: "1440px",
            // Full viewport height for the content wrapper
            margin: "auto", // Centers the content
            color: "white", // White text to contrast against video background
          }}
        >
        
          <Navbar />
        
      
          <div style={{ padding: "20px", marginTop:"100px" }}>{children}</div>
        </div>
        <Footer/>
        
      </body>
    </html>
  );
}
