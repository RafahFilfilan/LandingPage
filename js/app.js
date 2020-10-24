const header = document.querySelector("header");
const banner = document.querySelector("#banner");

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
const sections = document.querySelectorAll('section a');

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

const removeAllActiveClassesFromLinks = function (){
	document.querySelectorAll('nav ul li a').forEach((el) => {
		el.classList.remove("activeItem");
	});
};

const removeAllActiveClassesFromTitles = function (){
	document.querySelectorAll('section a').forEach((sec) => {
		sec.classList.remove("activeItem");
	});
};

const addActiveClassToLink = function(id){
	const selectLink = `nav ul li a[href="#${id}"]`;
	document.querySelector(selectLink).classList.add("activeItem");
};

const addActiveClassToTitle = function(id){
	const selectTitle = document.getElementById(id);
	selectTitle.classList.add("activeItem");
};



