const DOMAIN = `https://api.giphy.com/v1/gifs/`;



const API_KEY = `alsRqap4lXDNE8kjicHAPXhK1BsE5hMx`; /* Your API key goes here */


const BASE_URL = `${DOMAIN}search?api_key=${API_KEY}&q=`;
function gifApi() {
  return BASE_URL
}
function ending() {
  const end = `&limit=25&offset=0&rating=g&lang=eng`;
  return end
}

let gifArray = 0
data = null

// API Country call function
async function fetchData(gif) {

  try {




    //let data.Title = ''//http://www.omdbapi.com/?apikey=3e89f4b8&s=casablanca
    let gifData = await axios.get(gifApi() + `${gif}` + ending())
    console.log(gifData)
    //search()
    data = gifData.data.data


    // console.log(data[0].embed_url)



    showGifData(data[gifArray])
    rightButton(gifArray)
    console.log(gifArray)
    leftButton(gifArray)
    console.log(gifArray)


    // backButton(data)
    //create DIV styl
    // for (i = 0; i < data.length; i++) {
    //   showGifData(data[i])
    //   // test1Function(data[i])
    // }
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
    //console.log(inputValue)
    removeGif()
    // createDiv()
    fetchData(inputValue)


  })
}
search()
function rightButton() {
  const rButton = document.getElementById("r-button")
  rButton.addEventListener('click', (e) => {
    e.preventDefault()
    removeGif()
    gifArray++
    console.log(gifArray)
    showGifData(data[gifArray])
  })

}

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
  let gifPicture = document.createElement('iframe')
  gifPicture.id = "gif"

  // gifPicture.src = `${data.embed_url}`
  gifPicture.src = `${data.images.downsized_large.url}`
  console.log(gifPicture)
  gifContainer.appendChild(gifPicture)
  console.log(gifPicture)

  // moviePoster.style.textJustify = "bottom"
  // moviePoster.style.fontSize = "25px"
}
function removeGif() {
  const appendGif = document.getElementById("center-gif")
  while (appendGif.lastChild) {
    appendGif.removeChild(appendGif.lastChild)
  }

}

