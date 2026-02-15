🎥 Zoom Clone – Real-Time Video Meeting App

A full-stack real-time video conferencing application built using React, Node.js, Socket.IO, and WebRTC.

This project replicates core Zoom-like features including video calls, real-time chat, screen sharing, and multi-user rooms.

🚀 Features

🔐 User Authentication (Login / Register)

🎥 Real-time Video Calling (WebRTC)

💬 Live Chat during meetings

🖥 Screen Sharing

🎤 Toggle Audio / Video

📡 Real-time signaling using Socket.IO

👥 Multi-user meeting rooms

🟢 Join / Leave detection

📱 Responsive UI

🧠 Tech Stack
Frontend

React.js

Material UI

Socket.IO Client

WebRTC API

Backend

Node.js

Express.js

Socket.IO

MongoDB

Mongoose


⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-username/zoom-clone.git <br/>
cd zoom-clone

2️⃣ Setup Backend
cd backend
npm install


Create a .env file:

PORT=8000
MONGO_URI=mongodb://localhost:27017/zoom


Start backend:

npm start

3️⃣ Setup Frontend
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000


Backend runs on:

http://localhost:8000

🔄 How It Works
Real-Time Communication

Socket.IO handles signaling

Users join rooms using meeting URL

Server broadcasts user join/leave events

WebRTC establishes peer-to-peer connections

Video Flow

User grants camera/mic permission

Local stream attached

Signaling exchange via Socket.IO

Peer connections established

Streams rendered dynamically

🧩 Key Concepts Implemented

WebRTC Peer Connections

ICE Candidate Handling

SDP Offer/Answer Model

Event-driven Architecture

Real-time Messaging

Media Device Permissions

State Management with React Hooks

🎯 Learning Outcomes

Through this project, I learned:

How WebRTC actually works behind the scenes

Real-time architecture design

Building scalable socket-based systems

Reading and implementing official documentation

Managing multiple peer connections

Handling edge cases in media streams

🚀 Future Improvements

Meeting ID generation

Recording functionality

Participant list panel

Active speaker detection

Waiting room

Production deployment

Dark mode toggle

🤝 Contribution

Pull requests are welcome.
For major changes, please open an issue first.

📜 License

This project is for learning and educational purposes.

👨‍💻 Author

Deepak Kumar Yadav
Full Stack Developer
Building real-time applications 🚀
