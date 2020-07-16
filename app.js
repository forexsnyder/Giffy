


//Construct API search URL
const DOMAIN = `https://api.tenor.com/v1/search?q=`;
const API_KEY = `key=S91BSLYCXDMF`;
const BASE_URL = `${DOMAIN}`;
function gifApi() {
  return BASE_URL
}
function ending() {
  const end = `&${API_KEY}&limit=10`;
  return end
}
// let test1 = gifApi() + ending()
// console.log(test1)

//Global variables
let gifArray = 0
let data = null

// API search function
async function fetchData(gif) {

  try {
    let gifData = await axios.get(gifApi() + `${gif}` + ending())

    //creating the gif array
    data = gifData.data.results
    //console.log(data)

    showGifData(data[gifArray])
    rightButton(data, gifArray)
    // console.log(gifArray)
    leftButton(gifArray)
    // console.log(gifArray)
  }
  catch (error) {
    console.log(error)
  }

}


//Search function
function search() {
  const submit = document.getElementById('search')
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const inputValue = document.getElementById('blank').value
    //Remove previous Gif
    removeGif()
    fetchData(inputValue)
  })
}
//Kick off the good times
search()

//Next button event listener
function rightButton() {
  const rButton = document.getElementById("r-button")
  rButton.addEventListener('click', (e) => {
    e.preventDefault()
    removeGif()
    gifArray++


    //If statement to catch the end of the array results 
    if (gifArray < data.length) {
      console.log(gifArray)
      showGifData(data[gifArray])
    } else {
      let gifContainer = document.getElementById('center-gif')
      let gifEnd = document.createElement("h2")
      gifEnd.innerHTML = "The End"
      gifContainer.appendChild(gifEnd)
    }
  })

}
//Back button
function leftButton() {
  const lButton = document.getElementById("l-button")
  lButton.addEventListener('click', (e) => {
    e.preventDefault()
    removeGif()
    gifArray--
    console.log(gifArray)
    showGifData(data[gifArray])

  })

}


// Create dynamic HTML
function showGifData(data) {
  let gifContainer = document.getElementById('center-gif')
  let gifContent = document.createElement("div")
  gifContent.id = "gif-contented"
  gifContent.style.justifyContent = "center"
  gifContent.style.alignContent = "center"
  let gifPicture = document.createElement('img')
  gifPicture.id = "gif"
  gifPicture.style.width = "100%"
  gifPicture.style.maxHeight = "400px"
  gifPicture.src = `${data.media[0].gif.url}`
  gifPicture.style.objectFit = "contain"
  gifContainer.appendChild(gifContent)
  gifContent.appendChild(gifPicture)
}

//Remove previous Gif's
function removeGif() {
  const appendGif = document.getElementById("center-gif")
  while (appendGif.lastChild) {
    appendGif.removeChild(appendGif.lastChild)
  }

}

