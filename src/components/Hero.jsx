import { motion } from "framer-motion";
import { Flame, Leaf, Sparkles } from "lucide-react";

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-300/50 via-rose-300/40 to-emerald-300/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-300/40 via-amber-200/40 to-rose-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm shadow-sm ring-1 ring-black/5 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-amber-600" />
              Small-batch | Naturally Fermented
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
            >
              Pickles in Pots
              <span className="block bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 bg-clip-text text-transparent">
                Story in Every Jar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600"
            >
              Crafted with time-honored recipes, sun-kissed spices, and seasonal
              produce. Aesthetic, soulful, and irresistibly crunchy—our jars hold
              tales of kitchens, seasons, and celebrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-600/30 transition hover:translate-y-[-2px] hover:bg-amber-700"
              >
                Explore Flavors
                <Flame className="h-5 w-5 transition-transform group-hover:rotate-12" />
              </button>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 font-medium text-gray-800 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
              >
                Our Story
                <Leaf className="h-5 w-5 text-emerald-600" />
              </a>
            </motion.div>
          </div>

          {/* Floating jars illustration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto grid h-[380px] w-full max-w-md place-items-center"
            >
              <motion.div
                className="absolute left-4 top-6 select-none text-5xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                🫙
              </motion.div>
              <motion.div
                className="absolute right-2 bottom-10 select-none text-6xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 3.6 }}
              >
                🌶️
              </motion.div>
              <motion.div
                className="absolute left-16 bottom-4 select-none text-6xl"
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 3.8 }}
              >
                🥒
              </motion.div>
              <motion.div
                className="absolute right-14 top-2 select-none text-5xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2 }}
              >
                🧄
              </motion.div>

              <div className="relative z-10 rounded-3xl bg-white/70 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/90 text-3xl">
                      🫙
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-700">Signature</p>
                    <h3 className="text-xl font-bold text-gray-900">The Heritage Blend</h3>
                    <p className="text-sm text-gray-600">Bold, tangy, and artfully spiced</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
