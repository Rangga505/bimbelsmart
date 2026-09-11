"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/dokumentasi/kegiatan1.webp",
    alt: "Kegiatan belajar mengajar di Bimbel Smart",
    caption: "Sesi Belajar Kelas",
  },
  {
    src: "/dokumentasi/kegiatan2.webp",
    alt: "Kegiatan seru Bimbel Smart",
    caption: "Kegiatan Seru",
  },
  {
    src: "/dokumentasi/kegiatan3.webp",
    alt: "Suasana bimbingan belajar",
    caption: "Suasana Bimbel",
  },
  {
    src: "/dokumentasi/FOTOBARENG.webp",
    alt: "Foto kebersamaan tim dan murid Bimbel Smart",
    caption: "Kebersamaan Kami",
  },
];

export default function Galeri() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="galeri" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Galeri
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Kegiatan <span className="text-primary">Bimbel Smart</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Momen-momen berharga selama proses belajar mengajar bersama kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.5,
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
