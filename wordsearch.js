const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let result = [];
  
    for (let i = 0; i < letters[0].length; i++) {
      result.push([]);
    }
    for (let j = 0; j < letters.length; j++) {
      for (let i = 0; i < letters[0].length; i++) {
        result[i].push(letters[j][i]);
      }
    }
    const verticalJoin =  result.map(vert => vert.join(''));
      
  
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (let vert of verticalJoin) {
      if (vert.includes(word)) return true;
    }
    return false;
  };

module.exports = (wordSearch)
  

  
