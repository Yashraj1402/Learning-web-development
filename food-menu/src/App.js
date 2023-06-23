import Navbar from "./components/Navbar"
import Foodcard from "./components/Foodcard"
import Biryani from './components/biryani.png'
import Vegbiryani from './components/vegBiryani.jpg'
import Fishtikka from './components/fishTikka.jfif'


function App() {
  return (
    <main>
      <div className="container">
        <Navbar />
        <div className="body">
          <Foodcard image={Biryani} name="Non-Veg Biryani" description="Authentic homemade Non-Veg Biryani" />
          <Foodcard image={Vegbiryani} name="Veg Biryani" description="Authentic homemade Veg Biryani with Soya Chunks" />
          <Foodcard image={Fishtikka} name="Fish Tikka" description="Delicious Fish Tikka" />
        </div>
      </div>
    </main>
  );
}

export default App;
