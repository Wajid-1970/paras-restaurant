import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-600 shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Paras Restaurant & Cafe</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-gray-600">Home</Link>
            </li>
            <li>
              <Link href="/restaurant/menu" className="hover:text-gray-600">Menu</Link>
            </li>
            <li>
              <Link href="/restaurant/about" className="hover:text-gray-600">About</Link>
            </li>
            <li>
              <Link href="/restaurant/contact" className="hover:text-gray-600">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Navbar;