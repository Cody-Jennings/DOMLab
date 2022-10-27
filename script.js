// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
// 1.0 Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main")

// 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = "var(--main-bg)"

// console.log(mainEl)
// mainEl.style.setProperty(mainBG, "#4a4e4d")
//background-color: mainBG(--main-bg)
//mainEl.style.backgroundColor = ('--main-bg')
//background-color: 'var(--main-bg)'//getComputedStyle(document.mainEl)
    //.getPropertyValue('--main-bg');
 
// 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.   

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// 1.3 Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList.add("flex-ctr");

// 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.querySelector("#top-menu")

// 2.1 Set the height topMenuEl element to be 100%.

topMenuEl.style.height = "100%"

// 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// 2.3 Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around");

// 3.1 Iterate over the entire menuLinks array and for each "link" object:

//Create an <a> element.
//On the new element, add an href attribute with its value set to the href property of the "link" object.
//Set the new element's content to the value of the text property of the "link" object.
//Append the new element to the topMenuEl element.  iterate means to loop

// for (let i = 0; i < menuLinks.length; i++) {
//     let a = document.createElement('a');
//     a.setAttribute('href', menuLinks[i].href)
//     a.textContent = menuLinks[i].text;
//     topMenuEl.appendChild(a);
// }

for (let i = 0; i < menuLinks.length; i++) {
    let a = document.createElement('a');
    a.attributes.href = menuLinks[i].href;
    a.innerText = menuLinks[i].text;
    topMenuEl.appendChild(a);
}

// for(const list of menuLinks) {
// const newA = document.createElement("a")
// newA.href = list.href
// newA.textContent = list.text
// topMenuEl.append(newA)
// }
//let links = menuLinks.map(link => `<a href='${link.href}'>${link.text}</a>`);
//console.log(links);


// 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

let subMenuEl = document.querySelector("#sub-menu")

// 4.1 Set the height subMenuEl element to be 100%.

subMenuEl.style.height = "100%"

// 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// 4.3 Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add("flex-around")

// 4.4 Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = "absolute"

// 4.5 Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = "0"

// 5.1 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

//let topMenuLinks = document.querySelectorAll("#top-menu a")
let topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')


// Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false;

// 5.2 Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'A') {
        return
    } else {
        console.log(e);
    }
    });

    