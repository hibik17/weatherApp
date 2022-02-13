/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// import { Loading } from "./components/atoms/Loading";
import { GetData } from "./components/hooks/GetData";
function App() {
  // axiosのデータを取得するhooksの展開
  const { description, forcasts, weatherData, loading } = GetData();

  useEffect(() => {
    weatherData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <p>{description?.bodyText}</p>
          <p>{forcasts[0]?.date}</p>

          <h1 className="text-3xl text-red-500 font-bold underline">
            Hello world!
          </h1>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
