import type { GetCityByCoordinatesResponse } from "../../core/services/interfaces";

interface CityInfoCardProps {
  infoData: GetCityByCoordinatesResponse;
};

function CityInfoCard({ infoData }: CityInfoCardProps) {
  return (
    <div className=" p-1 w-full md:w-1/3 lg:w-1/3 xl:w-1/4 xxl:1/3  md:mx-3 rounded-md shadow-md flex flex-col md:py-3 border border-[#ccc] h-auto md:h-full">
      <div className=" flex justify-center items-center md:h-1/4">
        <h1 className="text-black font-medium break-all text-sm md:text-lg xl:text-2xl">Genel bilgiler</h1>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl">
          Latitude:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.latitude.toFixed(3)}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC] ">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl">
          Longitude:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right ">
          {infoData.longitude.toFixed(3)}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl">
          Kıta:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.continent}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl ">
          Ülke:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.countryName}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl ">
          Dil:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.localityLanguageRequested.toUpperCase()}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl ">
          İlçe:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-base xl:text-2xl text-right">
          {infoData.city}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl">
          Şehir Kodu:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.principalSubdivisionCode}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-1 border-t border-[#CCC]">
        <h2 className="text-black font-light break-all text-sm md:text-lg xl:text-2xl">
          Kıta Kodu:
        </h2>
        <p className="text-black font-light break-all text-sm md:text-lg xl:text-2xl text-right">
          {infoData.continentCode}
        </p>
      </div>
    </div>
  );
};

export default CityInfoCard;