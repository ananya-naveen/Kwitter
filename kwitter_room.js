var firebaseConfig = {
      apiKey: "AIzaSyD-ab7vfgzxIL3-2ooQveKcBN5knSWzgog",
      authDomain: "kwitter-8db48.firebaseapp.com",
      databaseURL: "https://kwitter-8db48-default-rtdb.firebaseio.com",
      projectId: "kwitter-8db48",
      storageBucket: "kwitter-8db48.appspot.com",
      messagingSenderId: "204141155862",
      appId: "1:204141155862:web:a0a1f8b121690ef9404737",
      measurementId: "G-0PN81L9VMW"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML="Welcome "+username+"!!";
function addRoom(){
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "Adding Room"
      });
      localStorage.setItem("RoomName", Room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("RoomName", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}