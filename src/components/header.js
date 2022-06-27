const navItems = ["Home", "Features", "About"];
const navButtons = ["Sign In", "Sign Up"];

export const Header = () => (
  <header className="flex flex-col sm:flex-row p-10">
    <span className="flex-1 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-50 hover:from-orange-100 hover:to-slate-800">
      NXRVLG
    </span>

    <nav className="flex flex-1 justify-between sm:justify-evenly">
      {navItems.map((navItem, idx) => (
        <span
          key={idx}
          className="block pr-2 lg:px-2 py-2 text-gray-300 hover:text-gray-500 transition duration-150 ease-in-out"
        >
          {navItem}
        </span>
      ))}
    </nav>

    <div className="flex flex-1 justify-between sm:justify-center gap-4">
      {navButtons.map((navButton, idx) => (
        <button
          key={idx}
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-3 rounded-lg transition duration-150 ease-in-out"
        >
          {navButton}
        </button>
      ))}
    </div>
  </header>
);
