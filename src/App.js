import Head from "./components/HeadComponent/Head";
import Main from "./components/MainComponent/Main";
import Footer from "./components/FootComponent/Footer";
import About from "./components/AboutComponent/About";

function App() {
  return (
    <div className="app">
      <div className="container">
          <div className="panel">
            <Head />
            <Main />
              {/*<About />*/}
              <Footer />
          </div>
      </div>
    </div>
  );
}

export default App;
