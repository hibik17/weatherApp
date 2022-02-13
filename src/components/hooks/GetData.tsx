import axios from "axios";
import { useCallback, useState } from "react";

export const GetData = () => {
  // weatherのデータを格納しておくstate
  const [data, setData] = useState();

  const weatherData = () => {
    axios
      .get("https://weather.tsukumijima.net/api/forecast?city=130020")
      .then((res) => {
        console.log(res);
      });
  };

  return { data, weatherData };
};
