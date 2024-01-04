import { useEffect } from "react";
import Nav from "./Components/Nav";
// import ProdDetail from "./Components/ProdDetail"
import { BiSun, BiMoon } from "react-icons/bi";

function App() {

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode')
    if (isDarkMode) {
      window.document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"))
  };

  return (
    <div className="dark:bg-night">
      <div className="p-10 xl:px-24">
        <Nav />
        {/* <ProdDetail /> */}
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 text-white bg-night-50 px-4 py-2 rounded-full dark:text-night-50 dark:bg-white">
        <BiSun className="hidden dark:block" />
        <BiMoon className="dark:hidden" />
      </button>
    </div>
  );
}

export default App;
