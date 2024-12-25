import { motion } from "framer-motion";
import { Coffee, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description:
      "Sourced directly from Indonesian farmers, our beans represent the finest quality.",
  },
  {
    icon: Clock,
    title: "Traditional Roasting",
    description:
      "Time-honored roasting techniques to bring out authentic flavors.",
  },
  {
    icon: Users,
    title: "Expert Baristas",
    description: "Skilled craftsmen dedicated to the perfect brew.",
  },
  {
    icon: Award,
    title: "Heritage",
    description: "Preserving Indonesian coffee culture since 1970.",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Our Coffee Story
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 1970, Kopige Republik has been at the forefront of
              Indonesia's coffee revolution. We take pride in sourcing the
              finest beans from across the archipelago, from the highlands of
              Sumatra to the valleys of Bali.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to quality, tradition, and innovation has made us a
              beloved destination for coffee enthusiasts and casual drinkers
              alike.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <feature.icon className="w-8 h-8 text-secondary mb-2" />
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80"
              alt="Coffee preparation"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
              alt="Coffee beans"
              className="rounded-lg mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
