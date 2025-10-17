import { Montserrat } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import ResponsiveNavBar from "./Components/NavBar/ResponsiveNavBar";
import { Footer } from "./Components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all weights
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <div className="flex flex-col min-h-screen">
          <ResponsiveNavBar />
          <div className=" h-[102px] lg:h-[134px] bg-offWhite"></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
