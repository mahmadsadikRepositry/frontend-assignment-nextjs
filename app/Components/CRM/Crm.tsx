import * as React from "react";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Crm() {
  return (
    <section>
    <div className="pt-32 bg-white w-full   pb-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/CRM-Graphic.png"
          alt="CRM Graphic"
          width={500}
          height={350}
          className="max-w-full h-auto drop-shadow-xl"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-lg">
        <h2 className="text-[#23255A] text-2xl md:text-3xl font-bold mb-2 pt-32">
          Your data’s in good hands
        </h2>
        <div className="w-20 h-1 bg-blue mb-4" />
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Our partnership with your CRM enables a seamless flow of information.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-blue text-xl">
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500" />
            </span>
            <span className="text-gray-800">
              Answering Legal’s receptionists take down exactly the information
              you need.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue text-xl">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500" />

            </span>
            <span className="text-gray-800">
              Through native API integrations with our proprietary software, we
              make sure it’s immediately where you need it to be.
            </span>``
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue text-xl">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500" />

            </span>
            <span className="text-gray-800">
              All you’ll have to do is open your CRM and follow up to secure
              your new client’s business.
            </span>
          </li>
        </ul>
        <button
        
          className="bg-blue-500 text-white font-semibold rounded-lg px-6 py-3 text-lg "
        >
          <a
            href="/answering-service-pricing-plans"
            className="inline-block bg-blue text-white font-semibold rounded-lg px-6 py-3 text-lg "
          >
            See our pricing
          </a>
        </button>
      </div>
    </div>
    </section>
  );
}
