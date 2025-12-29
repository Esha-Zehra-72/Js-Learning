import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const ref = useRef();
  if (!isAuth) {
    return <Signup isAuth={setIsAuth} />;
  }

  return (
    <>
      <h1>Hello Firebase</h1>
      <div>
        {room ? (
          <Chat />
        ) : (
          <div>
            <p>Enter room name to join chat</p>
            <input type="text" ref={ref} />
            <button onClick={() => setRoom(ref.current.value)}>
              Join Room
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
