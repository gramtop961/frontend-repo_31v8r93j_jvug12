import { motion } from "framer-motion";
import { HeartHandshake, Leaf, Sun, UtensilsCrossed } from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "Sun-Cured Freshness",
    text: "We sun-cure produce to deepen flavors and keep nutrition intact.",
  },
  {
    icon: UtensilsCrossed,
    title: "Heritage Recipes",
    text: "Passed down through generations—measured by memory, perfected by love.",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    text: "Whole spices, cold-pressed oils, and seasonal vegetables—nothing else.",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    text: "Sourced from local growers and created by hands that care.",
  },
];

export default function BrandStory() {
  return (
    <section id="story" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Pickles in Pots Story
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A celebration of culture, seasons, and slow craft—made for your table,
            gifted from our home.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 p-1"
          >
            <div className="rounded-3xl bg-white/80 p-8 backdrop-blur">
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed text-gray-700"
              >
                “Every jar is a studio—layers of color, texture, and time. We
                capture the moment when ingredients sing together, so your meals
                feel bold, joyful, and complete.”
              </motion.blockquote>
              <div className="mt-6 text-sm font-semibold text-gray-900">— The Founders</div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-black/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
