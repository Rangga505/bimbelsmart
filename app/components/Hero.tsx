"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/6281615687850";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6"
            >
              Berdiri sejak 2016
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Belajar Lebih{" "}
              <span className="text-primary">Terarah</span>, Prestasi Lebih{" "}
              <span className="text-accent">Nyata</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem
              yang terpantau, materi terstruktur, dan teknologi modern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-on-accent font-semibold px-7 py-3.5 rounded-full hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                Hubungi via WhatsApp
                <ArrowRight size={18} />
              </a>
              <a
                href="#aplikasi"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <Play size={18} />
                Lihat Aplikasi Kami
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 glass-card rounded-[28px] scale-110 -z-10" />
              <div className="glass-card p-6 sm:p-8 rounded-[24px]">
                <Image
                  src="/dokumentasi/mockup-app-murid.webp"
                  alt="Aplikasi Bimbel Smart untuk Murid"
                  width={400}
                  height={500}
                  className="w-full max-w-[320px] mx-auto rounded-2xl drop-shadow-2xl h-auto"
                  priority
                />
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-primary">
                    Aplikasi Belajar Smart
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Materi, video, & latihan soal dalam satu genggaman
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
