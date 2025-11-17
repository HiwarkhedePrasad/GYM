import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
                width={180}
                height={40}
                alt="CrossFitGym Logo"
              />
            </Link>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2">
              <a href="/" className="hover:text-white">Home</a>
              <a href="#group-classes" className="hover:text-white">CrossFit Classes</a>
              <a href="#strength-training" className="hover:text-white">Strength Training</a>
              <a href="#personal-training" className="hover:text-white">Personal Training</a>
              <a href="#member-events" className="hover:text-white">Member Events</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#about" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-xs">
          <p>Copyright 2022 | <a href="https://www.fitrmedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Fitr Media</a></p>
        </div>
      </div>
    </footer>
  );
}