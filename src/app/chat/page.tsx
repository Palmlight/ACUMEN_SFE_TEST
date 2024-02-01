import React from "react";
import ChatDetails from "./_components/ChatDetails";
import ChatTable from "./_components/ChatTable";

const Chat = () => {
  return (
    <div className="mt-6 mx-auto max-w-[950px] h-full">
      <ChatDetails />
      <ChatTable />
    </div>
  );
};

export default Chat;
