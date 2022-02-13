/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GetData } from "./components/hooks/GetData";

function App() {
  // axiosのデータを取得するhooksの展開
  const { description, forcasts, weatherData } = GetData();

  useEffect(() => {
    weatherData();
  }, []);

  console.log(description?.bodyText);
  console.log(forcasts[0]?.date);

  return (
    <div className="App">
      <p>{description?.bodyText}</p>
    </div>
  );
}

export default App;
