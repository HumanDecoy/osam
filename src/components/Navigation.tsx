// components/Navigation.tsx
export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-6 py-4">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#story">Story</NavItem>
          <NavItem href="#schema">Schema</NavItem>
          <NavItem href="#travel">Travel</NavItem>
          <NavItem href="#accommodations">Accommodations</NavItem>
          <NavItem href="#qa">Q & A</NavItem>
          <NavItem href="#rsvp">RSVP</NavItem>
        </ul>
      </div>
    </nav>
  );
};

// NavItem component
interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-700 hover:text-rose-500 transition-colors duration-200 font-light text-lg"
      >
        {children}
      </a>
    </li>
  );
};
