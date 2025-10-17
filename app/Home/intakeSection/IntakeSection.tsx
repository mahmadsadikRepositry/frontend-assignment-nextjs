import * as React from 'react';
import Image from 'next/image';

export default function IntakeSection() {
  return (
    <section className="px-80">
      <div className="pt-50 bg-white w-full pb-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Design your perfect legal intake process
          </h2>
          <div className="w-full h-[2px] bg-[#3CCED7] max-w-[478px] mb-4" aria-hidden="true" />
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Get everything you need out of every new client call. The virtual receptionists at our
            legal intake call center will use your unique specifications to perform a legal intake
            for every new client caller.
          </p>
          <a
            className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold text-base sm:text-[22px] overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
            href="/try-for-free"
          >
            See our pricing
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/Receptionist_IMG.png"
            alt="CRM Graphic"
            width={500}
            height={350}
            className="max-w-full h-auto drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
