"use client";

import { subtitle, title } from "@/components/primitives";
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface KhaltiInitialValues {
  return_url?: string;
  website_url?: string;
  amount: number;
  purchase_order_id: string;
  purchase_order_name: string;
  customer_info: {
    name: string;
    email: string;
    phone: string;
  };
}

interface EsewaInitialValues {
  amt: string;
  txAmt: string;
  psc: string;
  pdc: string;
  tAmt: string;
  scd: string;
  pid: string;
  su: string;
  fu: string;
}

const initialValues: {
  [key: string]: KhaltiInitialValues | EsewaInitialValues;
} = {
  khalti: {
    return_url: process.env.NEXT_PUBLIC_KHALTI_DEV_RETURN_URL,
    website_url: process.env.NEXT_PUBLIC_KHALTI_DEV_WEBSITE_URL,
    amount: 1000,
    purchase_order_id: "1234567890",
    purchase_order_name: "Test Purchase",
    customer_info: {
      name: "Ram Bahadur",
      email: "test@khalti.com",
      phone: "9800000001",
    },
  },
  esewa: {
    amt: "85",
    txAmt: "10",
    psc: "2",
    pdc: "3",
    tAmt: "100",
    scd: "EPAYTEST",
    pid: `${Date.now()}--${Math.random() * 10}--${Date.now()}-fjlkawf`,
    su: process.env.NEXT_PUBLIC_ESEWA_DEV_SUCCESS_URL!,
    fu: process.env.NEXT_PUBLIC_ESEWA_DEV_FAILURE_URL!,
  },
};

const PaymentSelectionPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalBody, setModalBody] = React.useState("");
  const [paymentType, setPaymentType] = React.useState<"khalti" | "esewa">(
    "khalti"
  );
  const [countdown, setCountdown] = React.useState(10);
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan");
  const type = searchParams.get("type");

  const { user, isLoaded } = useUser();
  const userEmail = user?.emailAddresses.map((e) => e.emailAddress);

  React.useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
        if (!isOpen) {
          setCountdown(10);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown, isOpen]);

  const apiKey = process.env.NEXT_PUBLIC_KHALTI_SECRET_KEY;

  const formik = useFormik({
    initialValues: initialValues[paymentType],
    onSubmit: async (values) => {
      if (formik && formik.values) {
        if (!paymentType) {
          alert("Please select a payment option");
          return;
        }
        switch (paymentType) {
          case "khalti":
            try {
              const inValues = formik.values as KhaltiInitialValues;
              const { customer_info, purchase_order_name, ...rest } = inValues;

              const res = await axios.post(
                "https://a.khalti.com/api/v2/epayment/initiate/",
                JSON.stringify({
                  ...rest,
                  customer_info: {
                    ...customer_info,
                    name: user?.fullName || "Only Pans TestUser",
                  },
                  purchase_order_name: `${type} Membership for OnlyPans`,
                }),
                {
                  headers: {
                    Authorization: `Key ${apiKey}`,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                }
              );
              if (res.status === 200 && res.data) {
                alert("Redirecting to Khalti");
                router.push(res.data.payment_url);
              }
            } catch (error) {
              console.log(error);
              setModalTitle("Error");
              setModalBody("Something went wrong");
            }
            break;
        }
      }
    },
  });

  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                <p>{modalBody}</p>

                {paymentType === "khalti" && (
                  <div className="flex flex-col gap-2">
                    <p>Number : {process.env.NEXT_PUBLIC_KHALTI_TEST_NUMBER}</p>
                    <p>MPIN : {process.env.NEXT_PUBLIC_KHALTI_TEST_MPIN}</p>
                    <p>OTP : {process.env.NEXT_PUBLIC_KHALTI_OTP}</p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {paymentType === "khalti" && (
                  <Button
                    disabled={countdown > 0}
                    color="primary"
                    onClick={() => {
                      if (countdown == 0) {
                        formik.handleSubmit();
                      } else {
                        alert(
                          `Please wait ${countdown} seconds before trying again.`
                        );
                      }
                    }}
                  >
                    {countdown > 0 ? countdown : "Pay"}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <section className="flex flex-col gap-4">
        {plan && plan === "free" ? (
          <div className="flex flex-col gap-4">
            <h1 className={title()}>Free Membership</h1>
            <p className={subtitle()}>You can join our community for free.</p>
            <a href="/dashboard">- Go To Dashboard -</a>
          </div>
        ) : (
          <>
            <h1 className={title()}>Select A Payment Option</h1>
            <div className="flex gap-5 flex-col sm:flex-row">
              <Button
                onClick={() => {
                  setModalTitle("Pay With Khalti");
                  setModalBody(
                    "This Is A test Account, So when redirected to khalti please fill the following details and not your own ⛔"
                  );
                  setPaymentType("khalti");
                  onOpen();
                }}
                className="bg-white flex justify-center items-center"
              >
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
              <Button
                onClick={() => {
                  setModalTitle("Pay With Esewa");
                  setModalBody("Work In Progress 🏗 Because it's docs is shit");
                  setPaymentType("esewa");
                  onOpen();
                }}
                className="bg-slate-400 flex justify-center items-center"
              >
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
          </>
        )}
      </section>
    </>
  );
};

export default PaymentSelectionPage;
