"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { image1, image2, image3, image4, image5 } from "@/app/assets";

const HeroImageSphere = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [0.9, 1, 0.9]);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  const images = [
    {
      src: image1,
      title: "Entrepreneurship in Action",
      alt: "Youth practicing poultry farming as part of income-generating training",
    },
    {
      src: image2,
      title: "Digital Literacy Workshop",
      alt: "Facilitator teaching youth social media and IT skills for business",
    },
    {
      src: image3,
      title: "Mentorship Circle",
      alt: "A successful alum shares their journey to inspire out-of-school youth",
    },
    {
      src: image4,
      title: "Health & Wellness Outreach",
      alt: "Youth organizing a reproductive health awareness session in the community",
    },
    {
      src: image5,
      title: "Community Engagement",
      alt: "Kesho Angavu team leading a clean-up campaign in the local area",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + direction + images.length) % images.length;
      if (newIndex === 0 || newIndex === images.length - 1) {
        setDirection(-direction);
      }
      setActiveIndex(newIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, direction, images.length]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
      <motion.div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-xl"
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="relative w-full h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full rounded-xl overflow-hidden ${
              index === activeIndex ? "z-10" : "z-0"
            }`}
            animate={{
              x: (index - activeIndex) * 100,
              scale: index === activeIndex ? 1 : 0.9,
              opacity: index === activeIndex ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: index === activeIndex ? 1.05 : 0.95 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-xl"
              sizes="(max-width: 640px) 90vw, 500px"
            />
            {index === activeIndex && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-lg font-semibold text-center drop-shadow-md">
                  {image.title}
                </h3>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-primary w-6" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${images[index].title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageSphere;