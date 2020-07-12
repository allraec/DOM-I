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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navlinks = document.querySelectorAll("a");

navlinks[0].textContent = siteContent["nav"]["nav-item-1"];
navlinks[1].textContent = siteContent["nav"]["nav-item-2"];
navlinks[2].textContent = siteContent["nav"]["nav-item-3"];
navlinks[3].textContent = siteContent["nav"]["nav-item-4"];
navlinks[4].textContent = siteContent["nav"]["nav-item-5"];
navlinks[5].textContent = siteContent["nav"]["nav-item-6"];

let bigText = document.querySelector("h1");
let linebreak = document.createElement("br");
let bigTextString = siteContent["cta"]["h1"].split(" ");
bigText.textContent = bigTextString[0]+"\n"+bigTextString[1]+"\n"+bigTextString[2];
bigText.style = "white-space: pre";

let button = document.querySelector("button");
button.textContent = "Get Started";

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let h4 = document.querySelectorAll("h4");

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

let texts = document.querySelectorAll("p");

texts[0].textContent = siteContent["main-content"]["features-content"];
texts[1].textContent = siteContent["main-content"]["about-content"];
texts[2].textContent = siteContent["main-content"]["services-content"];
texts[3].textContent = siteContent["main-content"]["product-content"];
texts[4].textContent = siteContent["main-content"]["vision-content"];

let address1 = siteContent["contact"]["address"].slice(0,18);
let address2 = siteContent["contact"]["address"].slice(19);

texts[5].textContent = address1 + "\n" + address2;
texts[5].style = "white-space: pre";


texts[6].textContent = siteContent["contact"]["phone"];
texts[7].textContent = siteContent["contact"]["email"];

let middleImg = document.querySelector("#middle-img");

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

texts[8].textContent = siteContent["footer"]["copyright"];