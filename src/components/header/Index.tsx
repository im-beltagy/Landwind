import { useState } from "react";
import Actions from "./Actions";
import Brand from "./Brand";
import Links from "./Links";

const Header = () => {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <header className="bg-default fixed w-full">
      <nav className="custom-container flex items-center justify-between py-3">
        <Brand />
        <Links openLinks={openLinks} />
        <Actions openLinks={openLinks} setOpenLinks={setOpenLinks} />
      </nav>
    </header>
  );
};

export default Header;
