import { Card } from '@/app/Components/Card/Card';
import Image from 'next/image';

export const HeroCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <Card>
      {img && (
        <div className="relative w-full h-24 rounded-t-lg overflow-hidden">
          <Image src={img} alt={title} fill sizes="200px" className="object-contain" />
        </div>
      )}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="w-full h-[2px] bg-[#3CCED7] max-w-[478px] mb-4" aria-hidden="true" />
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};
