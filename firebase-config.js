import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Dados reais do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_pjYoRVsHvKoIKZ4iPnHhxGDO6vabC0E",
  authDomain: "gerador-de-horarios-bfa7e.firebaseapp.com",
  projectId: "gerador-de-horarios-bfa7e",
  storageBucket: "gerador-de-horarios-bfa7e.firebasestorage.app",
  messagingSenderId: "1080512413421",
  appId: "1:1080512413421:web:a9cb2ab697c67e75b0d6e4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as instâncias para serem usadas nos outros arquivos
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
