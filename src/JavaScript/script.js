let filterNone = document.querySelector('.filters-none');
let filters = document.querySelector('.filters');

filterNone.addEventListener('click', () => {
  filterNone.classList.toggle('active');
})

filterNone.addEventListener('click', ()=>{
  filters.classList.toggle('visible');
})

let cancelFilter = document.querySelector('.cancel-filter');

cancelFilter.addEventListener('click', ()=> {
  filterNone.classList.toggle('active');
  filters.classList.toggle('visible');
})