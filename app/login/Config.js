import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkppNWaNUWXqFCtREvmtFWHQ4bmH083ts",
  authDomain: "reviewreflection.firebaseapp.com",
  projectId: "reviewreflection",
  storageBucket: "reviewreflection.appspot.com",
  messagingSenderId: "344718898509",
  appId: "1:344718898509:web:30ed955c140aeb9eb67304",
  measurementId: "G-5KVN52CSEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
