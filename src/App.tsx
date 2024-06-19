import Header from "./components/header/Header";
import Boards from "./pages/boards/Boards";

function App() {
  return (
    <div className="w-screen min-h-screen md:flex items-center justify-center md:bg-[#C8D2D1]">
      <div className="w-full md:w-[600px] md:h-[90vh] bg-background md:shadow-md">
        <Header />
        <Boards />
      </div>
    </div>
  );
}

export default App;
