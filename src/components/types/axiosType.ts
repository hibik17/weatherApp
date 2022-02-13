import { descriptionType } from "./descriptionType";
import { forcastsType } from "./forcasts";

export type axiosType = {
  publicTime: string;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
  link: string;
  description: descriptionType;
  forecasts: Array<forcastsType>;
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
};
