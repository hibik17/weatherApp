import React from "react";
import { descriptionType } from "../types/descriptionType";

type Props = {
  description: descriptionType;
};
export const Header = (props: Props) => {
  const { description } = props;
  return (
    <>
      <p className="text-lg italic text-center font-light text-slate-50 pt-4">
        {description?.publicTime}
      </p>
      <p className="text-5xl text-center italic font-light text-white pt-4">
        tokyo 天気
      </p>
      <p className="text-slate-50 text-center font-light pt-3 text-lg">
        このサイトでは三日間の東京の天気をお届けします。
      </p>
    </>
  );
};
