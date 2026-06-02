import {
  db,
  ref,
  get,
  onValue
} from "./firebase.js";

const params =
  new URLSearchParams(
    window.location.search
  );

const roomCode =
  params.get("room");

document.getElementById(
  "roomText"
).textContent =
  "ROOM: " + roomCode;

const playersRef =
  ref(
    db,
    "rooms/" +
    roomCode +
    "/players"
  );

onValue(playersRef,(snapshot)=>{

  const players =
    snapshot.val();

  const list =
    document.getElementById(
      "playerList"
    );

  list.innerHTML = "";

  for(let key in players){

    const li =
      document.createElement("li");

    li.textContent =
      "👤 " +
      players[key];

    list.appendChild(li);
  }

});
