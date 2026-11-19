import { FormEvent, ReactNode, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "brand"
  | "check"
  | "code"
  | "mail"
  | "menu"
  | "quote"
  | "spark"
  | "strategy"
  | "x";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    brand: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.55V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9 1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    mail: (
      <>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    quote: (
      <path d="M9 11H5a4 4 0 0 1 4-4v7a3 3 0 0 1-3 3M19 11h-4a4 4 0 0 1 4-4v7a3 3 0 0 1-3 3" />
    ),
    spark: (
      <>
        <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z" />
        <path d="m5 16-.75 2.25L2 19l2.25.75L5 22l.75-2.25L8 19l-2.25-.75L5 16Z" />
      </>
    ),
    strategy: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-5 3 2 5-7" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    number: "01",
    icon: "code" as const,
    title: "Website Company Profile",
    description:
      "Website responsif yang mengubah profil bisnis Anda menjadi pengalaman digital yang kredibel dan mudah ditemukan.",
  },
  {
    number: "02",
    icon: "brand" as const,
    title: "Branding & Identitas Visual",
    description:
      "Identitas yang konsisten—dari logo, warna, hingga panduan visual—agar brand Anda tampil lebih berkarakter.",
  },
  {
    number: "03",
    icon: "strategy" as const,
    title: "Desain UI/UX Sederhana",
    description:
      "Tampilan digital yang rapi, intuitif, dan fokus pada kebutuhan pengguna tanpa kompleksitas yang berlebihan.",
  },
];

const projects = [
  {
    title: "Arunika Living",
    category: "Website & Brand Direction",
    type: "editorial",
    className: "bg-[#dbe8e5]",
  },
  {
    title: "Sela Coffee",
    category: "Brand Identity",
    type: "coffee",
    className: "bg-[#e9e2d9]",
  },
  {
    title: "Forma Studio",
    category: "Website Company Profile",
    type: "architecture",
    className: "bg-[#dce5ed]",
  },
  {
    title: "Tumbuh Bersama",
    category: "UI/UX & Digital Campaign",
    type: "impact",
    className: "bg-[#e4ead9]",
  },
];

const testimonials = [
  {
    quote:
      "Cipta Ruang berhasil menerjemahkan visi kami menjadi website yang terlihat matang, tanpa kehilangan karakter brand.",
    name: "Nadia Pratama",
    role: "Founder, Arunika Living",
  },
  {
    quote:
      "Prosesnya jelas dan komunikatif. Sekarang pelanggan lebih percaya saat pertama kali menemukan bisnis kami.",
    name: "Rizky Mahendra",
    role: "Owner, Sela Coffee",
  },
  {
    quote:
      "Kami tidak hanya mendapat desain yang bagus, tapi juga fondasi digital yang benar-benar bisa dipakai bertumbuh.",
    name: "Maya Sari",
    role: "Director, Tumbuh Bersama",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "coffee") {
    return (
      <div className="absolute inset-0 grid place-items-center overflow-hidden">
        <div className="absolute -right-8 -top-12 size-44 rounded-full border border-[#806b58]/30" />
        <div className="absolute -bottom-12 -left-8 size-40 rounded-full bg-[#a98c70]/20" />
        <div className="relative flex h-52 w-36 rotate-[-6deg] flex-col items-center justify-between bg-[#f8f4ee] p-5 shadow-2xl shadow-[#55483d]/20">
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#8e725a]">Since 2024</span>
          <div className="grid size-16 place-items-center rounded-full border border-[#8e725a] text-center font-serif text-xl italic leading-4 text-[#6c5746]">
            sela
          </div>
          <span className="text-[7px] uppercase tracking-[0.25em] text-[#8e725a]">
            Slow coffee house
          </span>
        </div>
      </div>
    );
  }

  if (type === "architecture") {
    return (
      <div className="absolute inset-0 p-8 sm:p-10">
        <div className="relative h-full overflow-hidden bg-[#f6f8f9] shadow-xl shadow-slate-500/10">
          <img
            src="https://images.unsplash.com/photo-1621606453029-5656bd7fa6c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=900"
            alt="Ruang kerja modern dengan laptop di atas meja putih"
            className="h-full w-full object-cover grayscale-[25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102f36]/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-[9px] uppercase tracking-[0.25em]">Forma Architecture</p>
            <p className="mt-1 text-2xl font-semibold">Space, simplified.</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "impact") {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[42%] bg-[#153f42]" />
        <div className="relative grid w-[78%] grid-cols-[0.75fr_1.25fr] overflow-hidden bg-[#fbfcf8] shadow-2xl shadow-[#39534c]/15">
          <div className="flex flex-col justify-between bg-[#153f42] p-5 text-white">
            <Icon name="spark" className="size-5 text-[#acd8ca]" />
            <p className="text-xl font-semibold leading-tight">
              Kecil langkahnya, besar dampaknya.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="rounded-t-full bg-[#9fc2ad]" />
            <div className="rounded-b-full bg-[#e4bc6a]" />
            <div className="rounded-b-full bg-[#d47657]" />
            <div className="rounded-t-full bg-[#cbdcad]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-8">
      <div className="absolute -right-10 -top-14 size-48 rounded-full bg-[#afc9c2]/60" />
      <div className="absolute -bottom-24 -left-12 size-56 rounded-full border-[36px] border-white/40" />
      <div className="relative w-[82%] overflow-hidden rounded-sm bg-[#f9fbfa] shadow-2xl shadow-[#46645c]/20">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <span className="text-[8px] font-bold tracking-[0.2em] text-[#133c3c]">ARUNIKA</span>
          <span className="h-px w-10 bg-slate-300" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center p-5">
            <span className="mb-3 h-1 w-7 bg-[#d69b62]" />
            <p className="font-serif text-xl leading-tight text-[#193c3c]">
              Ruang untuk hidup yang bermakna.
            </p>
          </div>
          <div className="m-3 aspect-[3/4] bg-[linear-gradient(145deg,#bdc9be,#718c82)]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector<HTMLElement>("#scroll-progress");
    const header = document.querySelector<HTMLElement>("#site-header");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    root.classList.add("motion-ready");

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress) progress.style.transform = `scaleX(${ratio})`;
      if (header) header.dataset.scrolled = String(window.scrollY > 24);
    };

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      root.classList.remove("motion-ready");
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9f6] text-[#102f32]">
      <div className="cursor-glow pointer-events-none fixed inset-0 z-[1] hidden lg:block" />
      <div
        id="scroll-progress"
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left scale-x-0 bg-[#a7df66]"
      />
      <header
        id="site-header"
        className="site-header fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300"
      >
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a
            href="#beranda"
            className="flex items-center gap-3"
            aria-label="Cipta Ruang, kembali ke beranda"
          >
            <span className="brand-mark grid size-10 place-items-center rounded-full bg-[#123f42]">
              <span className="size-3.5 rounded-tl-[2px] rounded-br-[7px] border-2 border-[#d7f5a9]" />
            </span>
            <span className="text-lg font-bold tracking-[-0.03em]">Cipta Ruang</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#466063] md:flex">
            <a className="nav-link" href="#layanan">
              Layanan
            </a>
            <a className="nav-link" href="#tentang">
              Tentang
            </a>
            <a className="nav-link" href="#portofolio">
              Portofolio
            </a>
            <a className="nav-link" href="#testimoni">
              Testimoni
            </a>
          </nav>

          <a href="#kontak" className="button-primary hidden py-3 md:inline-flex">
            Mulai Proyek
            <Icon name="arrow" className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-full border border-[#123f42]/15 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#123638]/8 bg-[#fafcfb] px-5 py-5 md:hidden">
            {[
              ["Layanan", "#layanan"],
              ["Tentang", "#tentang"],
              ["Portofolio", "#portofolio"],
              ["Testimoni", "#testimoni"],
              ["Mulai Proyek", "#kontak"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[#123638]/8 py-3.5 text-base font-medium"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section
          id="beranda"
          className="relative min-h-[min(920px,100svh)] px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40"
        >
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <div data-reveal="hero-copy">
              <div className="eyebrow">
                <span className="pulse-dot size-1.5 rounded-full bg-[#63b99f]" />
                Digital Partner untuk Bisnis Bertumbuh
              </div>
              <h1 className="mt-7 max-w-[720px] text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#102f32]">
                Membangun Ruang Digital yang{" "}
                <span className="relative inline-block font-serif font-normal italic text-[#2d8176]">
                  Profesional
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 240 12"
                    fill="none"
                  >
                    <path
                      className="draw-line"
                      d="M2 9C65 2 163 1 238 6"
                      stroke="#91c5ba"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                untuk Bisnis Anda
              </h1>
              <p className="mt-8 max-w-[590px] text-lg leading-8 text-[#587073]">
                Kami membantu bisnis dan UMKM tampil lebih dipercaya melalui website, identitas
                visual, dan pengalaman digital yang dirancang dengan jelas.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#kontak" className="button-primary justify-center">
                  <span>Konsultasi Gratis</span>
                  <Icon name="arrow" />
                </a>
                <a href="#portofolio" className="button-secondary justify-center">
                  Lihat Portofolio
                </a>
              </div>
              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#123f42]/10 pt-6 text-sm text-[#657b7d]">
                <span className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-[#2d8176]" /> Konsultasi tanpa biaya
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-[#2d8176]" /> Solusi sesuai kebutuhan
                </span>
              </div>
            </div>

            <div
              data-reveal="hero-visual"
              className="relative mx-auto w-full max-w-[590px] lg:mr-0"
            >
              <div className="absolute -left-10 top-8 size-28 rounded-full bg-[#d5e9e4] blur-2xl" />
              <div className="absolute -right-12 bottom-10 size-44 rounded-full bg-[#d9e2dc] blur-3xl" />
              <div className="hero-stage relative rounded-[2.5rem] border border-white/70 bg-[#dfeae5]/70 px-5 py-12 shadow-[0_40px_90px_-45px_rgba(16,47,50,.45)] backdrop-blur sm:px-8 sm:py-16">
                <div className="floating-chip floating-chip-top">
                  <span className="size-2 rounded-full bg-[#9ed85e]" />
                  Strategy-led design
                </div>
                <div className="device-float">
                  <div className="laptop">
                    <div className="laptop-screen">
                      <div className="flex h-8 items-center justify-between border-b border-[#123f42]/8 px-4">
                        <span className="font-serif text-[9px] font-bold tracking-[0.18em]">
                          NARA
                        </span>
                        <div className="flex gap-2.5">
                          <span className="h-1 w-7 rounded-full bg-slate-200" />
                          <span className="h-1 w-7 rounded-full bg-slate-200" />
                          <span className="h-1 w-5 rounded-full bg-[#8fb8ac]" />
                        </div>
                      </div>
                      <div className="grid h-[calc(100%-2rem)] grid-cols-[1.06fr_0.94fr]">
                        <div className="flex flex-col justify-center p-[9%]">
                          <span className="mb-3 text-[7px] font-bold uppercase tracking-[0.22em] text-[#b27856]">
                            Intentional spaces
                          </span>
                          <p className="font-serif text-[clamp(1.1rem,3vw,2.1rem)] leading-[1.03] text-[#153b3c]">
                            Designed for a life well lived.
                          </p>
                          <span className="mt-5 h-5 w-16 rounded-full bg-[#153f42]" />
                        </div>
                        <div className="relative m-3 overflow-hidden bg-[#d7e0dc]">
                          <div className="absolute inset-x-[14%] bottom-0 top-[16%] bg-[#78968b]" />
                          <div className="absolute bottom-0 right-0 h-[64%] w-[53%] bg-[#c7b59e]" />
                          <div className="visual-sun absolute left-[25%] top-[8%] size-[28%] rounded-full bg-[#dff486]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto h-3 w-[86%] rounded-b-[50%] bg-[#aeb8b8] shadow-lg" />
                </div>
                <div className="phone">
                  <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-[#173537]/15" />
                  <div className="mt-3 flex h-[calc(100%-1rem)] flex-col">
                    <div className="flex items-center justify-between px-3">
                      <span className="font-serif text-[7px] font-bold">NARA</span>
                      <span className="h-px w-4 bg-[#153b3c]" />
                    </div>
                    <div className="mx-2 mt-2 flex-1 overflow-hidden bg-[#d4e0da]">
                      <div className="h-[64%] bg-[linear-gradient(145deg,#9bb2a7,#59786f)]" />
                      <p className="px-2 pt-2 font-serif text-[10px] leading-tight">
                        A calm space to call home.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="floating-card absolute -left-4 bottom-4 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-[#dcece7] text-[#246b63]">
                    <Icon name="spark" className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#849496]">
                      Built to connect
                    </p>
                    <p className="text-xs font-bold">Brand yang terasa nyata</p>
                  </div>
                </div>
                <div className="floating-chip floating-chip-bottom hidden sm:flex">
                  24+ brand bertumbuh
                  <span className="flex -space-x-1.5">
                    <i className="size-5 rounded-full border-2 border-white bg-[#e7bb82]" />
                    <i className="size-5 rounded-full border-2 border-white bg-[#78a99f]" />
                    <i className="size-5 rounded-full border-2 border-white bg-[#db8f74]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#layanan"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#678082] xl:flex"
          >
            Scroll untuk Jelajah
            <span className="scroll-indicator h-8 w-px bg-[#173f41]/20" />
          </a>
        </section>

        <div className="marquee-shell border-y border-[#173f41]/10 bg-[#dff486] py-4">
          <div className="marquee-track flex min-w-max items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex items-center whitespace-nowrap"
              >
                {[
                  "Website Company Profile",
                  "Brand Identity",
                  "UI/UX Design",
                  "Creative Direction",
                ].map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="flex items-center px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#163d3f] sm:px-10"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className="ml-14 size-2 rotate-45 rounded-[2px] bg-[#4c897d]"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          id="layanan"
          className="relative scroll-mt-20 overflow-hidden bg-[#113a3d] px-5 py-24 text-white sm:px-8 sm:py-32"
        >
          <div className="service-glow pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-[#66b09d]/15 blur-[100px]" />
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <div className="eyebrow border-white/15 bg-white/5 text-[#b9d7d1]">
                  <span className="size-1.5 rounded-full bg-[#70baa9]" /> Yang Kami Kerjakan
                </div>
                <h2 className="section-title mt-6 text-white">
                  Fondasi digital untuk bisnis yang ingin naik kelas.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#b3c8c9] lg:ml-auto">
                Bukan sekadar terlihat menarik. Setiap solusi dirancang untuk membuat bisnis Anda
                mudah dipahami, dipercaya, dan diingat.
              </p>
            </div>

            <div data-reveal="stagger" className="mt-14 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9"
                >
                  <span className="service-number absolute -right-2 top-0 font-serif text-[7rem] leading-none text-white/[0.025]">
                    {service.number}
                  </span>
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#d5ebe5] text-[#174e4b] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <span className="text-xs tracking-[0.2em] text-white/35">{service.number}</span>
                  </div>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#adc2c3]">{service.description}</p>
                  <a
                    href="#kontak"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#a9d9ce]"
                  >
                    Pelajari layanan{" "}
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tentang" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div
              data-reveal="left"
              className="about-image relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#dce8e4]"
            >
              <img
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1100"
                alt="Kreator bekerja dengan laptop di studio yang modern"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3437]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#10383b]/85 p-6 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[300px]">
                <p className="text-4xl font-semibold tracking-[-0.05em]">24+</p>
                <p className="mt-2 text-sm leading-6 text-[#c5d9d8]">
                  ruang digital telah kami bangun bersama bisnis lokal.
                </p>
              </div>
            </div>

            <div data-reveal="right">
              <div className="eyebrow">
                <span className="size-1.5 rounded-full bg-[#42a28e]" /> Tentang Cipta Ruang
              </div>
              <h2 className="section-title mt-6">
                Setiap bisnis layak punya ruang yang jelas dan dipercaya.
              </h2>
              <p className="mt-7 text-lg leading-8 text-[#587073]">
                Cipta Ruang lahir dari keyakinan bahwa kehadiran digital bukan lagi sekadar
                pelengkap. Ia adalah ruang pertama tempat pelanggan mengenal, menilai, dan
                mempercayai sebuah bisnis.
              </p>
              <p className="mt-4 leading-7 text-[#6a7e80]">
                Kami memadukan strategi, desain, dan teknologi dalam proses yang ringan—supaya Anda
                bisa fokus menjalankan bisnis, sementara kami membangun ruang digitalnya.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  ["Strategis & relevan", "Setiap keputusan berangkat dari tujuan bisnis."],
                  ["Proses transparan", "Alur kerja dan progres selalu mudah dipahami."],
                  ["Desain berkelanjutan", "Mudah dikembangkan seiring bisnis bertumbuh."],
                  ["Pendampingan dekat", "Kolaborasi hangat dari awal hingga peluncuran."],
                ].map(([title, text]) => (
                  <div key={title} className="border-t border-[#143d3e]/15 pt-4">
                    <p className="flex items-center gap-2.5 font-semibold">
                      <span className="grid size-5 place-items-center rounded-full bg-[#dcece7] text-[#257065]">
                        <Icon name="check" className="size-3" />
                      </span>
                      {title}
                    </p>
                    <p className="mt-2 pl-7 text-sm leading-6 text-[#718385]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portofolio" className="scroll-mt-20 bg-[#f0f4f2] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div
              data-reveal
              className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <div className="eyebrow">
                  <span className="size-1.5 rounded-full bg-[#42a28e]" /> Proyek Pilihan
                </div>
                <h2 className="section-title mt-6 max-w-2xl">Ruang digital yang kami hidupkan.</h2>
              </div>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#225f5a]"
              >
                Diskusikan proyek Anda <Icon name="arrow" className="size-4" />
              </a>
            </div>

            <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  className={`group ${index % 2 === 1 ? "md:translate-y-10" : ""}`}
                >
                  <div
                    className={`project-frame relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ${project.className}`}
                  >
                    <ProjectVisual type={project.type} />
                    <div className="absolute inset-0 bg-[#0d3436]/0 transition-colors duration-500 group-hover:bg-[#0d3436]/5" />
                    <span className="absolute right-5 top-5 grid size-11 translate-y-2 place-items-center rounded-full bg-white text-[#153f42] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow" className="size-5 -rotate-45" />
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{project.title}</h3>
                      <p className="mt-1.5 text-sm text-[#6f8283]">{project.category}</p>
                    </div>
                    <span className="pt-1 text-xs tracking-[0.18em] text-[#8a999a]">
                      0{index + 1}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <div className="eyebrow justify-center">
                <span className="size-1.5 rounded-full bg-[#42a28e]" /> Cerita Klien
              </div>
              <h2 className="section-title mt-6">
                Dipercaya untuk menciptakan kesan pertama yang berarti.
              </h2>
            </div>
            <div data-reveal="stagger" className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <figure
                  key={item.name}
                  className={`testimonial-card rounded-3xl border border-[#153f42]/10 p-7 sm:p-8 ${index === 1 ? "bg-[#143d3f] text-white" : "bg-white"}`}
                >
                  <Icon
                    name="quote"
                    className={`size-9 ${index === 1 ? "text-[#83c5b7]" : "text-[#56a896]"}`}
                  />
                  <blockquote
                    className={`mt-7 text-lg leading-8 ${index === 1 ? "text-[#eff7f5]" : "text-[#294a4c]"}`}
                  >
                    “{item.quote}”
                  </blockquote>
                  <figcaption
                    className={`mt-8 border-t pt-5 ${index === 1 ? "border-white/15" : "border-[#153f42]/10"}`}
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p
                      className={`mt-1 text-sm ${index === 1 ? "text-[#a8c3c2]" : "text-[#77898a]"}`}
                    >
                      {item.role}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="scroll-mt-20 px-5 pb-8 sm:px-8 sm:pb-10">
          <div
            data-reveal
            className="contact-panel mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-[#123b3e] text-white"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden p-7 sm:p-12 lg:p-16">
                <div className="absolute -bottom-40 -left-36 size-96 rounded-full border-[65px] border-[#79b7a9]/10" />
                <div className="absolute -right-16 -top-16 size-52 rounded-full bg-[#65ae9d]/10" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8bc6ba]">
                    Mari Mulai
                  </p>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.05em] sm:text-5xl">
                    Punya ide? Mari kita beri ruang.
                  </h2>
                  <p className="mt-6 max-w-md leading-7 text-[#b7cccc]">
                    Ceritakan kebutuhan bisnis Anda. Kami akan menghubungi Anda untuk sesi
                    konsultasi awal tanpa biaya.
                  </p>
                  <a
                    href="mailto:halo@ciptaruang.id"
                    className="mt-10 flex items-center gap-3 text-sm font-semibold"
                  >
                    <span className="grid size-10 place-items-center rounded-full bg-white/10">
                      <Icon name="mail" className="size-5 text-[#a8d8ce]" />
                    </span>
                    halo@ciptaruang.id
                  </a>
                </div>
              </div>

              <div className="m-2 rounded-[1.55rem] bg-white p-6 text-[#17383a] sm:p-10 lg:m-3 lg:p-12">
                {submitted ? (
                  <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                    <span className="grid size-16 place-items-center rounded-full bg-[#dff0eb] text-[#237266]">
                      <Icon name="check" className="size-8" />
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
                      Pesan Anda sudah terkirim.
                    </h3>
                    <p className="mt-3 max-w-sm leading-7 text-[#6b7e7f]">
                      Terima kasih sudah menghubungi Cipta Ruang. Kami akan kembali kepada Anda
                      maksimal dalam 1–2 hari kerja.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="button-secondary mt-7"
                    >
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <label className="form-field">
                        <span>Nama</span>
                        <input required name="name" placeholder="Nama lengkap Anda" />
                      </label>
                      <label className="form-field">
                        <span>Email</span>
                        <input required type="email" name="email" placeholder="nama@email.com" />
                      </label>
                    </div>
                    <label className="form-field mt-6">
                      <span>Nama Perusahaan</span>
                      <input required name="company" placeholder="Nama bisnis atau perusahaan" />
                    </label>
                    <label className="form-field mt-6">
                      <span>Pesan</span>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Ceritakan sedikit tentang proyek yang Anda butuhkan..."
                      />
                    </label>
                    <button
                      type="submit"
                      className="button-primary mt-7 w-full justify-center py-4"
                    >
                      Kirim Pesan
                      <Icon name="arrow" />
                    </button>
                    <p className="mt-4 text-center text-xs text-[#879697]">
                      Kami menjaga data Anda tetap aman dan tidak membagikannya.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 border-t border-[#123f42]/10 pt-8 text-sm text-[#6e8182] sm:flex-row sm:items-center sm:justify-between">
          <a href="#beranda" className="flex items-center gap-2.5 font-bold text-[#143d3f]">
            <span className="grid size-7 place-items-center rounded-full bg-[#123f42]">
              <span className="size-2.5 rounded-tl-[1px] rounded-br-[5px] border border-[#c9e4dc]" />
            </span>
            Cipta Ruang
          </a>
          <p>© {new Date().getFullYear()} Cipta Ruang. Ruang untuk bisnis bertumbuh.</p>
          <div className="flex gap-5">
            <a href="#layanan" className="hover:text-[#173f41]">
              Layanan
            </a>
            <a href="#portofolio" className="hover:text-[#173f41]">
              Portofolio
            </a>
            <a href="#kontak" className="hover:text-[#173f41]">
              Kontak
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
