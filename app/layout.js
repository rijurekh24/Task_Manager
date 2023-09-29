import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Management ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <div className="container mt-3">{children}</div>
        <script
          src="https://kit.fontawesome.com/3f8256dd02.js"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
