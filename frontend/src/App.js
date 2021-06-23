import { Container } from 'react-bootstrap'
import './App.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import HomeScreeen from './screens/HomeScreen'

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <h1>Amazon Clone</h1>
          <HomeScreeen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App;
