import { createFileRoute, Link } from '@tanstack/react-router';
import { Code2, Megaphone, Palette, Search } from 'lucide-react';

export const Route = createFileRoute('/services')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <section className='pt-40 pb-24 text-center relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-6'>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-6 leading-tight'>
            Transform Your{' '}
            <span className='text-primary'>Digital Presence</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10'>
            SynEdge BD empowers brands to grow through data-driven strategies in
            Web, SEO, Marketing, and Creative excellence.
          </p>
          <Link
            to='#services'
            className='inline-block bg-primary text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform'>
            Explore Services ↓
          </Link>
        </div>
      </section>
      <section id='services' className='py-24 px-6 max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
          Our Core Service Pillars
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-12'>
          <div className='service-card bg-gray-900 p-10 rounded-2xl fade-up'>
            <div className='mb-5'>
              <Code2 className='w-12 h-12 text-primary' />
            </div>
            <h3 className='text-3xl font-bold mb-3'>
              Web Development & Technology
            </h3>
            <p className='text-gray-400 mb-5'>
              We craft high-performance, responsive, and secure web platforms
              that drive conversions and enhance user experience.
            </p>
            <ul className='space-y-2 text-gray-400'>
              <li>⚡ Custom Websites & Web Apps</li>
              <li>🛍️ E-commerce (Shopify, WooCommerce, Custom)</li>
              <li>🔧 CMS Integration & Headless Architecture</li>
              <li>🚀 Performance Optimization</li>
            </ul>
            <a
              href='#'
              className='inline-block mt-6 bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform'>
              Start a Web Project
            </a>
          </div>
          <div className='service-card bg-gray-900 p-10 rounded-2xl fade-up'>
            <div className='mb-5'>
              <Search className='w-12 h-12 text-white' />
            </div>
            <h3 className='text-3xl font-bold mb-3'>
              Search Engine Optimization (SEO)
            </h3>
            <p className='text-gray-400 mb-5'>
              We combine data, strategy, and technology to maximize visibility
              and ensure long-term organic growth.
            </p>
            <ul className='space-y-2 text-gray-400'>
              <li>🔍 Technical & On-Page SEO Audits</li>
              <li>📝 Content Strategy & Keyword Optimization</li>
              <li>🔗 Link Building & Domain Authority</li>
              <li>📍 Local SEO & Google Maps Ranking</li>
            </ul>
            <a
              href='#'
              className='inline-block mt-6 bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform'>
              Request SEO Audit
            </a>
          </div>

          <div className='service-card bg-gray-900 p-10 rounded-2xl fade-up'>
            <div className='mb-5'>
              <Megaphone className='w-12 h-12 text-white' />
            </div>
            <h3 className='text-3xl font-bold mb-3'>
              Digital Marketing Campaigns
            </h3>
            <p className='text-gray-400 mb-5'>
              Execute powerful campaigns that generate leads and increase
              conversions across every digital channel.
            </p>
            <ul className='space-y-2 text-gray-400'>
              <li>🎯 PPC & Google Ads Management</li>
              <li>📱 Social Media Advertising & Strategy</li>
              <li>📧 Email & Automation Campaigns</li>
              <li>📊 Analytics, CRO & Reporting</li>
            </ul>
            <a
              href='#'
              className='inline-block mt-6 bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform'>
              See Marketing Plans
            </a>
          </div>

          <div className='service-card bg-gray-900 p-10 rounded-2xl fade-up'>
            <div className='mb-5'>
              <Palette className='w-12 h-12 text-white' />
            </div>
            <h3 className='text-3xl font-bold mb-3'>
              Creative Design & Branding
            </h3>
            <p className='text-gray-400 mb-5'>
              Creativity that inspires. We build visual experiences and brand
              identities that leave a lasting impression.
            </p>
            <ul className='space-y-2 text-gray-400'>
              <li>🎨 Brand Strategy & Identity Design</li>
              <li>🧠 UI/UX Design & Wireframing</li>
              <li>🖼️ Marketing Collateral & Graphic Design</li>
              <li>🎬 Motion Graphics & Video Content</li>
            </ul>
            <a
              href='#'
              className='inline-block mt-6 bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform'>
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className='py-24 text-center bg-gray-950'>
        <h2 className='text-4xl font-bold mb-4'>
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
          Let’s collaborate to build something extraordinary — from stunning web
          platforms to impactful digital strategies.
        </p>
        <a
          href='contact-us.html'
          className='inline-block bg-primary text-black text-lg px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform'>
          Start Your Project
        </a>
      </section>
    </main>
  );
}
