import MainForm from "./components/MainForm";
import Container from "./components/UI/Container/Container";
import Header from "./components/UI/Header/header";
import Table from "./components/UI/Table/Table";

function App() {
  return (
    <div className="flex flex-col scroll-smooth">
      <header>
        
      </header>
      <Header
        sections={[
          { title: "Extração", link: "#extract" },
          { title: "Modificação", link: "#modify" },
        ]}
      />

      <section
        id="extract"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <MainForm />
      </section>

      <section
        id="modify"
        className="h-screen flex items-center justify-center bg-gray-600"
      >
        <Table />
      </section>
    </div>
  );
}

export default App;
