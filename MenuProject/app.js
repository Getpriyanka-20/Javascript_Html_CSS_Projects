const menu = [
{
    id:1,
    title: "RiceFlakes",
    category: "breakfast",
    price:10.00,
    img:"image/poha-.jpg",
    disc:'seasoned soaked rice flakes with onion peanut cashwes green chillies and curry leaves garnished  with fresh cilantro and sev'


},
{
    id:2,
    title:"Tapioca",
    category: "breakfast",
    price:12.99,
    img:"image/sabudana-khichdi.jpg",
    disc:'seasoned in ghee soaked tapioca with boiled potato, peanut,cashwes,green chillies and garnished with fresh cilantro.Served with plain yogurt.'
},

{
        id:3,
        title:"Tea",
        category: "breakfast",
        price: 5.00,
        img:"image/tea.jpg",
        desc:'Tea with milk boiled with ginger clove cinnaman black pepper and sugar.'
    
    },
    {
            id:4,
            title:"Seasoned wheat chapati",
            category: "breakfast",
            price: 10.00,
            img:"image/Phodnichi-Poli.jpg",
            desc:'Seasoned wheat chapati with onion, peanuts, cashews, raisins,green chillies,curry leaves garnished with cilantro.Served with plain yougurt and fried chickpea balls salad.'  
        
        },
        {
            id:5,
            title:"Sprouts curry with paav",
            category: "lunch",
            price: 15.00,
            img:"image/misal-pav.jpg",
            desc:'Sprouts curry with onion,tomatoes,ginger, garlic,green cillies and indian spices.Served with Buns.'
        
        },
        {
            id:6,
            title:"Turmeric Latte",
            category: "breakfast",
            price: 6.00,
            img:"image/Turmeric_Latte1.jpg",
            desc:'Milk boiled with turmeric and indian spices.' 
        
        },
        {
            id:7,
            title:"Stuffed Potato chapati",
            category: "Lunch",
            price:12.99,
            img:"image/Aloo-Paratha.jpg",
            disc:'chapati stuffed with boiled potato seasoned in indian spices. '
        },
        {
            id:8,
            title:"chickpea curry and jowar chapati",
            category: "lunch",
            price:12.99,
            img:"image/pithla-bhakar.jpg",
            disc:'chickpea curry seasoned in indian spices with onion ,tomato and jowar chapati served with chilli garlic chutney. '
        },
        {
            id:9,
            title:"puffed semolina",
            category: "breakfast",
            price:7.99,
            img:"image/panipurimasala.jpg",
            disc:'semolina puffs with mint water,boiled potato, chickpea, onion garnished with tamarind chutney.'
        },
        {
            id:10,
            title:"chickpeas stuffed tortilla",
            category: "Dessert",
            price:12.99,
            img:"image/puranpoli.jpg",
            disc:'tortilla stuffed with boiled chickpea and jaggrey, cardmom,nutmeg served with ghee or milk.'
        },
        
        
        
        
];

const SectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn");
console.log(filterBtns);
//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
        
    


function displayMenuItems(menuItems){
    let displayMenu= menuItems.map(function(item){
        // console.log(item);
         return `<article class="menu-item">
         <img src=${item.img} height ="30%" width ="10%"class = "photo" alt =${item.title}/>
         <div class="item-info">
             <header>
             <h4>${item.title}</h4>
             <h4 class="price">${item.price}</h4>
         </header>
         <p class = "item-text">
             ${item.desc}
             
         </p>
         </div>
     </article>`;
     });
     displayMenu =displayMenu.join("");
     SectionCenter.innerHTML = displayMenu;
     console.log(displayMenu);

}
