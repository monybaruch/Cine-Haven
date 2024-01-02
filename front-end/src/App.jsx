import { Container } from 'react-bootstrap';
import { MainHeader, Footer } from './components/index.js';
import HomePage from './pages/HomePage.jsx';
function App() {
  return (
    <>
      <MainHeader />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
