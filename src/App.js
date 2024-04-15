import './App.css';
import Login from './auth/Login';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MainPage from './components/MainPage';
function App() {
  const token = localStorage.getItem('token');
  console.log(token)
  return (
      <Box >
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/homepage' element={ token && <MainPage/>}></Route>
          </Routes>
        </Router>
      </Box>
  );
}

export default App;
