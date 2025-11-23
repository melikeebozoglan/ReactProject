import { useEffect, useState } from "react";
import { MapContainer, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useFetch } from "../../hooks";
import { useNavigate } from "react-router-dom";

function MapComp() {
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [cityInfo, setCityInfo] = useState<any>(null);
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const { data: cityData, trigger: triggerCity } = useFetch();
  const { data: weatherData, trigger: triggerWeather } = useFetch();
  const navigate = useNavigate();

  const MapEvents = () => {
    useMapEvents({
      click: async (e: any) => {
        const lat = e.latlng.lat;
        const lon = e.latlng.lng;

        setPopupPosition([lat, lon]);

        const cityFetch = await triggerCity({
          methodName: "getCityByCoordinates",
          payload: { latitude: lat, longitude: lon },
        });
        setCityInfo(cityFetch);

        const weatherFetch = await triggerWeather({
          methodName: "getWeatherByCoordinates",
          payload: { latitude: lat, longitude: lon },
        });
        setWeatherInfo(weatherFetch);
      },
    });

    return null;
  };

  useEffect(() => {
    console.log("cityInfo--->", cityInfo);
    console.log("weatherInfo--->", weatherInfo);

    if (!cityInfo) return;

    const cityName = cityInfo.principalSubdivision || "Şehir Değil";

    if (!cityInfo.principalSubdivision) {
      cityInfo.principalSubdivision = "Şehir Değil";
    }

    setCityName(cityName);
  }, [cityInfo, weatherInfo]);

  return (
    <>
      <h1 className="text-sm md:text-lg xl:text-2xl font-bold mb-4">Türkiye Haritası</h1>
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
                <button
                  onClick={() =>
                    navigate(`/detail/${cityName}`, {
                      state: {
                        city: cityInfo,
                        weather: weatherInfo,
                      },
                    })
                  }
                  className=" text-sm md:text-lg xl:text-2xl font-bold text-purple-700 underline hover:text-purple-900 transition"
                >
                  {cityName}
                </button>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default MapComp;