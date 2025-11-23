import { useEffect, useState } from "react";
import type { GetWeatherByCoordinatesResponse } from "../../core/services/interfaces";
import { MorningImage, NightImage } from "../../assets/images";
import { formatDateTime } from "../../utils/utilMethods";

interface WeatherCompProps {
  infoData: GetWeatherByCoordinatesResponse;
};

function WeatherComp({ infoData }: WeatherCompProps) {
  const [isDay, setIsDay] = useState<number>(1);
  const [currentWeather, setCurrentWeather] = useState<any>({ time: [], temperature: [], windspeed: [], winddirection: [], });
  const [dailyWeather, setDailyWeather] = useState<any>({ time: [], temperatureMax: [], temperatureMin: [], windspeed: [], });

  useEffect(() => {
    //console.log("havaaaaa", infoData);
    setIsDay(infoData.current_weather.is_day);
    console.log("aa", isDay);

    const currentObject = {
      time: formatDateTime(infoData.current_weather.time),
      temperature: infoData.current_weather.temperature,
      windspeed: infoData.current_weather.windspeed,
      winddirection: infoData.current_weather.winddirection,
    };
    setCurrentWeather(currentObject);

    const dailyObject = {
      time: infoData.daily.time,
      temperatureMax: infoData.daily.temperature_2m_max,
      temperatureMin: infoData.daily.temperature_2m_min,
      windspeed: infoData.daily.windspeed_10m_max,
    };
    setDailyWeather(dailyObject);
    console.log("dailyObject--------", dailyObject);

  }, [infoData]);

  return (
    <div className=" px-1 w-full md:w-2/3 lg:w-2/3 xl:w-3/4 xxl:2/3 md:mx-3 rounded-md shadow-md flex flex-col h-full md:py-3 border border-[#ccc] gap-3">
      <div className="px-1 md:px-3 relative h-[55%] lg:h-2/3  w-full flex items-center justify-center shadow-md rounded-md overflow-hidden border border-[#ccc]">
        <div style={{ backgroundImage: `url(${isDay ? MorningImage : NightImage})`, }} className="inset-0 absolute bg-cover bg-center bg-no-repeat  blur-xs "></div>
        <div className="relative z-10 h-full w-full flex flex-col justify-between py-1 px- md:py-4 lg:py-10 xl:py-20 ">
          <p>animasyon</p>

          <div className="flex flex-row justify-center items-center px-1">
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>{currentWeather.time}</p>
          </div>

          <div className="flex flex-row justify-between items-center gap-2 px-1">
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>Temperature:</p>
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>{currentWeather.temperature}</p>
          </div>

          <div className="flex flex-row justify-between items-center gap-2 px-1">
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>Wind Speed:</p>
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>{currentWeather.windspeed}</p>
          </div>

          <div className="flex flex-row justify-between items-center gap-2 px-1">
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>Wind Direction:</p>
            <p className={`${isDay ? "text-black" : "text-white"} font-sans break-all text-sm md:text-lg xl:text-2xl`}>{currentWeather.winddirection}</p>
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-between lg:h-1/3 grid grid-cols-2 lg:grid-cols-4 gap-1 ">
        <div className=" h-full flex flex-col justify-between rounded-md shadow-md py-1 md:py-2 border border-[#ccc]">
          <div className="flex flex-row justify-center items-center px-1">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.time[1]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Max:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMax[1]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Min:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMin[1]}</p>
          </div>
          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Wind Speed:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.windspeed[1]}</p>
          </div>
        </div>

        <div className=" h-full flex flex-col justify-between rounded-md shadow-md py-1 md:py-2 border border-[#ccc]">
          <div className="flex flex-row justify-center items-center px-1">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.time[2]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Max:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMax[2]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Min:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMin[2]}</p>
          </div>
          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Wind Speed:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.windspeed[2]}</p>
          </div>
        </div>

        <div className=" h-full flex flex-col justify-between rounded-md shadow-md py-1 md:py-2 border border-[#ccc]">
          <div className="flex flex-row justify-center items-center px-1">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.time[3]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Max:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMax[3]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Min:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMin[3]}</p>
          </div>
          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Wind Speed:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.windspeed[3]}</p>
          </div>
        </div>

        <div className=" h-full flex flex-col justify-between rounded-md shadow-md py-1 md:py-2 border border-[#ccc]">
          <div className="flex flex-row justify-center items-center px-1">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.time[4]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Max:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMax[4]}</p>
          </div>

          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Temperature Min:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.temperatureMin[4]}</p>
          </div>
          <div className="flex flex-row justify-between items-center px-0.5">
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>Wind Speed:</p>
            <p className={`text-black font-light break-all text-xs xl:text-sm`}>{dailyWeather.windspeed[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComp;