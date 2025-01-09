import './App.css'
// import Default from './components/Default'
import Header from './components/Header'
import Body from './components/Home/Body'
import Footer from './components/Home/Footer'
import Logo from './components/Home/Logo'

const App = () => {

  return (
    <>
      <Header/>
      {/* <Default/> */}
      <Logo/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
