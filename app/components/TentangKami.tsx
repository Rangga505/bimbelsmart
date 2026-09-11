"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TentangKami() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              Tentang Kami
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight">
              Membantu Setiap Anak Menemukan{" "}
              <span className="text-primary">Cara Belajar Terbaik</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Bimbel Smart hadir sejak tahun 2016 di Pakisaji, Kabupaten Malang,
              dengan satu tujuan sederhana: membantu setiap anak menemukan cara
              belajar yang paling cocok untuk dirinya. Dari tahun ke tahun, kami
              terus berkembang — bukan hanya dari jumlah murid yang kami dampingi,
              tapi juga dari cara kami mengajar.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Kini, Bimbel Smart menggabungkan bimbingan langsung dari tentor
              berpengalaman dengan sistem digital yang membuat proses belajar lebih
              terpantau, terstruktur, dan menyenangkan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-card p-4 sm:p-6 rounded-[24px]">
              <Image
                src="/dokumentasi/tentangkami.webp"
                alt="Suasana belajar mengajar di Bimbel Smart"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
