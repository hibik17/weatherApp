/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { axiosType } from "../types/axiosType";

export const GetData = () => {
  // weatherのデータを格納しておくstate
  const [data, setData] = useState<axiosType>();

  const weatherData = useCallback(() => {
    axios
      .get<axiosType>(
        "https://weather.tsukumijima.net/api/forecast?city=130020"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return { data, weatherData };
};
