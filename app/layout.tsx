import "../styles/globals.css";
import Navbar from "./navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className="bg-gray-100
       transition-all duration-700"
      >
        <Navbar />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
