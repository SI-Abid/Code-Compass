import { collection, getFirestore } from "firebase/firestore";
import { app } from "../../config/firebase";

export const firestore = getFirestore(app);


export const user = collection(firestore, "users");``