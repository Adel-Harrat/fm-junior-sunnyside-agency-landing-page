import { useState } from "react";

// Packages
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

// Data
import IconHamburger from "./IconHamburger";
import { menu } from "../data";
import { dropIn, fadeIn } from "../animation.js";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-[url('./images/mobile/image-header.jpg')] md:bg-[url('./images/desktop/image-header.jpg')] bg-cover bg-bottom min-h-[60vh] md:min-h-screen overflow-auto flex flex-col justify-between relative">
      <header className="mx-5 mt-10 flex items-center justify-between md:max-w-7xl md:px-16 md:mx-auto md:w-full">
        <a href="/">
          <div className="sr-only">Logo link</div>
          <figure>
            <Logo />
          </figure>
        </a>

        {/* Start of Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-14">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  className={twMerge(
                    `text-tw-white font-tw-secondary`,
                    item.isPrimary &&
                      "text-sm bg-tw-white text-tw-very-dark-desaturated-blue px-6 py-3 rounded-full font-tw-primary uppercase"
                  )}
                  href={item.href}
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* End of Desktop Menu */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((o) => !o)}
          className={`md:hidden`}
        >
          <span className="sr-only">Open/Close menu</span>
          <IconHamburger isOpen={isOpen} />
        </motion.button>
      </header>

      <AnimatePresence initial={false} mode="wait">
        {/* Start of mobile menu */}
        {isOpen && (
          <motion.nav
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute bg-tw-white p-8 mt-24 inset-x-5 top-5 rounded-lg md:hidden`}
          >
            <ul className="text-center flex flex-col gap-6 relative">
              {menu.map((link) => (
                <li key={link.id}>
                  <a
                    className={twMerge(
                      "font-tw-secondary text-tw-dark-grayish-blue",
                      link.isPrimary &&
                        "bg-tw-yellow text-tw-very-dark-desaturated-blue uppercase font-tw-primary rounded-full px-5 py-3 inline-block text-sm"
                    )}
                    href={link.href}
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>

            <span className="w-0 h-0 border-b-[25px] border-tw-white border-l-[25px] border-l-transparent absolute -top-4 right-0"></span>
          </motion.nav>
        )}
        {/* End of mobile menu */}
      </AnimatePresence>

      <section className="flex-1 grid place-items-center">
        <AnimatePresence initial={false} mode="wait">
          {!isOpen && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="font-tw-primary uppercase text-center text-tw-white text-5xl tracking-widest leading-normal md:text-6xl md:-mt-44 md:mb-32">
                We are creatives
              </h1>
              <figure className="text-center mt-10">
                <img
                  src="./images/icon-arrow-down.svg"
                  alt="icon arrow down"
                  className="inline-block"
                />
              </figure>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}
