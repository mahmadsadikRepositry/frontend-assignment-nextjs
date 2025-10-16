import { ArticleCard } from "./ArticleCard";

const ArticleItems = [
  {
    title: "How Viable Is Remote Work For Lawyers?",
    description:
      "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during",
    img: "/images/ArticlePlaceholder.jpg",
    category: "Lawyer Wellness",
    date: "Aug 15, 2023",
  },
];

export const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Want to learn more? Read our articles on legal intake.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(3)
            .fill(ArticleItems)
            .flat()
            .map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                description={item.description}
                img={item.img}
                date={item.date}
                category={item.category}
              />
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold text-base sm:text-[22px] overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
          href="/try-for-free"
        >
          Go to blog
        </a>
      </div>
    </section>
  );
};
