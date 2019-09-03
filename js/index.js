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

// const multipleSelections = document.querySelectorAll('a');
//console.log(multipleSelections[2]);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//  Create selectors by using any of the DOM element's methods
//Note that IDs have been used on all images. Use the IDs to update src path content

let navMenu = document.querySelectorAll('.container header nav a');
navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
navMenu[5].textContent = siteContent["nav"]["nav-item-6"];



//update slogan text and button

let ctaSlogan = document.querySelector('.cta-text');

  ctaSlogan.querySelector('.cta-text h1').textContent = siteContent['cta']['h1']
  ctaSlogan.querySelector('h1').style.wordSpacing = '500px';
  ctaSlogan.querySelector('button').textContent = siteContent['cta']['button'];

// update image of code snippet circle

let codeSnipCircle = document.getElementById('cta-img');
  codeSnipCircle.setAttribute('src', siteContent['cta']['img-src']);

//----------------------------------------------------------------------------------------------------
// Main Content
//  select ALL <h4> , <p>  for "text content" is in both...." "top-content" and "bottom-content" to *****streamline
let mainHeading = document.querySelectorAll('.text-content h4');
let mainPara = document.querySelectorAll('.text-content p');

//build similar to navMenu above with "main-content" "features-h4"
//build similar to navMenu above with "main-content" "features-content"
//....etc Features, About, Services, Product, Vision

//Features
mainHeading[0].textContent = siteContent["main-content"]["features-h4"];
mainPara[0].textContent = siteContent["main-content"]["features-content"];

//About
mainHeading[1].textContent = siteContent["main-content"]["about-h4"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];

//Services
mainHeading[2].textContent = siteContent["main-content"]["services-h4"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];

//Product
mainHeading[3].textContent = siteContent["main-content"]["product-h4"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];

//Vision
mainHeading[4].textContent = siteContent["main-content"]["vision-h4"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];

// update middle picture ......."middle-img-src": "img/mid-page-accent.jpg",
let middleCodePic = document.getElementById('middle-img');
  middleCodePic.setAttribute('src', siteContent['main-content']['middle-img-src']);

//--------------------------------------------------------------------------------------------
// Contact ...<h4> <p> (let....)
// address , phone , email 

let contactHeading = document.querySelector('.contact h4');
  contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactPara = document.querySelectorAll('.contact p');
  contactPara[0].textContent = siteContent['contact']['address'];
  contactPara[1].textContent = siteContent['contact']['phone'];
  contactPara[2].textContent = siteContent['contact']['email'];


  //---------------------------------------------------------------------------------------------------------
  // footer ...copyright.... <p>

let footsie = document.querySelector('footer p');
  footsie.textContent = siteContent['footer']['copyright'];

//---------------------------------------------------------------------------------------------------

//change navigation color to green
//use .appendChild() and .prepend() to add 2 new items to the navigation system

navMenu.forEach(navMenu => {
  navMenu.style.color = 'green';
});

let navigator = document.querySelector('.container header nav');

let newMenuOne = document.createElement('a')
  newMenuOne.style.color = 'green';
  newMenuOne.textContent = 'FAQ';
  navigator.appendChild(newMenuOne);

let newMenuTwo = document.createElement('a')
  newMenuTwo.textContent = 'Howdy';
  newMenuTwo.style.color = 'green';
  navigator.prepend(newMenuTwo, navigator.firstChild);

    



