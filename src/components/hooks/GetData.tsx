/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { descriptionType } from "../types/descriptionType";
import { forcastsType } from "../types/forcasts";
import { axiosType } from "../types/axiosType";

export const GetData = () => {
  // weather_descriptionのデータを格納しておくstate
  const [description, setDescription] = useState<descriptionType>();

  // weather_forcastsのデータを格納しておくstate
  const [forcasts, setForcasts] = useState<Array<forcastsType>>([]);

  // loadingを管理するstate
  const [loading, setLoading] = useState<boolean>(false);

  const weatherData = useCallback(() => {
    setLoading(!loading);
    axios
      .get<axiosType>(
        "https://weather.tsukumijima.net/api/forecast?city=130020"
      )
      .then((res) => {
        console.log(res.data);
        setDescription(res.data.description);
        setForcasts(res.data.forecasts);
      })
      .catch((err) => alert(`${err.status}のエラーが出ています`))
      .finally(() => {
        console.log("天気のデータの取得が完了");
        setLoading(!loading);
      });
  }, []);

  return { description, forcasts, weatherData, loading };
};
