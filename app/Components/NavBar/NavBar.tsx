import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavBar() {
  return (
    <header className="bg-offWhite w-full border-b">
      <div className="flex flex-col pt-8">
        <div className="flex items-center justify-end pt-1 pr-4 gap-x-2">
          <a href="/help-center" className="text-lightGrey text-base underline">Support</a>
          <a href="tel:6316869700" className="text-blue font-semibold text-base">(631) 686-9700</a>
        </div>
  <div className="flex  items-center w-full">
          <div className="flex items-center justify-start w-1/3 ">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/Answering LegalTM_Blue.png" alt="Answering Legal Logo" className="h-16 w-auto" />
            </a>
          </div>  
          <nav className="w-1/3 flex justify-center items-center gap-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1">
                <a href="#" className="text-navyBlue font-semibold text-lg">Products</a>
                <span className="text-navyBlue relative top-1"><FontAwesomeIcon icon={faChevronDown} /></span>  </div>
              <div className="flex items-center gap-1">
                <a href="#" className="text-navyBlue font-semibold text-lg">About</a>
                <span className="text-navyBlue"><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              <div className="flex items-center gap-1">
                <a href="#" className="text-navyBlue font-semibold text-lg">Resources</a>
                <span className="text-navyBlue"><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              <a href="#" className="text-navyBlue font-semibold text-lg">Pricing</a>
            </div>
          </nav>
          <div className="flex justify-end items-center w-1/3">
            <img src="/icons/Search.svg" alt="Search" className="h-12 w-12 mr-1 cursor-pointer" />
            <button className="bg-blue text-red px-4 py-2 rounded-md hover:bg-darkBlue transition-colors duration-300">
              Try For Free
            </button>
          </div>  
        </div> 
     
         </div>
    
    </header>
  );
}