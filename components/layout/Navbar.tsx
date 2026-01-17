// 1HEADER/NAVBAR
// components/Navbar.tsx
export default function Navbar()
{
  return(
    <nav className="flex items-center justify-between p-5 shadow">
      <h1 className="text-xl font-bold text-blue-600">KYRA MOTORS</h1>
      <ul className="hidden md:flex gap-6">
        <li>Home</li>
        <li>vehicles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Call US
      </button>
    </nav>
  );
}