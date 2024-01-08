// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './style/GlobalStyle';
import Nav from './components/Nav';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GlobalStyle/>
            <Nav/>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
