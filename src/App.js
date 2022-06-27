import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Order from "./components/Order";
import Insta from "./components/Insta";
import MailingList from "./components/MailingList";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import "./styles/components.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <Menu />
      <Info />
      <Order />
      <Insta />
      <MailingList />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
