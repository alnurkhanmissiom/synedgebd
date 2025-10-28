import { createFileRoute } from '@tanstack/react-router';
import { Cpu, Rocket, Users } from 'lucide-react';
export const Route = createFileRoute('/career')({ component: Career });

export default function Career() {
  return (
    <main>
      <canvas
        id='header-canvas'
        className='absolute top-0 left-0 w-full h-full -z-10'></canvas>
      <section className='min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 bg-transparent pt-32'>
        <h1 className='text-5xl md:text-6xl font-bold mb-4'>
          Join Our <span className='text-blue-500'>Creative Team</span>
        </h1>
        <p className='max-w-2xl text-gray-300 text-lg mb-8'>
          At SynEdge BD, we believe innovation begins with people. Join a
          passionate team shaping the digital future.
        </p>
        <a
          href='#open-positions'
          className='bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all'>
          Explore Openings
        </a>
      </section>

      <section className='py-24 bg-black/60 backdrop-blur-sm text-center px-4 md:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>
          Why Join <span className='text-blue-500'>SynEdge BD</span>?
        </h2>
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-gray-300'>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <Cpu className='w-10 h-10 mx-auto text-blue-400 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              Cutting-Edge Projects
            </h3>
            <p>
              Work with emerging technologies in AI, automation, and industrial
              systems.
            </p>
          </div>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <Users className='w-10 h-10 mx-auto text-blue-400 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              Collaborative Culture
            </h3>
            <p>
              We value creativity, curiosity, and open collaboration among
              teammates.
            </p>
          </div>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <Rocket className='w-10 h-10 mx-auto text-blue-400 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Career Growth</h3>
            <p>
              Continuous learning opportunities, mentorship, and professional
              development.
            </p>
          </div>
        </div>
      </section>

      <section
        id='open-positions'
        className='py-24 bg-black/40 backdrop-blur-sm text-center px-4 md:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>
          Current Openings
        </h2>
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-gray-300'>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <h3 className='text-xl font-semibold mb-2'>Frontend Developer</h3>
            <p>
              React, TailwindCSS, and modern JS frameworks experience required.
            </p>
            <a
              href='mailto:hr@synedgebd.com'
              className='inline-block mt-4 text-blue-400 hover:text-blue-500 font-semibold'>
              Apply Now →
            </a>
          </div>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <h3 className='text-xl font-semibold mb-2'>UI/UX Designer</h3>
            <p>Design clean, modern interfaces with Figma or Adobe XD.</p>
            <a
              href='mailto:hr@synedgebd.com'
              className='inline-block mt-4 text-blue-400 hover:text-blue-500 font-semibold'>
              Apply Now →
            </a>
          </div>
          <div className='p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition'>
            <h3 className='text-xl font-semibold mb-2'>
              Digital Marketing Executive
            </h3>
            <p>SEO, Google Ads, and Social Media expertise preferred.</p>
            <a
              href='mailto:hr@synedgebd.com'
              className='inline-block mt-4 text-blue-400 hover:text-blue-500 font-semibold'>
              Apply Now →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
