import { useEffect, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  const [isDC, setIsDC] = useState(false)

  const connectionChecking = () => {
    const conditon = navigator.onLine ? "online" : "offline"
    if(conditon === "online") {
      setInterval(() => {
        fetch("//google.com", {
          mode: "no-cors"
        }) .then(() => setIsDC(false)).catch(( ) => setIsDC(true))
      }, 5000);
      return;
    }
    return setIsDC(false)
  }

  useEffect(() => {
    connectionChecking()
    window.addEventListener('online', connectionChecking())
    window.addEventListener('offline', connectionChecking())
  }, [])

  return isDC ? <h1 style={{"textAlign": "center"}}>KONEKSI KAMU TERPUTUS</h1> : <SearchPokemon />;
}

export default App;
