
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import  UserContextProvider  from './contexts/UserContextProvider.jsx'
function App() {
  
  return (
    <UserContextProvider>
      <h1>huga buga</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
