import MenuItem from "./MenuItem";
import { menuItems } from "./menuData";

const MenuSection = () => {
  const categories = ["Coffee", "Traditional Snacks"];

  return (
    <section id="our-menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
          Our Menu
        </h2>
        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
