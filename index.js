class Formatter {
  static capitalize (string) {
   return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
   
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize (string) {
    let newWord = string.split(' ')
    
    let array =[]
   let lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for','at', 'by', 'from'] 
    for (let word of newWord) {
      if (lowerCaseWords.includes(word)&& array.length !==0) {
        console.log(word)
        array.push(word)
      }
      else {
        array.push(this.capitalize(word))
      }
    }
    console.log(array)
    return array.join(' ')
      }
}
Formatter.titleize('the brown fox jumped over the lazy dog')


