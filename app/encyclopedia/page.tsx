'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Node = {
  id: string
  title: string
  desc: string
}

const sections: { title: string; nodes: Node[] }[] = [
  {
    title: 'Core',
    nodes: [
      { id: 'core/qubit', title: 'Qubit', desc: 'Basic unit of quantum information.' },
      { id: 'core/superposition', title: 'Superposition', desc: 'A qubit can exist in multiple states at once.' },
      { id: 'core/entanglement', title: 'Entanglement', desc: 'Strong correlation between qubits beyond classical physics.' },
      { id: 'core/bloch_sphere', title: 'Bloch Sphere', desc: 'Geometric representation of a single qubit state.' },
      { id: 'core/measurement', title: 'Measurement', desc: 'Collapses quantum states into classical results.' },
      { id: 'core/decoherence', title: 'Decoherence', desc: 'Loss of quantum information due to environment.' },
    ],
  },
  {
    title: 'Gates',
    nodes: [
      { id: 'gates/quantum_gates', title: 'Quantum Gates', desc: 'Operations that transform qubit states.' },
      { id: 'gates/pauli_gates', title: 'Pauli Gates', desc: 'Set of fundamental gates: X, Y, Z.' },
      { id: 'gates/hadamard_gate', title: 'Hadamard Gate', desc: 'Creates superposition from basis states.' },
      { id: 'gates/cnot_gate', title: 'CNOT Gate', desc: 'Two-qubit gate used for entanglement.' },
      { id: 'gates/phase_gate', title: 'Phase Gate', desc: 'Adds a relative phase to qubit states.' },
      { id: 'gates/toffoli_gate', title: 'Toffoli Gate', desc: 'Three-qubit universal gate for classical logic in quantum circuits.' },
    ],
  },
  {
    title: 'Circuits',
    nodes: [
      { id: 'quantum_circuits', title: 'Quantum Circuits', desc: 'Sequences of gates applied to qubits.' },
    ],
  },
  {
    title: 'Algorithms',
    nodes: [
      { id: 'algo/quantum_algorithms', title: 'Quantum Algorithms', desc: 'Procedures leveraging quantum phenomena for speedup.' },
      { id: 'algo/deutsch', title: 'Deutsch–Jozsa Algorithm', desc: 'First quantum algorithm showing advantage.' },
      { id: 'algo/shor', title: 'Shor’s Algorithm', desc: 'Efficient factoring of large numbers.' },
      { id: 'algo/grover', title: 'Grover’s Algorithm', desc: 'Quadratic speedup for unstructured search.' },
      { id: 'algo/qft', title: 'Quantum Fourier Transform', desc: 'Transforms quantum states to frequency domain.' },
      { id: 'algo/variational_algo', title: 'Variational Algorithms', desc: 'Hybrid classical-quantum algorithms for optimization.' },
      { id: 'algo/quantum_simulation', title: 'Quantum Simulation', desc: 'Simulating physical systems with quantum computers.' },
      { id: 'algo/quantum_machine_learning', title: 'Quantum Machine Learning', desc: 'Applying quantum computing to ML tasks.' },
    ],
  },
  {
    title: 'Error Correction',
    nodes: [
      { id: 'error/error_correction', title: 'Quantum Error Correction', desc: 'Techniques to protect qubits from noise.' },
      { id: 'error/shor_code', title: 'Shor Code', desc: 'First quantum error correcting code.' },
      { id: 'error/surface_code', title: 'Surface Code', desc: 'Topological error correction code.' },
    ],
  },
  {
    title: 'NISQ & Advanced Concepts',
    nodes: [
      { id: 'adv/nisq', title: 'NISQ Era', desc: 'Current stage of quantum computing: noisy, small devices.' },
      { id: 'adv/quantum_supremacy', title: 'Quantum Supremacy', desc: 'When a quantum computer outperforms classical computers.' },
      { id: 'adv/bell_state', title: 'Bell State', desc: 'A maximally entangled two-qubit state.' },
      { id: 'adv/quantum_teleportation', title: 'Quantum Teleportation', desc: 'Transfer of qubit state using entanglement.' },
      { id: 'adv/quantum_cryptography', title: 'Quantum Cryptography', desc: 'Secure communication using quantum principles.' },
      { id: 'adv/qkd', title: 'Quantum Key Distribution', desc: 'Protocol to securely share encryption keys.' },
      { id: 'adv/quantum_randomness', title: 'Quantum Randomness', desc: 'True random number generation using quantum phenomena.' },
    ],
  },
]

export default function page() {
  return (
    <div className="px-24 pt-20 bg-black text-white min-h-screen">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-24 pt-24 pb-16 text-center"
      >
        <h1 className="text-5xl font-extrabold bg-red-500 bg-clip-text text-transparent">
          Quantum Encyclopedia
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          A structured knowledge base of quantum computing.
          Explore qubits, gates, algorithms, error correction, and more — all in one place.
        </p>
      </motion.div>

      {/* Sections */}
      {sections.map((section, sIdx) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: sIdx * 0.1 }}
          viewport={{ once: true }}
          className="pb-12"
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {section.nodes.map((node, i) => (
               <Link key={node.id} href={`/encyclopedia/${node.id}`}>
                <motion.div
                  className="bg-neutral-900 pt-28 p-4 rounded-lg shadow cursor-pointer 
                             transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,100,100,0.6)]"
                  whileHover={{ scale: 1.05, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    scale: { type: 'spring', stiffness: 200, damping: 15 },
                    y: { type: 'spring', stiffness: 120, damping: 12 },
                    opacity: { duration: 0.4, delay: i * 0.05 }
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{node.title}</h3>
                  <p className="text-gray-300">{node.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
