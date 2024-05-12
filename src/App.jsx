import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Check out our products</h2>
          <ul>
            <CoreConcept
              title="components"
              description="description1"
              image="src/assets/pngegg.png"
            />
            <CoreConcept
              title="components"
              description="description1"
              image="src/assets/1212.png"
            />
            <CoreConcept
              title="components"
              description="description1"
              image="src/assets/pngegg.png"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
