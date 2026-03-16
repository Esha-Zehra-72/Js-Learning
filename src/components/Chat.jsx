import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import "./Chat.css";
const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const messageRef = collection(db, "messages");
  const [recMessages, setRecMessages] = useState([]);
  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
      console.log("New Messages");
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      console.log("messages = ", messages);
      setRecMessages(messages);
    });

    return () => unsubscribe();
  }, [room]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message = ", message);
    if (!auth.currentUser) return;

    await addDoc(messageRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setMessage("");
  };
  return (
    <div className="chat-container">
      <div>Chat</div>
      <div className="messages">
        {recMessages.map((msg) => {
          const sender =
            msg.user === auth.currentUser.displayName ? "me" : "other";

          return (
            <div
              key={msg.id}
              className={`message ${sender}`} // add CSS class based on sender
            >
              {" "}
              <span className="sender-name">
                {sender === "me" ? "You" : msg.user}
              </span>
              <p>{msg.text}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
