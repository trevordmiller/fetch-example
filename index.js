const user = 'trevordmiller'
const url = 
  `https://api.github.com/users/${user}`

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json.type))
  .catch(error => console.log(error))
