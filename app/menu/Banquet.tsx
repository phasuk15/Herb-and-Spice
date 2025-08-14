import BanquetCard from "@/components/BanquetCard";
import banquetData from "./banquet.json";

const Banquet = () => {
    return (  
        <section className="bg-zinc-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h1 className="text-3xl font-bold text-center mb-6">
                    Banqueting Set Menus
                </h1>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>

                {/* Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>
    );
}
 
export default Banquet;