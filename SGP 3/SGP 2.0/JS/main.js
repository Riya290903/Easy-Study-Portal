// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDuJiM8w6JDZdqAGgWoRc7Oyjr2vT85c_o",
    authDomain: "login-sgp-2-ba6b9.firebaseapp.com",
    projectId: "login-sgp-2-ba6b9",
    storageBucket: "login-sgp-2-ba6b9.appspot.com",
    messagingSenderId: "720133208187",
    appId: "1:720133208187:web:6aeed4dd8dbd0a38db0ade" 
});
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          //document.write("You are Signed Up")
          //document.links("/hw.html");
          location.href="/Html/hw.html";
          console.log(result)
          // ...
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          // ..
      });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          //document.write("You are Signed In")
         // alert('redirect');
          location.href="/Html/hw.html";
          console.log(result)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}