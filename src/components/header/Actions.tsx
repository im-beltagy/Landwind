import { Dispatch, SetStateAction } from "react";
import { useTheme } from "../../store/themeToggler.ts";

interface PropsType {
  openLinks: boolean;
  setOpenLinks: Dispatch<SetStateAction<boolean>>;
}

const Actions = ({ openLinks, setOpenLinks }: PropsType) => {
  const { toggle: toggleTheme } = useTheme();

  const toggleOpenLinks = () => {
    setOpenLinks((prev: boolean) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Link Button */}
      <a href="#" className="btn-primary lg:me-0">
        Download
      </a>

      {/* Theme Toggler */}
      <button
        className="icon-btn"
        onClick={toggleTheme}
        aria-label="toggle theme"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
        </svg>
      </button>

      {/* Mobile Nav Toggler */}
      <button
        className="icon-btn lg:hidden"
        onClick={toggleOpenLinks}
        aria-label="toggle navigation"
        aria-controls="#navigation"
        aria-expanded={openLinks}
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Actions;
