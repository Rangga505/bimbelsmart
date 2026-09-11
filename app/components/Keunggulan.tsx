"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, BookOpen, Video, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Sistem Belajar Terpantau",
    description:
      "Setiap tugas dan progres belajar murid tercatat rapi, sehingga tentor dan orang tua bisa melihat perkembangan dengan jelas.",
  },
  {
    icon: BookOpen,
    title: "Latihan Soal Terstruktur",
    description:
      "Soal disusun sesuai jenjang dan topik, membantu murid berlatih secara bertahap dan terarah.",
  },
  {
    icon: Video,
    title: "Video Pembelajaran Lengkap",
    description:
      "Materi tambahan dalam bentuk video untuk memperkuat pemahaman di luar jam bimbel.",
  },
  {
    icon: Users,
    title: "Tentor Berpengalaman & Responsif",
    description:
      "Tim pengajar yang siap membantu murid kapan pun dibutuhkan, dengan sistem penugasan yang cepat dan tanggap.",
  },
];

export default function Keunggulan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="keunggulan" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Keunggulan
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Kenapa Memilih{" "}
            <span className="text-primary">Bimbel Smart?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Kami menyediakan sistem belajar yang terstruktur, modern, dan
            menyenangkan untuk setiap murid.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card p-7 sm:p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon
                  size={24}
                  className="text-primary group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
