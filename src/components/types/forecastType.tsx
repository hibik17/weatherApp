export type forecastType = {
  date: string;
  dateLabel: string;
  telop: string;
  detail: {
    weather: string;
    wind: string;
    wave: string;
  };
  temperature: {
    min: {
      celsius?: null;
      fahrenheit?: null;
    };
    max: {
      celsius: number;
      fahrenheit: number;
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
