
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import ProductList from "./components/main";
export default function Home() {
  return (
    <div >
      <Navbar/>
     <div>
     <Sidebar/>
     <ProductList/>
      </div> 
     
     <Footer/>
    </div>
  );
}
