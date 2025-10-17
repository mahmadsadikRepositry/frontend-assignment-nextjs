'use client';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ArticleCard } from './ArticleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';

const TestArticle = {
  title: 'How Viable Is Remote Work For Lawyers?',
  description:
    'This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during',
  img: '/images/ArticlePlaceholder.jpg',
  category: 'Lawyer Wellness',
  date: 'Aug 15, 2023',
};

const ArticleItems = Array(5).fill(TestArticle);
export const ArticleSection = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = index === 0 ? 0 : index - 1;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 3 >= ArticleItems.length ? ArticleItems.length - 3 : index + 1;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (i: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const childWidth = container.scrollWidth / ArticleItems.length;
    container.scrollTo({
      left: childWidth * i,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 sm:py-16 relative">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 leading-snug max-w-4xl mx-auto">
      Want to learn more? Read our articles on legal intake.
    </h2>

    <div className="relative">
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-10"
        aria-label="Previous articles"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-100 transition">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
            className="text-navyBlue"
          />
        </div>
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth gap-4 sm:gap-6 px-1 sm:px-2 md:px-4 snap-x snap-mandatory scrollbar-hide"
        aria-label="Article carousel"
      >
        {ArticleItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[88%] xs:w-[75%] sm:w-[48%] md:w-[32%] lg:w-[30%] snap-start"
          >
            <ArticleCard
              title={item.title}
              description={item.description}
              img={item.img}
              date={item.date}
              category={item.category}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-10"
        aria-label="Next articles"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-100 transition">
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className="text-navyBlue"
          />
        </div>
      </button>
    </div>

    <div className="mt-8 sm:mt-10 flex justify-center">
      <a
        href="/blog"
        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-white bg-blue hover:bg-navyBlue transition-all duration-300 text-sm sm:text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Go to blog
      </a>
    </div>
  </div>
</section>

  );
};
