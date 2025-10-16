import { FooterLinks } from "./FooterLinks.constants";

export const Footer = () => {
    return (
        <footer className="border-t border-gray-300 bg-blue-100">
            <div className="flex flex-col items-center text-center bg-blue">
                <span>
                    Have questions? Our team is here to help. Call 631-400-8888
                </span>
                <span> 
                    Monday to Friday from 9 am to 7 pm EST.
                </span>
            </div>
            <div className="px-20">
                <div className="flex justify-between w-full border-t border-b border-gray-300 px-0">
                    {
                        FooterLinks.map((section) => (
                            <div key={section.title} className="py-4">
                                <h3 className="font-semibold mb-2">{section.title}</h3>
                                <ul>
                                    {Object.entries(section.links).map(([linkText, linkUrl]) => (
                                        <li key={linkText} className="mb-1">
                                            <a href={linkUrl} className="text-blue-600 hover:underline">{linkText}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center mt-4 pb-12">
                <span>
                    © 2024 Answering Legal · All Rights Reserved
                </span>
            </div>
        </footer>
    );
};