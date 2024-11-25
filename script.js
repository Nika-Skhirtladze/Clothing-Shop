const product1 = document.querySelectorAll(".none");
const viewAll1 = document.querySelector(".view-all");
const newArrivals = document.querySelector(".new-arrivals");
let c = 0;
viewAll1.addEventListener("click", () => {
    c++;
    if (c % 2 == 1) {
        product1.forEach((e) => {
            e.style.display = "flex";
            e.style.transition = "0.3s";
            newArrivals.style.height = "1600px";
        });
    }else{
        product1.forEach((e) => {
            e.style.display = "none";
            e.style.transition = "0.3s";
            newArrivals.style.height = "670px";
        });
        c = 0;
    }    
});

const product2 = document.querySelectorAll(".none2");
const viewAll2 = document.querySelector(".view-all2");
const topSelling = document.querySelector(".top-selling");
let k = 0;
viewAll2.addEventListener("click", () => {
    k++;
    if (k % 2 == 1) {
        product2.forEach((e) => {
            e.style.display = "flex";
            e.style.transition = "0.3s";
            topSelling.style.height = "1600px";
        });
    }else{
        product2.forEach((e) => {
            e.style.display = "none";
            e.style.transition = "0.3s";
            topSelling.style.height = "670px";
        });
        k = 0;
    }
    
})