import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
    span: "col-span-1 row-span-1",
  },
];

const Gallery = () => {
  const galleryRef = useRef(null);
  useEffect(() => {
    if (!galleryRef.current) return;
    const images = (galleryRef.current as HTMLElement).querySelectorAll(".gallery-item");

    gsap.from(images, {
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="py-20 bg-primary" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary text-center mb-12">
          Our Gallery
        </h2>
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
