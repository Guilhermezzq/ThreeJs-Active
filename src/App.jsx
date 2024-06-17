
import Header from "./Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import CorePrinciple from "./components/CorePrincipal";
import Examples from "./components/Examples";








function App() {
  return (
    <> 
      <Header />
      <CorePrinciple />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;