import { gallery_images } from "../data";

export default function Gallery() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      <h1 className="sr-only">The gallery</h1>

      {gallery_images.map((image) => (
        <picture key={image.id}>
          <source media="(min-width: 768px)" srcSet={image.srcDesktop} />
          <img
            src={image.srcMobile}
            alt="a gallery image"
            className="w-full object-cover select-none"
          />
        </picture>
      ))}
    </section>
  );
}
