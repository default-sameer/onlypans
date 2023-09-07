"use client";

import { useSearchParams } from "next/navigation";
import { title } from "@/components/primitives";
import React from "react";
import { useRouter } from "next/navigation";

const SuccessKhalti = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const pidx = searchParams.get("pidx");
  const transaction_id = searchParams.get("transaction_id");
  const amount = searchParams.get("amount");
  const mobile = searchParams.get("mobile");
  const purchase_order_id = searchParams.get("purchase_order_id");
  const purchase_order_name = searchParams.get("purchase_order_name");
  const message = searchParams.get("message");

  if (
    !pidx ||
    !transaction_id ||
    !amount ||
    !mobile ||
    !purchase_order_id ||
    !purchase_order_name
  ) {
    router.push("/pricing");
  }

  return (
    <section>
      {message ? (
        <h1 className={title()}>{message}</h1>
      ) : (
        <>
          <h1 className={title()}>Khalti payment Successful</h1>
          <p>Pidx : {pidx}</p>
          <p>Transaction ID :{transaction_id}</p>
          <p>Amount :{amount}</p>
          <p>Mobile :{mobile}</p>
          <p>Purchase Order ID : {purchase_order_id}</p>
          <p>Purchase Order name :{purchase_order_name}</p>
        </>
      )}
    </section>
  );
};

export default SuccessKhalti;
