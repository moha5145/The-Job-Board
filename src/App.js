import "./reset.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Jobs />

      <Footer />
    </div>
  );
}

export default App;
