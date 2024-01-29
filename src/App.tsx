import "./App.css";
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";

const firebaseConfig = {
  apiKey: "AIzaSyB8cSUk-IsZvMCIgta_NOH3m89bCJKANbo",
  authDomain: "leetcode-cd0ff.firebaseapp.com",
  projectId: "leetcode-cd0ff",
  storageBucket: "leetcode-cd0ff.appspot.com",
  messagingSenderId: "906223180751",
  appId: "1:906223180751:web:0ae42ccab808d4bde910ba",
  measurementId: "G-4BWH2NMEV6",
};

const app = initializeApp(firebaseConfig);
function App() {
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
