import { Card } from "@/app/Components/Card/Card";
import Image from "next/image";

export const ArticleCard = ({
  title,
  description,
  img,
  date,
  category,
}: {
  title: string;
  description: string;
  img: string;
  date: string;
  category: string;
}) => {
  return (
    <Card>
      <div className="p-1">
        <div className=" rounded-t-lg px-2">
          {img && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover box-border"
              />
            </div>
          )}
        </div>
        <div className="px-2">
          <span className=" uppercase text-blue-500">{category}</span>
          <div className="border-l-4 border-[#3CCED7] pl-2">
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>{date}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
          </div>
          <p className="text-gray-600 overflow-hidden text-ellipsis line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
