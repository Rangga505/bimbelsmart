"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ShowcaseAplikasi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="aplikasi" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Aplikasi
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Belajar dan Mengajar Jadi{" "}
            <span className="text-primary">Lebih Mudah</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="glass-card p-6 sm:p-8 rounded-[24px] w-full max-w-sm">
              <Image
                src="/dokumentasi/mockup-app-murid.webp"
                alt="Aplikasi Bimbel Smart untuk Murid"
                width={300}
                height={400}
                className="w-full h-auto rounded-2xl drop-shadow-xl"
              />
            </div>
            <div className="mt-6 text-center max-w-xs">
              <h3 className="font-heading text-xl font-bold text-primary">
                App Murid
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Akses materi, video pembelajaran, dan latihan soal kapan saja
                langsung dari HP.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="glass-card p-6 sm:p-8 rounded-[24px] w-full max-w-sm">
              <Image
                src="/dokumentasi/mockup-app-tentor.webp"
                alt="Aplikasi Bimbel Smart untuk Tentor"
                width={300}
                height={400}
                className="w-full h-auto rounded-2xl drop-shadow-xl"
              />
            </div>
            <div className="mt-6 text-center max-w-xs">
              <h3 className="font-heading text-xl font-bold text-primary">
                App Tentor
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Kelola tugas mengajar, klaim jadwal, dan pantau perkembangan
                murid dengan mudah.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
