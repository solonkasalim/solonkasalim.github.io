let header = document.querySelector("header");
window.addEventListener("scroll",() =>{
	header.classList.toggle("sticky",window.scrollY > 0);

})
	const navigation = document.querySelector('.navigation');
function toggleMenu(){
	const menuToggle=document.querySelector(".menu-toggle");
	menuToggle.classList.toggle('active');
	navigation.classList.toggle("active");
   let links=document.querySelectorAll("li")
		links.forEach(link =>link.addEventListener("click",function(){
		navigation.classList.remove("active");
		menuToggle.classList.remove("active");
	}));

}

