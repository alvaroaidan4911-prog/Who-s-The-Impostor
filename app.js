import {
 db,
 ref,
 set,
 get,
 onValue
} from "./firebase.js";

window.createRoom = async function() {

  const name =
    document.getElementById("name").value;

  if(!name){
    alert("Isi nama dulu");
    return;
  }

  const roomCode =
    Math.random()
      .toString(36)
      .substring(2,8)
      .toUpperCase();

  await set(
    ref(db, "rooms/" + roomCode),
    {
      host:name,
      status:"waiting",
      players:{
        player1:name
      }
    }
  );

  alert(
    "Room dibuat: " +
    roomCode
  );
}
loadPlayers(roomCode);

window.joinRoom = async function() {

  const name =
    document.getElementById("name").value;

  const roomCode =
    document.getElementById("roomCode")
    .value
    .toUpperCase();

  if(!name){
    alert("Isi nama dulu");
    return;
  }

  if(!roomCode){
    alert("Masukkan kode room");
    return;
  }

  const roomRef =
    ref(db, "rooms/" + roomCode);

  const snapshot =
    await get(roomRef);

  if(!snapshot.exists()){
    alert("Room tidak ditemukan");
    return;
  }

  const roomData =
    snapshot.val();

  const playerId =
    "player" +
    (Object.keys(roomData.players).length + 1);

  await set(
    ref(
      db,
      "rooms/" +
      roomCode +
      "/players/" +
      playerId
    ),
    name
  );

  alert("Berhasil join room!");
}

function loadPlayers(roomCode){

  const playersRef =
    ref(
      db,
      "rooms/" +
      roomCode +
      "/players"
    );

  onValue(playersRef,(snapshot)=>{

    const list =
      document.getElementById(
        "playerList"
      );

    list.innerHTML = "";

    const players =
      snapshot.val();

    for(let key in players){

      const li =
        document.createElement("li");

      li.textContent =
        players[key];

      list.appendChild(li);
    }

  });

}
