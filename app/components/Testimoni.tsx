"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Anak saya jadi lebih semangat belajar sejak ikut Bimbel Smart. Tentornya sabar dan selalu update progres belajar lewat aplikasi.",
    name: "Ibu Sri",
    role: "Wali Murid Kelas 4 SD",
  },
  {
    quote:
      "Sistemnya rapi, soal-soalnya sesuai level anak saya. Saya juga jadi lebih mudah pantau perkembangan belajarnya dari rumah.",
    name: "Bapak Anto",
    role: "Wali Murid Kelas 6 SD",
  },
  {
    quote:
      "Suka banget sama video pembelajarannya, jadi lebih gampang paham materi yang susah di sekolah.",
    name: "Naila",
    role: "Murid Kelas 5 SD",
  },
];

export default function Testimoni() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimoni" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Testimoni
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Apa Kata <span className="text-primary">Mereka?</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 sm:p-8 md:p-10 text-center"
            >
              <Quote
                size={40}
                className="mx-auto text-primary/20 mb-4"
              />
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "bg-primary w-6"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
