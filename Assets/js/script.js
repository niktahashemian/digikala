$(function(){
    const mySwiperInfinitePerGroup = new Swiper(".mySwiperInfinitePerGroup", {
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
      const DefaultSwiper = new Swiper(".DefaultSwiper", {
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

      const mySwiper= new Swiper(".mySwiper",{
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
            425:{
                slidesPerView: 1,
                spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },

      });
      
});


// Add to cart handler: when user clicks a "سبد خرید" button, extract product info and save to localStorage
document.addEventListener('click', function(e){
  const btn = e.target;
  if (!btn || !btn.matches('button')) return;
  if (btn.innerText.trim() !== 'سبد خرید') return;

  const prod = btn.closest('.product-container');
  if (!prod) return;

  const nameEl = prod.querySelector('h3.fontsiz');
  const priceEl = prod.querySelector('p.ltr');

  const name = nameEl ? nameEl.textContent.trim() : 'محصول';
  let price = 0;
  if (priceEl){
    // extract first number-like sequence (handles commas)
    const txt = priceEl.textContent.replace(/\s/g,'');
    const match = txt.match(/[0-9,]+/);
    if (match) price = parseInt(match[0].replace(/,/g,''), 10) || 0;
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));

  // brief feedback to user
  const old = btn.innerText;
  btn.innerText = 'به سبد اضافه شد';
  setTimeout(()=> btn.innerText = old, 1200);
});
