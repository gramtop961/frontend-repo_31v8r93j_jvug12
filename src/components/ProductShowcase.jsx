import { motion } from "framer-motion";

const items = [
  {
    name: "Mix Veg",
    emoji: "🥕",
    color: "from-amber-500 to-rose-500",
    notes: "Crunchy medley of seasonal veggies, sun-cured and spice-kissed.",
  },
  {
    name: "Radish (Mooli)",
    emoji: "🌱",
    color: "from-rose-500 to-amber-400",
    notes: "Peppery bite meets mellow tang—winter favorite, bottle after bottle.",
  },
  {
    name: "Monjihaakh",
    emoji: "🫘",
    color: "from-emerald-500 to-amber-400",
    notes: "Traditional, nuanced, and deeply aromatic—ancestral comfort in a jar.",
  },
  {
    name: "Chilly",
    emoji: "🌶️",
    color: "from-red-500 to-amber-500",
    notes: "Fiery, bright, and beautifully balanced with garlic and mustard.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="flavors" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Signature Flavors
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Handcrafted in small batches with cold-pressed oils and whole spices.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div
                className={`absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl transition group-hover:opacity-30`}
              />

              <div className="flex items-center justify-between">
                <div className="text-5xl">{item.emoji}</div>
                <div className={`rounded-full bg-gradient-to-r ${item.color} p-0.5`}>
                  <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800">
                    Small Batch
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.notes}</p>

              <div className="mt-6 flex items-center justify-between">
                <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:bg-gray-800">
                  Taste Notes
                </button>
                <span className="text-xs font-medium text-amber-700">Vegan • Preservative-free</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
