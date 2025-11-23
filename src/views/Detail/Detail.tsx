import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CityInfoCard, WeatherComp } from "../../components";
import type { GetCityByCoordinatesResponse, GetWeatherByCoordinatesResponse, } from "../../core/services/interfaces";

function Detail() {
  const location = useLocation();
  const cityState = location.state.city as GetCityByCoordinatesResponse;
  const weatherState = location.state.weather as GetWeatherByCoordinatesResponse;

  useEffect(() => {
    console.log("city info-> ", cityState);
    console.log("weather info-> ", weatherState);
  }, []);

  if (cityState.principalSubdivision === "Şehir Değil") {
    console.log("Şehir Değil mi?", cityState.principalSubdivision);
    return (
      <div>
        <p>Şehir değil</p>
      </div>
    );
  }

  return (
    <div className="px-2 md:px-6 h-[80vh] md:h-[70vh] overflow-y-auto">
      <div className="flex justify-center items-center xl:pt-[2%] ">
        <h1 className="font-medium text-xl md:text-2xl xl:text-4xl truncate">
          {cityState.principalSubdivision.toUpperCase()}
        </h1>
      </div>

      <div className=" flex flex-col md:flex-row gap-3 md:gap-2 mt-2 md:mt-5 h-auto md:h-[80%]">
        <CityInfoCard infoData={cityState} />
        <WeatherComp infoData={weatherState} />
      </div>

    </div>
  );
};

export default Detail;