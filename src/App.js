// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './style/GlobalStyle';
import { AuthcontextProvider } from './context/AuthContext';
import Nav from './components/Nav';

const queryClient = new QueryClient();

function App() {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>
          <Nav/>
      </QueryClientProvider>
    </>
  );
}

export default App;
