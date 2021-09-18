import Header from "./header";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <div className="flex">
        <Sidebar />
        <div className="items-center justify-center">
          {children}
        </div>

      </div>

      <footer />
    </div>


  );
};

export default Layout