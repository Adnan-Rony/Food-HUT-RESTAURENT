
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASEE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASEE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASEE_storageBucket,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASEE_messagingSenderId,
  appId:process.env.NEXT_PUBLIC_FIREBASEE_appId,
  measurementId:process.env.NEXT_PUBLIC_FIREBASEE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);