import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app)

export async function retrieveData(collectionName:string) {
    const snapshot = await getDocs(collection(firestore,collectionName));

    const data = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
    }))

    return data
}

export async function signUp(
    userData: {
        email: string;
        fullname: string;
        password: string;
    },
    callback: Function

) {
    const q = query(
        collection(firestore,"users"),
        where("email","==",userData.email)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
    }));

    if (data) {
        callback({status: false, message: "Email already exists"});
    }else {
        callback({status: true, message: "Register success"})
    }
}