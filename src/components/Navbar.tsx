import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const isScrolled = false; // This should be replaced with actual scroll logic

    return (
        <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                    src="/new_fly_logo.svg"
                    alt="ZappaFly Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
                <span className={`text-xl font-bold ${isScrolled ? 'text-iridescent' : 'text-white'}`}>
                    ZappaFly
                </span>
            </Link>
        </div>
    );
};

export default Navbar; 