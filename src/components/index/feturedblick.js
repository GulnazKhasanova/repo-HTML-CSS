
function initCatalog() {

let TITLES = [ 'PEOPLE T-SHIRT',
    'POTATO PEOPLE T-SHIRT',
    'TOMATO PEOPLE T-SHIRT',
    'ORANGE PEOPLE T-SHIRT',
    'LEMON PEOPLE T-SHIRT',
    'KIWI PEOPLE T-SHIRT',
    'GRAPES PEOPLE T-SHIRT',
    'COCONUT PEOPLE T-SHIRT'
];
let PRICES = [ 52, 150, 780, 84, 26, 120, 253, 75];

const catalog = {
    items: [],
    container: null,
    basket: null,
    init(basket) {
        this.container = document.querySelector('#catalog');
        this.basket = basket;
        this.items = getCatalogItems(TITLES, PRICES);
        this._render();
        this._hendleEvent();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item,i) => {
            htmlStr += renderCatalogTemplate(item, i)
        });
    
    this.container.innerHTML = htmlStr;
    },
    
    _hendleEvent() {
        this.container.addEventListener('click', event => {
            if(event.target.name == 'add'){
            let id = event.target.dataset.id;
            let item = this.items.find(el => el.productId == id);
            this.basket.add(item);
            
            }
        })
    }
}
return catalog;
}


function getCatalogItems(TITLES, PRICES) {
    arr = [];
    for (let i = 0; i < TITLES.length; i++) {
       arr.push(createCatalogItems(i, TITLES, PRICES)) 
    }
    
    return arr;
}
function createCatalogItems(index, TITLES, PRICES) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: 'prod_${index + 1}'
    }
}
function renderCatalogTemplate(item, i) {
    return `<div class="row_item_card">
                <div class="item_card">
                        <div class="item_img">
                            <img src="../src/assets/img/t_shirt${i + 1}.jpg" alt="" class="img_blockitem">
                            <div class="layer">
                                <button href="" class="add_to_cart1" name="add" data-id="${item.productId}">Add to Cart</button>
                            </div>
                        </div>
                        <div class="title_blockitem">
                            <p class="text_blockitem">${item.productName}</p>
                            <p class="price_blockitem">$${item.productPrice}</p>
                        </div>
                        </div>
                    </div>`}