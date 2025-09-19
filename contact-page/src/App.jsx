import Contact from "./components/Contact";
import whiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";

export default function App() {
  return(
    <div className="contacts">
      <Contact 
        img={whiskerson}
        name="Mr. Whiskerson"
        phoneNumber="(212) 555-1234"
        email="mr.whiskerson@catnap.com"
      />
      <Contact 
        img={fluffykins}
        name="Fluffykins"
        phoneNumber="(212) 555-1234"
        email="fluff@meow.com"
      />
      <Contact 
        img={felix}
        name="felix"
        phoneNumber="(212) 555-7852"
        email="felix@meow.com"
      />
      <Contact 
        img={pumpkin}
        name="pumpkin"
        phoneNumber="(212) 555-5498"
        email="pumpkin@meow.com"
      />
    </div>
  )
}