import { Card } from "../Card/Card";

export const HeroCard = ({ title, description, img }: { title: string; description: string; img: string }) => {
    return (
        <Card>
            {img && <img src={img} alt={title} className="rounded-t-lg w-full h-24 object-contain" />}
            <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <hr className="my-2 border-blue-200" />
                <p className="text-gray-600">{description}</p>
            </div>
        </Card>
    )
}