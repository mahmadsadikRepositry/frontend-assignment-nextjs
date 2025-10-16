import { ArticleCard } from "./ArticleCard"

const ArticleItems = [
    {
        title: "How Viable Is Remote Work For Lawyers?",
        description: "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during",
        img: "/images/ArticlePlaceholder.jpg",
        category: 'Lawyer Wellness'
        , date: 'Aug 15, 2023'
    }
]

export const ArticleSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Want to learn more? Read our articles on legal intake.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array(3).fill(ArticleItems).flat().map((item, index) => (
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
        </section>
    )
}