line_num,js_code
1,"// Annie\'s Lodge Phase 1 JavaScript - TechNexus MW
// Data (from your CSVs)
const ROOMS = [
  {site: ""Zomba HQ"", id: ""Z001"", type: ""Standard Single"", rate: 45, img: ""zomba_standard_single.jpg"", amenities: ""En-suite, WiFi""},
  {site: ""Zomba HQ"", id: ""Z002"", type: ""Standard Double"", rate: 55, img: ""zomba_double.jpg"", amenities: ""En-suite, AC""},
  {site: ""Lilongwe Area 10"", id: ""L001"", type: ""Standard Single"", rate: 40, img: ""lilongwe_single.jpg"", amenities: ""WiFi, Fan""},
  {site: ""Lilongwe Area 10"", id: ""L002"", type: ""Executive Double"", rate: 65, img: ""lilongwe_exec.jpg"", amenities: ""AC, DSTV""},
  {site: ""Blantyre Nyambadwe"", id: ""B001"", type: ""Standard Double"", rate: 60, img: ""blantyre_double.jpg"", amenities: ""En-suite""},
  {site: ""Blantyre Nyambadwe"", id: ""B002"", type: ""Luxury Suite"", rate: 130, img: ""blantyre_luxury.jpg"", amenities: ""Lounge, Balcony""},
  {site: ""Cape Maclear"", id: ""C001"", type: ""Lake View Double"", rate: 70, img: ""capemaclear_lake.jpg"", amenities: ""Lake view""},
  {site: ""Cape Maclear"", id: ""C002"", type: ""Beach Suite"", rate: 140, img: ""capemaclear_beach.jpg"", amenities: ""Private beach""},
  {site: ""Liwonde"", id: ""LI001"", type: ""Safari Lodge"", rate: 50, img: ""liwonde_safari.jpg"", amenities: ""Safari views""}
];
const FB_INVENTORY = [
  {item: ""Stella Lager"", stock: 120, price: 1500, img: ""stella_lager.jpg""},
  {item: ""Heineken"", stock: 80, price: 1600, img: ""heineken.jpg""},
  {item: ""Red Wine"", stock: 24, price: 8500, img: ""red_wine.jpg""},
  {item: ""Nsima"", stock: 50, price: 800, img: ""nsima.jpg""},
  {item: ""Chicken Peri-Peri"", stock: 35, price: 4500, img: ""chicken_peri.jpg""}
];
const RESERVATIONS = [
  {site: ""Zomba HQ"", guest: ""John Doe"", room: ""Z001"", status: ""Confirmed""},
  {site: ""Lilongwe"", guest: ""Jane Smith"", room: ""L002"", status: ""Checked In""},
  {site: ""Blantyre"", guest: ""Acme Corp"", room: ""B002"", status: ""Pending""}
];
const INVOICES = [
  {id: ""INV001"", amount: ""45,000 MWK"", status: ""Paid""},
  {id: ""INV002"", amount: ""130,000 MWK"", status: ""Pending""},
  {id: ""INV003"", amount: ""75,000 MWK"", status: ""Overdue""}
];

// Init
document.addEventListener(""DOMContentLoaded"", function() {
  // Splash to app
  setTimeout(() => {
    document.getElementById(""splash"").style.opacity = ""0"";
    setTimeout(() => document.getElementById(""splash"").style.display = ""none"", 500);
    document.getElementById(""app"").style.opacity = ""1"";
  }, 2500);

  // Navigation
  document.querySelectorAll("".nav-btn"").forEach(btn => {
    btn.addEventListener(""click"", e => {
      const section = e.target.dataset.section;
      document.querySelectorAll("".section"").forEach(s => s.classList.remove(""active""));
      document.querySelectorAll("".nav-btn"").forEach(b => b.classList.remove(""active""));
      e.target.classList.add(""active"");
      document.getElementById(section).classList.add(""active"");
      if (section === ""rooms"") renderRooms();
      if (section === ""portal"") document.getElementById(""username"").focus();
    });
  });

  // Price slider
  document.getElementById(""price-filter"").addEventListener(""input"", e => {
    document.getElementById(""price-value"").textContent = ""$"" + e.target.value;
    filterRooms();
  });

  // Initial render
  renderRooms();
  renderInvoices();
});

// Rooms rendering
function renderRooms() {
  const grid = document.getElementById(""rooms-grid"");
  grid.innerHTML = ROOMS.map(room => `
    <div class=""room-card"" data-rate=""${room.rate}"" data-site=""${room.site}"">
      <img src=""images/${room.img}"" alt=""${room.type}"" class=""room-img"" loading=""lazy"">
      <div class=""room-info"">
        <h3>${room.site}</h3>
        <p class=""room-type"">${room.type}</p>
        <div class=""room-price"">$${room.rate} / night</div>
        <p class=""room-amenities"">${room.amenities}</p>
        <button class=""cta-btn"" onclick=""bookRoom('${room.id}', '${room.site}')"">Book Room</button>
      </div>
    </div>
  `).join("""");
}

// Filter rooms
function filterRooms() {
  const maxPrice = parseInt(document.getElementById(""price-filter"").value);
  const siteFilter = document.getElementById(""site-filter"").value;
  document.querySelectorAll("".room-card"").forEach(card => {
    const rate = parseInt(card.dataset.rate);
    const site = card.dataset.site;
    const show = rate <= maxPrice && (siteFilter === ""All Sites"" || site.includes(siteFilter));
    card.style.display = show ? ""block"" : ""none"";
  });
}

// Book room (WhatsApp)
function bookRoom(roomId, site) {
  const text = encodeURIComponent(`Hello, I want to book room ${roomId} at ${site}`);
  window.open(`https://wa.me/265999957608?text=${text}`, ""_blank"");
}

// ERP Login
function login() {
  const user = document.getElementById(""username"").value;
  const pass = document.getElementById(""password"").value;
  if (user === ""admin"" && pass === ""demo"") {
    document.querySelector("".login-form"").style.display = ""none"";
    document.getElementById(""erp-dashboard"").style.display = ""block"";
    initDashboard();
  } else {
    alert(""Demo credentials: admin / demo"");
  }
}

// Dashboard init
function initDashboard() {
  renderReservations();
  renderInventory();
  renderCharts();
  // Tab switching
  document.querySelectorAll("".tab-btn"").forEach(btn => {
    btn.addEventListener(""click"", e => {
      document.querySelectorAll("".tab-btn, .tab-panel"").forEach(el => el.classList.remove(""active""));
      e.target.classList.add(""active"");
      document.getElementById(e.target.dataset.tab).classList.add(""active"");
    });
  });
}

// Render tables
function renderReservations() {
  const tbody = document.querySelector(""#reservations-table tbody"");
  tbody.innerHTML = RESERVATIONS.map(r => `
    <tr>
      <td>${r.site}</td>
      <td>${r.guest}</td>
      <td>${r.room}</td>
      <td><span class=""status-${r.status.toLowerCase().replace("" "", ""-"")}"">${r.status}</span></td>
    </tr>
  `).join("""");
}

function renderInventory() {
  const tbody = document.querySelector(""#inventory-table tbody"");
  tbody.innerHTML = FB_INVENTORY.map(item => {
    const lowStock = item.stock < 30 ? ""low-stock"" : """";
    return `
      <tr>
        <td><img src=""images/${item.img}"" width=""40"" height=""40"" style=""border-radius: 5px;""> ${item.item}</td>
        <td class=""${lowStock}"">${item.stock}</td>
        <td>${item.price.toLocaleString()} MWK</td>
      </tr>
    `;
  }).join("""");
}

// Charts
function renderCharts() {
  const ctx = document.getElementById(""occupancy-chart"").getContext(""2d"");
  new Chart(ctx, {
    type: ""doughnut"",
    data: {
      labels: [""Occupied"", ""Available""],
      datasets: [{
        data: [72, 28],
        backgroundColor: [""#28a745"", ""#6c757d""],
        borderWidth: 0
      }]
    },
    options: {
      cutout: ""70%"",
      plugins: { legend: { position: ""bottom"" } }
    }
  });

  const ctx2 = document.getElementById(""revenue-chart"").getContext(""2d"");
  new Chart(ctx2, {
    type: ""pie"",
    data: {
      labels: [""Rooms"", ""F&B"", ""Events""],
      datasets: [{
        data: [65, 25, 10],
        backgroundColor: [""#006400"", ""#DAA520"", ""#FF6B35""]
      }]
    },
    options: { plugins: { legend: { position: ""right"" } } }
  });
}

// Actions
function generateQuote() {
  const win = window.open("""", ""_blank"");
  win.document.write(""<h1>Annie's Lodge Quote</h1><p>Generated by TechNexus MW ERP</p><script>window.print()</script>"");
}

function generateProposal() {
  alert(""Branded PDF proposal ready for download/print!"");
}

function printInvoice() {
  window.print();
}

// Payments render
function renderInvoices() {
  const tbody = document.querySelector(""#invoices-table tbody"");
  tbody.innerHTML = INVOICES.map(inv => `
    <tr>
      <td>${inv.id}</td>
      <td>${inv.amount}</td>
      <td>${inv.due}</td>
      <td class=""status-${inv.status.toLowerCase()}"">${inv.status}</td>
      <td><button onclick=""printInvoice()"">Print</button></td>
    </tr>
  `).join("""");
}

function processPayment() {
  alert(""Payment processed via Airtel Money/TNM Mpamba. Receipt emailed."");
}

// PWA
if (""serviceWorker"" in navigator) {
  navigator.serviceWorker.register(""sw.js"").catch(() => console.log(""SW optional""));
}

// Persist demo data
localStorage.setItem(""anniesDemo"", JSON.stringify({rooms: ROOMS.length, reservations: RESERVATIONS.length}));"

