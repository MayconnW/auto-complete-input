"use client"
import { useEffect, useRef, useState } from 'react'
import useDebounce from './use-debounce'
import styles from './styles.module.scss'
import { Spinner } from './spinner'
import { addStrongHtmlTagToMatchWordOnText, sanitizeHtmlString } from './helper'

type Props = {
  fetch(search: string): Promise<string[]>
  onSelectCallback?(item: string): void | Promise<void>
}

export function AutoComplete({fetch, onSelectCallback}: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [predictions, setPredictions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let shouldUpdateScreen = true
    if (debouncedSearchTerm) {
      setLoading(true)
      
      fetch(debouncedSearchTerm).then((result) => {
        if (shouldUpdateScreen) {
          const words = debouncedSearchTerm.split(' ').map(item => item.replaceAll(' ','')).filter(item => item)
          setPredictions(result.map(item => addStrongHtmlTagToMatchWordOnText(item, words)))
          setLoading(false)
        }
      }).catch((err) => {
        console.log('A message could be shown to the user?', {err})
        if (shouldUpdateScreen){  
          setPredictions([])
          setLoading(false)
        }
      })
    } else {
      setPredictions([])
      setLoading(false)
    }
    return () => {
      shouldUpdateScreen = false
    }
  }, [debouncedSearchTerm, fetch, onSelectCallback])

  function handleItemClick(item: string) {
    const sanitizedItem = sanitizeHtmlString(item)
    if (inputRef?.current) {
      inputRef.current.value = sanitizedItem
    }
    setPredictions([])
    setLoading(false)

    onSelectCallback?.(sanitizedItem)
  }

  function handleClear() {
    setSearchTerm('')
    if (inputRef?.current) {
      inputRef.current.value = ''
    }
    setPredictions([])
    inputRef?.current?.focus()
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search term"
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputRef}
      />
      <p className={styles.clear} onClick={handleClear}>X</p>
      <div className={styles.border}></div>
      {(loading || predictions.length > 0) && (
        <div className={styles['predictions-container']}>
          {loading && (
            <div className={styles.loading}>
              <Spinner />
            </div>
          )}
          {predictions.length > 0 && (
            <div className={styles['predictions-content']}>
              {predictions.map((item) => (
                <p key={item} dangerouslySetInnerHTML={{ __html: item }} onClick={() => handleItemClick(item)}/>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
