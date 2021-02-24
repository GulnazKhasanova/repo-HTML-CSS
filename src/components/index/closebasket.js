let basketHidden = document.querySelector('#basket_shop');
let basketShow = document.querySelector('.basket_inner');


if(basketHidden) {
    basketHidden.addEventListener('mouseover', function(e) {
        basketShow.classList.remove('hidden');
    },true)
      
}
if(basketShow) {
    basketShow.addEventListener('click', function(e) {
        basketShow.classList.remove('hidden');
         e.stopPropagation();
    },true)
    }

document.body.addEventListener('click', function(e) {
        basketShow.classList.add('hidden'); 
     },true);


