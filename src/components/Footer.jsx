import Logo from "./Logo";
import { menu, social_media } from "../data";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const filteredMenu = menu.filter((item) => !item.isPrimary);
  return (
    <footer className={`bg-[#90d4c5] text-center py-16`}>
      <div className="mx-auto inline-block scale-125">
        <Logo color="hsl(167, 40%, 24%)" />
      </div>

      <ul className={`flex justify-center gap-10 md:gap-16 mt-10 mx-10`}>
        {filteredMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`font-tw-secondary text-tw-dark-moderate-cyan-footer text-base hover:text-tw-white transition`}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex gap-5 md:gap-8 items-center mt-20 justify-center pb-0">
        {social_media.map((item) => (
          <li key={item.id}>
            <a href={item.href}>
              {/* <img
                src={item.icon}
                alt={`${item.alt} icon`}
                className={`h-4 w-4`}
              /> */}
              {item.icon === "facebook" && (
                <FaFacebookSquare className="h-6 w-6 text-tw-dark-desaturated-cyan hover:text-tw-white transition" />
              )}
              {item.icon === "instagram" && (
                <FaInstagram className="h-6 w-6 text-tw-dark-desaturated-cyan hover:text-tw-white transition" />
              )}
              {item.icon === "twitter" && (
                <FaTwitter className="h-6 w-6 text-tw-dark-desaturated-cyan hover:text-tw-white transition" />
              )}
              {item.icon === "pinterest" && (
                <FaPinterest className="h-6 w-6 text-tw-dark-desaturated-cyan hover:text-tw-white transition" />
              )}
              <span className="sr-only">Icon of {item.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
