import styles from './page.module.css'
import { loadEmoji } from './api/load-emoji'

export default async function Home() {
  const emoji = await getEmoji();

  return (
    <main>
      {emoji.map(x => {
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>{x.symbol}</span>
            <span className={styles.title}>{x.title}</span>
          </div>
        )
      })}
    </main>
  )
}

async function getEmoji() {
  const emoji = await loadEmoji();
  return emoji;
}
