import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">

        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="grow">{children}</main>

        {/* Global Footer */}
        <Footer />

      </body>
    </html>
  );
}
