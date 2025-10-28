import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowDownCircle,
  Code,
  Palette,
  Target,
  TrendingUp,
} from 'lucide-react';
export const Route = createFileRoute('/')({ component: Home });
export default function Home() {
  return (
    <main>
      <section className='min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-transparent'>
        <div className='container mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto'>
            Transform your business with{' '}
            <span className='text-primary'>
              web, SEO, and creative solutions
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto'>
            SynEdge BD helps businesses grow with professional web development,
            search engine optimization, digital marketing, and creative design
            services.
          </p>
          <Link
            to='#services'
            className='flex items-center space-x-2 bg-primary text-black text-lg px-8 py-3 rounded-full font-bold btn-primary'>
            Explore Services
            <ArrowDownCircle />
          </Link>
        </div>
      </section>
      <section id='services' className='py-20 md:py-32 px-4 md:px-8'>
        <div className='container mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 text-white'>
            Our Services
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='service-card bg-card p-8 rounded-2xl shadow-xl'>
              <div className='p-3 bg-primary/20 rounded-xl inline-block mb-4'>
                <Code className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-3'>Web Development</h3>
              <p className='text-gray-400'>
                Custom websites, web apps, and eCommerce solutions optimized for
                performance and scalability.
              </p>
            </div>

            <div className='service-card bg-card p-8 rounded-2xl shadow-xl'>
              <div className='p-3 bg-primary/20 rounded-xl inline-block mb-4'>
                <TrendingUp className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-3'>SEO Optimization</h3>
              <p className='text-gray-400'>
                Boost your visibility and reach the right audience through
                proven SEO strategies and analytics.
              </p>
            </div>

            <div className='service-card bg-card p-8 rounded-2xl shadow-xl'>
              <div className='p-3 bg-primary/20 rounded-xl inline-block mb-4'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-3'>Digital Marketing</h3>
              <p className='text-gray-400'>
                Data-driven campaigns across social, search, and email to
                attract and convert more customers.
              </p>
            </div>

            <div className='service-card bg-card p-8 rounded-2xl shadow-xl'>
              <div className='p-3 bg-primary/20 rounded-xl inline-block mb-4'>
                <Palette className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-3'>Creative Services</h3>
              <p className='text-gray-400'>
                Branding, graphics, and UI/UX design that deliver stunning
                visuals and engaging experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='py-20 md:py-32 px-4 md:px-8 bg-gray-950'>
        <div className='container mx-auto max-w-4xl text-center'>
          <span className='text-primary uppercase font-semibold tracking-widest text-sm mb-2 block'>
            Our Story
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-8'>
            About SynEdge BD
          </h2>
          <p className='text-xl text-gray-400 leading-relaxed'>
            SynEdge BD is a **Bangladesh-based digital agency** delivering
            impactful web and marketing solutions. Our team helps businesses
            expand their reach through technology and creativity, focusing on
            performance, scalability, and measurable growth for our clients.
          </p>
        </div>
      </section>
      <section id='contact' className='py-20 md:py-32 px-4 md:px-8'>
        <div className='container mx-auto text-center max-w-3xl'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-400 mb-10'>
            Let's discuss your project and discover how our expert team can help
            you achieve your digital goals.
          </p>
          <a
            href='mailto:contact@synedgebd.com'
            className='inline-block bg-primary text-black text-lg px-10 py-4 rounded-full font-bold btn-primary'>
            Contact SynEdge BD Today
          </a>
        </div>
      </section>
    </main>
  );
}
