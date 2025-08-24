# ✨ Full Stack Realtime Chat App ✨


Highlights:

- 🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client
- ⭐ At the end Deployment like a pro for FREE!
- ⏳ And much more!

### Setup .env file

**Important**: You need to set up a MongoDB database before running the application.

#### Option 1: MongoDB Atlas (Recommended - Free)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Replace `<username>`, `<password>`, and `<cluster>` in the connection string

#### Option 2: Local MongoDB
1. Install MongoDB on your system
2. Start the MongoDB service (`mongod`)
3. Use the local connection string

```js
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/chat-app?retryWrites=true&w=majority
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
