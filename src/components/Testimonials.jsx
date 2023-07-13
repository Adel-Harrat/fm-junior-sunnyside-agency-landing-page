import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className={`py-12 md:py-40 bg-tw-yellow/5`}>
      <h1 className="text-center uppercase tracking-[0.3rem] text-tw-grayish-blue font-tw-primary">
        client testimonials
      </h1>

      <section
        className={`grid grid-cols-1 md:grid-cols-3 text-center gap-16 md:gap-4 mt-16 md:max-w-6xl md:mx-auto`}
      >
        {testimonials.map((item) => (
          <article key={item.id} className={`flex flex-col gap-8`}>
            <figure className="h-20 w-20 rounded-full overflow-hidden mx-auto">
              <img
                src={item.image}
                alt={`image of ${item.name}`}
                className={`w-full h-full object-contain`}
              />
            </figure>

            <p
              className={`text-tw-very-dark-grayish-blue font-tw-secondary mx-5 leading-8`}
            >
              {item.text}
            </p>

            <div>
              <p
                className={`font-tw-primary text-tw-very-dark-desaturated-blue text-xl font-bold`}
              >
                {item.name}
              </p>
              <p
                className={`font-tw-secondary text-sm text-tw-grayish-blue mt-3`}
              >
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
