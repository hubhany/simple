//show search input
function showSearchInput() {
    let searchIcon = document.querySelector('.search_icon');
    let searchInput = document.querySelector('.search input');
    let searchContainer = document.querySelector('.search_container');
    let links = document.querySelector('.my_links');

    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show_search_input');
        links.classList.toggle('disapear_links');
        searchContainer.classList.toggle('show_container');
    })
}
showSearchInput();