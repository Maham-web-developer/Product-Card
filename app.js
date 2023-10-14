// ======open card code====

let previewContainer = document.querySelector(".product-preview");
let previewBox = document.querySelectorAll(".preview");

document.querySelectorAll(".product-container .product").forEach(product =>{
    product.onclick =  () => {
       previewContainer.style.display='flex';    
    let name = product.getAttribute("data-name");
    previewBox.forEach(preview =>{
    let target = preview.getAttribute("data-target");
    if (name == target){
        preview.classList.add("active");
    }
    });
    };
});

// ====close button====
previewBox.forEach(close =>{
   close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display='none';
   };
});


