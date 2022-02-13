import { forecastType } from "./forecastType";

export type axiosType = [
  {
    publicTime: string;
    publicTimeFormatted: string;
    publishingOffice: string;
    title: string;
    link: string;
    description: {
      publicTime: string;
      publicTimeFormatted: string;
      headlineText: string;
      bodyText: string;
      text: string;
    };
    forecasts: Array<forecastType>;
    location: {
      area: string;
      prefecture: string;
      district: string;
      city: string;
    };
    copyright: {
      title: string;
      link: string;
      image: {
        title: string;
        link: string;
        url: string;
        width: number;
        height: number;
      };
      provider: [
        {
          link: string;
          name: string;
          note: string;
        }
      ];
    };
  }
];
