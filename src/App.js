import EntrySection from "./components/EntrySection";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <EntrySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
