import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://chat-app-1-l966.onrender.com", "https://chat-app-ruddy-tau.vercel.app"],
    credentials: true,
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} mapped to socket ${socket.id}`);
    console.log(`Current online users:`, Object.keys(userSocketMap));
  } else {
    console.warn("Socket connected without userId");
  }

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    // Find and remove the user from the map
    const disconnectedUserId = Object.keys(userSocketMap).find(key => userSocketMap[key] === socket.id);
    if (disconnectedUserId) {
      delete userSocketMap[disconnectedUserId];
      console.log(`User ${disconnectedUserId} removed from socket map`);
      console.log(`Remaining online users:`, Object.keys(userSocketMap));
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

export { io, app, server, userSocketMap };
