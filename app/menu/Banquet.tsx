import BanquetCard from "@/components/BanquetCard";
import banquetData from "./banquet.json";

const Banquet = () => {
    return (  
        <div className="">
            <h1 className="text-2xl font-bold py-16">Banqueting Set Menus</h1>
            <div className="flex gap-8">
                {banquetData.map((item) => (
                    <BanquetCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    includes={item.includes}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Banquet;