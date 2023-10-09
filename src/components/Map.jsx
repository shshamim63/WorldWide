import "leaflet/dist/leaflet.css";

import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  const navigate = useNavigate();

  return (
    <div className="map-container" onClick={() => navigate("form")}>
      <MapContainer center={[51.505, -0.09]} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          {/* You can add custom content to your markers here */}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
