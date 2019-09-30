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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Building out navigation
let navMenu = document.querySelectorAll('.container header nav a');

// information on .textContent https://www.w3schools.com/jsref/prop_node_textcontent.asp  (see below)

navMenu[0].textContent = siteContent['nav']['nav-item-1'];
navMenu[1].textContent = siteContent['nav']['nav-item-2'];
navMenu[2].textContent = siteContent['nav']['nav-item-3'];
navMenu[3].textContent = siteContent['nav']['nav-item-4'];
navMenu[4].textContent = siteContent['nav']['nav-item-5'];
navMenu[5].textContent = siteContent['nav']['nav-item-6'];

// working on slogan text and 'get started' button (see below)
// "cta-text" from html (see below)
// added a 'hack' of 500px to stack 'DOM IS AWESOME' (see below)
// .querySelectorAll returns array-like object (nodeList)

let ctaDomSlogan = document.querySelector('.cta-text');

  ctaDomSlogan.querySelector('.cta-text h1').textContent = siteContent['cta']['h1'];
  ctaDomSlogan.querySelector('h1').style.wordSpacing = '500px';
  ctaDomSlogan.querySelector('button').textContent = siteContent['cta']['button'];

  // code circle image (see below)
  // setAttribute info here: https://www.w3schools.com/jsref/met_element_setattribute.asp  (see below)

  let codeCircle = document.getElementById('cta-img');
    codeCircle.setAttribute('src', siteContent["cta"]["img-src"]);


// Main content (see below)

let mainHeadingFour = document.querySelectorAll('.text-content h4')
let mainParagraph = document.querySelectorAll('.text-content p')


// Features, About, Services, Product, Vision (see below)
// using MainHeadingFour & mainParagraph

// Features 
mainHeadingFour[0].textContent = siteContent['main-content']['features-h4']
mainParagraph[0].textContent = siteContent['main-content']['features-content']