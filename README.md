
# 🛍️ NxtTrendz – E-Commerce React App

**NxtTrendz** is a **React-based e-commerce web application** that allows users to **login, browse products, view exclusive Prime deals, add products to cart, and logout securely**. It uses **JWT authentication**, **protected routes**, and integrates with backend APIs.

---

## 🚀 Features

* 🔑 **Login Authentication** using JWT tokens
* 🛡️ **Protected Routes** (only accessible when logged in)
* 🏠 **Home Page** with CTA (Shop Now button)
* 🛍️ **Products Page**

  * View all products
  * Sort products by Price (High → Low / Low → High)
  * Exclusive **Prime Deals** section (requires authorized users)
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
   cd nxt-trendz
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

* **Login API:** `https://apis.ccbp.in/login`
* **Products API:** `https://apis.ccbp.in/products`
* **Prime Deals API:** `https://apis.ccbp.in/prime-deals`
* **JWT Token:** stored in **Cookies** (`jwt_token`)
* Token is cleared on **logout**

### ✅ Prime Deals Authorization

* Accessing **Prime Deals** requires a **valid JWT token** of a prime user.
* If a non-prime user logs in, the Prime Deals section shows a **banner to register for Prime**.

**User Credentials:**

| User Type | Username | Password   |
| --------- | -------- | ---------- |
| Non-Prime | raja     | raja@2021  |
| Prime     | rahul    | rahul@2021 |

---

## 🌍 Deployment

**Live Demo:** [https://nxttrendz-70hv.onrender.com/](https://nxttrendz-70hv.onrender.com/)

You can deploy this app on **Render, Netlify, or Vercel**.

**Render Setup Example:**

* Connect your GitHub repo to Render
* **Build Command:** `npm run build`
* **Publish Directory:** `build/`

### Important for React Router

To handle client-side routing:

1. Add a `_redirects` file inside `public/`:

```
/* /index.html 200
```

2. Commit and push, then redeploy.

**Alternatively:** Use `HashRouter` instead of `BrowserRouter` if you want SPA routing to work without server configuration.

---

## 📝 Notes

* Only logged-in users can access protected routes (`/`, `/products`, `/cart`)
* Unknown routes redirect to the **Not Found Page**
* Exclusive Prime Deals require authorization (JWT token for prime users)

