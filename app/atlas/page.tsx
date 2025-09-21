'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

type Node = {
	id: string;
	title: string;
	desc: string;
};

const graphData = {
  nodes: [
    // Core
    { id: 'qubit', title: 'Qubit', desc: 'Basic unit of quantum information.' },
    { id: 'superposition', title: 'Superposition', desc: 'A qubit can exist in multiple states at once.' },
    { id: 'entanglement', title: 'Entanglement', desc: 'Strong correlation between qubits beyond classical physics.' },
    { id: 'bloch_sphere', title: 'Bloch Sphere', desc: 'Geometric representation of a single qubit state.' },
    { id: 'measurement', title: 'Measurement', desc: 'Collapses quantum states into classical results.' },
    { id: 'decoherence', title: 'Decoherence', desc: 'Loss of quantum information due to environment.' },

    // Gates
    { id: 'quantum_gates', title: 'Quantum Gates', desc: 'Operations that transform qubit states.' },
    { id: 'pauli_gates', title: 'Pauli Gates', desc: 'Set of fundamental gates: X, Y, Z.' },
    { id: 'hadamard_gate', title: 'Hadamard Gate', desc: 'Creates superposition from basis states.' },
    { id: 'cnot_gate', title: 'CNOT Gate', desc: 'Two-qubit gate used for entanglement.' },
    { id: 'phase_gate', title: 'Phase Gate', desc: 'Adds a relative phase to qubit states.' },
    { id: 'toffoli_gate', title: 'Toffoli Gate', desc: 'Three-qubit universal gate for classical logic in quantum circuits.' },

    // Circuits
    { id: 'quantum_circuits', title: 'Quantum Circuits', desc: 'Sequences of gates applied to qubits.' },

    // Algorithms
    { id: 'quantum_algorithms', title: 'Quantum Algorithms', desc: 'Procedures leveraging quantum phenomena for speedup.' },
    { id: 'deutsch', title: 'Deutsch–Jozsa Algorithm', desc: 'First quantum algorithm showing advantage.' },
    { id: 'shor', title: 'Shor’s Algorithm', desc: 'Efficient factoring of large numbers.' },
    { id: 'grover', title: 'Grover’s Algorithm', desc: 'Quadratic speedup for unstructured search.' },
    { id: 'qft', title: 'Quantum Fourier Transform', desc: 'Transforms quantum states to frequency domain.' },
    { id: 'variational_algo', title: 'Variational Algorithms', desc: 'Hybrid classical-quantum algorithms for optimization.' },
    { id: 'quantum_simulation', title: 'Quantum Simulation', desc: 'Simulating physical systems with quantum computers.' },

    // Error correction
    { id: 'error_correction', title: 'Quantum Error Correction', desc: 'Techniques to protect qubits from noise.' },
    { id: 'shor_code', title: 'Shor Code', desc: 'First quantum error correcting code.' },
    { id: 'surface_code', title: 'Surface Code', desc: 'Topological error correction code.' },

    // NISQ & advanced concepts
    { id: 'nisq', title: 'NISQ Era', desc: 'Current stage of quantum computing: noisy, small devices.' },
    { id: 'quantum_supremacy', title: 'Quantum Supremacy', desc: 'When a quantum computer outperforms classical computers.' },
    { id: 'bell_state', title: 'Bell State', desc: 'A maximally entangled two-qubit state.' },
    { id: 'quantum_teleportation', title: 'Quantum Teleportation', desc: 'Transfer of qubit state using entanglement.' },
    { id: 'quantum_cryptography', title: 'Quantum Cryptography', desc: 'Secure communication using quantum principles.' },
    { id: 'qkd', title: 'Quantum Key Distribution', desc: 'Protocol to securely share encryption keys.' },
    { id: 'quantum_machine_learning', title: 'Quantum Machine Learning', desc: 'Applying quantum computing to ML tasks.' },
    { id: 'quantum_randomness', title: 'Quantum Randomness', desc: 'True random number generation using quantum phenomena.' },
  ],
  links: [
  // Core
  { source: 'qubit', target: 'superposition' },
  { source: 'qubit', target: 'entanglement' },
  { source: 'qubit', target: 'bloch_sphere' },
  { source: 'qubit', target: 'measurement' },
  { source: 'qubit', target: 'decoherence' },
  { source: 'qubit', target: 'quantum_cryptography' }, // connect cryptography to core

  // Gates
  { source: 'quantum_gates', target: 'hadamard_gate' },
  { source: 'quantum_gates', target: 'pauli_gates' },
  { source: 'quantum_gates', target: 'cnot_gate' },
  { source: 'quantum_gates', target: 'phase_gate' },
  { source: 'quantum_gates', target: 'toffoli_gate' },

  // Circuits & algorithms
  { source: 'quantum_circuits', target: 'quantum_gates' },
  { source: 'quantum_algorithms', target: 'quantum_circuits' },
  { source: 'quantum_algorithms', target: 'deutsch' },
  { source: 'quantum_algorithms', target: 'shor' },
  { source: 'quantum_algorithms', target: 'grover' },
  { source: 'quantum_algorithms', target: 'qft' },
  { source: 'quantum_algorithms', target: 'variational_algo' },
  { source: 'quantum_algorithms', target: 'quantum_simulation' },
  { source: 'quantum_algorithms', target: 'quantum_cryptography' }, // optional: link to algorithms cluster
	{ source: 'quantum_algorithms', target: 'quantum_machine_learning' },

  // Error correction
  { source: 'error_correction', target: 'shor_code' },
  { source: 'error_correction', target: 'surface_code' },
  { source: 'quantum_circuits', target: 'error_correction' },

  // NISQ & advanced
  { source: 'nisq', target: 'decoherence' },
  { source: 'nisq', target: 'quantum_supremacy' },
  { source: 'entanglement', target: 'bell_state' },
  { source: 'bell_state', target: 'quantum_teleportation' },
  { source: 'entanglement', target: 'quantum_teleportation' },
  { source: 'quantum_cryptography', target: 'qkd' }, // keep QKD connected
  { source: 'qubit', target: 'quantum_randomness' },
],

};


export default function AtlasPage() {
	const [selectedNode, setSelectedNode] = useState<Node | null>(null);
	const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
	const graphRef = useRef<any>(null);

	useEffect(() => {
		const updateSize = () => setDimensions({ width: window.innerWidth - 300, height: window.innerHeight });
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(() => {
		if (graphRef.current) {
			setTimeout(() => {
				graphRef.current.zoomToFit(400);
			}, 500);
		}
	}, []);

	return (
		<div className="flex h-screen bg-black text-white">
			<div className="flex-1">
				<ForceGraph2D
					ref={graphRef}
					graphData={graphData}
					width={dimensions.width}
					height={dimensions.height}
					nodeLabel="title"
					linkWidth={2}
					linkColor={() => 'gray'}
					enableNodeDrag={true}
					nodeCanvasObject={(node: any, ctx, globalScale) => {
						if (node.x === undefined || node.y === undefined) return;

						const fontSize = 12 / globalScale;
						const colorScale = [
							'orange','cyan','magenta','lime','yellow','red','blue','pink',
							'violet','lightgreen','gold','salmon','lightblue','coral','purple'
						];
						const nodeIndex = graphData.nodes.findIndex(n => n.id === node.id);
						const color = nodeIndex >= 0 ? colorScale[nodeIndex % colorScale.length] : 'white';

						// Draw node circle
						ctx.fillStyle = color;
						ctx.beginPath();
						ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
						ctx.fill();

						// Draw node label
						ctx.font = `${fontSize}px Sans-Serif`;
						ctx.fillStyle = 'white';
						ctx.fillText(node.title, node.x + 4, node.y + 4);
					}}
					nodePointerAreaPaint={(node: any, color, ctx) => {
						if (node.x === undefined || node.y === undefined) return;
						ctx.fillStyle = color;
						ctx.beginPath();
						ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
						ctx.fill();
					}}
					onNodeDragEnd={(node: any) => {
						node.fx = undefined;
						node.fy = undefined;
					}}
					onNodeClick={(node: any) => setSelectedNode(node as Node)}
				/>
			</div>

			<div className="w-80 pt-40 bg-black p-4 border-l border-gray-700">
				{selectedNode ? (
					<div>
						<h2 className="text-xl font-bold mb-2">{selectedNode.title}</h2>
						<p className="text-gray-300 mb-4">{selectedNode.desc}</p>
						<button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded cursor-pointer">
							Learn More →
						</button>
					</div>
				) : (
					<p className="text-gray-400">Click a node to explore details.</p>
				)}
			</div>
		</div>
	);
}
