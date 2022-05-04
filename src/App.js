import './App.css';
import Profile from './components/Profile';
import Lbutton from './components/Lbutton';
import LogoutB from './components/LogoutB';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { isLoading } = useAuth0;
  if (isLoading) return <div>LOADING...</div>;

  return (
    <div>
      <div className="button-div">
        <Lbutton />

        <LogoutB />
      </div>
      <Profile />
    </div>
  );
}

export default App;
