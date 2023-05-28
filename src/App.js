import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import TabBar from "./components/TabBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <TabBar />
        <EntryList />
      </main>
      <Footer />
    </>
  );
}

export default App;
