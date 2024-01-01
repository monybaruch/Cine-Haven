import { Container } from 'react-bootstrap';
import { MainHeader, Footer } from './components/index.js';
function App() {
  return (
    <>
      <MainHeader />
      <main className="py-3">
        <Container>
          <h1>Welcome To CineHaven</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
