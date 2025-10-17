import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
export default function NavBar() {
  return (
    <header className="custom-navbar-bg w-full">
      <div className="flex flex-col pt-8">
        <div className="flex items-center justify-end pt-1 pr-4 gap-x-2">
          <a href="/help-center" className="text-lightGrey text-base underline">
            Support
          </a>
          <a href="tel:6316869700" className="custom-support-number font-semibold">
            (631) 686-9700
          </a>
        </div>
        <div className="flex  items-center w-full">
          <div className="flex items-center justify-start w-1/3 ">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/Answering LegalTM_Blue.png"
                alt="Answering Legal Logo"
                width={293}
                height={48}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <nav className="w-1/3 flex justify-center items-center gap-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1">
                <a href="#" className="text-navyBlue font-semibold text-lg hover:text-blue">
                  Products
                </a>
                <span className="text-navyBlue relative top-1">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>{' '}
              </div>
              <div className="flex items-center gap-1 hover:text-blue">
                <a href="#" className="text-navyBlue font-semibold text-lg">
                  About
                </a>
                <span className="text-navyBlue">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
              <div className="flex items-center gap-1 hover:text-blue">
                <a href="#" className="text-navyBlue font-semibold text-lg">
                  Resources
                </a>
                <span className="text-navyBlue">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
              <a
                href="#"
                className="text-navyBlue font-semibold text-lg hover:text-blue transition-colors"
              >
                Pricing
              </a>
            </div>
          </nav>
          <div className="flex justify-end items-center w-1/3">
            <Image
              src="/icons/Search.svg"
              alt="Search"
              width={48}
              height={48}
              className="h-12 w-12 mr-1 cursor-pointer"
            />
            <a
              className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold text-base sm:text-[22px] overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
              href="/try-for-free"
            >
              Try for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
