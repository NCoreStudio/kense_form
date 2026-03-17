// Firebase 設定
const firebaseConfig = {
  apiKey:            "AIzaSyB0-QQ2mUPxrWpLT3QYNgZ74k0mSiSF5nw",
  authDomain:        "kense-form.firebaseapp.com",
  projectId:         "kense-form",
  storageBucket:     "kense-form.firebasestorage.app",
  messagingSenderId: "203219638396",
  appId:             "1:203219638396:web:5465a7a384f36824b351f9",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
