import * as React from 'react';
import Image from 'next/image';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Crm() {
  return (
    <section>
      <div className="pt-72 bg-white w-full   pb-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-lg px-4 sm:px-0">
  <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 text-balance">
    Your data’s in good hands
  </h2>

  <div
    className="w-20 sm:w-32 h-[3px] bg-[#3CCED7] rounded-full mb-5"
    aria-hidden="true"
  ></div>

  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
    Our partnership with your CRM enables a seamless flow of information.
  </p>

  <ul className="space-y-4 mb-8 text-sm sm:text-base">
    <li className="flex items-start gap-3">
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-[2px]"/>
      
      <span className="text-gray-800 leading-snug">
        Answering Legal’s receptionists take down exactly the information you need.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-[2px]"/>
      <span className="text-gray-800 leading-snug">
        Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-[2px]"/>
      <span className="text-gray-800 leading-snug">
        All you’ll have to do is open your CRM and follow up to secure your new client’s business.
      </span>
    </li>
  </ul>

  <a
    href="/try-for-free"
    className="flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue hover:bg-navyBlue transition-all duration-300 text-sm sm:text-lg"
  >
    See our pricing
  </a>
</div>


      </div>
    </section>
  );
}
