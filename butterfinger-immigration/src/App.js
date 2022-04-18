import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header/Header'
import Home from './components/PAGES/Home/Home/Home';
import About from './components/PAGES/About/About';
import ServiceDetail from './components/PAGES/ServiceDetail/ServiceDetail';
import Login from './components/PAGES/Login/Login/Login';
import Blogs from './components/PAGES/Blogs/Blogs';
import Register from './components/PAGES/Register/Register';
import RequireAuth from './components/PAGES/Login/RequireAuth/RequireAuth';
import Checkout from './components/PAGES/Checkout/Checkout/Checkout';
import NotFound from './components/PAGES/NotFound/NotFound';
import Footer from './components/common/Footer/Footer';



function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/service/:serviceId"
                    element={<ServiceDetail></ServiceDetail>}
                ></Route>
                <Route path="/blog" element={<Blogs></Blogs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>

                {/* <Route path='/' element={}></Route>
             <Route path="*" element={<NotFound></NotFound>}></Route>*/}
             <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer> </Footer>

        </div>
    );
}

export default App;
