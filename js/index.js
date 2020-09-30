const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll('a');

//DRY code for the navbar
for(let i=0; i < navItems.length; i++){

  navItems[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  navItems[i].style.color = 'green';

};

//Big text... manipulated strings to look exact with the whitespace
const h1 = document.querySelector('h1');
const h1String = siteContent["cta"]["h1"].split(" ");
h1.textContent = h1String[0] + "\n" + h1String[1] + "\n" + h1String[2];
h1.style = "white-space: pre";

//button
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

//cta image
const ctaIMG = document.querySelector('#cta-img');
ctaIMG.src = siteContent["cta"]["img-src"];

//set setting the h4 tags for the main content
const h4Main = document.querySelectorAll('.main-content h4');
h4Main[0].textContent = siteContent["main-content"]["features-h4"];
h4Main[1].textContent = siteContent["main-content"]["about-h4"];
h4Main[2].textContent = siteContent["main-content"]["services-h4"];
h4Main[3].textContent = siteContent["main-content"]["product-h4"];
h4Main[4].textContent = siteContent["main-content"]["vision-h4"];

//setting the paragraphs for the main content
const pMain = document.querySelectorAll('.main-content p');
pMain[0].textContent = siteContent["main-content"]["features-content"];
pMain[1].textContent = siteContent["main-content"]["about-content"];
pMain[2].textContent = siteContent["main-content"]["services-content"];
pMain[3].textContent = siteContent["main-content"]["product-content"];
pMain[4].textContent = siteContent["main-content"]["vision-content"];

//middle image in main content
const mainMiddleImg = document.querySelector('#middle-img');
mainMiddleImg.src = siteContent["main-content"]["middle-img-src"];

//contact headline
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

//contact address splice to add whitespace
const addressText1 = siteContent["contact"]["address"].slice(0,18);
const addressText2 = siteContent["contact"]["address"].slice(19);
const contact = document.querySelectorAll('.contact p');
contact[0].textContent = addressText1 + "\n" + addressText2;
contact[0].style = 'white-space: pre';

//adds phone and email
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

//sets footer
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent["footer"]["copyright"];

//adds two elements in as first and last child nodes
const navBar = document.querySelector('nav');
const home = document.createElement('a');
home.textContent = 'Home';
navBar.prepend(home);
home.style.color = 'green';
const faqs = document.createElement('a');
faqs.textContent = 'FAQs';
navBar.appendChild(faqs);
faqs.style.color = 'green';


//Stretch

const body = document.querySelector("body");

button.addEventListener('click', (event) => {

  home.textContent = "Stay Home!";
  h1.style.color = "red";
  ctaIMG.style.opacity = ".5";
  home.style.color = "magenta";
  faqs.style.color = "magenta";
  for(let i=0; i < navItems.length; i++){

    navItems[i].style.color = 'magenta';

  };
  body.style.backgroundColor = "pink";
  for(let i=0; i < h4Main.length; i++){

    h4Main[i].style.color = 'yellow';

  };
});