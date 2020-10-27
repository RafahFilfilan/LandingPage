const header = document.querySelector("header");
const banner = document.querySelector("#banner");

const navEle = document.createElement('nav');
const ulEle = document.createElement('ul');

header.appendChild(navEle);
navEle.setAttribute("id", "hd");
navEle.appendChild(ulEle);
ulEle.setAttribute("id", "navList");

const sections = document.querySelectorAll('section a');

buildMenu(sections);


//Build the <li> elements
function buildMenu (liElements) {
	liElements.forEach((ele, index) => {
		const liEle = document.createElement('li');
		liEle.classList.add("navItem");
		liEle.innerHTML = `<a id=${index} onclick=theySeeMeScrolling('${ele.id}');>${ele.name}</a>`;
		ulEle.appendChild(liEle);
	});
}


//To scroll when navbar is clicked
function theySeeMeScrolling(id){
	const theyLovin = document.getElementById(id);
	console.log(theyLovin);
	theyLovin.scrollIntoView({behavior: "smooth"});
}



//Check the margin of transitioning.
const bannerOptions = {
	rootMargin: "-200px 0px 0px 0px "
};

const bannerObserver = new IntersectionObserver(function(
	entries, 
	bannerObserver
) {
	//when NOT Intersecting add class, when Intersecting remove class.
	entries.forEach(entry => {
		(!entry.isIntersecting) ? header.classList.add("nav-scrolled") : header.classList.remove("nav-scrolled");
	})
}, bannerOptions);

bannerObserver.observe(banner);



//Active navigation on Scroll
onscroll = function (){
	const scrollPosition = document.documentElement.scrollTop;
	
	sections.forEach( (section) => {
		if (scrollPosition >= section.offsetTop - section.offsetHeight*0.1 && 
			scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.1){
			let currentId = section.attributes.id.value;
			removeAllActiveClassesFromLinks();
			addActiveClassToLink(currentId);
		} 
		
		if (scrollPosition >= section.offsetTop - section.offsetHeight*0.5 && 
			scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.25){
			let currId = section.attributes.id.value;
			removeAllActiveClassesFromTitles();
			addActiveClassToTitle(currId);
		} 
	});
};

// Remove active class from the navbar [<ul> <li> <a>]
const removeAllActiveClassesFromLinks = function (){
	document.querySelectorAll('nav ul li a').forEach((el) => {
		el.classList.remove("activeItem");
	});
};

// Remove active class from the section title [<section> <a>]
const removeAllActiveClassesFromTitles = function (){
	document.querySelectorAll('section a').forEach((sec) => {
		sec.classList.remove("activeItem");
	});
};

// Add active class to navbar [<ul> <li> <a>]
const addActiveClassToLink = function(id){
	let selectLink;
	switch (id) {
		case sections[0].id:
		selectLink = `nav ul li a[id="0"]`;
		break;
		case sections[1].id:
		selectLink = `nav ul li a[id="1"]`;
		break;
		case sections[2].id:
		selectLink = `nav ul li a[id="2"]`;
		break;
		case sections[3].id:
		selectLink = `nav ul li a[id="3"]`;
		break;
	} 
	document.querySelector(selectLink).classList.add("activeItem");
};

// Add active class to section title [<section> <a>]
const addActiveClassToTitle = function(id){
	const selectTitle = document.getElementById(id);
	selectTitle.classList.add("activeItem");
};
