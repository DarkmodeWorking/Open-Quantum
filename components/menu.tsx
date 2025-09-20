"use client"; 

import { motion } from "framer-motion";

const items = [
  {
    title: "Encyclopedia",
    desc: "Deep explanations of qubits, algorithms, and concepts.",
    img: "/menu-gifs/di.webp"
  },
  {
    title: "Atlas",
    desc: "Explore a visual map of interconnected quantum knowledge.",
    img: "/menu-gifs/at.gif"
  },
  {
    title: "Timeline",
    desc: "Journey through the history and future of quantum computing.",
    img: "/menu-gifs/ti.gif"
  },
  {
    title: "Digest",
    desc: "Curated updates on breakthroughs and real-world applications.",
    img: "/menu-gifs/di.gif"
  },
  
];

export default function Menu() {
  return (
    <main className="bg-black text-white">
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(56,189,248,0.3)",
                borderColor: "rgba(56,189,248,0.5)"
              }}
              className="relative pt-40 p-6 rounded-xl border border-transparent overflow-hidden"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#111" // fallback if image doesn't load
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h2 className="text-xl font-bold mb-3 relative z-10 text-white">{item.title}</h2>
              <p className="text-gray-400 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
