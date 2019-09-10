// fetch('https://puzzle.mead.io/puzzle').then((response) => {     //fetch doesnot work in nodejs it only works in client side scripting
//     response.json().then((data) =>{     //response.json returns the parsed json data
//         console.log(data);
//     })
// })

const movieForm = document.querySelector('form')
const searchedData= document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')
const message4 = document.querySelector('#message-4')
const message5 = document.querySelector('#message-5')
const message6 = document.querySelector('#message-6')
const message7 = document.querySelector('#message-7')
const message8 = document.querySelector('#message-8')
const message9 = document.querySelector('#message-9')
const message10 = document.querySelector('#message-10')
const message11 = document.querySelector('#message-11')
const message12 = document.querySelector('#message-12')
const message13 = document.querySelector('#message-13')
const message14 = document.querySelector('#message-14')

messageOne.textContent = 'Enter the Movie Name'
movieForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const title = searchedData.value
    messageOne.textContent ='Loading...'
    messageTwo.textContent=''
    fetch('http://www.omdbapi.com/?t='+encodeURIComponent(title)+'&apikey=bf1981b0').then((res) => {
    res.json().then((data) =>{
        if(data.Error)
        {
            //console.log(data)
            messageOne.textContent=data.Error
            messageTwo.textContent=''
        }
        else{
            // console.log(data.location)
            // console.log(data.forecast) 
            messageOne.textContent='Title :- ' + data.Title
            messageTwo.textContent='Released :-'+ data.Released
            message3.textContent='Runtime :-' + data.Runtime
            message7.textContent='Actors :-' + data.Actors
            message6.textContent='Writer :-' + data.Writer
            message4.textContent='Genre :-' + data.Genre
            message5.textContent='Director :-' + data.Director 
            message8.textContent='Plot :-' + data.Plot
            message10.textContent='Awards :-' + data.Awards
            message9.textContent='IMDB :-' + data.imdbRating
            message11.textContent='BoxOffice :-' + data.BoxOffice
            message12.textContent='Language :-' + data.Language
            message13.textContent='Country :-' + data.Country

        }
    })
})
})