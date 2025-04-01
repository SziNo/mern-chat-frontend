# MERN Chat - Frontend

## 📌 Description

This project is the frontend for a real-time chat application built using **React**, **TailwindCSS**, **Zustand**, and **Socket.io**. It connects to the MERN Chat Backend to provide authentication, messaging, and a customizable user experience.

## 🌐 Live Project

The backend for this project is hosted on **Render**, which includes a sleep functionality to conserve resources. As a result, **the first request to the server may experience a delay**. Subsequent requests will perform normally.

- **Backend GitHub**: [MERN Chat Backend Repository](https://github.com/SziNo/mern-chat-backend)
- **Live Frontend URL**: [MERN Chat Frontend](https://mern-chat-frontend-lemon.vercel.app/)

## 🚀 Tech Stack

This project utilizes the following technologies:

- **React** – Component-based frontend framework.
- **React Router** – Enables navigation between pages.
- **Zustand** – State management for handling user and chat data.
- **Socket.io Client** – Real-time messaging support.
- **Axios** – Handles API calls.
- **Tailwind CSS** & **DaisyUI** – UI styling and customization.
- **React Hot Toast** – Displays notifications.

## 🎮 How to Use

1. **Sign Up**

   - You don’t need a real email—use something like `humanboi@yesyes.com`.
   - Password must be at least 6 characters, e.g., `111111`.
   - After signing up, you'll be redirected to the login page where you can log in.

     **Ideally you'd want to register a second user and login with that in a seperate browser/window to test chat functionalities.**

2. **Start Chatting**

   - Once logged in, you'll see a list of users available for chat.
   - Click on a user to open a chat and start messaging.

3. **Update Your Profile**

   - Go to the **Profile** section to change your avatar.
   - Upload an image, and it will be stored securely with **Cloudinary**.

4. **Customize The Theme**

   - Navigate to **Settings** and switch between different themes to personalize the experience.

5. **Logout Anytime**
   - Click **Logout** to securely exit the chat.
