
# 🛍️ NxtTrendz – E-Commerce App (React)

NxtTrendz is a **React-based e-commerce web application** that allows users to **login, browse products, view exclusive Prime deals, add to cart, and logout securely**.
It uses **JWT authentication**, **protected routes**, and integrates with backend APIs.

---

## 🚀 Features

* 🔑 **Login Authentication** using JWT tokens
* 🛡️ **Protected Routes** (only accessible when logged in)
* 🏠 **Home Page** with CTA (Shop Now button)
* 🛍️ **Products Page**

  * View all products
  * Sort by Price (High → Low / Low → High)
  * Exclusive Prime Deals section
* 🛒 **Cart Page** with cart preview
* ❌ **Not Found Page** for invalid routes
* 🔓 **Logout** functionality with token removal

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router DOM v6
* **State Management:** React state
* **Styling:** CSS (responsive design)
* **Authentication:** JWT via `js-cookie`
* **API Calls:** `fetch`
* **Loader:** `react-loader-spinner`

---

## 📂 Project Structure

```
NxtTrendz/
│── src/
│   ├── components/
│   │   ├── LoginForm/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Cart/
│   │   ├── Header/
│   │   ├── ProductCard/
│   │   ├── ProductsHeader/
│   │   ├── AllProductsSection/
│   │   ├── PrimeDealsSection/
│   │   ├── ProtectedRoute/
│   │   └── NotFound/
│   ├── App.js
│   ├── App.css
│   └── index.js
│── public/
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/nikhilesh-git/NxtTrendz.git
   cd NxtTrendz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm start
   ```

   The app will run at 👉 `http://localhost:3000`

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 🔑 Authentication

* Login API: `https://apis.ccbp.in/login`
* Products API: `https://apis.ccbp.in/products`
* Prime Deals API: `https://apis.ccbp.in/prime-deals`
* JWT Token is stored in **Cookies** (`jwt_token`).
* Token is cleared on logout.

---

## 🌍 Deployment

website Live at: 'https://nxttrendz-70hv.onrender.com/'
You can deploy this app on **Render, Netlify, or Vercel**.
Example (Render):

* Connect repo to Render
* Add `Build Command`: `npm run build`
* Add `Publish Directory`: `build/`


