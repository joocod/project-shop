// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './style/GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
         <GlobalStyle/>
      </QueryClientProvider>
    </>
  );
}

export default App;
