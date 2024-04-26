const lists = [
  {
    category: "company",
    pages: ["about", "careers", "brand center", "blog"],
  },
  {
    category: "help center",
    pages: ["discord server", "twitter", "facebook", "contact us"],
  },
  {
    category: "legal",
    pages: ["privacy policy", "licensing", "terms"],
  },
  {
    category: "company",
    pages: ["about", "careers", "brand center", "blog"],
  },
  {
    category: "download",
    pages: ["IOS", "Android", "Windows", "MacOS"],
  },
];

const Pagination = () => {
  return (
    <section className="custom-container section-padding">
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {lists.map((item, index) => (
          <div className="" key={index}>
            <dt className="text-primary mb-6 text-sm font-semibold uppercase">
              {item.category}
            </dt>
            <dd className="text-natural capitalize">
              <ul className="grid gap-4">
                {item.pages.map((page) => (
                  <li className="" key={page}>
                    <a href="#" className="hover:underline">
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Pagination;
