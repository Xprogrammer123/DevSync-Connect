import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Archive } from 'lucide-react';
import { ChatListItem } from './ChatListItem';
import { ChatFilter } from './ChatFilter';
import { fadeIn } from '../../animations/variants';

interface ChatListProps {
  activeChat: string | null;
  onChatSelect: (chatId: string) => void;
  className?: string;
}

const mockChats = [
  {
    id: '1',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Hey, hows the project coming along?',
    timestamp: '2 min ago',
    unread: 2,
    pinned: true,
    online: true,
  },
  {
    id: '2',
    name: 'E-commerce Team',
    avatar: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    lastMessage: 'Alex: Updated the wireframes',
    timestamp: '1 hour ago',
    unread: 0,
    pinned: true,
    isGroup: true,
  },
];

export const ChatList = ({ activeChat, onChatSelect, className = '' }: ChatListProps) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={`bg-white flex flex-col ${className}`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
          />
        </div>
        <ChatFilter currentFilter={filter} onFilterChange={setFilter} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {mockChats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            active={chat.id === activeChat}
            onClick={() => onChatSelect(chat.id)}
          />
        ))}
      </div>
    </motion.div>
  );
};