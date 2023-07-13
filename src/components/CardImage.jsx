export default function CardImage({ srcMobile, srcDesktop, alt, classes }) {
  return (
    <article className={`${classes}`}>
      <picture>
        <source media="(min-width: 1000px)" srcSet={srcDesktop} />
        <img src={srcMobile} alt={alt} className={`h-full object-cover`} />
      </picture>
    </article>
  );
}
