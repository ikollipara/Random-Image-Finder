function find_random_image() {
    let searchTerm;
    let HTTP;
    let url;
    let randInt;
    let result;
    searchTerm = document.getElementById('searchTerm').value;
    randInt = get_randInt(0, 100);
    url = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q='+searchTerm+'&offset='+randInt+'&mkt=en-us&safeSearch=Moderate';
    HTTP = new XMLHttpRequest();
    HTTP.open('POST', url, true);
    HTTP.setRequestHeader('Subscription-Key', 'f8cdef31-a31e-4b4a-93e4-5f571e91255a');
    HTTP.send();
    console.log(HTTP.readyState)
}

function get_randInt(min, max) {
    let x;
    x = Math.floor(Math.random() * (max - min) ) + min;
    return Math.round(x);
}