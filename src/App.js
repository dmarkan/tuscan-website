import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import characters from "./characters";
import Entry from "./components/Entry";
import Download from "./components/Download";
import Footer from "./components/Footer";

function createEntry(entry) {
  return (
    <Entry
    key={entry.id}
    img={entry.imgSrc}
    name={entry.name}
    race={entry.race}
    location={entry.location}
    occupation={entry.occupation}
    />
  )
}

function App() {
  return (
    <div className="App">
<Navbar />
<Carousel />
<About />
<h1 id="characters" class="text-center">Characters</h1>
<div class="text-center">
{characters.map(createEntry)}
<Download />
<Footer />
</div>
    </div>
  );
}

export default App;
