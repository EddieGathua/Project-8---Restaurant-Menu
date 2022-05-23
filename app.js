const menu = [
  {
    id: 1,
    title: "Croissants",
    category: "Breakfast",
    price: 12.99,
    img: "images/menu-item1.jpg",
    desc: "This timeless pastry has the perfect buttery taste, a flaky texture and a fluffy interior that will leave you wanting more and more",
  },
  {
    id: 2,
    title: "Beef Patties and Potatoes",
    category: "Lunch",
    price: 23.99,
    img: "images/menu-item2.jpg",
    desc: "Our patties are made from the best ground beef you can find served with grilled potatoes garnished with parsley and a side of cranberry sauce",
  },
  {
    id: 3,
    title: "Yummy Brownies",
    category: "Desserts",
    price: 8.99,
    img: "images/menu-item3.jpg",
    desc: "The classic tray bake. Made with smooth dark chocolate giving this brownie a rich and gooey texture that is so hard to resist.",
  },
  {
    id: 4,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 9.99,
    img: "images/menu-item4.jpeg",
    desc: "Five pancakes made from our flour milled in the smokies, served with our homemade maple syrup, and real whipped butter",
  },
  {
    id: 5,
    title: "Burger and Fries",
    category: "Lunch",
    price: 23.99,
    img: "images/menu-item5.jpeg",
    desc: "Our beef burgers are made from natural and delicious ingredients which are made to order and served as per your request on toasty, classic buns with a side of tasty french fries and a sauce of your choice.",
  },
  {
    id: 6,
    title: "Godzilla Milkshake",
    category: "Desserts",
    price: 18.99,
    img: "images/menu-item6.jpeg",
    desc: "This milkshake comes in three flavours namely, Strawberry, Chocolate and Vanilla topped off with a flavoured and cream-covered donut and toppings of your choice.",
  },
  {
    id: 7,
    title: "Eggs and Baked Beans",
    category: "Breakfast",
    price: 7.99,
    img: "images/menu-item7.jpeg",
    desc: "Two eggs, your style, and a side of baked beans served with a slice of bread",
  },
  {
    id: 8,
    title: "Oreo Milkshake",
    category: "Desserts",
    price: 15,
    img: "images/menu-item8.jpeg",
    desc: "Classic chocolate milkshake topped off with chocolate ice-cream and crushed oreos with a side of oreos. Perfect for your sweet tooth.",
  },
  {
    id: 9,
    title: "Classic Cheesecake",
    category: "Desserts",
    price: 12.99,
    img: "images/menu-item9.jpg",
    desc: "A two layer cheesecake layered with vanilla ice-cream topped off with freshly harvested cherries which are a delight !",
  },
  {
    id: 10,
    title: "Long Island Iced Tea",
    category: "Drinks",
    price: 10.99,
    img: "images/menu-item10.jpg",
    desc: "This cocktail is made of vodka, tequila, light rum, triple sec, gin and a splash of cola. The perfect way to unwind after a long day!",
  },
  {
    id: 11,
    title: "Chai Latte",
    category: "Drinks",
    price: 7.99,
    img: "images/menu-item11.jpg",
    desc: "A chilled drink made cold-steeped chai, honey syrup and milk that is perfect for the hot weather!",
  },
  {
    id: 12,
    title: "Spaghetti Dish(Chef's Special)",
    category: "Lunch",
    price: 25.99,
    img: "images/menu-item12.jpg",
    desc: "Classic spaghetti served with a spicy meat dish garnished with parsley and mozzarela cheese and a side of salsa",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  filtering();
});

function filtering() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id= ${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return ` <article class="menu-item">
  <img src= ${item.img} class="photo" alt= ${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
