import "./index.css";
import { twMerge } from "tailwind-merge";

type ParallaxImageProps = {
  smallImage: string;
  largeImage: string;
  smallImageSide: "left" | "right";
  parallaxDistance: string;
};

const ParallaxImage = ({
  smallImage,
  largeImage,
  smallImageSide,
  parallaxDistance,
}: ParallaxImageProps) => {
  return (
    <div
      className={twMerge(
        "col-[wide] my-20 grid gap-3 [view-timeline-name:--parallax-wrapper]",
        smallImageSide === "left"
          ? "md:grid-cols-[1fr_2fr]"
          : "md:grid-cols-[2fr_1fr]",
      )}
    >
      <div className="self-start">
        <div
          className="md:supports-[animation-timeline]:parallax-image relative"
          style={{ "--movement": parallaxDistance } as React.CSSProperties}
        >
          <div className="absolute bottom-full pb-5 text-[8px] uppercase">
            <p>Teenie-tiny.</p>
            <p className="text-gray-400">
              The Tadpole is just a tad taller than a gummy bear. It fits in
              your hand and rests nicely on your laptop display.
            </p>
          </div>
          <img src={smallImage} className="rounded-md" />
        </div>
      </div>

      <img
        src={largeImage}
        className={twMerge(
          "rounded-md",
          smallImageSide === "right" && "md:-order-1",
        )}
      />
    </div>
  );
};

function App() {
  return (
    <main className="wrapper">
      <div className="full-bleed relative z-10 flex h-screen items-center bg-zinc-800 bg-[url(/img/opal-rebuild/hero-tadpole.webp)] bg-cover bg-center pb-20">
        <div className="mx-auto w-full max-w-5xl px-2 md:px-4">
          <h2 className="text-2xl text-white md:text-4xl">
            A new species
            <br /> of webcam
          </h2>
        </div>
      </div>

      <div className="mt-[-100vh] h-[400vh] [view-timeline-name:--reveal-wrapper]">
        <div className="sticky top-0 flex min-h-screen items-center justify-center">
          <div>
            <p className="supports-[animation-timeline]:reveal-text text-xl text-black md:text-4xl lg:text-[60px] lg:leading-[1]">
              Introducing the Tadpole the smallest webcam ever built. With a
              category-first directional microphone, a mirrorless Sony sensor,
              and the easiest way to mute your call with a tap it’s the perfect
              webcam to take with you everywhere
            </p>
          </div>
        </div>
      </div>

      <ParallaxImage
        smallImage="/img/opal-rebuild/image-1.webp"
        largeImage="/img/opal-rebuild/image-2.webp"
        smallImageSide="left"
        parallaxDistance="100%"
      />

      <ParallaxImage
        smallImage="/img/opal-rebuild/image-1.webp"
        largeImage="/img/opal-rebuild/image-2.webp"
        smallImageSide="right"
        parallaxDistance="100%"
      />

      <div className="full-bleed flex h-screen items-center justify-center bg-gray-100 px-4 text-lg md:text-2xl">
        <div className="max-w-[800px] space-y-3">
          <p>
            This is a rebuild by{" "}
            <a
              href="https://www.frontend.fyi"
              target="_blank"
              className="underline"
            >
              Frontend.FYI
            </a>
            , rebuilding the{" "}
            <a
              href="https://opalcamera.com/opal-tadpole"
              target="_blank"
              className="underline"
            >
              Opal Tadpole
            </a>{" "}
            animations with modern CSS techniques. This website is in no way
            related to Opal. Their design is only used as an inspiration to
            teach frontend development.
          </p>
          <p>
            All images are taken from Opal's Press kit, and remain copyrighted
            by Opal.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
