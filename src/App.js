import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import characters from "./characters";
import Entry from "./components/Entry";

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
<h1 class="text-center">CHARACTERS</h1>
{characters.map(createEntry)}
    </div>
  );
}

export default App;
