- **App Title**:
Giphy's Gif Giffer
- **App Description**:
This app will enables the user to search  Giphy.com's gif library.  It presents the Gif in the middle of the screen.  There is a Next and Back button to allow navigation of the search results. 
- **API**:
The API the project uses is from https://tenor.com 
 


An example of the API's code snippet:
```{
  "weburl": "https://tenor.com/search/beach-gifs",
  "results": [
    {
      "tags": [],
      "url": "https://tenor.com/FkOF.gif",
      "media": [
        {
          "nanomp4": {
            "url": "https://media.tenor.com/videos/7f8c1199603b82c371e7ce1dcc76e316/mp4",
            "dims": [
              86,
              94
            ],
            "duration": 2.75,
            "preview": "https://media.tenor.com/images/890490b7639d47350c80729b7355c143/tenor.png",
            "size": 40280
          },
          "nanowebm": {
            "url": "https://media.tenor.com/videos/4b542b6c27d076df5a03a566fa7d817b/webm",
            "dims": [
              86,
              94
            ],
            "preview": "https://media.tenor.com/images/890490b7639d47350c80729b7355c143/tenor.png",
            "size": 43174
          },
          "tinygif": {
            "url": "https://media.tenor.com/images/e386df2b4f8265f3bd33cccbb8e3ccf3/tenor.gif",
            "dims": [
              220,
              243
            ],
            "preview": "https://media.tenor.com/images/5a2a74169f495578b67269cb4c6eb7a3/tenor.gif",
            "size": 314185
          },
          "tinymp4": {
            "url": "https://media.tenor.com/videos/035df1971a5d07f00974d1a5736fc979/mp4",
            "dims": [
              178,
              196
            ],
            "duration": 2.75,
            "preview": "https://media.tenor.com/images/8799b7c8352aa884b0978182f22523e2/tenor.png",
            "size": 138315
          },
          "tinywebm": {
            "url": "https://media.tenor.com/videos/3c5ac7f23bebb377cc7deec65f3eab03/webm",
            "dims": [
              178,
              196
            ],
            "preview": "https://media.tenor.com/images/8799b7c8352aa884b0978182f22523e2/tenor.png",    
```

- **Wireframes**:
![Wireframe](https://git.generalassemb.ly/jvsnyder/Giphys-Giffer/blob/master/Wireframe.JPG)


- **MVP**: 
Features include.  Search bar with a Submit button.  Display results in the middle of the page.  Navigation buttons.  Return results from Giphy API. Dynamic scaling, navigation buttons will change according to screen size.
- **Post-MVP**:
Queue the next 5 Gifs in a window at the bottom of the screen.  Be able to tap on the gif to enlarge and see only the gif.  Have a return button.
- **Goals**: 
Moday: Html basics.  CSS placement of objects.  JS return GIF data.
Tuesday: Create functionality in Buttons and Search bar.  Standardize the gif sizing. Confirm API is cycling through the Gifs 
Wednesday:Create the Dynamic aspect of app for screen sizing. 

- **Priority Matrix**:
![Priority MAtrix](https://git.generalassemb.ly/jvsnyder/Giphys-Giffer/blob/master/Chart%20Time%20x%20Priority.JPG)
- **Timeframes**: 
![TimeFrame](https://git.generalassemb.ly/jvsnyder/Giphys-Giffer/blob/master/Timesheet.JPG)

- **Code-Snippet**:
```// API search function
async function fetchData(gif) {

  try {
    let gifData = await axios.get(gifApi() + `${gif}` + ending())

    //creating the gif array
    data = gifData.data.results
    

    showGifData(data[gifArray])
    rightButton(data, gifArray)
    // console.log(gifArray)
    leftButton(gifArray)
    
  }
  catch (error) {
    console.log(error)
  }

}
```
- **Change Log**:
Changed API source.  I was not getting the GIF's from Giphy to display fullwindow.  Despite coding the fullwindow request.
Styling widths and adding an extra media query to handle wide monitors. At widths above 2800px the gifs were going over the search menu and becoming too granular.
