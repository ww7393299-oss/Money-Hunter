# 📈 Money Hunter - Groww-Style Stock Trading Platform

![Money Hunter Platform](https://img.shields.io/badge/Platform-Money%20Hunter-00d09c?style=for-the-badge&logo=line)
![Version](https://img.shields.io/badge/Version-1.0.0-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Money Hunter** is a feature-rich, high-performance web-based stock trading and investment platform inspired by **Groww**. Designed and built for seamless frontend stock market operations, real-time price tick simulation, MTF (Margin Trading Facility), Stock BeES (ETFs), interactive charts, and virtual wallet management.

> **Founder & CEO:** Naresh Yadav  
> **Built With:** HTML5, CSS3 (Obsidian Dark Design System), Vanilla JavaScript (ES6+), HTML5 Canvas API, LocalStorage State Management.

---

## 🔥 Key Features

- **🌙 Groww Obsidian Dark Aesthetic**: Custom dark theme (`#0b0e14`) with Emerald Green (`#00d09c`) profit indicators, Coral Red (`#ff4d4f`) loss indicators, and smooth glassmorphism.
- **📊 Real-Time Market Ticker**: Live updating indices marquee (NIFTY 50, SENSEX, BANK NIFTY, NIFTY IT, GOLD BEES) with point fluctuations every 1.5 seconds.
- **⚡ MTF (Margin Trading Facility)**: Trade stocks with **4x - 5x purchasing power** (Pay 20% now, Money Hunter funds 80%). Includes a live Margin Buying Power Calculator.
- **🪙 Stock BeES (ETFs)**: Invest in low-risk index basket ETFs including NiftyBeES, BankBeES, GoldBeES, ITBeES, JuniorBeES, AutoBeES, and PharmaBeES.
- **📈 Interactive Canvas Charts**: Live interactive price curve plotting with gradient area fill and multi-timeframe toggles (1D, 1W, 1M, 1Y, ALL).
- **💼 Portfolio & Holdings Manager**: Real-time Total Investment, Current Value, Overall P&L (₹ & %), 1-Day P&L, and 1-click Sell/Add More options.
- **💳 Wallet & Financial Ledger**: Add Money via simulated UPI (GPay, PhonePe, Paytm) & Netbanking, Withdraw Funds to linked bank accounts, and filterable Passbook statement.
- **🔍 Instant Stock Search**: Autocomplete search bar for 24+ stocks with keyboard shortcut (`Ctrl + K`).
- **🔐 LocalStorage Persistence**: Holds wallet balance, user profile, portfolio holdings, and transaction history locally without requiring a backend.

---

## 🛠️ Project Structure

```text
money-hunter/
├── index.html       # Main application markup & Groww-style UI layout
├── styles.css       # Complete Obsidian Dark theme & glassmorphism styling
├── app.js           # Stock data engine, live ticks, Canvas charts, order execution & wallet
└── README.md        # Comprehensive documentation & setup guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Run a lightweight HTTP server using Node.js:

```bash
# Using npx http-server
npx http-server . -p 8080

# Or using Python built-in server
python -m http.server 8080
```

Then open your browser and navigate to:
`http://localhost:8080`

---

## 👨‍💻 Founder Credits

**Money Hunter** is conceptualized and founded by **Naresh Yadav**.

- **Platform Name:** Money Hunter
- **Founder:** Naresh Yadav
- **License:** MIT License

---

*Disclaimer: Money Hunter is a simulated stock market trading frontend application developed for educational and portfolio demonstration purposes.*
