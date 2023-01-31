import Navbar from "./navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-gray-100 dark:bg-slate-900
          transition-all duration-700"
    >
      <Navbar />
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
