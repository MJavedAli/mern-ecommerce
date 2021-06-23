import { Container } from 'react-bootstrap'
import './App.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Amazon Clone</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App;
