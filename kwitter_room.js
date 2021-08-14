
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNv9d7xNZEBIciKgr49dxkFJAKbPaGu34",
    authDomain: "chat-room-fb936.firebaseapp.com",
    databaseURL: "https://chat-room-fb936-default-rtdb.firebaseio.com",
    projectId: "chat-room-fb936",
    storageBucket: "chat-room-fb936.appspot.com",
    messagingSenderId: "228069915907",
    appId: "1:228069915907:web:e286c721c12cd0f1ba3d36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("roomname", room_name);

window.location = "kwitter_room.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
