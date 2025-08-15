import Image, { StaticImageData } from "next/image";

interface DishProps {
    name: string;
    image: StaticImageData;
    description: string;
}

const DishCard = ({ name, image, description }: DishProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition flex flex-col h-full">
            {/* Image wrapper with fixed height that adjusts by screen size */}
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 1024px) 50vw, 
                           33vw"
                />
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col gap-2 flex-grow">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default DishCard;