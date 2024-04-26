import "./input.css";
import Header from "./components/header/Index.tsx";
import { useTheme } from "./store/themeToggler.ts";
import Hero from "./components/hero/Index.tsx";
import Features from "./components/features/Index.tsx";
import Trust from "./components/trust/Index.tsx";
import Testimonial from "./components/testimonial/Index.tsx";
import Pricing from "./components/pricing/Index.tsx";
import Faq from "./components/faq/Index.tsx";
import C2a from "./components/call2action/Index.tsx";
import Footer from "./components/footer/Index.tsx";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="bg-default min-h-svh">
        <Header />
        <Hero />
        <Features />
        <Trust />
        <Testimonial />
        <Pricing />
        <Faq />
        <C2a />
        <Footer />
      </div>
    </div>
  );
}

export default App;
