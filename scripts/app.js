//class instances
const chatroom = new Chatroom('general', 'Oscar');

//get chats and render
chatroom.getChats(data => {
    console.log(data);
  });