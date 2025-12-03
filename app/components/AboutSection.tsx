import Image from "next/image";

const cards = [
  {
    id: "data-driven",
    title: "Become a Data-Driven Investor",
    description:
      "Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.",
    icon: "/assets/i1.png",
  },
  {
    id: "smarter-decisions",
    title: "Lilypads can help you make smarter decisions.",
    description:
      "Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.",
    icon: "/assets/i2.png",
  },
  {
    id: "manager-due-diligence",
    title: "Manager Due Diligence",
    description:
      "Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns.",
    icon: "/assets/i3.png",
  },
  {
    id: "optimize-allocation",
    title: "Optimize Asset Allocation",
    description:
      "Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio based on objectives.",
    icon: "/assets/i4.png",
  },
  {
    id: "subscribers",
    title: "Our Subscribers",
    description:
      "Serving a constellation of global subscribers: Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers.",
    icon: "/assets/i5.png",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F4F4F4] py-20">
      <div className="mx-auto max-w-340 px-6 lg:px-0">
        {/* GRID: 3 columns x 2 rows on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-[minmax(0,_1fr)]">
          {/* TOP LEFT: About text (no borders) */}
          <div className="px-10 py-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accent" />
              <span className="text-accent font-body text-base font-semibold">
                About Us
              </span>
            </div>

            <h2 className="font-display text-4xl leading-snug text-dark md:text-[36px]">
              Lilypad is the only Real Estate Investment tool you need for your
              business
            </h2>
          </div>

          {/* TOP MIDDLE: card 1 (left border on desktop / top border on mobile) */}
          <div className="px-10 py-12 about-border-left">
            <FeatureCard card={cards[0]} />
          </div>

          {/* TOP RIGHT: card 2 */}
          <div className="px-10 py-12 about-border-left">
            <FeatureCard card={cards[1]} />
          </div>

          {/* BOTTOM LEFT: card 3 */}
          <div className="px-10 py-12 about-border-top">
            <FeatureCard card={cards[2]} />
          </div>

          {/* BOTTOM MIDDLE: card 4 */}
          <div className="px-10 py-12 about-border-top about-border-left">
            <FeatureCard card={cards[3]} />
          </div>

          {/* BOTTOM RIGHT: card 5 */}
          <div className="px-10 py-12 about-border-top about-border-left">
            <FeatureCard card={cards[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

type Card = (typeof cards)[number];

function FeatureCard({ card }: { card: Card }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {/* Icon circle with soft glow – FIXED SIZE */}
        <div
          className="
            flex h-16 w-16 flex-shrink-0
            items-center justify-center
            rounded-full bg-white overflow-hidden
            shadow-[0_14px_35px_#7D59C333]
          "
        >
          {/* Icon itself, constrained inside the circle */}
          <div className="relative h-10 w-10">
            <Image
              src={card.icon}
              alt={card.title}
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="font-body text-lg font-semibold text-dark">
          {card.title}
        </h3>
      </div>

      <p className="mt-2 text-base font-body leading-relaxed text-[#2F3130]/60">
        {card.description}
      </p>
    </div>
  );
}
