document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      location.replace("Form.html");
    }
  });
  
  const auth = firebase.auth();
  const database = firebase.database();
  
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
  
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
  
  function forgotPass() {
    const email = document.getElementById("email").value;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        document.getElementById("error").innerHTML =
          "Reset link sent to your email id";
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
  
  // Check if user session exists on page load
  window.onload = function () {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      location.replace("index.html");
    }
  };
  