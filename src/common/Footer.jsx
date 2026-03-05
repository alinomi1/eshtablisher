import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon } from "../../public/icons/icons";


const SOCIAL_LINKS = [
  { id: 'insta', icon: <InstagramIcon />, href: '#' },
  { id: 'fb', icon: <FacebookIcon />, href: '#' },
  { id: 'tiktok', icon: <TiktokIcon />, href: '#' },
  { id: 'linkedin', icon: <LinkedinIcon />, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0E0F22] text-white">
      <div className="container-1200 px-5 pt-11 pb-6">
        {/* Top Grid */}
        <div className="grid gap-10 grid-cols-12">
          {/* Column 1 */}
          <div className="col-span-5">
            <Link href="/">
              <Image
                src="/images/logoo.png"
                alt="Establisher"
                width={148}
                height={104}
                priority
                className="h-26 w-37 object-cover"
              />
            </Link>
            <p className="mt-6 text-base leading-6.5 text-white font-normal max-w-97.25">
              We are a dedicated business consultancy team, helping businesses
              grow and achieve their goals.
            </p>
          </div>

          <div className="col-span-7  grid grid-cols-3 gap-16">
            {/* Column 2 */}
            <div>
              <h4 className="text-[15px] leading-6.5 capitalize font-bold text-white">Quick Links</h4>
              <ul className="mt-6 space-y-6 text-sm font-[350] text-white leading-6.5 capitalize">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-[15px] leading-6.5 capitalize font-bold text-white">Pages</h4>
              <ul className="mt-6 space-y-6 text-sm font-[350] text-white leading-6.5 capitalize">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="#">Request a Demo</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-[15px] leading-6.5 capitalize font-bold text-white">Reach Us</h4>
              <ul className="mt-6 space-y-6 text-sm font-[350] text-white leading-6.5 capitalize">
                <li>+971 58 593 4816</li>
                <li>julie@gmail.com</li>
                <li>Jvc Dubai UAE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-base leading-6.5 font-normal text-white">
            © copyright 2026 theestablisher.com | All Rights Reserved
          </p>
          {/* socials */}
          <div className="flex items-center gap-3.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D1F3B] transition-all duration-300 hover:scale-110 hover:bg-[#2A2D5A] active:scale-95"
                aria-label={social.id}
              >
                <span >
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;