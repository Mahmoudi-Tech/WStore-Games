function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
    get,
    set
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// 🔥 ضع بيانات Firebase هنا
const firebaseConfig = {
  apiKey: "AIzaSyA8zbwD7QNk-GeNA4x-MWKLuLhcrV8OtgI",
  authDomain: "wstore-games-site.firebaseapp.com",
  databaseURL: "https://wstore-games-site-default-rtdb.firebaseio.com",
  projectId: "wstore-games-site",
  storageBucket: "wstore-games-site.firebasestorage.app",
  messagingSenderId: "422122681134",
  appId: "1:422122681134:web:0036b85a274996c49000bf",
//  measurementId: "G-EW3CKE4M6L"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const counterRef = ref(db,"downloads");

onValue(counterRef,(snapshot)=>{
    document.getElementById("count").innerText =
    snapshot.val() || 0;
});

window.downloadApp = async function(){

    const snap = await get(counterRef);

    const current =
    snap.val() || 0;

    await set(counterRef,current + 1);

    window.location.href =    "https://github.com/Mahmoudi-Tech/WStore-Games/releases/download/WStore-Games/WStore.Games.apk";
}