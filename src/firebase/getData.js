import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";

//Authorization module
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//Get data DB
export const db = getFirestore(app);

//Autenticación
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const login = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

/*
// Get a list of cities from your database
async function getUsers(db) {
  const usersCol = collection(db, "Users");
  const userSnapshot = await getDocs(usersCol);
  const userList = citySnapshot.docs.map((doc) => doc.data());
  return userList;
}
*/
