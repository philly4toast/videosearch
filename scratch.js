


const axios = require('axios')


let baseURL = 'https://www.googleapis.com/youtube/v3/'

let requestURL = baseURL+'search?part=snippet'+
                     '&type=video'+
                     '&q=rabbits' +
                     '&key=AIzaSyDKUYdvAkLYCBxOfE5tpfNJNBxAxSu2qSw'

axios.get(requestURL)



// key=AIzaSyDKUYdvAkLYCBxOfE5tpfNJNBxAxSu2qSw
.then((response) => {
  console.log(response.data.items);
}, (error) => {
  console.log(error);
});



console.log('hello world')

let baseURL = 'https://www.googleapis.com/youtube/v3/'
      let requestURL = baseURL + 'search?part=snippet' +
        '&type=video' +
        '&q=' + searchArtist + 'music+videos' +
        '&key=AIzaSyC8JlqzKhJjsirGk71XH94ziySBeLb-iUQ';

        curl https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=megan+the+stallion+music+videos&key=AIzaSyC8JlqzKhJjsirGk71XH94ziySBeLb-iUQ