import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: ".",
  authDomain: "TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE'",
  projectId: "TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE'",
  storageBucket: "TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE'",
  messagingSenderId: "TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE'",
  appId: "TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE'",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword };
