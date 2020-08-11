//DOM queries
const chatList = document.querySelector('.chat-list');

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'Oscar');

//get chats & render
chatroom.getChats(data => chatUI.render(data));