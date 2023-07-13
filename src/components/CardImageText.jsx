import { twMerge } from "tailwind-merge";

export default function CardImageText(props) {
  const { srcMobile, srcDesktop, title, text, titleColor, textColor, classes } =
    props;
  return (
    <article
      className={twMerge(
        `${srcMobile} ${srcDesktop} bg-cover bg-no-repeat bg-top min-h-[80vh] flex flex-col justify-end`,
        classes
      )}
    >
      <h1
        className={`text-center font-tw-primary ${titleColor} font-bold text-3xl`}
      >
        {title}
      </h1>
      <p
        className={`text-center font-tw-secondary ${textColor} text-base px-5 leading-6 mt-6 mb-12 max-w-sm mx-auto opacity-70`}
      >
        {text}
      </p>
    </article>
  );
}
