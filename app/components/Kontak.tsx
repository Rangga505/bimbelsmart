"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/6281615687850";

export default function Kontak() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontak" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 lg:p-16 text-center rounded-[28px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              Hubungi Kami
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto">
              Yuk, Mulai Perjalanan Belajar yang{" "}
              <span className="text-primary">Lebih Terarah</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut atau daftarkan anak Anda
              sekarang.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">
                    +62 816-1568-7850
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Lokasi</p>
                  <p className="text-muted-foreground text-sm">
                    Pakisaji, Kab. Malang
                  </p>
                  <p className="text-muted-foreground text-sm">Jawa Timur</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Jam Operasional</p>
                  <p className="text-muted-foreground text-sm">
                    Sesi 1: 16.15–17.45
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sesi 2: 18.00–19.30
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-on-accent font-semibold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
