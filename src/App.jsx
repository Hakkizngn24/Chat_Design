import {FirstPage} from "./pages/FirstPage.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";
import {Users} from "./pages/Users.jsx";
import {Chat} from "./pages/Chat.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/chat.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style/FirstPage.css"
function App() {


  return (
    <>
      <div className="container">
        <Users />
        <Chat />
      </div>
    </>
  )
}

export default App
