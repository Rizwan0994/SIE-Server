// const express = require('express');
// const http = require('http');
// const mongoose = require('mongoose');
// const cors = require("cors");
// const app = express();
// const dotenv = require("dotenv");
// dotenv.config();

// app.use(express.json());
// app.use(cors());
// const server = http.createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST']
//   }
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const chatSchema = new mongoose.Schema({
//   text: String,
//   chatid: String,
//   receiverId: String,
//   receiverName: String,
//   user: {
//     id: String,
//     name: String,
//   },
//   timestamp: Date,
// });

// const ChatMessage = mongoose.model('ChatMessage', chatSchema);

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });

//   socket.on('chat message', async (message) => {

//     // Store the message in MongoDB
//     const chatMessage = new ChatMessage({
//       receiverName: message.receiverName,
//       receiverId: message.receiverId,
//       text: message.text,
//       chatid: message.chatid,
//       user: {
//         id: message.user.id,
//         name: message.user.name
//       },
//       timestamp: new Date(),
//     });

//     try {
//       await chatMessage.save();
//     } catch (err) {
//       console.error('Error saving chat message to MongoDB', err);
//     }
//     // Emit event to recipient with incoming message
//     socket.to(message.receiverId).emit('receive message', message);
//     io.emit('chat message', message);
//   });
// });

// app.get('/chat-history/:userId', async (req, res) => {
//   try {
//     // Retrieve chat history from MongoDB
//     const chatHistory = await ChatMessage.find({
//       'user.id': req.params.userId,
//     });

//     /*const userMessages = messages.filter(
//     (message) => message.user.id === userId || message.receiverId === userId
//   );
//   res.json(userMessages);
// });*/

//     // Send the chat history as a response
//     res.json(chatHistory);

//   } catch (error) {
//     console.error('Error retrieving chat history', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// server.listen(5001, () => {
//   console.log('Server is running on port 5001');
// });


//...........
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const chatSchema = new mongoose.Schema({
  text: String,
  chatid: String,
  receiverId: String,
  receiverName: String,
  user: {
    id: String,
    name: String,
  },
  timestamp: Date,
});

const ChatMessage = mongoose.model('ChatMessage', chatSchema);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('chat message', async (message) => {

    // Store the message in MongoDB
    const chatMessage = new ChatMessage({
      receiverName: message.receiverName,
      receiverId: message.receiverId,
      text: message.text,
      chatid: message.chatid,
      user: {
        id: message.user.id,
        name: message.user.name
      },
      timestamp: new Date(),
    });

    try {
      await chatMessage.save();
    } catch (err) {
      console.error('Error saving chat message to MongoDB', err);
    }
    socket.to(message.receiverId).emit('receive message', message);

    io.emit('chat message', message);
  });
});


app.get('/chat-history/:userId/:receiverId', async (req, res) => {
  try {
    // Retrieve chat history from MongoDB for both sender and receiver
    const chatHistory = await ChatMessage.find({
      $or: [
        { 'user.id': req.params.userId, 'receiverId': req.params.receiverId },
        { 'user.id': req.params.receiverId, 'receiverId': req.params.userId }
      ]
    });

    // Send the chat history as a response
    res.json(chatHistory);

  } catch (error) {
    console.error('Error retrieving chat history', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


server.listen(5001, () => {
  console.log('Server is running on port 5001');
});
