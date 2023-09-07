"use client";

import { subtitle, title } from "@/components/primitives";
import { CameraIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const PaymentSelectionPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className={title()}>Select A Payment Option</h1>
        <div className="flex gap-5 flex-col sm:flex-row">
          <Button className="bg-white flex justify-center items-center">
            <p
              className={subtitle({
                className: "text-black",
              })}
            >
              Pay with
            </p>
            <Image
              src={"/assets/pricing/Khalti_Logo.svg"}
              objectFit="contain"
              alt="Khalti"
              height={15}
              width={100}
            />
          </Button>
          <Button className="bg-slate-400 flex justify-center items-center">
            <p
              className={subtitle({
                className: "text-black",
              })}
            >
              Pay with
            </p>
            <Image
              src={"/assets/pricing/esewa.png"}
              objectFit="contain"
              alt="Khalti"
              height={15}
              width={100}
            />
          </Button>
        </div>
      </section>
    </>
  );
};

export default PaymentSelectionPage;
