const Links = ({ openLinks }: { openLinks: boolean }) => {
  const nonActiveLinks = [
    "Company",
    "Marketplace",
    "Features",
    "Team",
    "Contact",
  ];
  const commonStyles =
    "block cursor-pointer px-3 py-2.5 font-medium text-sm lg:text-base";

  return (
    <div
      id="navigation"
      className={`bg-default absolute left-0 top-full mx-auto w-full p-4 lg:static lg:block lg:w-auto lg:p-0 ${!openLinks ? "hidden" : ""}`}
    >
      <ul className="gap-2 lg:flex">
        <li
          className={
            "rounded bg-violet-700 dark:bg-violet-600  max-lg:text-white lg:bg-transparent lg:text-violet-700 lg:dark:bg-transparent lg:dark:text-white" +
            " " +
            commonStyles
          }
        >
          Home
        </li>
        {nonActiveLinks.map((item, key) => (
          <li key={key}>
            <a
              href="#"
              className={
                "lg:dark:hover:text-bg-violet-600 border-b border-gray-100 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-violet-700 lg:dark:hover:bg-transparent" +
                " " +
                commonStyles
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
