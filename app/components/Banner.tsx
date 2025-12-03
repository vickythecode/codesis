import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden pt-32 md:pb-32 pb-8">
      {/* BASE WHITE BG (just in case images don't load) */}
      <div className="absolute inset-0 -z-30 bg-white" />

      {/* PURPLE RIGHT PANEL (UNDER THE DOT TEXTURE) */}
      <div className="absolute inset-y-0 right-0 w-[40%] -z-20 overflow-hidden">
        <Image
          src="/assets/rightBg.png"
          alt="Right Background"
          fill
          className="object-cover"
        />
      </div>

      {/* DOTTED GLASS TEXTURE OVER ENTIRE BANNER */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/assets/leftBg.png"
          alt="Dotted Glass Background"
          fill
          className="object-cover opacity-7"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-12 px-6 md:gap-10 lg:grid-cols-2 lg:px-0">
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Welcome line */}
          <div className="flex items-center gap-3">
            <span className="h-[4px] w-4 bg-accent" />
            <p className="text-accent font-body text-base font-semibold">
              Welcome to the
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-display text-dark text-5xl sm:text-6xl lg:text-6xl leading-tight">
            Unprecedented <br />
            Era of{" "}
            <span className="text-accent">
              Real Estate <br />
              Investing{" "}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-full text-base font-medium text-[#2F3130]/50">
            Lilypads uses sophisticated technologies for data-driven decisions
            in investing, managing and funding commercial real estate assets.
          </p>

          {/* CTA Button */}
          <button
            className="
              mt-4 inline-flex items-center gap-2 rounded-[20px]
              bg-primary md:px-8 md:py-4 px-4 py-4 text-base font-body font-semibold text-light cursor-pointer
              shadow-xl transition hover:opacity-90
              w-[60%] sm:w-[60%] md:w-[50%] lg:w-[45%]
            "
          >
            Start Investing Now →
          </button>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <p className="font-body text-4xl text-primary font-bold">
                658+
              </p>
              <p className="mt-1 text-base text-dark font-medium">
                Properties Registered
              </p>
            </div>
            <div>
              <p className="font-body text-4xl text-primary font-bold">
                685+
              </p>
              <p className="mt-1 text-base text-dark font-medium">
                Deals Cracked
              </p>
            </div>
            <div>
              <p className="font-body text-4xl font-bold text-white md:text-primary">
                255+
              </p>
              <p className="mt-1 text-base font-medium text-white md:text-dark">
                Investors
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PHONE IMAGES */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* container scales by breakpoint */}
          <div className="relative w-full max-w-xs h-auto md:h-[520px] md:max-w-md lg:h-[640px] lg:w-[420px]">
            {/* Back / right phone – BIG on mobile */}
            <div
              className="
                h-[150px] w-full
                sm:h-[320px]
                md:absolute md:inset-x-10 md:top-6 md:h-[380px]
                lg:inset-auto lg:right-[-190px] lg:top-[-20px] lg:h-[740px] lg:w-[420px]
              "
            >
              <Image
                src="/assets/phone2.webp"
                alt="Phone UI Right"
                fill
                priority
                quality={100}
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 100vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Front / left phone – smaller, slightly to the right on mobile */}
            <div
              className="
                h-[200px] w-[50%] mx-auto -mt-10 translate-x-3
                sm:h-[260px]
                md:mt-0 md:translate-x-0 md:w-full md:mx-0
                md:absolute md:inset-x-6 md:bottom-0 md:h-[400px]
                lg:inset-auto lg:-left-[220px] lg:top-[-20px] lg:h-[740px] lg:w-[420px]
              "
            >
              {/* PHONE 1 BASE IMAGE */}
              <Image
                src="/assets/phone1.webp"
                alt="Phone UI Left"
                fill
                priority
                quality={100}
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 100vw"
                className="object-contain drop-shadow-2xl"
              />

              {/* TOP OVERLAY IMAGE — adjust top/left as you like */}
              <div className="absolute z-50 md:top-28 md:w-[450px] md:h-[500px] top-14 -left-24 md:-left-10 w-[450px] h-[100px]">
                <Image
                  src="/assets/geminin.webp"
                  alt="Overlay graphic"
                  fill
                  sizes="(min-width: 1024px) 450px, 100vw"
                  className="object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
