import styles from './about.css';
  export default function About() {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Acerca de Mi</h1>
        <p className={styles.p}>Soy un apasionado desarrollador web Full Stack. Como licenciado en programación y sistemas informáticos en
          la UTN, mi enfoque es crear soluciones de extremo a extremo, desde el desarrollo backend hasta la creación
          de experiencias de usuario cautivadoras.
          Además de mi experiencia en desarrollo full-stack, he trabajado en proyectos que implican la creación de
          aplicaciones móviles utilizando Java y paginas web utilizando react con node, para ofrecer experiencias de
          usuario excepcionales. Mi experiencia cubre un amplio espectro de tecnologías y lenguajes de programación.
        </p>
        
        <h3 className={styles.h3}>Skills:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>BackEnd: Node.js, Java, C++</li>
          <li className={styles.li}>FrontEnd: React, Redux, JavaScript</li>
          <li className={styles.li}>Base de datos: PostgreSQL, Sequelize, SQL, Oracle</li>
        </ul>
      </div>
    );
  }
  