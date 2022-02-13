import React from "react";
import { GetData } from "./components/hooks/GetData";

function App() {
  // axiosのデータを取得するhooksの展開
  const { data, weatherData } = GetData();
  return (
    <div className="App">
      <p>天気の表示をするAppを制作していきたいと考えています。</p>
    </div>
  );
}

export default App;
