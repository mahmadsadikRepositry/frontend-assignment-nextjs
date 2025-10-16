import { FooterLinks } from './FooterLinks.constants';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-[#16153a] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="text-center">
                    <p className="text-lg lg:text-xl font-semibold">Have questions? Our team is here to help. Call <span className="text-white">631-400-8888</span></p>
                    <p className="text-sm text-teal-300 mt-2">MONDAY TO FRIDAY FROM 9 AM TO 7 PM EST.</p>
                </div>

                <hr className="my-8 border-t border-slate-700" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {FooterLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                {Object.entries(section.links).map(([linkText, linkUrl]) => (
                                    <li key={linkText}>
                                        {linkUrl.startsWith('/') ? (
                                            <Link href={linkUrl} className="hover:text-white">
                                                {linkText}
                                            </Link>
                                        ) : (
                                            <a href={linkUrl} className="hover:text-white" rel="noopener noreferrer">
                                                {linkText}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="my-8 border-t border-slate-700" />

                <div className="text-center py-6 text-sm text-slate-400">
                    © 2024 ANSWERING LEGAL · ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
};