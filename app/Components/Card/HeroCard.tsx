import { Card } from "./Card";

export const HeroCard = ({ title, description, img }: { title: string; description: string; img: string }) => {
    return (
        <Card>
            {img && <img src={img} alt={title} className="rounded-t-lg w-full h-24 object-contain" />}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </Card>
    )
}