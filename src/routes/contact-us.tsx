import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact-us')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className='contact-section'>
      <div className='container'>
        <div className='contact-info'>
          <h1>Get in touch whenever you're ready</h1>
          <p className='subtext'>
            We would love to learn more about your project idea. Contact us and
            we will get back to you within a few business hours.
          </p>

          <div className='office-location'>
            <h3>Head office:</h3>
            <div className='location'>
              Amsterdam, Netherlands <span>&larr; &rarr;</span>
            </div>
            <p className='address'>
              Keizersgracht 452,
              <br />
              Amsterdam, Netherlands, 1016GD
            </p>
          </div>

          <div className='other-locations'>
            <span>🇳🇱 Netherlands</span>
            <span>🇸🇪 Sweden</span>
            <span>🇵🇱 Poland</span>
            <span>🇺🇦 Ukraine</span>
            <span>🇨🇦 Canada</span>
          </div>

          <div className='contact-details'>
            <div className='contact-item'>
              <div className='icon'>📞</div>
              <div className='details'>
                <span className='value'>+(880)1911-742-904</span>
              </div>
            </div>
            <div className='contact-item'>
              <div className='icon'>✉️</div>
              <div className='details'>
                <span className='label'>Send us an email</span>
                <span className='value'>info@synedgebd.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-form-container'>
          <div className='form-tabs'>
            <span className='tab active' data-tab='project'>
              Discuss a project
            </span>
            <span className='tab' data-tab='cv'>
              Send CV
            </span>
          </div>

          <div id='project' className='form-panel active'>
            <form>
              <div className='form-group'>
                <label htmlFor='full-name'>
                  Full Name <span>*</span>
                </label>
                <input type='text' id='full-name' placeholder='Full Name' />
              </div>
              <div className='form-group'>
                <label htmlFor='company'>
                  Company <span>*</span>
                </label>
                <input type='text' id='company' placeholder='Company' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>
                  E-mail <span>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='j.alex.walker@domain.com'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type='tel' id='phone' placeholder='+1 403 879 94 95' />
              </div>
              <div className='form-group'>
                <label htmlFor='project-details'>
                  Tell us about your project
                </label>
                <textarea id='project-details' rows={4}></textarea>
              </div>

              <a href='#' className='attach-files'>
                <i className='fas fa-paperclip'></i> Attach files
              </a>
              <br />

              <button type='submit' className='btn-submit'>
                Submit &rarr;
              </button>
            </form>
          </div>

          <div id='cv' className='form-panel'>
            <p>CV submission form would go here.</p>
            <form>
              <div className='form-group'>
                <label htmlFor='full-name'>
                  Full Name <span>*</span>
                </label>
                <input type='text' id='full-name' placeholder='Full Name' />
              </div>
              <div className='form-group'>
                <label htmlFor='Position'>
                  Position <span>*</span>
                </label>
                <input type='text' id='position' placeholder='Position' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>
                  E-mail <span>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='j.alex.walker@domain.com'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type='tel' id='phone' placeholder='+1 403 879 94 95' />
              </div>
              <div className='form-group'>
                <label htmlFor='project-details'>
                  Tell us about your project
                </label>
                <textarea id='project-details' rows={4}></textarea>
              </div>

              <a href='#' className='attach-files'>
                <i className='fas fa-paperclip'></i> Attach files
              </a>
              <br />

              <button type='submit' className='btn-submit'>
                Submit &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
