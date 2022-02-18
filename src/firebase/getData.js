import { app } from "./firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

//Authorization module
import { GoogleAuthProvider, getAuth } from "firebase/auth";

//Get data DB
export const db = getFirestore(app);

//Autenticación
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
