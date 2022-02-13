/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
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
        </>
      ) : (
        <>
          <p>loading...</p>
        </>
      )}
    </div>
  );
}

export default App;
