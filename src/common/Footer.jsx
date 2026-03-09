import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
} from "../../public/icons/icons";
import { useTranslations } from "next-intl";

const SOCIAL_LINKS = [
  { id: "insta", icon: <InstagramIcon />, href: "#" },
  { id: "fb", icon: <FacebookIcon />, href: "#" },
  { id: "tiktok", icon: <TiktokIcon />, href: "#" },
  { id: "linkedin", icon: <LinkedinIcon />, href: "#" },
];

const Footer = () => {
  const t = useTranslations("common")
  return (
    <footer className="bg-[#0E0F22] text-white">
      <div className="container-1200 px-4 sm:px-5 md:px-6 lg:px-5 pt-12 sm:pt-14 lg:pt-11 pb-6">
        {/* Top Grid */}
        <div className="grid gap-y-10 md:grid-cols-12 lg:gap-10">
          {/* Column 1 */}
          <div className="md:col-span-4 lg:col-span-5 ">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logoo.png"
                alt="Establisher"
                width={148}
                height={104}
                priority
                className="h-auto w-32 sm:w-36 md:w-40 object-contain"
              />
            </Link>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-6 text-white font-normal max-w-full sm:max-w-[26rem]">
              {t("footer.description")}
            </p>
          </div>

          {/* Right Side Links */}
          <div className="grid gap-y-8 gap-x-8 md:gap-x-10 md:col-span-8 lg:col-span-7 md:grid-cols-3  lg:gap-10 xl:gap-16">
            {/* Column 2 */}
            <div>
              <h4 className="text-[15px] leading-6 font-bold text-white capitalize">
                {t("footer.links_title")}
              </h4>
              <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm leading-6 font-[350] text-white capitalize">
                <li>
                  <Link href="#" className="transition-opacity hover:opacity-80">
                    {t("pages.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-opacity hover:opacity-80">
                    {t("pages.terms")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-[15px] leading-6 font-bold text-white capitalize">
                {t("footer.pages_title")}
              </h4>
              <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm leading-6 font-[350] text-white capitalize">
                <li>
                  <Link
                    href="/about"
                    className="transition-opacity hover:opacity-80"
                  >
                    {t("pages.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-opacity hover:opacity-80"
                  >
                    {t("pages.contact")}
                  </Link>
                </li>
                <li>
                  <Link href="#" clasisName="transition-opacity hover:opacity-80">
                    {t("pages.demo")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div >
              <h4 className="text-[15px] leading-6 font-bold text-white capitalize">
                {t("footer.reach_title")}
              </h4>
              <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm leading-6 font-[350] text-white capitalize break-words">
                <li>
                  <a
                    href="tel:+971585934816"
                    className="transition-opacity hover:opacity-80"
                  >
                    +971 58 593 4816
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:julie@gmail.com"
                    className="transition-opacity hover:opacity-80 lowercase"
                  >
                    julie@gmail.com
                  </a>
                </li>
                <li> {t("footer.location")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 lg:mt-14 border-t border-white/10 pt-5 sm:pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left text-sm sm:text-base leading-6 font-normal text-white">
            {t("footer.copyright")}
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-3.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1D1F3B] transition-all duration-300 hover:scale-110 hover:bg-[#2A2D5A] active:scale-95"
                aria-label={social.id}
              >
                <span>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;