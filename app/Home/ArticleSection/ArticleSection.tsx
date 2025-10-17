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
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Want to learn more? Read our articles on legal intake.
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer ml-2">
              <FontAwesomeIcon icon={faChevronLeft} size="xl" className="text-navyBlue" />
            </div>
          </button>

          {/* Scrollable articles */}
          <div ref={carouselRef} className="flex overflow-hidden gap-6 scroll-smooth px-2">
            {ArticleItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[calc(33.333%-1rem)]">
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

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer mr-2">
              <FontAwesomeIcon icon={faChevronRight} size="xl" className="text-navyBlue" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
