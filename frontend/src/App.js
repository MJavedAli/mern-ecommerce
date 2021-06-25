import { Container } from 'react-bootstrap'
import './App.css';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomeScreeen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <h1>Electronics</h1>
          <Route path="/" component={HomeScreeen} exact />
          <HomeScreeen />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
