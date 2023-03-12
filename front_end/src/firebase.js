import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwOraY6vhR_3448Abx8uLVWDkXBaUvmtc",
  authDomain: "video-37a3b.firebaseapp.com",
  projectId: "video-37a3b",
  storageBucket: "video-37a3b.appspot.com",
  messagingSenderId: "221027978861",
  appId: "1:221027978861:web:7f3cd39703827725e9b964",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
