import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyD6XrGbtwpNBOybOGjNY6eNci26qDGuz6I',
  authDomain: 'fiufit-73a11.firebaseapp.com',
  databaseURL: 'https://fiufit-18294.firebaseio.com/',
  projectId: 'fiufit-73a11',
  storageBucket: 'fiufit-73a11.appspot.com',
  messagingSenderId: '587864716594',
  appId: '1:587864716594:web:30d86e78e5c21d366f132b',
  measurementId: 'G-TCBPRSHX8M'
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

