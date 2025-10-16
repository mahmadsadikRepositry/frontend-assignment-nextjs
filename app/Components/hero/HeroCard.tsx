import { Card } from "../Card/Card";
import Image from 'next/image'

export const HeroCard = ({ title, description, img }: { title: string; description: string; img: string }) => {
    return (
        <Card>
            {img && (
                <div className="relative w-full h-24 rounded-t-lg overflow-hidden">
                    <Image src={img} alt={title} fill sizes="200px" className="object-contain" />
                </div>
            )}
            <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <hr className="my-2 border-blue-200" />
                <p className="text-gray-600">{description}</p>
            </div>
        </Card>
    )
}