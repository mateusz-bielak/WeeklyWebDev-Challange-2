var header = document.querySelector(".header");
var hamburger = document.querySelector(".header__hamburger");
var navbar_list = document.querySelector(".navbar__list");
var navbar_list_elements = document.querySelectorAll(".navbar__elem");

// Gallery section functions
createGalleryImages();

function createGalleryImages() {
  var gallery_images_amount = 5;
  var gallery_container = document.querySelector(".gallery__container");
  for (var i = 1; i <= gallery_images_amount; i++) {
    gallery_container.appendChild(createImage(i));
  }
}

function createImage(i) {
  var container = document.createElement("a");
  var elementSource = "./img/gallery" + i + ".png";
  var element = document.createElement("img");

  setImageAttributes(container, elementSource, element);
  container.appendChild(element);
  return container;
}

function setImageAttributes(container, elementSource, element) {
  container.setAttribute("href", elementSource);
  container.setAttribute("data-lightbox", "gallery");

  element.src = elementSource;
  element.classList.add("gallery__photo");
}

// Blog section functions
createBlogArticles();

function createBlogArticles() {
  //Var's for insertBefore method
  var article_container = document.querySelector(".blog__container");
  var how_many_articles = "3"; //Amount of showing articles

  for (var i = 1; i <= how_many_articles; i++) {
    article_container.appendChild(createBlogContainers(i));
  }

  var article = document.querySelectorAll(".blog__article"); //Array of article containers
  var author = "Auskteez";
  var publication_time = "2 hours ago";
  var article_names = ["Green Smoothies: Too Much of a Good Thing?", "Growing Food and a “Thirst” for Innovation", "Pesticides & Food: What You Need to Know"];

  for (var i = 0; i < how_many_articles; i++) {
    article[i].appendChild(createArticleDate());
    article[i].appendChild(createArticleCaptions(author, publication_time, article_names[i]));
  }
}

function createBlogContainers(i) {
  var element = document.createElement("div");
  element.classList.add("blog__article");
  element.style.backgroundImage = "url(./img/blog" + i + ".png)";
  return element;
}

function createArticleDate() {
  var date = {
    day: 20,
    month: "Sep"
  }
  var container = document.createElement("div");
  var day = document.createElement("span");
  var month = document.createElement("span");

  day.textContent = date.day;
  month.textContent = date.month;
  month.classList.add("article__month");
  container.classList.add("article__date");

  container.appendChild(day);
  container.appendChild(month);
  return container;
}

function createArticleCaptions(name, time, article) {
  var container = document.createElement("div");
  var paragraph = document.createElement("p");
  var author = document.createElement("span");

  container.classList.add("article__caption");
  paragraph.classList.add("article__paragraph");
  author.classList.add("article__author");

  paragraph.textContent = article;
  author.textContent = "By " + name + " - " + time;

  container.appendChild(paragraph);
  container.appendChild(author);
  return container;
}

// Navbar listeners
hamburger.addEventListener("click", function() {
  toggleNavbar();
});

for (var i = 0; i < navbar_list_elements.length; i++) {
  navbar_list_elements[i].addEventListener("click", function() {
    toggleNavbar();
  })
}

function toggleNavbar() {
  hamburger.classList.toggle("header__hamburger--active");
  navbar_list.classList.toggle("navbar__list--active");
  header.classList.toggle("header--active");
}
