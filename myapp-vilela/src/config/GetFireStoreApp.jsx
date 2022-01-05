import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLKAL9r8f5M2oZf9am4MqGelnru3nRpKs",
  authDomain: "myapp-vilela.firebaseapp.com",
  projectId: "myapp-vilela",
  storageBucket: "myapp-vilela.appspot.com",
  messagingSenderId: "895601663377",
  appId: "1:895601663377:web:48c26f78126651cecc4e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const GetFireStoreApp = () => {
return app 
}
