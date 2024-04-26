import Copywrite from "./Copywrite";
import Pagination from "./Pagination";

const Footer = () => {
  return (
    <footer className="bg-default">
      <Pagination />
      <div className="custom-container">
        <hr />
      </div>
      <Copywrite />
    </footer>
  );
};

export default Footer;
