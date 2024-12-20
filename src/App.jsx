import './App.css'
import Header from './components/Header/Header'
import Advantages from './components/Advantages/Advantages'
import Catalog from './components/Catalog/Catalog'
import Reviews from './components/Reviews/Reviews'
import Contacts from './components/Contacts/Contacts'
import Bunner from './components/Bunner/Bunner'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <Header />
      <Bunner />
      <Advantages />
      <Catalog />
      <Reviews />
      <Contacts />
      <Footer/>
    </>
  )
}

export default App
