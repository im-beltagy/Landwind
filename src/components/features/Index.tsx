import feature1 from "/src/assets/feature-1.png";
import feature2 from "/src/assets/feature-2.png";

const listItemIcon = (
  <svg
    className="h-5 w-5 flex-shrink-0 text-violet-500 dark:text-violet-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

interface propsType {
  title: string;
  introcution: string;
  points: string[];
  footer: string;
  img: string;
  reverse?: boolean;
}

const Section = (props: propsType) => {
  return (
    <div className="custom-container items-center lg:grid lg:grid-cols-2 lg:gap-12">
      {/* Text Col */}
      <div className={props.reverse ? "order-1" : undefined}>
        {/* title */}
        <h2>{props.title}</h2>
        {/* introcution */}
        <p className="text-natural mb-7">{props.introcution}</p>
        {/* hr */}
        <hr />
        {/* points */}
        <ul className="text-primary text-primary my-7 grid gap-3 font-semibold">
          {props.points.map((item) => (
            <li key={item} className="flex items-center gap-3">
              {listItemIcon}
              {item}
            </li>
          ))}
        </ul>
        {/* footer */}
        <p className="text-natural">{props.footer}</p>
      </div>

      {/* Image Col */}
      <div className="hidden lg:block">
        <img src={props.img} alt="cover image" />
      </div>
    </div>
  );
};

const featuresSections = [
  {
    title: "Work with tools you already use",
    introcution:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    points: [
      "Continuous integration and deployment",
      "Development workflow",
      "Knowledge management",
    ],
    footer:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    img: feature1,
  },
  {
    title: "We invest in the world's potential",
    introcution:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    points: [
      "Dynamic reports and dashboards",
      "Templates for everyone",
      "Development workflow",
      "Limitless business automation",
      "Knowledge management",
    ],
    footer:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    img: feature2,
    reverse: true,
  },
];

const Features = () => {
  return (
    <section className="bg-second section-padding [&>*:not(:first-child)]:pt-12 lg:[&>*:not(:first-child)]:pt-24">
      <Section {...featuresSections[0]} />
      <Section {...featuresSections[1]} />
    </section>
  );
};

export default Features;
