import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Apple-logo.png" width={80} height={80} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/testing"><a>Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;