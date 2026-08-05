/* ==========================================================================
   MONEY HUNTER - CORE TRADING & MARKET ENGINE
   Founded by Naresh Yadav
   ========================================================================== */

// Initial Database of 24+ Stocks and ETFs
const INITIAL_STOCKS_DATA = [
    // Top Large Cap & Tech Stocks
    { symbol: "RELIANCE", name: "Reliance Industries Ltd", category: "largecap", price: 2940.50, change: 35.20, changePct: 1.21, dayLow: 2910.00, dayHigh: 2958.00, high52: 3217.00, mktCap: "19.8L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "TCS", name: "Tata Consultancy Services", category: "tech", price: 4210.80, change: 58.40, changePct: 1.41, dayLow: 4150.00, dayHigh: 4235.00, high52: 4585.00, mktCap: "15.2L Cr", mtf: true, marginX: 5, isBees: false },
    { symbol: "HDFCBANK", name: "HDFC Bank Limited", category: "banking", price: 1625.30, change: -12.40, changePct: -0.76, dayLow: 1610.00, dayHigh: 1642.00, high52: 1794.00, mktCap: "12.4L Cr", mtf: true, marginX: 5, isBees: false },
    { symbol: "INFY", name: "Infosys Limited", category: "tech", price: 1785.40, change: 24.10, changePct: 1.37, dayLow: 1760.00, dayHigh: 1798.00, high52: 1953.00, mktCap: "7.4L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "TATAMOTORS", name: "Tata Motors Limited", category: "auto", price: 1045.60, change: 32.50, changePct: 3.21, dayLow: 1015.00, dayHigh: 1058.00, high52: 1179.00, mktCap: "3.8L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "ZOMATO", name: "Zomato Limited", category: "tech", price: 264.20, change: 12.80, changePct: 5.09, dayLow: 252.00, dayHigh: 268.00, high52: 298.00, mktCap: "2.3L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "ICICIBANK", name: "ICICI Bank Limited", category: "banking", price: 1210.15, change: 8.70, changePct: 0.72, dayLow: 1198.00, dayHigh: 1222.00, high52: 1258.00, mktCap: "8.5L Cr", mtf: true, marginX: 5, isBees: false },
    { symbol: "SBIN", name: "State Bank of India", category: "banking", price: 845.90, change: -6.30, changePct: -0.74, dayLow: 838.00, dayHigh: 856.00, high52: 912.00, mktCap: "7.5L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "WIPRO", name: "Wipro Limited", category: "tech", price: 532.40, change: 6.80, changePct: 1.29, dayLow: 524.00, dayHigh: 538.00, high52: 585.00, mktCap: "2.7L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "BHARTIARTL", name: "Bharti Airtel Limited", category: "largecap", price: 1540.00, change: 18.50, changePct: 1.22, dayLow: 1520.00, dayHigh: 1555.00, high52: 1620.00, mktCap: "8.9L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "ADANIENT", name: "Adani Enterprises Ltd", category: "largecap", price: 3120.75, change: -42.10, changePct: -1.33, dayLow: 3090.00, dayHigh: 3180.00, high52: 3740.00, mktCap: "3.5L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "LT", name: "Larsen & Toubro Ltd", category: "largecap", price: 3680.50, change: 41.20, changePct: 1.13, dayLow: 3630.00, dayHigh: 3710.00, high52: 3940.00, mktCap: "5.1L Cr", mtf: true, marginX: 4, isBees: false },
    { symbol: "BAJFINANCE", name: "Bajaj Finance Limited", category: "banking", price: 6890.30, change: -85.00, changePct: -1.22, dayLow: 6840.00, dayHigh: 6990.00, high52: 7850.00, mktCap: "4.2L Cr", mtf: true, marginX: 4, isBees: false },

    // Stock BeES (ETFs)
    { symbol: "NIFTYBEES", name: "Nippon India Nifty 50 BeES", category: "bees", price: 268.45, change: 1.55, changePct: 0.58, dayLow: 266.10, dayHigh: 269.80, high52: 285.00, mktCap: "ETF Index", mtf: false, marginX: 1, isBees: true },
    { symbol: "BANKBEES", name: "Nippon India Bank BeES", category: "bees", price: 542.10, change: -1.10, changePct: -0.20, dayLow: 539.00, dayHigh: 546.00, high52: 578.00, mktCap: "ETF Banking", mtf: false, marginX: 1, isBees: true },
    { symbol: "GOLDBEES", name: "Nippon India Gold BeES", category: "bees", price: 68.45, change: 0.45, changePct: 0.66, dayLow: 67.80, dayHigh: 68.90, high52: 74.00, mktCap: "ETF Gold", mtf: false, marginX: 1, isBees: true },
    { symbol: "ITBEES", name: "Nippon India IT BeES", category: "bees", price: 42.80, change: 0.60, changePct: 1.42, dayLow: 42.10, dayHigh: 43.10, high52: 48.50, mktCap: "ETF Tech", mtf: false, marginX: 1, isBees: true },
    { symbol: "JUNIORBEES", name: "Nippon India Nifty Next 50 BeES", category: "bees", price: 780.20, change: 9.40, changePct: 1.22, dayLow: 770.00, dayHigh: 788.00, high52: 840.00, mktCap: "ETF Next 50", mtf: false, marginX: 1, isBees: true },
    { symbol: "AUTOBEES", name: "Nippon India Nifty Auto BeES", category: "bees", price: 245.80, change: 4.30, changePct: 1.78, dayLow: 241.00, dayHigh: 248.00, high52: 265.00, mktCap: "ETF Auto", mtf: false, marginX: 1, isBees: true },
    { symbol: "PHARMABEES", name: "Nippon India Pharma BeES", category: "bees", price: 215.30, change: 1.20, changePct: 0.56, dayLow: 213.50, dayHigh: 217.00, high52: 232.00, mktCap: "ETF Pharma", mtf: false, marginX: 1, isBees: true }
];

// STATE MANAGEMENT WITH LOCALSTORAGE
class Store {
    static getWalletBalance() {
        const bal = localStorage.getItem("mh_wallet_balance");
        return bal !== null ? parseFloat(bal) : 100000.00; // Starting ₹1,00,000
    }
    static setWalletBalance(val) {
        localStorage.setItem("mh_wallet_balance", val.toFixed(2));
    }
    static getHoldings() {
        const h = localStorage.getItem("mh_holdings");
        return h ? JSON.parse(h) : [];
    }
    static saveHoldings(holdings) {
        localStorage.setItem("mh_holdings", JSON.stringify(holdings));
    }
    static getTransactions() {
        const t = localStorage.getItem("mh_transactions");
        return t ? JSON.parse(t) : [
            { id: "TXN-98401", date: new Date().toLocaleString(), type: "DEPOSIT", desc: "Welcome Bonus Virtual Deposit", amount: 100000, status: "SUCCESS" }
        ];
    }
    static saveTransactions(txns) {
        localStorage.setItem("mh_transactions", JSON.stringify(txns));
    }
    static getUser() {
        const u = localStorage.getItem("mh_user");
        return u ? JSON.parse(u) : { name: "Naresh Yadav", contact: "+91 9876543210", isLogged: true };
    }
    static saveUser(user) {
        localStorage.setItem("mh_user", JSON.stringify(user));
    }
}

// APPLICATION STATE
let stocksData = [...INITIAL_STOCKS_DATA];
let selectedStock = stocksData[0];
let activeTimeframe = "1D";
let orderSide = "BUY"; // BUY or SELL

// SOUND EFFECTS GENERATOR (Web Audio API)
function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === "buy") {
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } else if (type === "sell") {
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        }
    } catch (e) {
        // Audio context fallback
    }
}

// TOAST NOTIFICATIONS
function showToast(message, isError = false) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${isError ? 'toast-error' : ''}`;
    toast.innerHTML = `
        <i class="fa-solid ${isError ? 'fa-circle-xmark text-down' : 'fa-circle-check text-up'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// REAL-TIME PRICE TICK SIMULATION
function startLiveTicker() {
    setInterval(() => {
        // Pick 2 random stocks to fluctuate price
        const randomIndex1 = Math.floor(Math.random() * stocksData.length);
        const randomIndex2 = Math.floor(Math.random() * stocksData.length);

        [randomIndex1, randomIndex2].forEach(idx => {
            const stock = stocksData[idx];
            const pctDelta = (Math.random() * 0.8 - 0.39) / 100; // -0.39% to +0.41%
            const oldPrice = stock.price;
            const newPrice = Math.max(10, oldPrice * (1 + pctDelta));
            const change = newPrice - (oldPrice - stock.change);
            const changePct = (change / (oldPrice - stock.change)) * 100;

            stock.price = parseFloat(newPrice.toFixed(2));
            stock.change = parseFloat(change.toFixed(2));
            stock.changePct = parseFloat(changePct.toFixed(2));

            // Trigger UI updates
            updateStockCardUI(stock, newPrice > oldPrice);
        });

        updateIndexTickerBar();
        updatePortfolioSummary();
    }, 1500);
}

function updateIndexTickerBar() {
    const niftyVal = 24520.40 + (Math.random() * 20 - 10);
    const sensexVal = 80432.15 + (Math.random() * 60 - 30);
    document.querySelector("#ticker-nifty .ticker-val").textContent = niftyVal.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    document.querySelector("#ticker-sensex .ticker-val").textContent = sensexVal.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

function updateStockCardUI(stock, isUp) {
    const cards = document.querySelectorAll(`.stock-card[data-symbol="${stock.symbol}"]`);
    cards.forEach(card => {
        const priceEl = card.querySelector(".stock-price");
        const changeEl = card.querySelector(".stock-change");
        if (priceEl) {
            priceEl.textContent = `₹${stock.price.toFixed(2)}`;
            priceEl.className = `stock-price ${isUp ? 'price-pulse-up' : 'price-pulse-down'}`;
        }
        if (changeEl) {
            changeEl.textContent = `${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePct.toFixed(2)}%)`;
            changeEl.className = `stock-change ${stock.change >= 0 ? 'text-up' : 'text-down'}`;
        }
    });

    // If active in modal, update modal price too
    if (selectedStock && selectedStock.symbol === stock.symbol) {
        document.getElementById("modalStockPrice").textContent = `₹${stock.price.toFixed(2)}`;
        const modChange = document.getElementById("modalStockChange");
        modChange.textContent = `${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePct.toFixed(2)}%)`;
        modChange.className = `price-change ${stock.change >= 0 ? 'up' : 'down'}`;
        updateOrderSummary();
    }
}

// NAVIGATION TABS
function switchTab(tabId) {
    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    document.querySelectorAll(".tab-view").forEach(view => {
        view.classList.toggle("active", view.id === `view-${tabId}`);
    });

    if (tabId === "holdings") renderHoldingsTable();
    if (tabId === "wallet") renderWalletDashboard();
}

// RENDER STOCKS GRID
function renderStocksGrid(filter = "all", containerId = "exploreStocksGrid") {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filtered = stocksData;
    if (filter === "mtf") filtered = stocksData.filter(s => s.mtf);
    else if (filter === "bees") filtered = stocksData.filter(s => s.isBees);
    else if (filter !== "all") filtered = stocksData.filter(s => s.category === filter);

    container.innerHTML = filtered.map(stock => `
        <div class="stock-card" data-symbol="${stock.symbol}" onclick="openTradeModal('${stock.symbol}')">
            <div class="stock-card-top">
                <div>
                    <h3 class="stock-name">${stock.name}</h3>
                    <div class="stock-sub">${stock.symbol} ${stock.mtf ? '<span class="badge badge-mtf">MTF 4x</span>' : ''}</div>
                </div>
                <div class="stock-logo-circle">${stock.symbol.charAt(0)}</div>
            </div>
            <div class="stock-card-bottom">
                <div class="stock-price">₹${stock.price.toFixed(2)}</div>
                <div class="stock-change ${stock.change >= 0 ? 'text-up' : 'text-down'}">
                    ${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePct.toFixed(2)}%)
                </div>
            </div>
        </div>
    `).join("");
}

// RENDER TOP GAINERS & LOSERS
function renderGainersLosers() {
    const sorted = [...stocksData].sort((a, b) => b.changePct - a.changePct);
    const gainers = sorted.slice(0, 4);
    const losers = sorted.slice(-4).reverse();

    const gList = document.getElementById("topGainersList");
    const lList = document.getElementById("topLosersList");

    if (gList) {
        gList.innerHTML = gainers.map(s => `
            <div class="list-row" onclick="openTradeModal('${s.symbol}')">
                <div>
                    <strong>${s.symbol}</strong>
                    <div class="text-muted" style="font-size: 11px;">${s.name}</div>
                </div>
                <div style="text-align: right;">
                    <div>₹${s.price.toFixed(2)}</div>
                    <div class="text-up" style="font-size: 12px; font-weight:700;">+${s.changePct}%</div>
                </div>
            </div>
        `).join("");
    }

    if (lList) {
        lList.innerHTML = losers.map(s => `
            <div class="list-row" onclick="openTradeModal('${s.symbol}')">
                <div>
                    <strong>${s.symbol}</strong>
                    <div class="text-muted" style="font-size: 11px;">${s.name}</div>
                </div>
                <div style="text-align: right;">
                    <div>₹${s.price.toFixed(2)}</div>
                    <div class="text-down" style="font-size: 12px; font-weight:700;">${s.changePct}%</div>
                </div>
            </div>
        `).join("");
    }
}

// HTML5 CANVAS STOCK CHART RENDERER
function drawStockChart(symbol, timeframe) {
    const canvas = document.getElementById("stockChartCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate price curve points
    const pointsCount = 40;
    const points = [];
    let currentPrice = selectedStock.price;
    const isUp = selectedStock.change >= 0;

    for (let i = 0; i < pointsCount; i++) {
        const noise = (Math.sin(i * 0.5) + Math.random() * 0.8 - 0.4) * (currentPrice * 0.015);
        points.push(currentPrice - (pointsCount - i) * (isUp ? 0.8 : -0.8) + noise);
    }

    const minPrice = Math.min(...points);
    const maxPrice = Math.max(...points);
    const range = maxPrice - minPrice || 1;

    // Draw Gradient Background
    const strokeColor = isUp ? "#00d09c" : "#ff4d4f";
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, isUp ? "rgba(0, 208, 156, 0.25)" : "rgba(255, 77, 79, 0.25)");
    gradient.addColorStop(1, "rgba(11, 14, 20, 0)");

    ctx.beginPath();
    const stepX = canvas.width / (pointsCount - 1);

    points.forEach((pt, idx) => {
        const x = idx * stepX;
        const y = canvas.height - 30 - ((pt - minPrice) / range) * (canvas.height - 60);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    // Stroke line
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Fill area
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
}

// TRADE MODAL CONTROLLER
function openTradeModal(symbol) {
    const stock = stocksData.find(s => s.symbol === symbol);
    if (!stock) return;
    selectedStock = stock;

    document.getElementById("modalStockName").textContent = stock.name;
    document.getElementById("modalStockSymbol").textContent = stock.symbol;
    document.getElementById("modalStockIcon").textContent = stock.symbol.charAt(0);
    document.getElementById("modalStockPrice").textContent = `₹${stock.price.toFixed(2)}`;
    document.getElementById("modalDayLow").textContent = `₹${stock.dayLow.toFixed(2)}`;
    document.getElementById("modalDayHigh").textContent = `₹${stock.dayHigh.toFixed(2)}`;
    document.getElementById("modal52High").textContent = `₹${stock.high52.toFixed(2)}`;
    document.getElementById("modalMktCap").textContent = stock.mktCap;

    const changeEl = document.getElementById("modalStockChange");
    changeEl.textContent = `${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePct.toFixed(2)}%)`;
    changeEl.className = `price-change ${stock.change >= 0 ? 'up' : 'down'}`;

    const mtfBadge = document.getElementById("modalStockMtfBadge");
    if (stock.mtf) {
        mtfBadge.style.display = "inline-block";
        mtfBadge.textContent = `MTF ${stock.marginX}x`;
    } else {
        mtfBadge.style.display = "none";
    }

    document.getElementById("orderPrice").value = stock.price.toFixed(2);
    updateOrderSummary();
    drawStockChart(symbol, activeTimeframe);

    document.getElementById("tradeModal").classList.add("active");
}

function updateOrderSummary() {
    const qty = parseInt(document.getElementById("orderQty").value) || 1;
    const price = selectedStock.price;
    const pType = document.querySelector('input[name="productType"]:checked').value;

    let reqAmt = qty * price;
    if (pType === "MTF" && selectedStock.mtf) {
        reqAmt = reqAmt / selectedStock.marginX; // e.g. 1/4th amount required
    }

    document.getElementById("orderRequiredAmt").textContent = `₹${reqAmt.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    document.getElementById("orderAvailBal").textContent = `₹${Store.getWalletBalance().toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

// TRADE EXECUTION (BUY & SELL)
function handleOrderSubmit(e) {
    e.preventDefault();
    const qty = parseInt(document.getElementById("orderQty").value);
    const pType = document.querySelector('input[name="productType"]:checked').value;
    const price = selectedStock.price;
    let reqAmt = qty * price;

    if (pType === "MTF" && selectedStock.mtf) {
        reqAmt = reqAmt / selectedStock.marginX;
    }

    const currentBal = Store.getWalletBalance();

    if (orderSide === "BUY") {
        if (reqAmt > currentBal) {
            showToast("Insufficient Wallet Balance! Add funds to place order.", true);
            return;
        }

        // Deduct balance
        const newBal = currentBal - reqAmt;
        Store.setWalletBalance(newBal);

        // Add to holdings
        const holdings = Store.getHoldings();
        const existing = holdings.find(h => h.symbol === selectedStock.symbol && h.pType === pType);

        if (existing) {
            const totalCost = (existing.qty * existing.avgPrice) + (qty * price);
            existing.qty += qty;
            existing.avgPrice = totalCost / existing.qty;
        } else {
            holdings.push({
                symbol: selectedStock.symbol,
                name: selectedStock.name,
                qty: qty,
                avgPrice: price,
                pType: pType
            });
        }

        Store.saveHoldings(holdings);

        // Add transaction log
        const txns = Store.getTransactions();
        txns.unshift({
            id: `BUY-${Math.floor(100000 + Math.random() * 900000)}`,
            date: new Date().toLocaleString(),
            type: "BUY",
            desc: `Bought ${qty} qty of ${selectedStock.symbol} (${pType})`,
            amount: reqAmt,
            status: "SUCCESS"
        });
        Store.saveTransactions(txns);

        playSound("buy");
        showToast(`Successfully Bought ${qty} shares of ${selectedStock.symbol}!`);
    } else {
        // SELL ORDER
        const holdings = Store.getHoldings();
        const index = holdings.findIndex(h => h.symbol === selectedStock.symbol && h.pType === pType);

        if (index === -1 || holdings[index].qty < qty) {
            showToast("You don't own enough shares to sell!", true);
            return;
        }

        holdings[index].qty -= qty;
        if (holdings[index].qty === 0) holdings.splice(index, 1);
        Store.saveHoldings(holdings);

        // Add proceeds back to wallet
        const proceeds = qty * price;
        Store.setWalletBalance(currentBal + proceeds);

        // Transaction log
        const txns = Store.getTransactions();
        txns.unshift({
            id: `SELL-${Math.floor(100000 + Math.random() * 900000)}`,
            date: new Date().toLocaleString(),
            type: "SELL",
            desc: `Sold ${qty} qty of ${selectedStock.symbol} (${pType})`,
            amount: proceeds,
            status: "SUCCESS"
        });
        Store.saveTransactions(txns);

        playSound("sell");
        showToast(`Successfully Sold ${qty} shares of ${selectedStock.symbol}!`);
    }

    updateHeaderWalletUI();
    document.getElementById("tradeModal").classList.remove("active");
    renderHoldingsTable();
}

// PORTFOLIO & HOLDINGS RENDERER
function renderHoldingsTable() {
    const holdings = Store.getHoldings();
    const tableBody = document.getElementById("holdingsTableBody");
    const emptyState = document.getElementById("emptyHoldingsState");
    const badgeEl = document.getElementById("holdingsBadge");

    if (badgeEl) badgeEl.textContent = holdings.length;

    if (!holdings || holdings.length === 0) {
        if (tableBody) tableBody.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        updatePortfolioSummary();
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    let totalInv = 0;
    let currentVal = 0;

    tableBody.innerHTML = holdings.map(h => {
        const liveStock = stocksData.find(s => s.symbol === h.symbol) || { price: h.avgPrice };
        const itemVal = h.qty * liveStock.price;
        const itemCost = h.qty * h.avgPrice;
        const pnl = itemVal - itemCost;
        const pnlPct = (pnl / itemCost) * 100;

        totalInv += itemCost;
        currentVal += itemVal;

        return `
            <tr>
                <td>
                    <strong>${h.symbol}</strong>
                    <div class="text-muted" style="font-size:12px;">${h.name}</div>
                </td>
                <td><span class="badge ${h.pType === 'MTF' ? 'badge-mtf' : 'badge-success'}">${h.pType}</span></td>
                <td><strong>${h.qty}</strong></td>
                <td>₹${h.avgPrice.toFixed(2)}</td>
                <td>₹${liveStock.price.toFixed(2)}</td>
                <td>₹${itemVal.toFixed(2)}</td>
                <td class="${pnl >= 0 ? 'text-up' : 'text-down'}" style="font-weight:700;">
                    ${pnl >= 0 ? '+' : ''}₹${pnl.toFixed(2)} (${pnlPct.toFixed(2)}%)
                </td>
                <td>
                    <button class="btn btn-sm btn-outline" onclick="openTradeModal('${h.symbol}')">Trade</button>
                </td>
            </tr>
        `;
    }).join("");

    updatePortfolioSummary(totalInv, currentVal);
}

function updatePortfolioSummary(totalInv = 0, currentVal = 0) {
    const holdings = Store.getHoldings();
    if (totalInv === 0 && holdings.length > 0) {
        holdings.forEach(h => {
            const liveStock = stocksData.find(s => s.symbol === h.symbol) || { price: h.avgPrice };
            totalInv += h.qty * h.avgPrice;
            currentVal += h.qty * liveStock.price;
        });
    }

    const returns = currentVal - totalInv;
    const returnsPct = totalInv > 0 ? (returns / totalInv) * 100 : 0;

    document.getElementById("portTotalInvested").textContent = `₹${totalInv.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    document.getElementById("portCurrentVal").textContent = `₹${currentVal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

    const retEl = document.getElementById("portTotalReturns");
    retEl.textContent = `${returns >= 0 ? '+' : ''}₹${returns.toFixed(2)} (${returnsPct.toFixed(2)}%)`;
    retEl.className = `box-value ${returns >= 0 ? 'text-up' : 'text-down'}`;
}

// WALLET DASHBOARD & TRANSACTIONS
function renderWalletDashboard() {
    const bal = Store.getWalletBalance();
    document.getElementById("walletAvailableBalance").textContent = `₹${bal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    document.getElementById("walletWithdrawable").textContent = `₹${bal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

    const txns = Store.getTransactions();
    const tbody = document.getElementById("walletTransactionsBody");
    if (tbody) {
        tbody.innerHTML = txns.map(t => `
            <tr>
                <td>${t.date}</td>
                <td><span class="badge ${t.type === 'DEPOSIT' || t.type === 'SELL' ? 'badge-success' : 'badge-mtf'}">${t.type}</span></td>
                <td>${t.desc}</td>
                <td class="${t.type === 'DEPOSIT' || t.type === 'SELL' ? 'text-up' : 'text-down'}" style="font-weight:700;">
                    ${t.type === 'DEPOSIT' || t.type === 'SELL' ? '+' : '-'}₹${t.amount.toLocaleString('en-IN')}
                </td>
                <td><span class="text-up" style="font-size:12px; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${t.status}</span></td>
            </tr>
        `).join("");
    }
}

function updateHeaderWalletUI() {
    const bal = Store.getWalletBalance();
    document.getElementById("headerBalance").textContent = bal.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

// ADD MONEY ENGINE
function setAddAmount(val) {
    document.getElementById("addAmountInput").value = val;
}

function handleAddMoney() {
    const amt = parseFloat(document.getElementById("addAmountInput").value);
    if (!amt || amt < 100) {
        showToast("Minimum deposit amount is ₹100", true);
        return;
    }

    const newBal = Store.getWalletBalance() + amt;
    Store.setWalletBalance(newBal);

    const txns = Store.getTransactions();
    txns.unshift({
        id: `DEP-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleString(),
        type: "DEPOSIT",
        desc: "Add Funds via Instant UPI",
        amount: amt,
        status: "SUCCESS"
    });
    Store.saveTransactions(txns);

    updateHeaderWalletUI();
    document.getElementById("addMoneyModal").classList.remove("active");
    showToast(`Added ₹${amt.toLocaleString('en-IN')} successfully!`);
}

// WITHDRAW FUNDS ENGINE
function handleWithdrawFunds() {
    const amt = parseFloat(document.getElementById("withdrawAmountInput").value);
    const currentBal = Store.getWalletBalance();

    if (!amt || amt < 100) {
        showToast("Minimum withdrawal amount is ₹100", true);
        return;
    }
    if (amt > currentBal) {
        showToast("Withdrawal amount exceeds available balance!", true);
        return;
    }

    Store.setWalletBalance(currentBal - amt);

    const txns = Store.getTransactions();
    txns.unshift({
        id: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleString(),
        type: "WITHDRAW",
        desc: "Withdrawal to HDFC Bank (**** 4892)",
        amount: amt,
        status: "SUCCESS"
    });
    Store.saveTransactions(txns);

    updateHeaderWalletUI();
    document.getElementById("withdrawModal").classList.remove("active");
    showToast(`Withdrawn ₹${amt.toLocaleString('en-IN')} to Bank Account!`);
}

// SEARCH AUTOCOMPLETE ENGINE
function setupSearch() {
    const input = document.getElementById("searchInput");
    const dropdown = document.getElementById("searchResults");

    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            dropdown.style.display = "none";
            return;
        }

        const results = stocksData.filter(s =>
            s.symbol.toLowerCase().includes(query) ||
            s.name.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            dropdown.innerHTML = `<div style="padding:12px; text-align:center; color:var(--text-muted);">No stocks found</div>`;
        } else {
            dropdown.innerHTML = results.map(s => `
                <div class="search-result-item" onclick="openTradeModal('${s.symbol}'); document.getElementById('searchResults').style.display='none';">
                    <div>
                        <div class="item-symbol">${s.symbol}</div>
                        <div class="item-name">${s.name}</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:700;">₹${s.price.toFixed(2)}</div>
                        <div class="${s.change >= 0 ? 'text-up' : 'text-down'}" style="font-size:11px;">${s.changePct}%</div>
                    </div>
                </div>
            `).join("");
        }
        dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            dropdown.style.display = "none";
        }
    });

    // Keyboard shortcut Ctrl+K
    window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            input.focus();
        }
    });
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    updateHeaderWalletUI();
    renderStocksGrid("all", "exploreStocksGrid");
    renderStocksGrid("mtf", "mtfStocksGrid");
    renderStocksGrid("bees", "beesGrid");
    renderGainersLosers();
    setupSearch();
    startLiveTicker();

    // Event Listeners for Nav
    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    document.getElementById("brandLogo").addEventListener("click", () => switchTab("explore"));
    document.getElementById("headerWalletBtn").addEventListener("click", () => switchTab("wallet"));

    // Sector Filter Pills
    document.getElementById("sectorPills").addEventListener("click", (e) => {
        if (e.target.classList.contains("pill")) {
            document.querySelectorAll("#sectorPills .pill").forEach(p => p.classList.remove("active"));
            e.target.classList.add("active");
            renderStocksGrid(e.target.dataset.filter, "exploreStocksGrid");
        }
    });

    // Trade Modal Controls
    document.getElementById("closeTradeModalBtn").addEventListener("click", () => {
        document.getElementById("tradeModal").classList.remove("active");
    });

    document.getElementById("orderBuyTab").addEventListener("click", () => {
        orderSide = "BUY";
        document.getElementById("orderBuyTab").classList.add("active");
        document.getElementById("orderSellTab").classList.remove("active");
        const submitBtn = document.getElementById("submitOrderBtn");
        submitBtn.className = "btn btn-success btn-block btn-lg";
        submitBtn.innerHTML = `<i class="fa-solid fa-bolt"></i> PLACE BUY ORDER`;
    });

    document.getElementById("orderSellTab").addEventListener("click", () => {
        orderSide = "SELL";
        document.getElementById("orderSellTab").classList.add("active");
        document.getElementById("orderBuyTab").classList.remove("active");
        const submitBtn = document.getElementById("submitOrderBtn");
        submitBtn.className = "btn btn-danger btn-block btn-lg";
        submitBtn.style.backgroundColor = "var(--color-down)";
        submitBtn.innerHTML = `<i class="fa-solid fa-fire"></i> PLACE SELL ORDER`;
    });

    document.querySelectorAll('input[name="productType"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('active'));
            e.target.closest('.radio-card').classList.add('active');
            updateOrderSummary();
        });
    });

    document.getElementById("orderQty").addEventListener("input", updateOrderSummary);
    document.getElementById("orderForm").addEventListener("submit", handleOrderSubmit);

    // MTF Calc
    const mtfInput = document.getElementById("mtfCalcInput");
    if (mtfInput) {
        mtfInput.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value) || 0;
            document.getElementById("mtfCalcPower").textContent = `₹${(val * 4).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
        });
    }

    // Add / Withdraw Money Modals
    document.getElementById("openAddMoneyBtn").addEventListener("click", () => {
        document.getElementById("addMoneyModal").classList.add("active");
    });
    document.getElementById("closeAddMoneyBtn").addEventListener("click", () => {
        document.getElementById("addMoneyModal").classList.remove("active");
    });
    document.getElementById("confirmAddMoneyBtn").addEventListener("click", handleAddMoney);

    document.getElementById("openWithdrawBtn").addEventListener("click", () => {
        document.getElementById("withdrawModalMax").textContent = `₹${Store.getWalletBalance().toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
        document.getElementById("withdrawModal").classList.add("active");
    });
    document.getElementById("closeWithdrawBtn").addEventListener("click", () => {
        document.getElementById("withdrawModal").classList.remove("active");
    });
    document.getElementById("confirmWithdrawBtn").addEventListener("click", handleWithdrawFunds);

    // Auth Modal
    document.getElementById("openAuthModalBtn").addEventListener("click", () => {
        const u = Store.getUser();
        if (u && u.isLogged) {
            document.getElementById("authFormView").style.display = "none";
            document.getElementById("userProfileView").style.display = "block";
        } else {
            document.getElementById("authFormView").style.display = "block";
            document.getElementById("userProfileView").style.display = "none";
        }
        document.getElementById("authModal").classList.add("active");
    });

    document.getElementById("closeAuthBtn").addEventListener("click", () => {
        document.getElementById("authModal").classList.remove("active");
    });

    document.getElementById("loginSubmitBtn").addEventListener("click", () => {
        const u = { name: "Naresh Yadav", contact: "+91 9876543210", isLogged: true };
        Store.saveUser(u);
        document.getElementById("authBtnText").textContent = "Profile";
        document.getElementById("authModal").classList.remove("active");
        showToast("Welcome back to Money Hunter, Naresh Yadav!");
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
        Store.saveUser({ name: "", contact: "", isLogged: false });
        document.getElementById("authBtnText").textContent = "Sign In";
        document.getElementById("authModal").classList.remove("active");
        showToast("Logged out successfully.");
    });
});
