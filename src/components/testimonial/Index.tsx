const quoteIcon = (
  <svg viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
      fill="currentColor"
    ></path>
  </svg>
);

const Testimonial = () => {
  return (
    <section className="bg-second">
      <blockquote className="section-padding mx-auto max-w-screen-md px-4">
        {/* icon */}
        <div className="mx-auto w-11 text-gray-400 dark:text-gray-600">
          {quoteIcon}
        </div>
        <q className="text-primary mb-6 mt-3 block text-center text-xl font-medium md:text-2xl">
          Landwind is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </q>
        <footer className="mx-auto flex w-fit items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
            className="rounded-full"
            width="28px"
            height="28px"
          />
          <cite className="text-primary mx-2 border-e-2 border-current pe-2 font-medium not-italic leading-5">
            Micheal Gough
          </cite>
          <cite className="text-natural text-sm font-light not-italic">
            CEO at Google
          </cite>
        </footer>
      </blockquote>
    </section>
  );
};

export default Testimonial;
