import { Route, Routes} from 'react-router-dom';
import './App.css';
import { PageLayout } from './components/PageLayout/PageLayout';
import { UserContextWrapper } from './contexts/UserContextWrapper';
import { Expenses } from './pages/Expenses/Expenses';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <UserContextWrapper>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Expenses />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContextWrapper>
  );
}

export default App;
