/* We want to do the following

 1. Get info about an image with the ID n1xml (just for reference, the url of that image is http://imgur.com/n1xml)
 2. Upload an image to imgur using the public API. The image to use is http://i68.tinypic.com/23upv91.gif.
 3. Get the size of the image when that's done.
 4. Add the image to the page, with double the height and width
 5. If time, only return the id so it feels forced
 6. If time, do #2 in a separate call

 Client ID is e6bf8d8ea1e33cd (imgur will need this)

e6bf8d8ea1e33cd

  */

  getDataFromAPI = function (path, callback) {
    var res = new XMLHttpRequest()
    res.open("get", path);
    res.setRequestHeader('authorization',  'Client-ID e6bf8d8ea1e33cd');
    res.send()
    res.onload = function() {
      callback(res.response);
    }
  },

  postDataToAPI = function (path, callback) {
    var res = new XMLHttpRequest()
    res.open("POST", path);
    res.setRequestHeader('authorization',  'Client-ID e6bf8d8ea1e33cd');
    res.send('http://i68.tinypic.com/23upv91.gif')
    res.onload = function() {
      // console.log(res.response);
      callback(res.response);
    }
  },

  getDataFromAPI('https://api.imgur.com/3/image/n1xml', function (response) {
    // console.log(JSON.parse(response));
  })

  postDataToAPI('https://api.imgur.com/3/image', function (response) {
    console.log(JSON.parse(response));
  })
