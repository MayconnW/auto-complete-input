"use client"
import styles from './page.module.css'
import { AutoComplete } from './components/auto-complete'
import {getMatches} from './util/fake-api'
import { useCallback, useState } from 'react'

export default function Home() {
  const [itemSelected, setItemSelected] = useState('')
  
  const onSelectItem = useCallback((item: string) => {
    setItemSelected(item)
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AutoComplete fetch={getMatches} onSelectCallback={onSelectItem}/>
      </div>
      <div>
        {itemSelected && <p>Selected Item: {itemSelected}</p>}
      </div>
    </div>
  )
}
