import React from 'react';
import { ChatList } from '../components/messaging/chat-list/ChatList';
import { ChatWindow } from '../components/messaging/chat-window/ChatWindow';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';

export const Messages = () => {
  const [activeChat, setActiveChat] = React.useState<string | null>(null);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        notifications={[]}
        userName="David Chen"
        userImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar userType="developer" />
        <div className="flex flex-1 overflow-hidden">
          <ChatList 
            activeChat={activeChat}
            onChatSelect={setActiveChat}
            className="w-80 border-r border-gray-200"
          />
          {activeChat ? (
            <ChatWindow chatId={activeChat} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};