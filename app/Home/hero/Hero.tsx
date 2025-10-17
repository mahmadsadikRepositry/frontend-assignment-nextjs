import * as React from 'react';
import { HeroCard } from './HeroCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HeroCardItems = [
  {
    title: 'Legal answering service',
    description: 'With 24/7 legal intake, you’ll never miss a potential client’s call.',
    img: '/icons/Answering.svg',
  },
  {
    title: 'AI intake chatbot',
    description:
      'Turn web leads into clients with a chatbot powered by the latest in AI technology.',
    img: '/icons/AL_2ColorIcon-Chatbot.svg',
  },
  {
    title: 'Live translation services',
    description:
      'Break through the language barrier and schedule video conferences with live interpreters.',
    img: '/icons/Translation.svg',
  },
];

export default function Hero() {
  return (
    <section className="relative w-full -mt-[134px] pt-[105px]">
      <div className="md:hidden">
        <div className="relative w-full h-80 bg-cover bg-center hero-bg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#23255A]/80 to-transparent" />
        </div>
        <div className="bg-navyBlue px-6 py-8">
          <h1 className="text-white text-3xl font-bold mb-4 leading-tight">
            We're more than an answering service
          </h1>
          <p className="text-white text-lg mb-6">
            Answering Legal has everything you need to make sure your firm never misses another
            opportunity.
          </p>
          <div className="mb-6">
            <span className="text-white font-bold text-xl">Excellent 4.84</span>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
              ))}
            </div>
            <span className="text-white text-base block mt-2">based on 230 reviews</span>
          </div>
          <a
            className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold text-base overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
            href="/try-for-free"
          >
            See our pricing
          </a>
        </div>
      </div>

<div className="hidden md:block relative w-full hero-bg flex items-center bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-r from-[#23255A]/80 to-transparent" />
  <div className="relative z-10 flex flex-col justify-center pl-40 py-12 max-w-4xl">
    <h1 className="text-white text-5xl font-bold mb-6 leading-tight max-w-[800px]">
      We're more than an answering service
    </h1>
    <p className="text-white text-xl mb-6 max-w-[600px]">
      Answering Legal has everything you need to make sure your firm never
      misses another opportunity.
    </p>
    <div className="mb-6">
      <span className="text-white font-bold text-2xl">Excellent 4.84</span>
      <div className="flex items-center gap-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-400"
          />
        ))}
      </div>
      <span className="text-white text-base block mt-2">
        based on 230 reviews
      </span>
    </div>
    <a
      className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold text-[22px] overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
      href="/try-for-free"
    >
      See our pricing
    </a>
  </div>
</div>

      <div className="md:hidden bg-white py-12 px-6">
        <div className="flex flex-col items-center gap-3 mb-8">
          <h2 className="text-navyBlue text-2xl font-semibold text-center">
            Here's what we can do for your law firm
          </h2>
          <div className="w-full h-[2px] bg-teal max-w-[478px]" />
        </div>
        <div className="flex flex-col gap-6">
          {HeroCardItems.map((item, index) => (
            <HeroCard
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div
          id="maindiv"
          className="absolute left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 px-4 w-full bottom-20"
        >
          <h2 className="text-white text-3xl font-semibold text-center">
            Here's what we can do for your law firm
          </h2>
          <div className="w-full h-[2px] bg-[#3CCED7] max-w-[1250px] mb-4" />
        </div>

        <div className="flex absolute -bottom-60 left-1/2 transform -translate-x-1/2 gap-6">
          {HeroCardItems.map((item, index) => (
            <div key={index} className="right-10 w-80">
              <HeroCard title={item.title} description={item.description} img={item.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
