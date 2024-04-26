const trueIcon = (
  <svg
    className="w-5 text-green-500 dark:text-green-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const falseIcon = (
  <svg
    className="w-5 text-rose-700 dark:text-rose-500"
    fill="currentColor"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
  </svg>
);

interface CardProps {
  title: string;
  introduction: string;
  price: number;
  features: {
    individual: boolean;
    noSetup: boolean;
    teamSize: string;
    support: string;
    freeUpdates: string;
  };
}

const Card = (props: CardProps) => {
  return (
    <div className="dark:bg-gray gap-4 rounded-lg border p-6 shadow dark:border-gray-600 dark:bg-gray-800 xl:p-8">
      <h3 className="pb-4 text-center font-semibold">{props.title}</h3>
      <p className="text-natural mb-8 text-center">{props.introduction}</p>

      {/* Price */}
      <span className="text-natural block text-center">
        <b className="text-primary text-5xl font-black">${props.price}</b>{" "}
        /month
      </span>

      {/* Features */}
      <ul className="text-primary my-8 grid gap-3.5 *:flex *:items-center *:gap-4">
        <li>
          {props.features.individual ? trueIcon : falseIcon}
          Individual configuration
        </li>
        <li>
          {props.features.noSetup ? trueIcon : falseIcon}
          No setup, or hidden fees
        </li>
        <li>
          {trueIcon}
          <span>
            Team size:{" "}
            <b className="font-semibold">{props.features.teamSize}</b>
          </span>
        </li>
        <li>
          {trueIcon}
          <span>
            Premium support:{" "}
            <b className="font-semibold">{props.features.support}</b>
          </span>
        </li>
        <li>
          {trueIcon}
          <span>
            Free updates:{" "}
            <b className="font-semibold">{props.features.freeUpdates}</b>
          </span>
        </li>
      </ul>

      {/* Action */}
      <a className="btn-primary block py-3" href="#">
        Get started
      </a>
    </div>
  );
};

const cards = [
  {
    title: "Starter",
    introduction: "Best option for personal use & for your next project.",
    price: 29,
    features: {
      individual: false,
      noSetup: false,
      teamSize: "1 developer",
      support: "6 months",
      freeUpdates: "6 months",
    },
  },
  {
    title: "Company",
    introduction: "Relevant for multiple users, extended & premium support.",
    price: 99,
    features: {
      individual: false,
      noSetup: true,
      teamSize: "10 developers",
      support: "24 months",
      freeUpdates: "24 months",
    },
  },
  {
    title: "Enterprise",
    introduction:
      "Best for large scale uses and extended redistribution rights.",
    price: 499,
    features: {
      individual: true,
      noSetup: true,
      teamSize: "100+ developers",
      support: "36 months",
      freeUpdates: "36 months",
    },
  },
];

const Pricing = () => {
  return (
    <section className="section-padding">
      <div className="custom-container">
        {/* Headding */}
        <div className="mx-auto max-w-screen-md text-center">
          <h2>Designed for business teams like yours</h2>
          <p className="text-natural sm:text-xl">
            Here at Landwind we" focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid justify-center gap-8 lg:grid-cols-3 xl:gap-10">
          {cards.map((item) => (
            <Card {...item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
