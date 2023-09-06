"use client";

import { subtitle, title } from "@/components/primitives";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import axios from "axios";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function PricingPage() {
  const formik = useFormik({
    initialValues: {
      amt: "85",
      txAmt: "10",
      psc: "2",
      pdc: "3",
      tAmt: "100",
      scd: "EPAYTEST",
      pid: `${Date.now()}--${Math.random() * 10}--${Date.now()}-fjlkawf`,
      su: process.env.NEXT_PUBLIC_ESEWA_DEV_SUCCESS_URL,
      fu: process.env.NEXT_PUBLIC_ESEWA_DEV_FAILURE_URL,
    },
    onSubmit: async (values) => {
      alert("👷 Work in Progress");
      // await axios.post("https://uat.esewa.com.np/epay/main", values, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // });
      // alert("Redirecting to Esewa");
    },
  });

  return (
    <div className="flex gap-5 flex-col">
      <h1 className={title()}>Pricing</h1>
      <section className="flex gap-5 bg-gray-400 rounded-md p-4 dark:bg-white justify-between flex-col lg:flex-row">
        <div>
          <p
            className={subtitle({
              className: "text-white dark:text-black font-bold",
            })}
          >
            Monthly Membership
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-indigo-500" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-300 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Pay once, own it forever
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  100
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  NPR / Month
                </span>
              </p>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="flex justify-center gap-2 items-center mt-10 w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="text-xs">Get Access with</span>
                <Image
                  src="/assets/pricing/esewa.png"
                  width={80}
                  height={20}
                  alt="esewa logo"
                />
              </button>
              <p className="mt-6 text-xs leading-5 text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-5 bg-gray-400 rounded-md p-4 dark:bg-white justify-between flex-col lg:flex-row">
        <div>
          <p
            className={subtitle({
              className: "text-white dark:text-black font-bold",
            })}
          >
            Yearly Membership
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-indigo-500" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-300 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Pay once, own it forever
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  1100
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  NPR / Year
                </span>
              </p>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="flex justify-center gap-2 items-center mt-10 w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="text-xs">Get Access with</span>
                <Image
                  src="/assets/pricing/esewa.png"
                  width={80}
                  height={20}
                  alt="esewa logo"
                />
              </button>
              <p className="mt-6 text-xs leading-5 text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
