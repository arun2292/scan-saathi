import React from 'react';
import { Facebook, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-gray-800 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400 text-sm mb-6">
                    &copy; {new Date().getFullYear()} Scan-Saathi. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;