export function sanitizeHtmlString(htmlString: string) {
  const regex = /<[^>]+>/g
  return htmlString.replace(regex, '')
}

export function addStrongHtmlTagToMatchWordOnText(text: string, words: string[]): string {
  let replacedString = sanitizeHtmlString(text)
  words.forEach((word) => {
    const regex = new RegExp(sanitizeHtmlString(word), 'gi')
    replacedString = replacedString.replace(regex, match => `<strong>${match}</strong>`)
  })
  return replacedString
}