"use client";
import { db } from "./firebaseConfig";
import { collection, addDoc, doc } from "firebase/firestore";
import React, { useState } from "react";


async function addDataTofireStore(name, email, password) {
  try {
    const docRef = await addDoc(collection(db, "message"), {
      name: name,
      email: email,
      password: password,
    });
    console.log("Document written with ID:", docRef.id);
    return true;
  }
  catch (error) {
    console.error("error adding document", error);
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataTofireStore(name, email, password);
    if (added) {
      setName("");
      setEmail("");
      setPassword("");

      alert("Data added to firebase DB");
    }
  };

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold m-10'>Add Data to Firebase</h1>
      <div>

      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            type="String"
            id="Password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </main>
  )
}
