import "./conversation.css";

export default function Converstion() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img src={`${PF}persons/1.jpeg`} alt="" className="conversationImg" />
      <span className="conversationName">Rohan</span>
    </div>
  );
}
