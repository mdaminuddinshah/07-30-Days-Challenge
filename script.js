
function gambar(){
    const divtag = document.getElementById('app');
    const apiElem = 'https://api.pexels.com/v1/search?query=bicycle&per_page=15';

    fetch(apiElem, {
        headers: {
            'Authorization': 'iJ9aguah6tppfkovzqCfrztJRXPDGvYBfbN4kOhefFzFXdbJMK8oi5aZ'
        }
    })
    .then(res => res.json())
    .then(data => data.photos.map(elem => (
        `<img src="${elem.src.large}" 
        style="width: 200px; height: 200px; padding: 4px"/>`
    )))
    .then(result => 
        divtag.innerHTML = result)
}

gambar();