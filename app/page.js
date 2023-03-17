
import styles from './page.module.css'

import { loadEmoji } from './api/load-emoji'
import Search from './components/Search';

export default async function Home() {

  let emoji = await getEmoji();

  return (
    <main>
      <Search />
      <div className={styles.grid}>
        {emoji.map(x => {
          return (
            <div className={styles.container}>
              <span className={styles.emoji}>{x.symbol}</span>
              {/* <span className={styles.title}>{x.title}</span> */}
            </div>
          )
        })}
      </div>
    </main>
  )
}

async function getEmoji() {
  const emoji = await loadEmoji();
  return emoji;
}
