
import './App.css'
import Footer from './components/footer/Footer'
import NavbarComponent from './components/navbar/Navbar'
import ListRoutes from './routes/index'

function App() {

  return (
    <div className="App">
    <NavbarComponent />
    <ListRoutes /> 
    <Footer />  
    </div>
  )
}

export default App
