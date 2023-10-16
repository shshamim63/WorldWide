import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className="app-layout-container">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
