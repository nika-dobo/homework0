import Header from "./Header";
import Main1 from "./Main1";

function App() {
  const footer = <footer>mail , contact , facebook</footer>;

  return (
    <div>
      <Header />
      <Main1 />

      {footer}
    </div>
  );
}

export default App;
