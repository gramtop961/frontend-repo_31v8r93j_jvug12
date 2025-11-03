import { useRef } from "react";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import BrandStory from "./components/BrandStory";
import SiteFooter from "./components/SiteFooter";

function App() {
  const flavorsRef = useRef(null);

  const scrollToFlavors = () => {
    flavorsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-emerald-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 p-[2px] shadow">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white text-lg">🫙</div>
              </div>
              <span className="text-lg font-extrabold tracking-tight">Pickles in Pots</span>
            </div>
            <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
              <a href="#story" className="hover:text-gray-900">Story</a>
              <button onClick={scrollToFlavors} className="hover:text-gray-900">Flavors</button>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
            <button
              onClick={scrollToFlavors}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:bg-gray-800"
            >
              Shop the jars
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero onExplore={scrollToFlavors} />
        <div ref={flavorsRef}>
          <ProductShowcase />
        </div>
        <BrandStory />

        {/* Callout banner */}
        <section id="contact" className="relative">
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-500 p-1 shadow-lg">
              <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white/90 p-8 backdrop-blur sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Wholesale & Custom Gifting
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-700">
                    Curate flavor boxes for events, weddings, and brand hampers. We craft labels and blends to match your vibe.
                  </p>
                </div>
                <a
                  href="mailto:hello@picklesinpots.com"
                  className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:bg-gray-800"
                >
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
