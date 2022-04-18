import './App.css';
import Header from './components/common/Header/Header'
import Banner from './components/PAGES/Banner/Banner';
import Home from './components/PAGES/Home/Home/Home';



function App() {
    return (
        <div className="App">
            <h1 className='text-danger'> Hello !! </h1>
            <Header></Header>
            
            <Home></Home>
        </div>
    );
}

export default App;
