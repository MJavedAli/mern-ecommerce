import { Container } from 'react-bootstrap'
import './App.css';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomeScreeen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDetails from './screens/ProductDetails'

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={HomeScreeen} exact />
          <Route path="/product/:id" component={ProductDetails} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
