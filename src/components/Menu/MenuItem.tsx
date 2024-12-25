import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-secondary font-semibold uppercase">
          {category}
        </span>
        <h3 className="font-heading font-bold text-primary mt-1 mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
