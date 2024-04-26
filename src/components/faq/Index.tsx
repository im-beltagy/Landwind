import { useState } from "react";

const arrowIcon = (
  <svg
    className="w-full"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// style for children elements in answer component
const answersInnerStyles =
  "text-natural [&_a:hover]:underline [&_a]:text-accent [&_p]:text-base [&_p]:font-normal [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-gray-500 [&_ul]:dark:text-gray-400";

const questions = [
  {
    q: "Can I use Landwind in open-source projects?",
    a: (
      <>
        <p>
          Landwind is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p>
          Check out this guide to learn how to <a href="#">get started</a> and
          start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    q: "Is there a Figma file available?",
    a: (
      <>
        <p>
          Landwind is first conceptualized and designed using the Figma
          software, so everything you see in the library has a design equivalent
          in our Figma file.
        </p>
        <p>
          Check out the <a href="#">Figma design system</a> based on the utility
          classes from Tailwind CSS and components from Landwind.
        </p>
      </>
    ),
  },
  {
    q: "What are the differences between Landwind and Tailwind UI?",
    a: (
      <>
        <p>
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p>
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p>Learn more about these technologies:</p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="#">Landwind Pro</a>
          </li>
          <li>
            <a href="#">Tailwind UI</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What about browser support?",
    a: (
      <>
        <p>
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p>
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p>Learn more about these technologies:</p>
        <ul>
          <li>
            <a href="#">Landwind Pro</a>
          </li>
          <li>
            <a href="#">Tailwind UI</a>
          </li>
        </ul>
      </>
    ),
  },
];

const Faq = () => {
  const [openQ, setOpenQ] = useState(-1);

  return (
    <section className="section-padding bg-default !pt-0">
      <h2 className="text-center">Frequently asked questions</h2>

      {/* Question */}
      <div className="mx-auto max-w-screen-md px-4">
        {questions.map((item, index) => {
          const isExpanded = openQ === index;
          const toggleOpen = () =>
            setOpenQ((prev) => (prev === index ? -1 : index));

          return (
            <dl key={index}>
              {/* question */}
              <dt
                className={`border-divider flex items-center justify-between gap-4 border-b py-5 font-bold ${isExpanded ? "text-primary" : "text-natural"}`}
                aria-expanded={isExpanded}
                aria-controls={`answer-${index + 1}`}
                role="button"
                onClick={() => toggleOpen()}
              >
                {item.q}
                <div
                  className={`w-6 transition-[color,transform] duration-500 ${isExpanded ? "rotate-180" : ""}`}
                >
                  {arrowIcon}
                </div>
              </dt>

              {/* answer */}
              <dd
                id={`answer-${index + 1}`}
                className={`grid ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden transition-[grid-template-rows] duration-500`}
              >
                <div className={"min-h-0 " + answersInnerStyles}>
                  <div className="border-divider grid gap-2 border-b py-5">
                    {item.a}
                  </div>
                </div>
              </dd>
            </dl>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
