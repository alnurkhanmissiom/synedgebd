import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className=' top-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg border-b border-gray-800'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6'>
        <Link
          to='/'
          className='text-2xl font-extrabold text-white tracking-wider'>
          <img className=' max-w-[160px]' src='/logo.png' alt='logo' />
        </Link>
        <nav className='hidden md:flex space-x-8 text-gray-300 font-semibold'>
          <Link to='/' className='hover:text-primary'>
            Home
          </Link>
          <Link to='/company' className='hover:text-primary'>
            Company
          </Link>
          <Link to='/services' className='text-primary'>
            Services
          </Link>
          <Link to='/career' className='hover:text-primary'>
            Careers
          </Link>
          <Link to='/contact-us' className='hover:text-primary'>
            Contact
          </Link>
        </nav>
        <Link
          to='/contact-us'
          className='hidden md:block text-white bg-red-700 px-5 py-2 rounded-full font-bold'>
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
