import Back2Top from "./components/Back2Top";
import Artists from "./sections/Artists";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Paintings from "./sections/Paintings";
import Reviews from "./sections/Reviews";

const App = () => {
  return (
    <main className='bg-my-dark min-h-screen overflow-hidden'>
      <Navbar />
      <Back2Top />
      <Hero />
      <Paintings />
      <Artists />
      <ContactUs />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;
