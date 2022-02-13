export type forcastsType = {
  date: "2021-03-03";
  dateLabel: "今日";
  telop: "晴れ";
  detail: {
    weather: string;
    wind: string;
    wave: string;
  };
  temperature: {
    min: {
      celsius: number | null;
      fahrenheit: number | null;
    };
    max: {
      celsius: number | null;
      fahrenheit: number | null;
    };
  };
  chanceOfRain: {
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
  };
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
};
