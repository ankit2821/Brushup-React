import "./Notification.css";
export const Notification = ({ message }) => {
  if (message.text === null) return null;
  return <div className={`text ${message.type}`}>{message.text}</div>;
};
