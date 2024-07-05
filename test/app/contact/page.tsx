"use client";
import { useState } from 'react';
import styles from './contact.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notifySuccess = () => {
    toast.success("Contacto enviado!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      notifySuccess();
    }
  };

  return (
    <div className={styles.container}>
       <center>
      <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.h1}>Contacto</h1> 
        <input 
          type="text" 
          id="name" 
          placeholder="Tu nombre" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}  
          className={styles.input}        
        />
        <input 
          type="email" 
          id="email" 
          placeholder="Tu Email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}          
          className={styles.input}
        />
        <textarea
        id="message"
        placeholder="Escriba un mensaje" 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className={styles.textArea}
      />
        <button type="submit" className={styles.button}>Enviar</button>
      </form> 
      <ToastContainer />
      </center>
    </div>
  );
}