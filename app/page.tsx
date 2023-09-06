"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
    <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
      <div className="px-2 md:px-6">
        <Image
          src="/assets/home/undraw_cooking.svg"
          alt="Woman Cooking"
          objectFit="contain"
          height={500}
          width={500}
        />
      </div>
      <h1
        className={title({
          size: "sm",
          className: "text-center",
        })}
      >
        Teaching {displayWord()} how to cook, one recipe at a time.
      </h1>
    </section>
  );
}
