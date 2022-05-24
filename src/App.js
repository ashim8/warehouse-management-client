import { Route, Routes } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ProductDetail from './components/ProductDetail/ProductDetail';
import About from './components/About/About';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
          }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/checkout/:id" element={
          // <RequireAuth>
          //   <Checkout></Checkout>
          // </RequireAuth>
          <Checkout></Checkout>
        }></Route> */}
        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path="/items" element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
