import * as React from 'react';
import { Button } from '@radix-ui/themes';
import { Card } from '../Card/Card';
import { HeroCard } from '../Card/HeroCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HeroCardItems = [
	{
		title: 'Legal answering service',
		description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
		img: '/icons/Answering.svg'
	},
	{
		title: 'AI intake chatbot',
		description: 'Turn web leads into clients with a chatbot powered by the latest in AI technology.',
		img: '/icons/Answering.svg'
	},
	{
		title: 'Live translation services',
		description: 'Break through the language barrier and schedule video conferences with live interpreters.',
		img: '/icons/Translation.svg'
	}
];
export default function Hero() {
	return (
		<section
			className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center"
			style={{
				backgroundImage: "url('/images/LandingHero.jpg')"
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-[#23255A]/80 to-transparent" />
			<div className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-12 md:py-24 max-w-xl">
				<h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
					We’re more than an answering service
				</h1>
				<p className="text-white text-lg md:text-xl mb-6">
					Answering Legal has everything you need to make sure your firm never misses another opportunity.
				</p>
				<div className="mb-6">
					<span className="text-white font-bold text-xl md:text-2xl">Excellent 4.84</span>
					<div className="flex items-center gap-2 mt-2">
						{/* Stars */}
						{[...Array(5)].map((_, i) => (
							<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
						))}
						<span className="text-white  text-base ml-2">based on 230 reviews</span>
					</div>
				</div>

			
				   <button  className="bg-blue-500 text-white font-semibold rounded-lg  text-lg shadow  px-1 py-1">
					   <a
						   href="/answering-service-pricing-plans"
						   className="inline-block bg-blue text-white font-semibold "
					   >
						   See our pricing
					   </a>
				   </button>
			</div>
		

<div className="flex absolute -bottom-60 left-1/2 transform -translate-x-1/2 gap-6 hidden md:flex">
	{
		HeroCardItems.map((item, index) => (
			<div key={index} className="right-10 w-80">
				<HeroCard title={item.title} description={item.description} img={item.img} />
			</div>
		))
	}
</div>
		</section>
	);
}
