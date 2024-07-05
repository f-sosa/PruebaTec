import styles from './interest.css';

export default function Intereses() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <center>
      <h1>Intereses</h1>
      <ul>
        <li>-Jugar a la pelota</li>
        <li>-Viajar</li>
        <li>-Pasar tiempo libre con amigos</li>
        <li>-Ir al gimnasio</li>
      </ul>
      </center>
      </form>
    </div>
  );
}