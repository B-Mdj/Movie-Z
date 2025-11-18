import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Movie Z",
  description: "Movie homepage clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
<main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
