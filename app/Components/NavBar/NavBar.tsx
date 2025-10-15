// components/NavBar/NavBar.tsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="bg-offWhite w-full border-b">
    <div className="flex flex-col">
        <div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <a href="/help-center" className="text-lightGrey text-base underline">Support</a>
            <a href="tel:6316869700" className="text-blue font-semibold text-base">(631) 686-9700</a>
          </div>
          {/* <button type="button" aria-label="Search" className="text-navyBlue text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path d="M31.4805 29.567L24.9938 23.1191C26.9111 20.734 28.0592 17.7211 28.0592 14.4458C28.0592 6.75392 21.7677 0.5 14.0296 0.5C6.29151 0.5 0 6.75392 0 14.4458C0 22.1377 6.29151 28.3916 14.0296 28.3916C17.2328 28.3916 20.1719 27.3074 22.5369 25.5157L29.058 31.9979C29.391 32.3288 29.8387 32.5 30.275 32.5C30.7113 32.5 31.159 32.3288 31.492 31.9979C32.1693 31.3245 32.1693 30.2404 31.492 29.5785L31.4805 29.567ZM3.44425 14.4344C3.44425 8.63695 8.19733 3.91227 14.0296 3.91227C19.8619 3.91227 24.6149 8.63695 24.6149 14.4344C24.6149 20.2318 19.8619 24.9565 14.0296 24.9565C8.19733 24.9565 3.44425 20.2318 3.44425 14.4344Z" fill="#161641" />
            </svg>
          </button> */}
          <a href="/try-for-free" className="bg-blue text-white font-semibold rounded-lg px-6 py-2 text-lg">Try for free</a>
        </div>
        </div>
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-8 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/images/Answering LegalTM_Blue.png" alt="Answering Legal Logo" className="h-10 w-auto" />
          {/* <span className="text-navyBlue text-2xl font-serif tracking-wide"></span> */}
        </a>
        {/* Center Nav Links */}
        <nav className="flex-1 flex justify-center items-center gap-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <a href="#" className="text-navyBlue font-semibold text-lg">Products</a>
              <span className="text-navyBlue">&#x25BC;</span>
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="text-navyBlue font-semibold text-lg">About</a>
              <span className="text-navyBlue">&#x25BC;</span>
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="text-navyBlue font-semibold text-lg">Resources</a>
              <span className="text-navyBlue">&#x25BC;</span>
            </div>
            <a href="#" className="text-navyBlue font-semibold text-lg">Pricing</a>
          </div>
        </nav>
        {/* Right Side */}
        
      </div>
      </div>
    </header>
  );
}