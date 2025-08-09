
interface BanquetProps {
    name: string;
    description: string;
    price: number;
    includes?: string[];
}

const BanquetCard = ({name, description, price, includes=[]}:BanquetProps) => {
    return (  
        <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-lg font-bold">£{price}</p>

            {includes.length > 0 && (
                <div className="mt-3">
                <p className="text-sm font-semibold text-gray-700">
                    Includes:
                </p>
                <ul className="text-sm text-gray-600">
                    {includes.map((include) => (
                    <li key={include}>{include}</li>
                    ))}
                </ul>
                </div>
            )}
        </div>
    );
}
 

export default BanquetCard;