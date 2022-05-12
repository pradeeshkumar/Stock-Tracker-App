const readAll = () => {
    return fetch('/.netlify/functions/analyst').then((response) => {
      return response.json()
    })
  }

export default {
    readAll: readAll
}