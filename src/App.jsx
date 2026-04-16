import './App.css';
import Header from './components/Header';
import { Button, Container } from './styles/Header.styled';

function App() {
  return (
    <Container maxWidth="lg">
      <Header title="asdasd" description="asdasd" />
      <Button textSize="md">Click me</Button>
    </Container>
  );
}

export default App;
