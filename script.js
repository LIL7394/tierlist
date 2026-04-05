// 🔹 Step 1: Add your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  databaseURL: "https://YOUR_APP.firebaseio.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// 🔹 Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 🔹 Save function
function saveTierList() {
  const tiers = {
    S: document.getElementById("s-tier").value,
    A: document.getElementById("a-tier").value,
    B: document.getElementById("b-tier").value
  };
  db.ref('tierlists/user1').set(tiers);
  alert("Saved!");
}

// 🔹 Load function
function loadTierList() {
  db.ref('tierlists/user1').once('value').then((snapshot) => {
    const data = snapshot.val();
    if (data) {
      document.getElementById("s-tier").value = data.S;
      document.getElementById("a-tier").value = data.A;
      document.getElementById("b-tier").value = data.B;
    }
  });
}
