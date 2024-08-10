import Header from "./components/header/Header";
import MyEvents from "./pages/my-events/MyEvents";

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-8">
        <Header />
        <div className="w-full p-4">
          <MyEvents/>
        </div>
      </div>
    </div>
  );
}

export default App;
