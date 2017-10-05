//Gallery section
createGalleryImages ();

function createGalleryImages () {
	var gallery_images_amount = 5;
	var gallery_container = document.querySelector(".gallery__wrapper");
	for (var i = 1; i <= gallery_images_amount; i++) {
		gallery_container.appendChild(createImage (i));
	}
}
	
function createImage (i) {
	var container = document.createElement("a");
	var elementSource = "./img/gallery" + i + ".png";
	var element = document.createElement("img");
	
	setImageAttributes (container, elementSource, element);
	container.appendChild(element);
	return container;
}

function setImageAttributes (container, elementSource, element) {
	container.setAttribute("href", elementSource);
	container.setAttribute("data-lightbox", "gallery");
	
	element.src = elementSource;
	element.classList.add("gallery__photo");
}

//Blog section
createBlogArticles ();

function createBlogArticles () {
	var articleReferenceElement = document.querySelector(".blog__btn");
	var articleParent = document.querySelector(".blog");
	for (var i = 1; i <4; i++) {
		articleParent.insertBefore(createBlogContainers (i), articleReferenceElement);
	}
	
	var article = document.querySelectorAll(".blog__article");
	var author = "Auskteez";
	var publication_time = "2 hours ago";
	var article_names = ["Green Smoothies: Too Much of a Good Thing?", "Growing Food and a “Thirst” for Innovation", "Pesticides & Food: What You Need to Know"];
	for (var i = 0; i < article.length; i++) {
		article[i].appendChild(createArticleDate ());
		article[i].appendChild(createArticleCaptions (author, publication_time, article_names[i]));
	}
}

function createBlogContainers (i) {
	var element = document.createElement("div");
	element.classList.add("blog__article");
	element.style.backgroundImage = "url(./img/blog" + i + ".png)";
	return element;
}

function createArticleDate () {
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

function createArticleCaptions (name, time, article) {
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