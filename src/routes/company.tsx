import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/company')({
  component: Company,
});

export default function Company() {
  return (
    <main>
      <section className='hero-company'>
        <div className='container'>
          <div className='hero-content'>
            <h1>
              Transform your business with web, SEO, and creative solutions
            </h1>
            <p>
              SynEdge BD helps businesses grow with professional web
              development, search engine optimization, digital marketing, and
              creative design services.
            </p>
            <a href='#services' className='btn-primary'>
              Explore Services <span>&darr;</span>
            </a>
          </div>
          <div className='hero-visual'>
            <img
              src='https://placehold.co/600x400/1a1a1a/ffc107?text=Digital+Transformation'
              alt='Abstract digital transformation visual'
            />
          </div>
        </div>
      </section>
      <section className='services-overview' id='services'>
        <div className='container'>
          <h2>Our Services</h2>
          <div className='services-grid'>
            <div className='service-card'>
              <i className='fas fa-code'></i>
              <h4>Web Development</h4>
              <p>
                Custom websites, web apps, and eCommerce solutions optimized for
                performance and scalability.
              </p>
            </div>
            <div className='service-card'>
              <i className='fas fa-chart-line'></i>
              <h4>SEO Optimization</h4>
              <p>
                Boost your visibility and reach the right audience through
                proven SEO strategies and analytics.
              </p>
            </div>
            <div className='service-card'>
              <i className='fas fa-bullhorn'></i>
              <h4>Digital Marketing</h4>
              <p>
                Data-driven campaigns across social, search, and email to
                attract and convert more customers.
              </p>
            </div>
            <div className='service-card'>
              <i className='fas fa-palette'></i>
              <h4>Creative Services</h4>
              <p>
                Branding, graphics, and UI/UX design that deliver stunning
                visuals and engaging experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='about-us'>
        <div className='container'>
          <div className='about-content'>
            <h2>About SynEdge BD</h2>
            <p>
              SynEdge BD is a **Bangladesh-based digital agency** dedicated to
              delivering impactful web and marketing solutions. Our team of
              experts merges **technology and creativity** to help businesses
              not just exist online, but truly expand their reach and dominate
              their market. We pride ourselves on a collaborative approach,
              ensuring every solution is tailored and drives tangible results
              for our clients globally.
            </p>
            <a href='#' className='btn-secondary'>
              Meet the Team
            </a>
          </div>
          <div className='about-stats'>
            <div className='stat-card'>
              <span>5+</span>
              <p>Years in Business</p>
            </div>
            <div className='stat-card'>
              <span>150+</span>
              <p>Successful Projects</p>
            </div>
            <div className='stat-card'>
              <span>95%</span>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-company'>
        <div className='container'>
          <h2>Ready to Expand Your Digital Footprint?</h2>
          <p>
            Let SynEdge BD provide the edge you need in web development, SEO,
            marketing, and creative design.
          </p>
          <a href='#' className='btn-primary'>
            Start a Project Today
          </a>
        </div>
      </section>
    </main>
  );
}
