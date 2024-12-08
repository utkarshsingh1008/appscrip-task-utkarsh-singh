
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import ProductList from "./components/product";
export default function Home() {
  return (
    <div >
      <Navbar/>
      <div style={{ display: 'flex', width: '100%' }}>
      <div style={{width:"20%"}}>
        <Sidebar />
      </div>
      <div style={{ flex: '1', padding: '' }}>
        <ProductList />
      </div>
    </div>
     
     <Footer/>
    </div>
  );
}
