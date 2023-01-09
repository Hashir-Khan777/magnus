import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWhdxFXrHvURJ1mY1WDUrWTLEzHf5pAlE",
  authDomain: "magnusmediahousewebsite-39fb9.firebaseapp.com",
  projectId: "magnusmediahousewebsite-39fb9",
  storageBucket: "magnusmediahousewebsite-39fb9.appspot.com",
  messagingSenderId: "889896306603",
  appId: "1:889896306603:web:bce5c2c2b4e16b4054b4ee",
  measurementId: "G-LM0YW3XWTL",
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

export default app;
