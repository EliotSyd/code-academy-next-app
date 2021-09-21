import Header from "./header";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="flex">
          <Sidebar />
          <div className="items-center justify-center">
            {children}
          </div>
        </div>
      </div>

      <footer />
    </div>


  );
};

export default Layout