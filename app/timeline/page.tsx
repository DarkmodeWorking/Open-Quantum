"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  category: "theory" | "algorithm" | "hardware" | "future";
  color: string;
};

const events: TimelineEvent[] = [
  // THEORY FOUNDATIONS
  {
    year: "1900",
    title: "Quantum Hypothesis",
    desc: "Max Planck introduces the concept of energy quanta.",
    category: "theory",
    color: "bg-blue-500",
  },
  {
    year: "1905",
    title: "Photoelectric Effect",
    desc: "Einstein explains light as discrete quanta (photons).",
    category: "theory",
    color: "bg-blue-500",
  },
  {
    year: "1926",
    title: "Schrödinger Equation",
    desc: "Erwin Schrödinger formulates wave mechanics.",
    category: "theory",
    color: "bg-blue-500",
  },
  {
    year: "1935",
    title: "EPR Paradox",
    desc: "Einstein, Podolsky, and Rosen describe quantum entanglement.",
    category: "theory",
    color: "bg-blue-500",
  },
  {
    year: "1964",
    title: "Bell’s Theorem",
    desc: "John Bell proves quantum entanglement defies local realism.",
    category: "theory",
    color: "bg-blue-500",
  },

  // EARLY COMPUTING IDEAS
  {
    year: "1981",
    title: "Feynman Lecture",
    desc: "Richard Feynman suggests quantum computers for simulating physics.",
    category: "theory",
    color: "bg-blue-500",
  },
  {
    year: "1985",
    title: "Deutsch’s Model",
    desc: "David Deutsch formalizes the idea of a universal quantum computer.",
    category: "theory",
    color: "bg-blue-500",
  },

  // ALGORITHMS
  {
    year: "1994",
    title: "Shor’s Algorithm",
    desc: "Efficient factorization algorithm threatens RSA encryption.",
    category: "algorithm",
    color: "bg-green-500",
  },
  {
    year: "1996",
    title: "Grover’s Algorithm",
    desc: "Quadratic speedup for database search.",
    category: "algorithm",
    color: "bg-green-500",
  },
  {
    year: "1998",
    title: "Quantum Error Correction",
    desc: "Shor and Steane develop error-correcting codes for qubits.",
    category: "algorithm",
    color: "bg-green-500",
  },
  {
    year: "2009",
    title: "Topological Quantum Computing",
    desc: "Kitaev introduces fault-tolerant model using anyons.",
    category: "algorithm",
    color: "bg-green-500",
  },

  // HARDWARE
  {
    year: "2001",
    title: "First NMR Quantum Computer",
    desc: "A 7-qubit liquid-state NMR computer demonstrates Shor’s algorithm.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2007",
    title: "D-Wave Systems",
    desc: "D-Wave announces the first commercial quantum annealer.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2011",
    title: "Superconducting Qubits",
    desc: "IBM demonstrates progress in superconducting transmon qubits.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2016",
    title: "IBM Quantum Experience",
    desc: "IBM puts a 5-qubit quantum computer on the cloud for public use.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2019",
    title: "Google Quantum Supremacy",
    desc: "Sycamore processor solves a problem in 200 seconds vs 10,000 years classically.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2020",
    title: "China’s Jiuzhang",
    desc: "Chinese photonic quantum computer demonstrates supremacy in boson sampling.",
    category: "hardware",
    color: "bg-yellow-500",
  },
  {
    year: "2021",
    title: "Quantum Volume Milestones",
    desc: "IBM, IonQ, and Rigetti showcase progress in scalable qubit architectures.",
    category: "hardware",
    color: "bg-yellow-500",
  },

  // FUTURE
  {
    year: "2030s",
    title: "Fault-Tolerant Quantum Computing",
    desc: "Error-corrected universal quantum computers become practical.",
    category: "future",
    color: "bg-purple-500",
  },
  {
    year: "2040s",
    title: "Quantum Internet",
    desc: "Global-scale entanglement enables secure quantum communication.",
    category: "future",
    color: "bg-purple-500",
  },
  {
    year: "2050s",
    title: "Quantum AI",
    desc: "Quantum-enhanced machine learning reshapes science and industry.",
    category: "future",
    color: "bg-purple-500",
  },
];


const categories = [
  { key: "all", label: "All" },
  { key: "theory", label: "Theory" },
  { key: "algorithm", label: "Algorithms" },
  { key: "hardware", label: "Hardware" },
  { key: "future", label: "Future" },
];

export default function TimelinePage() {
  const [filter, setFilter] = useState("all");

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
  {/* Title */}
  <motion.h1
    className="text-4xl md:text-5xl font-bold mb-6 text-center"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Quantum Computing Timeline
  </motion.h1>

  {/* Filter buttons */}
  <motion.div
    className="flex justify-center gap-4 mb-10 flex-wrap"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    {categories.map((cat) => (
      <button
        key={cat.key}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
          filter === cat.key
            ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
        onClick={() => setFilter(cat.key)}
      >
        {cat.label}
      </button>
    ))}
  </motion.div>

  {/* Timeline */}
  <VerticalTimeline lineColor="#4B5563" >
    {filteredEvents.map((event, idx) => (
      <VerticalTimelineElement
        key={idx}
        date={event.year}
        contentStyle={{
          background: "#111827",
          color: "#fff",
          border: "1px solid #374151",
          borderRadius: "0.75rem",
        }}
        contentArrowStyle={{ borderRight: "7px solid #374151" }}
        icon={
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${event.color}`}
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 15,
              delay: idx * 0.05,
            }}
          >
            <span className="text-xs font-bold">QC</span>
          </motion.div>
        }
        iconStyle={{ boxShadow: "0 0 0 4px #000" }}
      >
        <motion.h3
          className="text-xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {event.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-sm mt-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {event.desc}
        </motion.p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</main>

  );
}
