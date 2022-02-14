/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// import { Loading } from "./components/atoms/Loading";
import { GetData } from "./components/hooks/GetData";
import { Header } from "./components/moluclues/header";
import { WeatherCard } from "./components/moluclues/weatherCard";
function App() {
  // axiosのデータを取得するhooksの展開
  const { description, forcasts, weatherData, loading } = GetData();

  useEffect(() => {
    weatherData();
  }, []);

  return (
    <div className="App bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 h-screen">
      {loading ? (
        <>
          <Header description={description!} />
          <div className="flex items-center justify-center w-full pt-3">
            {forcasts.map((forcast, number) => {
              return <WeatherCard key={number} />;
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
