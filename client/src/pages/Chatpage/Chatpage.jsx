import { ChatEngine } from "react-chat-engine";

// import ChatFeed from "./components/ChatFeed";
import LoginForm from "../../compo/LoginForm";
import "./Chatpage.css";
import ChatFeed from "../../compo/ChatFeed";

// const projectID = "4d673da1-3506-44f9-a3a9-e2a5a9c9f1d5";
const projectID = "5f1c7d63-1310-4ed8-a91e-c0103641c0a3";

const Chatpage = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
      // userName = 'kulkarnisneha9321@gmail.com'
      // userSecret = 'Chatapp@4'
    />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default Chatpage;
