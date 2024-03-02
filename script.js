fetch('https://api.pexels.com/v1/search?query=tigers',{
    headers: {
        'Authorization' : 'iJ9aguah6tppfkovzqCfrztJRXPDGvYBfbN4kOhefFzFXdbJMK8oi5aZ'
    }
})
    .then(res => res.json())
    .then(data => {
        const gambar = data.photos[1].src.small;
        document.getElementById('gambar').src = gambar
    })