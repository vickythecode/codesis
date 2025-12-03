import Image from "next/image";

const socialIcons = [
  { id: "facebook", src: "/assets/fb.png", alt: "Facebook" },
  { id: "twitter", src: "/assets/twit.png", alt: "Twitter" },
  { id: "linkedin", src: "/assets/linkedin.png", alt: "LinkedIn" },
  { id: "youtube", src: "/assets/youtube.png", alt: "YouTube" },
  { id: "medium", src: "/assets/medium.png", alt: "Medium" },
  { id: "pinterest", src: "/assets/pintrest.png", alt: "Pinterest" },
];

const linkGroups = [
  {
    title: "Network",
    links: ["Community", "Investor", "Broker"],
  },
  {
    title: "Product",
    links: ["Invest", "Discover", "Transact", "Manage"],
  },
  {
    title: "Our Story",
    links: ["Approach", "AboutUs"],
  },
  {
    title: "Technology",
    links: ["Artificial Intelligence", "Block Chain"],
  },
  {
    title: "Highlights",
    links: [
      "Impact of COVID-19 on the food and beverage industry and the retail sector",
      "Commercial lending during COVID-19: navigating the impact",
    ],
  },
  {
    title: "Knowledge Center",
    links: ["Resource", "Blog"],
  },
];

type LinkGroup = (typeof linkGroups)[number];

function LinkGroupColumn({ group }: { group: LinkGroup }) {
  return (
    <div className="space-y-2">
      <h5 className="text-[13px] font-semibold text-[#FFFFFF]/90">
        {group.title}
      </h5>
      <ul className="space-y-1 text-[12px] leading-relaxed text-[#FFFFFF]/60 font-medium">
        {group.links.map((item) => (
          <li
            key={item}
            className="max-w-xs cursor-pointer hover:underline underline-offset-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [network, product, ourStory, technology, highlights, knowledgeCenter] =
    linkGroups;

  return (
    <footer className="w-full bg-[#202221] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-0 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* LEFT: newsletter + CTA + social */}
          <div className="flex-1">
            <form className="mb-10 max-w-104">
              <div
                className="
    flex flex-col gap-3
    sm:flex-row sm:h-12 sm:items-center
    rounded-2xl border border-[#FFFFFF]/20 bg-[#202221]
    px-3 sm:px-4
  "
              >
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="
      flex-1 w-full
      bg-transparent
      text-sm text-[#B5B5B5]
      placeholder:text-[#6F6F6F]
      outline-none
      py-2
    "
                />
                <button
                  type="submit"
                  className="
      inline-flex items-center justify-center
      h-10 sm:h-9
      w-full sm:w-auto
      cursor-pointer
      rounded-[10px]
      bg-[#2F3130]
      px-5
      text-[11px] font-semibold text-white
      hover:bg-[#2F3130]/80
    "
                >
                  Subscribe To Newsletter
                </button>
              </div>
            </form>

            <h3 className="max-w-120 text-[22px] font-semibold leading-snug md:text-[24px]">
              Signup and start enjoying the benefits today!
            </h3>

            <button className="mt-8 inline-flex h-14 items-center justify-center rounded-[20px] bg-[#7C5AC7] hover:bg-[#7C5AC7]/90 cursor-pointer px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              Sign Up To Lilypads
            </button>

            <div className="mt-8 flex flex-wrap gap-4">
              {socialIcons.map((icon) => (
                <button
                  key={icon.id}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/90 cursor-pointer"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vertical divider (desktop only) */}
          <div className="hidden lg:flex w-px bg-[#FFFFFF]/20" />

          {/* RIGHT SIDE: logo + Reach Us At + link columns */}
          <div className="flex-1 lg:pl-10">
            <div className="grid grid-cols-2 md:gap-y-10 gap-y-4  gap-x-10 md:grid-cols-3">
              {/* ROW 1, COL 1: Logo */}
              <div className="md:col-span-1">
                <div className="relative h-32 w-32">
                  <Image
                    src="/assets/logo.webp"
                    alt="Lilypads logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* ROW 1, COL 2: Reach Us At */}
              <div className="md:col-span-1 max-w-xs text-xs leading-relaxed text-[#E4E4E4]">
                <h4 className="mb-2 text-[12px] font-semibold text-[#FFFFFF]/90">
                  Reach Us At
                </h4>
                <p className="text-[#FFFFFF]/60 cursor-pointer hover:underline underline-offset-2">
                  6751 Columbia Gateway Dr., <br />
                  3rd floor, Columbia, <br />
                  MD 21046
                </p>
              </div>

              {/* ROW 1, COL 3: empty on desktop */}
              <div className="hidden md:block md:col-span-1" />

              {/* ROW 2, COL 1: Network + Technology */}
              <div className="space-y-8 md:col-start-1 md:row-start-2">
                <LinkGroupColumn group={network} />
                <LinkGroupColumn group={technology} />
              </div>

              {/* ROW 2, COL 2: Product + Highlights */}
              <div className="space-y-8 md:col-start-2 md:row-start-2">
                <LinkGroupColumn group={product} />
                <LinkGroupColumn group={highlights} />
              </div>

              {/* ROW 2, COL 3: Our Story + Knowledge Center */}
              <div className="space-y-8 md:col-start-3 md:row-start-2">
                <LinkGroupColumn group={ourStory} />
                <LinkGroupColumn group={knowledgeCenter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
