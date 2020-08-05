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

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                                 TASK 1                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Sets navigation text content
let navlinks = document.querySelectorAll("a");

for(let i = 0; i<navlinks.length; i++){
  navlinks[i].textContent = siteContent["nav"][`nav-item-${i}`];
}

//Sets texts for h1 element. Object split into array to accomodate white space addition.
let bigText = document.querySelector("h1");
let linebreak = document.createElement("br");
let bigTextString = siteContent["cta"]["h1"].split(" ");
bigText.textContent = bigTextString[0]+"\n"+bigTextString[1]+"\n"+bigTextString[2];
bigText.style = "white-space: pre"; //Preserves whitespace by the browser.

//Sets text content of button.
let button = document.querySelector("button");
button.textContent = "Get Started";

//Sets image beside h1
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Sets h4 content of the main section.
let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

//Sets middle image in main section.
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Sets block text content of main section.
let texts = document.querySelectorAll("p");
let mainContent = document.querySelectorAll(".main-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

//Sets text context of address of contact section.
let contact = document.querySelectorAll(".contact p");
let address1 = siteContent["contact"]["address"].slice(0,18);
let address2 = siteContent["contact"]["address"].slice(19);
contact[0].textContent = address1 + "\n" + address2;
contact[0].style = "white-space: pre";

//Sets phone # and email text context and copyright section.
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                                 TASK 2                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

//Sets navigation texts color to green.

for(let i = 0; i<navlinks.length; i++){
  navlinks[i].style.color = 'green';
}

//Adds two more elements to the navbar called 'Home' and 'FAQs' at the front and end of the nav bar.
let navbar = document.querySelector("nav");
let newlink1 = document.createElement("a");
newlink1.textContent = "Home";
newlink1.style.color = "green";
let newlink2 = document.createElement("a");
newlink2.textContent = "FAQs";
newlink2.style.color = "green";
navbar.prepend(newlink1);
navbar.appendChild(newlink2);


//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                                 STRETCH                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
let body = document.querySelector("body");

button.addEventListener("click", (event) =>{
  for(let i = 0; i<h4.length; i++){
    h4[i].style.color = '#33658A';
  }

  for(let i = 0; i<navlinks.length; i++){
    navlinks[i].style.color = '#6a66a3';
    navlinks[i].style.fontWeight = 'bolder';
  }

  newlink1.style.color = "#6a66a3";
  newlink1.style.fontWeight = 'bolder';
  newlink2.style.color = "#6a66a3";
  newlink2.style.fontWeight = 'bolder';
  
  bigText.style.color = 'red';

  body.style.backgroundColor = '#F1E9DA';
});