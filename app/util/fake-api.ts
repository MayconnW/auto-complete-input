//This could be any api call - 
//For the purpose of this test, it is just returning a fake array including the words used in the input
export const getMatches = async (word: string): Promise<string[]> => {
  //For loading simulating
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const words = word.split(' ').map(item => item.replaceAll(' ','')).filter(item => item)
  return [
    ...[words.length > 1 ? words.join(' and ') : ''].filter(item => item),
    ...words.map(i => `This has the word ${i}`).slice(0,2),
    ...words.map(i => `${i} in the beginning`).slice(0,2),
    ...words.map(i => `in the (${i}) middle`).slice(0,2),
  ].slice(0,7)
}