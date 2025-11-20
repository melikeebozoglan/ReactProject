import { useEffect, useState } from "react";
import { MapContainer, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useFetch } from "../../hooks";

function MapComp() {
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(
    null
  );
  const [cityName, setCityName] = useState<string>("");
  const { data, trigger } = useFetch();

  const MapEvents = () => {
    useMapEvents({
      click: async (e: any) => {
        const lat = e.latlng.lat;
        const lon = e.latlng.lng;

        setPopupPosition([lat, lon]);

        await trigger({
          methodName: "getCityByCoordinates",
          payload: { lat, lon },
        });
      },
    });

    return null;
  };

  useEffect(() => {
    console.log("data--->", data);
    if (!data) return;

    const name = data.principalSubdivision || "Bilinmeyen";

    setCityName(name);
  }, [data]);

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Türkiye Haritası</h1>
      <div className="w-full h-[60vh] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[39.0, 35.0]} // Türkiye merkez
          zoom={6}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
          />

          <MapEvents />

          {popupPosition && (
            <Popup position={popupPosition}>
              <div className="text-sm">
                <p>{cityName}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </>
  );
}

export default MapComp;
