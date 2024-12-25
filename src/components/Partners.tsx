import { motion } from "framer-motion";

const partners = [
  {
    name: "Traveloka",
    logo: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg",
  },
  {
    name: "Agoda",
    logo: "https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg",
  },
  {
    name: "Trip Advisor",
    logo: "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",
  },
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          Our Trusted Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
