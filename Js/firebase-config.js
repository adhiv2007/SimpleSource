//code for firebase configuration 

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAL35nkYMCPnXDRf-Gup0vv1lh7LMxRff4",
  authDomain: "simplesource-fba57.firebaseapp.com",
  projectId: "simplesource-fba57",
  storageBucket: "simplesource-fba57.appspot.com",
  messagingSenderId: "65700624099",
  appId: "1:65700624099:web:12a3dfaadf5e288df477d6",
  measurementId: "G-XQPF7XTVCM"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

