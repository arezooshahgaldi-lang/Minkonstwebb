# Min Konstwebb – Art Gallery & Webshop

A responsive website where I show and sell my own paintings. Visitors can browse the gallery, read about each painting and about me, add paintings to a shopping cart and go to checkout.

Built with **HTML, CSS and vanilla JavaScript (ES6)** – no frameworks.

## Features

- **Gallery** with paintings, descriptions and prices
- **Shopping cart** that is saved in `localStorage`, so it is kept when you move between pages or reload
- **Mini cart popup** and a **cart counter** in the header that update when you add a painting
- **Cart page** where you can remove items, empty the cart and see the total price
- **Checkout page** with a form and an order summary (number of items and total)
- **Responsive hamburger menu** for mobile, with `aria-expanded` for accessibility
- **Login popup** opened in a centered window
- **About me** and **Contact** pages, and an image slider on the home page

## Tech stack

| Area | Technology |
|---|---|
| Structure | HTML5 with semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| Styling | CSS with Flexbox, Grid and media queries |
| Logic | JavaScript (ES6): arrow functions, `const`/`let`, template literals, array methods |
| Storage | `localStorage` with `JSON.stringify()` / `JSON.parse()` |

## How it works

### `cart.js` – cart logic
- Reads and saves the cart in `localStorage`.
- Adds paintings to the cart. If the painting is already there, the quantity increases.
- Uses `reduce()` to count the total number of items for the counter in the header.
- Formats prices in Swedish kronor with `Intl.NumberFormat('sv-SE')`.

### `shopping.js` – cart page
- A `render()` function builds the cart dynamically with template literals.
- Shows a message when the cart is empty.
- Calculates line totals and the total price, and lets the user remove items or empty the cart.

### `checkut.js` – checkout
- Calculates the number of items and the total amount with `reduce()` and shows the order summary.

### `script1.js` – navigation and menu
- Hamburger menu that closes automatically in desktop mode, using `window.matchMedia('(min-width: 769px)')`.
- Closes the mobile menu when the user clicks outside it.
- Back button to the home page and a centered login popup opened with `window.open` and `noopener`.

## Project structure

```
index.html        Home page
gallery.html      Gallery with paintings
shopping.html     Shopping cart
checkut.html      Checkout
about me.html     About me
contact.html      Contact
loggin.html       Login popup
cart.js           Cart logic (shared)
shopping.js       Cart page rendering
checkut.js        Checkout summary
script1.js        Menu, navigation and login
*.css             Styles
målningar/        Images of the paintings
```

## Run locally

No installation is needed. Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/arezooshahgaldi-lang/Minkonstwebb.git
cd Minkonstwebb
```

Or use the Live Server extension in VS Code.

## My contribution

This is an individual project. I designed and built the whole website myself, including the layout, the responsive design and all JavaScript functionality. The paintings on the site are my own artwork.

## Challenges and what I learned

- **Responsive gallery:** making the gallery look good on all screen sizes. I solved it with media queries and by adjusting the grid layout.
- **Secure popup:** opening the login window safely, which I solved with `window.open` with fixed dimensions and `noopener`.
- **Saving state between pages:** `localStorage` can only store text, so I convert the cart with `JSON.stringify()` and `JSON.parse()`.

I learned a lot about responsive design and how important it is to test on different screen sizes.

## Possible improvements

- Optimize images for better performance
- Move inline styles into the CSS files
- Connect the checkout and login to a real backend
