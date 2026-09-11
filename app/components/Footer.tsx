import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/6281615687850";

const footerLinks = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Aplikasi", href: "#aplikasi" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/dokumentasi/logo-bimbel-smart.png"
                alt="Bimbel Smart Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="font-heading font-bold text-lg">
                Bimbel Smart
              </span>
            </div>
            <p className="mt-4 text-white/60 max-w-md leading-relaxed text-sm">
              Bimbel Smart hadir sejak 2016 di Pakisaji, Kabupaten Malang,
              membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau
              dan menyenangkan.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              Hubungi
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  WhatsApp Kami
                </a>
              </li>
              <li>
                <span className="text-sm text-white/50">
                  Pakisaji, Kab. Malang
                </span>
              </li>
              <li>
                <span className="text-sm text-white/50">Jawa Timur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; 2026 Bimbel Smart. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Dibuat dengan&hearts; untuk pendidikan yang lebih baik.
          </p>
        </div>
      </div>
    </footer>
  );
}
