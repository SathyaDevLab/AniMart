import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFcS-RGRaOErYqA_1OaRJxgpfumR--fkw",
  authDomain: "animart-5912a.firebaseapp.com",
  projectId: "animart-5912a",
  storageBucket: "animart-5912a.appspot.com",
  messagingSenderId: "30530862822",
  appId: "1:30530862822:web:0dec712ec73f89472b4527",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
