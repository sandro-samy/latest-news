import "../styles/globals.css";
import Navbar from "./navbar";
import Providers from "./Providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <Head /> */}
      <body
        className="bg-gray-100 dark:bg-slate-900
          transition-all duration-700"
      >
        <Providers>
          <Navbar />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
