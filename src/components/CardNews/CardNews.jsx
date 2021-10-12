import styles from './CardNews.module.scss';

function CardNews(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} alt={props.title} src={`/img/${props.imageUrl}`}></img>
      <div className="content">
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.text}>{props.text}</p>
        <a href="#" className={styles.link}>read more 
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#F85A47"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default CardNews;