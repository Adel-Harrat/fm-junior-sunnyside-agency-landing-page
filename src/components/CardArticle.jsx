import { twMerge } from "tailwind-merge";

export default function CardArticle({
  title,
  text,
  linkHref,
  linkValue,
  classes,
  borderColor,
}) {
  return (
    <article
      className={twMerge(
        `py-12 flex flex-col items-center justify-center md:items-start gap-8 px-10 md:px-16 lg:px-28 xl:px-36 bg-tw-yellow/5`,
        classes
      )}
    >
      <h1
        className={`text-3xl lg:text-[2.5rem] md:leading-tight font-tw-primary text-center md:text-left`}
      >
        {title}
      </h1>
      <p
        className={`text-tw-dark-grayish-blue font-tw-secondary text-center md:text-left`}
      >
        {text}
      </p>
      <a
        className={twMerge(
          `text-center font-tw-primary uppercase z-10 after:h-2 after:-translate-y-[1.30rem] after:rounded-md after:opacity-30 relative after:absolute after:-bottom-5 after:-inset-x-2 after:-z-10`,
          borderColor
        )}
        href={linkHref}
      >
        {linkValue}
      </a>
    </article>
  );
}
