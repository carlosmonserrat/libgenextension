const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        searchTorrent()
    }
});

const button = document.getElementById("searchButton")
button.onclick = () => {
    searchTorrent()
};

const searchTorrent = () => {
    const radioCustom = document.getElementById("radiocustom")
    const customInput = document.getElementById("customSearchInput")
    const baseUrl = radioCustom.checked === true ? customInput.value : window.selectedProxy.url
    const searchValue = searchInput.value
    const url = `${baseUrl}/index.php?req=${searchValue}&res=100&order=year&ordermode=desc&sort=year&sortmode=DESC`
    window.open(url);
};