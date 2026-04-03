"use client";

import { useState, useRef } from "react";
import Button from "@/components/Button";
import emailjs from "emailjs-com";
import Alert from "@/components/Alert";

export default function ContactForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [type, setType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    console.log(process.env.NEXT_PUBLIC_SERVICE_KEY as string);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY as string,
        formRef.current,
        process.env.NEXT_PUBLIC_KEY as string,
      )
      .then(
        () => {
          formRef.current?.reset();
          setLoading(false);
          setType("success");
        },
        (error) => {
          setLoading(false);
          setType("error");
        },
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2 className="text-heading font-bold text-4xl">Send Me a Message</h2>
      <div className="grid gap-4 mt-6">
        <input defaultValue="Ervin Gorospe" name="to_name" hidden />
        <input
          required
          name="from_name"
          type="text"
          placeholder="Full Name"
          className="py-3 px-6 border w-full border-primary rounded-4xl"
        />
        <div className="grid gap-4 sm:gap-0 sm:flex items-center space-x-2">
          <input
            name="from_email"
            required
            type="email"
            placeholder="Email"
            className="py-3 px-6 border w-full border-primary rounded-4xl"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="py-3 px-6 border w-full border-primary rounded-4xl"
          />
        </div>

        <textarea
          name="message"
          rows={5}
          className="py-3 px-6 border w-full border-primary rounded-4xl"
          placeholder="Message"
        />
      </div>

      <div className="mt-4">
        <Alert
          type={type}
          onClose={() => setType("")}
          message={
            type === "error"
              ? "Something went wrong! 😔 try again later."
              : "AWESOME!! 😊 I'll get back to you."
          }
        />
      </div>

      <div className="mt-4">
        <Button
          disabled={isLoading}
          type="button"
          padding="py-3 px-6"
          firstText={
            <>
              {isLoading ? "Sending..." : "Send Message"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <g clipPath="url(#clip0_36_13)">
                  <path
                    d="M16.7625 -0.821872C17.0688 -0.931247 17.4063 -0.853122 17.6375 -0.624997C17.8688 -0.396872 17.9438 -0.0562467 17.8344 0.250003L12.2719 15.7781C12.1156 16.2125 11.7063 16.5 11.2469 16.5C10.8031 16.5 10.4031 16.2313 10.2375 15.8219L8.23126 10.8844C8.09064 10.5406 8.15314 10.1469 8.39376 9.86563L11.3469 6.35313C11.5063 6.1625 11.4938 5.88438 11.3188 5.70938C11.1438 5.53438 10.8625 5.52188 10.675 5.68125L7.16251 8.62813C6.87814 8.86563 6.48751 8.92813 6.14376 8.79063L1.19064 6.775C0.781262 6.60938 0.512512 6.20938 0.512512 5.76563C0.512512 5.30625 0.800012 4.89688 1.23439 4.74063L16.7625 -0.821872Z"
                    fill="#4F8CFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_13">
                    <rect width="18" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </>
          }
          secondText={
            <>
              Good Choice
              <span>👍</span>
            </>
          }
        />
      </div>
    </form>
  );
}
