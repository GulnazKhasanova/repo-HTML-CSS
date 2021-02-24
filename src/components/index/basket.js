function initBasket() {
let TITLES = [ 'PEOPLE T-SHIRT',
    'POTATO PEOPLE T-SHIRT'];
let PRICES = [ 52, 150];
let AMOUNTS = [4, 2];


const basket = {
    items: [],
    total: null,
    contains: null,
    wrapper: null,
    sum: null,
    totalContainer: null,
    init() {
        this.container = document.querySelector('#basket_item');
        this.wrapper = document.querySelector('.basket_inner');
        this.totalContainer = document.querySelector('#basket_sum');
        this.items = getBasketItems(TITLES, PRICES, AMOUNTS);
        this._render();
    },
    
    _render() {
        let htmlStr = '';
        this.items.forEach((item,i) => {
            htmlStr += renderBasketTemplate(item, i);
    });
    this.container.innerHTML = htmlStr;
    this._calcSum();
    },
    
    _calcSum(){
        this.sum = 0;
        this.items.forEach(item => {
            this.sum += item.productAmount * item.productPrice;
            
     });
    this.totalContainer.innerText = this.sum + '$';    
    },
    
    add(item){
      let find = this.items.find(el => item.productId == el.productId);
      if (find)
          
          {
              find.productAmount++;
          }
        else {
            this.items.push(Object.assign({}, item, {productAmount: 1} ))
        }
        this._render();
    },
    remuve(id) {
        let find = this.items.find(el => item.productId == id)
        if (find.productAmount>1)
          
          {
              find.productAmount--;
          }
        else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    },
     _hendleEvent() {
        this.wrapper.addEventListener('click', event => {
            if(event.target.name == 'remuve'){
            this.remove(event.target.dataset.id);
                
            
            }
        })
    }
    
  }
return basket;
}

function getBasketItems(TITLES, PRICES, AMOUNTS) {
    arr = [];
    for (let i = 0; i < TITLES.length; i++) {
       arr.push(createBasketItems(i, TITLES, PRICES, AMOUNTS)) 
    }
    
    return arr;
}

function createBasketItems(index, TITLES, PRICES, AMOUNTS) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productAmount: AMOUNTS[index],
        productId: 'prod_${index + 1}'
    }
}
function renderBasketTemplate(item, i) {
    return `<div class="cart_basket_img">
                <img src="../src/assets/img/t_shirt${i + 1}.jpg" alt="" class="img_basket">
                    <div class="text_img_basket">
                        <p> ${item.productName}<br> <span>${item.productAmount} x ${item.productPrice}</span>
                        </p>
                        <p>
                           <i class="far fa-star star_color"></i>
                           <i class="far fa-star star_color"></i>
                           <i class="far fa-star star_color"></i>
                           <i class="far fa-star star_color"></i>
                           <i class="far fa-star star_color"></i>

                        </p>
<a href="" class=" fas fa-times-circle" name="remov" data-id="${this.productId}" ></a>
                    </div>
        </div>`
}