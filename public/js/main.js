$(document).ready(() =>{
    $('#searchForm').on('submit',(e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText){
    // console.log(searchText)
    axios.get('http://www.omdbapi.com?s='+searchText+'&apikey=bf1981b0')
         .then((res) => {
             console.log(res)
            const movies= res.data.Search;
            let output =`
                <div class="well">
                    <h4 class=text-center">Loading...</h4>
                </div>
            `;
            $('#movies').html(output)
            if(!movies)
            {
                output =`
                <div class="well well-lg text-center">
                    <h3>Sorry! Movie Not Found</h3>
            
                </div>
                    `;
            }
            else
            {   output=''
              $.each(movies, (index,movie)=>{
                output +=`
                 <div class="col-md-3">
                    <div class="well text-center">
                       <img src="${movie.Poster}">
                       <h5>${movie.Title}</h5>
                       <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
              `;
                })
            }
            $('#movies').html(output)
         })
         .catch(e => console.log(e))  
}
function movieSelected(id){
    sessionStorage.setItem('movieId',id)
    window.location ='movie.html'
    return false;
}
function getMovie(){
    let movieId = sessionStorage.getItem('movieId')
    console.log()
    axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=bf1981b0')
    .then((res) => {
       //console.log(res)
       let movie = res.data;
       let output =`
        <div class="row">
            <div class="col-md-4">
                <img src="${movie.Poster}">
            </div>
            <div class="col-md-8">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
                    <li class="list-group-item"><strong>Released :</strong>${movie.Released}</li>
                    <li class="list-group-item"><strong>Rated : </strong>${movie.Rated}</li> 
                    <li class="list-group-item"><strong>IMDB : </strong>${movie.imdbRating}</li>
                    <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                    <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="row">
           <div class="well well-lg">
           <h3>Plot</h3>
           ${movie.Plot}
           <hr>
           <a href="http://imdb.com/title/${movie.imdbID}"  target="_blank" class="btn btn-primary">View IMDB</a>
           <a href="index.html" class="btn btn-info">Go Back To Search</a>
       `;
       $('#movie').html(output)

    })
    .catch(e => console.log(e))  
}
