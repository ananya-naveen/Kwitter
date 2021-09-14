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
//YOUR FIREBASE LINKS

User_name=localStorage.getItem("UserName");
room_name=localStorage.getItem("RoomName");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: User_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='update_likes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_tag+message_tag+button_tag+span_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function update_likes(message_id){
      console.log("Clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}