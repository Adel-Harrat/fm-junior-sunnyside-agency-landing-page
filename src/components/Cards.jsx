import CardArticle from "./CardArticle";
import CardImage from "./CardImage";
import CardImageText from "./CardImageText";

export default function Cards() {
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2`}>
      <CardImage
        srcMobile="./images/mobile/image-transform.jpg"
        srcDesktop="./images/desktop/image-transform.jpg"
        alt="image transform"
        classes="md:order-2"
      />
      <CardArticle
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        linkHref="#firstArticle"
        linkValue="Learn more"
        classes="md:order-1"
        borderColor="after:bg-tw-yellow"
      />
      <CardImage
        srcMobile="./images/mobile/image-stand-out.jpg"
        srcDesktop="./images/desktop/image-stand-out.jpg"
        alt="image stand out"
        classes="md:order-3"
      />
      <CardArticle
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers,
        photographers, videographers, and copywriters, we’ll build and extend
        your brand in digital places."
        linkHref="#secondArticle"
        linkValue="Learn more"
        classes="md:order-4"
        borderColor="after:bg-tw-soft-red"
      />
      <CardImageText
        srcMobile="bg-[url('/images/mobile/image-graphic-design.jpg')]"
        srcDesktop="md:bg-[url('/images/desktop/image-graphic-design.jpg')]"
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention."
        titleColor="text-tw-dark-desaturated-cyan"
        textColor="text-tw-dark-desaturated-cyan"
        classes="md:order-5"
      />
      <CardImageText
        srcMobile="bg-[url('/images/mobile/image-photography.jpg')]"
        srcDesktop="md:bg-[url('/images/desktop/image-photography.jpg')]"
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image."
        titleColor="text-tw-dark-blue-photography-text"
        textColor="text-tw-dark-blue-photography-text"
        classes="md:order-6"
      />
    </main>
  );
}
