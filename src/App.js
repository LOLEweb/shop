import Head from "./components/HeadComponent/Head";
import Main from "./components/MainComponent/Main";

function App() {
  return (
    <div className="app">
      <div className="container">
          <div className="panel">
            <Head />
            <Main />
          </div>
      </div>
    </div>
  );
}

export default App;
