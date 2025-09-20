import Menu from '@/components/menu';
import Spline from '@splinetool/react-spline/next';

export default function Home() {

  return (
    <main className="bg-black text-white">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="w-full max-w-6xl h-[600px] overflow-hidden rounded-lg shadow-2xl">
          <Spline
            scene="https://prod.spline.design/5F1vlQXqpQnJi9zB/scene.splinecode"
          />
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Quantum Knowledge
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Encyclopedia, Timeline, Atlas, and more to level up your quantum skills
          </p>
        </div>
        <Menu />
      </section>
      
    </main>
  )
}
