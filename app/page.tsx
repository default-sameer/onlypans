/* eslint-disable @next/next/no-img-element */
"use client";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  // get query params from url
  const searchParams = useSearchParams();
  const query = searchParams.get("gender");

  // display message based on query params in gender

  const displayWord = () => {
    switch (query) {
      case "female":
        return "woman";
      case "male":
        return "you";
      default:
        return "everyone";
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-5 md:gap-10 py-8">
      <div
        id="head-gradient"
        className="flex justify-center items-center text-center flex-col gap-10 md:gap-16 p-5 md:p-10 rounded-3xl bg-[#5FA8D3]"
      >
        <div className="flex flex-col gap-3 md:gap-6">
          <h1
            className={title({
              size: "sm",
              className:
                "text-3xl font-black tracking-tight text-center md:text-5xl lg:tracking-tighter lg:text-7xl",
            })}
          >
            Teaching {displayWord()} how to cook.
          </h1>
          <p
            className={subtitle({
              className:
                "mx-auto mt-4 text-lg text-center leading-1 md:px-20 lg:leading-normal lg:text-2xl",
            })}
          >
            Unleash Your Inner Chef, One Recipie at a Time
          </p>
        </div>
        <img
          className="w-[150px] h-[150px] md:w-[300px] xl:h-[400px] xl:w-[400px] mx-auto"
          src="/assets/home/banner-image.svg"
          alt="Woman Cooking"
        />
      </div>
    </section>
  );
}
