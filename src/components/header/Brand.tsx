import logo from "/src/assets/logo.svg";

const Brand = () => {
  return (
    <a className="brand flex items-center dark:text-white" href="/">
      <img
        className="me-3 inline-block w-6 sm:w-9"
        src={logo}
        alt="Landwind Logo"
        width="33"
        height="36"
      />
      <span className="xsm:inline-block hidden text-xl font-semibold">
        Landwind
      </span>
    </a>
  );
};

export default Brand;
