import ScrollLink from "@/components/ScrollLink";

const Menu = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="flex flex-row p-12 gap-12">
        <ScrollLink href="/menu#banquet" className="p-8 bg-gray-400 rounded-lg">
          Banquet
        </ScrollLink>
        <ScrollLink href="/menu#alacarte" className="p-8 bg-gray-400 rounded-lg">A La Carte</ScrollLink>
      </div>
    </div>
  );
}

export default Menu;