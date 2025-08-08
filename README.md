# 🛍️ Forever E-Commerce Website

Welcome to the **Forever E-Commerce Project** – a modern, responsive online shopping platform built with **React.js** and **Tailwind CSS**. This application is designed to provide users with a seamless and enjoyable shopping experience from browsing to checkout.

---

## 🚀 Features

- 🔍 Browse and search products by **category**, **subcategory**, and **keywords**
- 🧮 **Filter and sort** products by price or relevance
- 📦 View detailed product info: images, sizes, prices, and descriptions
- 🛒 Add items to the cart with **size selection** and quantity management
- 🔐 User sign-up and login forms
- 🧾 Place orders with **payment method selection** (e.g., Cash on Delivery)
- 📄 View **order history** and status
- 📱 Fully **responsive** and mobile-friendly design

---

## 🛠️ Tech Stack

- **React.js** – Frontend library
- **React Router** – Client-side routing
- **Context API** – Global state management
- **Tailwind CSS** – Styling and layout
- **Modern JavaScript (ES6+)**

---

## 📁 Project Structure

```ecommerce/
├── node_modules/
├── public/
├── src/
│   ├── assets/                        # Static assets (images/icons)
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   │
│   ├── context/
│   │   └── ShopContext.jsx           # Global state using Context API
│   │
│   ├── pages/                        # Application pages
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   └── Product.jsx
│   │
│   ├── App.jsx                       # Root app component
│   ├── index.css                     # Tailwind and global styles
│   └── main.jsx                      # App entry point with routing/context
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

