import { Link, useLocation } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();

    const navLink = (path, label) => (
        <Link
            to={path}
            className={`text-sm font-medium transition duration-200 ${location.pathname === path
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
                }`}
        >
            {label}
        </Link>
    );

    return (
        <header className="sticky top-0 z-30 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Wand2 className="text-blue-600 h-6 w-6" />
                        <span className="text-xl font-bold text-gray-800 tracking-tight">
                            Scan-Saathi
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        {navLink('/', 'Home')}
                        {navLink('/upload', 'Upload')}
                        {navLink('/about', 'About')}
                        {navLink('/contact', 'Contact')}
                    </div>
                </div>
            </nav>
        </header>
    );
}