
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCdCMK1a5tgoe2DgAXDFcD9ZjHDlkXbTK0",
      authDomain: "kwitter-1909f.firebaseapp.com",
      databaseURL: "https://kwitter-1909f.firebaseio.com",
      projectId: "kwitter-1909f",
      storageBucket: "kwitter-1909f.appspot.com",
      messagingSenderId: "633791471377",
      appId: "1:633791471377:web:3160d6fbfb46db3afb76b0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
