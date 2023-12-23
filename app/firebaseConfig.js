import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjk8BO10p8Z35LUeFP-zSHjiTqi-OEJuQ",
  authDomain: "gifproject-72750.firebaseapp.com",
  projectId: "gifproject-72750",
  storageBucket: "gifproject-72750.appspot.com",
  messagingSenderId: "518386026545",
  appId: "1:518386026545:web:743b2dd3cc243c2a652d10",
  measurementId: "G-CQSW0E6XZK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};