const Header = ({ hideSearch }) => (
  <header className="bg-slate-800 p-2 mb-2 w-full h-12 border-b-2 border-gray-400">
    <div className="flex justify-between max-w-screen-sm mx-auto">
      <button className="h-8 bg-slate-700 text-lg pr-2 pt-1 rounded-md hover:bg-slate-600 block flex-shrink-0">
        <a
          href="https://github.com/MattYackel/cprg306-project"
          target="_blank"
          className="flex"
        >
          <img src="/images/GitHub_Logo.png" alt=" " className="h-6 px-1" />
          <p className="pl-1 text-white">GitHub</p>
        </a>
      </button>

      <h1 className="min-w-72 text-3xl text-center text-white font-bold">
        WoW Classic Armory
      </h1>
      <button
        className="flex h-8 bg-slate-700 text-lg pr-2 pt-1 rounded-md hover:bg-slate-600 block flex-shrink-0"
        onClick={hideSearch}
      >
        <img
          src="/images/Search_Icon.png"
          alt="Search"
          className="h-6 px-2 pt-1"
        />
        <p className="text-white">Search</p>
      </button>
    </div>
  </header>
);
export default Header;
