importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBuWcUaYo9eah5mehCQ0h8bBnkE_251NKY",
  authDomain: "virtualblocks-b7a52.firebaseapp.com",
  databaseURL: "https://virtualblocks-b7a52-default-rtdb.firebaseio.com",
  projectId: "virtualblocks-b7a52",
  storageBucket: "virtualblocks-b7a52.firebasestorage.app",
  messagingSenderId: "490618182453",
  appId: "1:490618182453:web:93385819c7ff08537d8a7c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/favicon.png' // Cambia según tu logo
  });
});
