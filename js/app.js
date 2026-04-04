'use strict';

const TODAY = '2026-04-04';
const EVENTS_REVENUE = 125000;
const TAX_RATE = 0.165;
const HOUSEKEEPING_KEY = 'annies_housekeeping_v2';
const SPLASH_MS = 1800;

const IMAGE_BASE = './images/';
const roomImageCandidates = {
  Z001: ['zomba_standard_single.jpg', 'room1.jpg', 'standard-single.jpg'],
  Z002: ['zomba_standard_double.jpg', 'room2.jpg', 'standard-double.jpg'],
  Z003: ['zomba_exec_suite.jpg', 'suite.jpg', 'executive-suite.jpg'],
  L101: ['llw_standard_single.jpg', 'room3.jpg', 'lilongwe-single.jpg'],
  L102: ['llw_deluxe_double.jpg', 'room4.jpg', 'deluxe-double.jpg'],
  B201: ['bty_twin.jpg', 'room5.jpg', 'twin-room.jpg'],
  B202: ['bty_family.jpg', 'room6.jpg', 'family-room.jpg']
};

const ROOMS = [
  {site: 'Zomba HQ', room_id: 'Z001', type: 'Standard Single', rate: 45, max_occupancy: 1, board: 'BB', amenities: 'En-suite, WiFi, DSTV, Fan', img: 'zomba_standard_single.jpg'},
  {site: 'Zomba HQ', room_id: 'Z002', type: 'Standard Double', rate: 65, max_occupancy: 2, board: 'BB', amenities: 'En-suite, WiFi, DSTV, Queen Bed', img: 'zomba_standard_double.jpg'},
  {site: 'Zomba HQ', room_id: 'Z003', type: 'Executive Suite', rate: 110, max_occupancy: 2, board: 'BB', amenities: 'Lounge, Aircon, WiFi, DSTV', img: 'zomba_exec_suite.jpg'},
  {site: 'Lilongwe', room_id: 'L101', type: 'Standard Single', rate: 55, max_occupancy: 1, board: 'BB', amenities: 'En-suite, WiFi, Fan, Desk', img: 'llw_standard_single.jpg'},
  {site: 'Lilongwe', room_id: 'L102', type: 'Deluxe Double', rate: 85, max_occupancy: 2, board: 'BB', amenities: 'Aircon, WiFi, Smart TV', img: 'llw_deluxe_double.jpg'},
  {site: 'Blantyre Nyambadwe', room_id: 'B201', type: 'Standard Twin', rate: 70, max_occupancy: 2, board: 'BB', amenities: 'Twin Beds, WiFi, DSTV', img: 'bty_twin.jpg'},
  {site: 'Blantyre Nyambadwe', room_id: 'B202', type: 'Family Room', rate: 120, max_occupancy: 4, board: 'BB', amenities: '2 Beds, Lounge, Aircon, WiFi', img: 'bty_family.jpg'}
];

const GUESTS = [
  {id: 'G001', guest_name: 'Thandi Mbewe', phone: '0999000001'},
  {id: 'G002', guest_name: 'Peter Banda', phone: '0888000002'},
  {id: 'G003', guest_name: 'Chikondi Phiri', phone: '0999000003'},
  {id: 'G004', guest_name: 'Ruth Gondwe', phone: '0888000004'}
];

const RESERVATIONS = [
  {id: 'R001', guest_name: 'Thandi Mbewe', site: 'Zomba HQ', room_id: 'Z001', check_in: '2026-04-04', check_out: '2026-04-06', status: 'Checked In', board: 'BB', total_room_charge: 90},
  {id: 'R002', guest_name: 'Peter Banda', site: 'Lilongwe', room_id: 'L102', check_in: '2026-04-05', check_out: '2026-04-07', status: 'Confirmed', board: 'BB', total_room_charge: 170},
  {id: 'R003', guest_name: 'Chikondi Phiri', site: 'Blantyre Nyambadwe', room_id: 'B202', check_in: '2026-04-03', check_out: '2026-04-05', status: 'Checked In', board: 'BB', total_room_charge: 240},
  {id: 'R004', guest_name: 'Ruth Gondwe', site: 'Zomba HQ', room_id: 'Z003', check_in: '2026-04-08', check_out: '2026-04-10', status: 'Pending', board: 'BB', total_room_charge: 220},
  {id: 'R005', guest_name: 'Frank Nkhoma', site: 'Blantyre Nyambadwe', room_id: 'B201', check_in: '2026-04-04', check_out: '2026-04-06', status: 'Confirmed', board: 'BB', total_room_charge: 140}
];

const MENU_ITEMS = [
  {id: 'F001', name: 'Nsima & Chicken', category: 'Food', price: 4500, restaurant: true, bar: false},
  {id: 'F002', name: 'Chambo & Chips', category: 'Food', price: 7500, restaurant: true, bar: false},
  {id: 'F003', name: 'Beef Stew & Rice', category: 'Food', price: 5200, restaurant: true, bar: false},
  {id: 'F004', name: 'Club Sandwich', category: 'Food', price: 3800, restaurant: true, bar: false},
  {id: 'B001', name: 'Stella Lager', category: 'Beverage', price: 1500, restaurant: true, bar: true},
  {id: 'B002', name: 'Carlsberg Green', category: 'Beverage', price: 1400, restaurant: true, bar: true},
  {id: 'B003', name: 'Coke 300ml', category: 'Beverage', price: 1200, restaurant: true, bar: true},
  {id: 'B004', name: 'Sprite 300ml', category: 'Beverage', price: 1200, restaurant: true, bar: true},
  {id: 'B005', name: 'Water 500ml', category: 'Beverage', price: 1000, restaurant: true, bar: true},
  {id: 'B006', name: 'Savanna Dry', category: 'Beverage', price: 2200, restaurant: false, bar: true},
  {id: 'B007', name: 'House Wine Glass', category: 'Beverage', price: 3500, restaurant: false, bar: true}
];

const MENUS = {
  restaurant: MENU_ITEMS.filter(item => item.restaurant),
  bar: MENU_ITEMS.filter(item => item.bar)
};

const KITCHEN_ORDERS = [
  {id: 'KO001', site: 'Zomba HQ', table: 'T2', room: '', items: [{id: 'F001', name: 'Nsima & Chicken', qty: 2, price: 4500}], subtotal: 9000, tax: 1485, total: 10485, status: 'In Progress', created_at: '12:20'}
];

const SALES = [
  {id: 'S001', date: TODAY, site: 'Zomba HQ', dept: 'Rooms', revenue: 90000, category: 'Room'},
  {id: 'S002', date: TODAY, site: 'Blantyre Nyambadwe', dept: 'Rooms', revenue: 240000, category: 'Room'},
  {id: 'S003', date: TODAY, site: 'Lilongwe', dept: 'Restaurant', revenue: 21400, category: 'Food'},
  {id: 'S004', date: TODAY, site: 'Zomba HQ', dept: 'Restaurant', revenue: 8800, category: 'Beverage'}
];

const BAR_STORES = [
  {bar_id: 'BAR1', site: 'Zomba HQ', name: 'Main Bar', items: [{id: 'B001', name: 'Stella Lager', stock: 36},{id: 'B002', name: 'Carlsberg Green', stock: 44},{id: 'B003', name: 'Coke 300ml', stock: 30},{id: 'B006', name: 'Savanna Dry', stock: 24},{id: 'B007', name: 'House Wine Glass', stock: 18}]},
  {bar_id: 'BAR2', site: 'Blantyre Nyambadwe', name: 'Lounge Bar', items: [{id: 'B001', name: 'Stella Lager', stock: 28},{id: 'B004', name: 'Sprite 300ml', stock: 34},{id: 'B005', name: 'Water 500ml', stock: 40},{id: 'B006', name: 'Savanna Dry', stock: 20},{id: 'B007', name: 'House Wine Glass', stock: 15}]}
];

const BAR_SALES = [
  {id: 'BS001', date: TODAY, bar_id: 'BAR1', site: 'Zomba HQ', dept: 'Bars', revenue: 14200, items: 8},
  {id: 'BS002', date: TODAY, bar_id: 'BAR2', site: 'Blantyre Nyambadwe', dept: 'Bars', revenue: 9800, items: 6}
];

const defaultHousekeeping = Object.fromEntries(ROOMS.map((room, index) => [room.room_id, ['Clean', 'Dirty', 'Maintenance'][index % 3]]));
let housekeepingState = loadHousekeeping();
let restaurantOrder = [];
let barOrder = [];
let occupancyChart = null;
let revenueDeptChart = null;
let barRevenueChart = null;

function byId(id) { return document.getElementById(id); }
function uid(prefix) { return `${prefix}${Math.random().toString(36).slice(2, 7).toUpperCase()}`; }
function money(value, code = 'MWK') { return `${code} ${Number(value).toLocaleString()}`; }
function usd(value) { return `$${Number(value).toLocaleString()}`; }
function nowTime() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }

function safeAlert(message) { window.alert(message); }

function loadHousekeeping() {
  try {
    const raw = window.localStorage.getItem(HOUSEKEEPING_KEY);
    return raw ? { ...defaultHousekeeping, ...JSON.parse(raw) } : { ...defaultHousekeeping };
  } catch (error) {
    return { ...defaultHousekeeping };
  }
}

function saveHousekeeping() {
  try {
    window.localStorage.setItem(HOUSEKEEPING_KEY, JSON.stringify(housekeepingState));
  } catch (error) {}
}

function resolveRoomImage(room) {
  const candidates = [room.img, ...(roomImageCandidates[room.room_id] || [])].filter(Boolean);
  return candidates.map(name => `${IMAGE_BASE}${name}`);
}

function createRoomImageMarkup(room) {
  const sources = resolveRoomImage(room);
  const primary = sources[0] || '';
  const fallbackJson = encodeURIComponent(JSON.stringify(sources.slice(1)));
  return `
    <div class="room-image-wrap">
      <img src="${primary}" alt="${room.type} at ${room.site}" loading="lazy" data-fallbacks="${fallbackJson}" onerror="handleRoomImageError(this)">
      <span class="room-badge">${room.site}</span>
    </div>
  `;
}

window.handleRoomImageError = function(img) {
  try {
    const fallbacks = JSON.parse(decodeURIComponent(img.dataset.fallbacks || '[]'));
    if (fallbacks.length) {
      img.dataset.fallbacks = encodeURIComponent(JSON.stringify(fallbacks.slice(1)));
      img.src = fallbacks[0];
      return;
    }
  } catch (error) {}

  const wrap = img.closest('.room-image-wrap');
  if (!wrap) return;
  const roomName = img.alt || 'Room image';
  wrap.innerHTML = `<div class="room-fallback">${roomName}</div><span class="room-badge">Preview</span>`;
};

function initSplash() {
  const splash = byId('splash-screen');
  if (!splash) return;
  const hideSplash = () => splash.classList.add('hidden-splash');
  window.setTimeout(hideSplash, SPLASH_MS);
  window.addEventListener('load', () => window.setTimeout(hideSplash, 250));
  document.addEventListener('click', hideSplash, { once: true });
}

function initLogin() {
  const form = byId('login-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = byId('username').value.trim();
    const pass = byId('password').value.trim();
    if (user === 'admin' && pass === 'demo') {
      byId('login-screen').classList.remove('active');
      byId('app-content').classList.remove('hidden');
      byId('login-message').textContent = '';
      renderAll();
    } else {
      byId('login-message').textContent = 'Invalid credentials. Use admin / demo.';
    }
  });

  byId('logout-btn').addEventListener('click', () => {
    byId('app-content').classList.add('hidden');
    byId('login-screen').classList.add('active');
  });
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      byId(`tab-${button.dataset.tab}`).classList.add('active');
      if (button.dataset.tab === 'reports' || button.dataset.tab === 'overview') renderCharts();
    });
  });
}

function initSelectors() {
  const sites = ['All', ...new Set(RESERVATIONS.map(r => r.site))];
  byId('reservation-site-filter').innerHTML = sites.map(site => `<option value="${site}">${site}</option>`).join('');
  const statuses = ['All', ...new Set(RESERVATIONS.map(r => r.status))];
  byId('reservation-status-filter').innerHTML = statuses.map(status => `<option value="${status}">${status}</option>`).join('');

  const propertySites = ['Zomba HQ', 'Lilongwe', 'Blantyre Nyambadwe'];
  byId('restaurant-site').innerHTML = propertySites.map(site => `<option value="${site}">${site}</option>`).join('');
  byId('restaurant-table').innerHTML = Array.from({ length: 10 }, (_, i) => `<option value="T${i + 1}">Table ${i + 1}</option>`).join('');
  byId('restaurant-room').innerHTML = ['', 'Walk-in', ...ROOMS.map(room => room.room_id)].map(room => `<option value="${room}">${room || 'None'}</option>`).join('');

  byId('bar-selector').innerHTML = BAR_STORES.map(bar => `<option value="${bar.bar_id}">${bar.name} · ${bar.site}</option>`).join('');
}

function initEvents() {
  byId('reservation-site-filter').addEventListener('change', renderReservations);
  byId('reservation-status-filter').addEventListener('change', renderReservations);
  byId('clear-restaurant-order').addEventListener('click', () => { restaurantOrder = []; renderRestaurantOrder(); });
  byId('send-kitchen-btn').addEventListener('click', sendToKitchen);
  byId('close-pay-restaurant-btn').addEventListener('click', closeRestaurantOrder);
  byId('bar-selector').addEventListener('change', () => { renderBarMenu(); renderBarStock(); });
  byId('clear-bar-order').addEventListener('click', () => { barOrder = []; renderBarOrder(); });
  byId('close-bar-tab-btn').addEventListener('click', closeBarTab);
  byId('download-csv-btn').addEventListener('click', downloadCSV);
}

function renderRooms() {
  byId('rooms-grid').innerHTML = ROOMS.map(room => `
    <article class="room-card">
      ${createRoomImageMarkup(room)}
      <div class="room-body">
        <span class="section-tag">${room.room_id}</span>
        <h3>${room.type}</h3>
        <div class="room-meta">${room.amenities}</div>
        <div class="room-meta">Board: ${room.board} · Max: ${room.max_occupancy}</div>
        <div class="room-rate">${usd(room.rate)} / night</div>
      </div>
    </article>
  `).join('');
}

function renderReservations() {
  const site = byId('reservation-site-filter').value || 'All';
  const status = byId('reservation-status-filter').value || 'All';
  const filtered = RESERVATIONS.filter(item => (site === 'All' || item.site === site) && (status === 'All' || item.status === status));
  byId('reservations-body').innerHTML = filtered.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${item.guest_name}</td>
      <td>${item.site}</td>
      <td>${item.room_id}</td>
      <td>${item.check_in}</td>
      <td>${item.check_out}</td>
      <td>${item.status}</td>
      <td>${item.board}</td>
      <td>${usd(item.total_room_charge)}</td>
    </tr>
  `).join('');
}

window.toggleHousekeeping = function(roomId) {
  const states = ['Clean', 'Dirty', 'Maintenance'];
  const current = housekeepingState[roomId] || 'Clean';
  housekeepingState[roomId] = states[(states.indexOf(current) + 1) % states.length];
  saveHousekeeping();
  renderHousekeeping();
};

function renderHousekeeping() {
  byId('housekeeping-widget').innerHTML = ROOMS.map(room => {
    const state = housekeepingState[room.room_id] || 'Clean';
    const stateClass = `status-${state.toLowerCase()}`;
    return `
      <div class="housekeeping-item">
        <div>
          <strong>${room.room_id}</strong>
          <div class="meta">${room.site}</div>
        </div>
        <button class="status-toggle ${stateClass}" onclick="toggleHousekeeping('${room.room_id}')">${state}</button>
      </div>
    `;
  }).join('');
}

function renderRestaurantMenu() {
  const grouped = MENUS.restaurant.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  byId('restaurant-menu-groups').innerHTML = Object.entries(grouped).map(([category, items]) => `
    <div class="menu-category">
      <h4>${category}</h4>
      <div class="menu-buttons">
        ${items.map(item => `
          <button class="menu-item-btn" onclick="addRestaurantItem('${item.id}')">
            <strong>${item.name}</strong>
            <span>${money(item.price)}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

window.addRestaurantItem = function(itemId) {
  const item = MENU_ITEMS.find(entry => entry.id === itemId);
  const existing = restaurantOrder.find(entry => entry.id === itemId);
  if (existing) existing.qty += 1;
  else restaurantOrder.push({ ...item, qty: 1 });
  renderRestaurantOrder();
};

window.changeRestaurantQty = function(itemId, delta) {
  restaurantOrder = restaurantOrder.map(item => item.id === itemId ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0);
  renderRestaurantOrder();
};

function getRestaurantTotals() {
  const subtotal = restaurantOrder.reduce((sum, item) => sum + item.qty * item.price, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  return { subtotal, tax, total: subtotal + tax };
}

function renderRestaurantOrder() {
  const wrap = byId('restaurant-order-items');
  if (!restaurantOrder.length) {
    wrap.className = 'order-items empty-state-mini';
    wrap.textContent = 'No items yet.';
  } else {
    wrap.className = 'order-items';
    wrap.innerHTML = restaurantOrder.map(item => `
      <div class="order-row">
        <div>
          <strong>${item.name}</strong>
          <small>${money(item.price)} each</small>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeRestaurantQty('${item.id}', -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeRestaurantQty('${item.id}', 1)">+</button>
        </div>
        <strong>${money(item.qty * item.price)}</strong>
      </div>
    `).join('');
  }
  const totals = getRestaurantTotals();
  byId('restaurant-subtotal').textContent = money(totals.subtotal);
  byId('restaurant-tax').textContent = money(totals.tax);
  byId('restaurant-total').textContent = money(totals.total);
}

function sendToKitchen() {
  if (!restaurantOrder.length) return safeAlert('Add items before sending to kitchen.');
  const totals = getRestaurantTotals();
  const order = {
    id: uid('KO'),
    site: byId('restaurant-site').value,
    table: byId('restaurant-table').value,
    room: byId('restaurant-room').value,
    items: restaurantOrder.map(item => ({ id: item.id, name: item.name, qty: item.qty, price: item.price })),
    subtotal: totals.subtotal,
    tax: totals.tax,
    total: totals.total,
    status: 'Pending',
    created_at: nowTime()
  };
  KITCHEN_ORDERS.unshift(order);
  renderKitchenOrders();
  safeAlert(`Order ${order.id} sent to kitchen.`);
}

function closeRestaurantOrder() {
  if (!restaurantOrder.length) return safeAlert('No order to close.');
  const site = byId('restaurant-site').value;
  restaurantOrder.forEach(item => {
    SALES.push({ id: uid('S'), date: TODAY, site, dept: 'Restaurant', revenue: item.qty * item.price, category: item.category });
  });
  restaurantOrder = [];
  renderRestaurantOrder();
  renderKPIs();
  renderReports();
  safeAlert('Restaurant order closed and payment posted.');
}

window.setKitchenStatus = function(orderId, status) {
  const order = KITCHEN_ORDERS.find(item => item.id === orderId);
  if (!order) return;
  order.status = status;
  renderKitchenOrders();
};

function renderKitchenOrders() {
  const wrap = byId('kitchen-orders');
  if (!KITCHEN_ORDERS.length) {
    wrap.innerHTML = '<div class="empty-state-mini">No open kitchen orders.</div>';
    return;
  }
  wrap.innerHTML = KITCHEN_ORDERS.map(order => `
    <div class="kitchen-order">
      <div class="kitchen-order-header">
        <div>
          <strong>${order.id}</strong>
          <div class="meta">${order.site} · ${order.table}${order.room ? ` · ${order.room}` : ''} · ${order.created_at}</div>
        </div>
        <span class="status-chip">${order.status}</span>
      </div>
      <div class="meta">${order.items.map(item => `${item.qty}x ${item.name}`).join(', ')}</div>
      <div class="kitchen-actions">
        <button class="btn btn-ghost btn-small" onclick="setKitchenStatus('${order.id}', 'Pending')">Pending</button>
        <button class="btn btn-ghost btn-small" onclick="setKitchenStatus('${order.id}', 'In Progress')">In Progress</button>
        <button class="btn btn-ghost btn-small" onclick="setKitchenStatus('${order.id}', 'Ready')">Ready</button>
      </div>
    </div>
  `).join('');
}

function getSelectedBar() {
  return BAR_STORES.find(item => item.bar_id === byId('bar-selector').value) || BAR_STORES[0];
}

function renderBarMenu() {
  const bar = getSelectedBar();
  const ids = new Set(bar.items.map(item => item.id));
  const drinks = MENUS.bar.filter(item => ids.has(item.id));
  byId('bar-menu-buttons').innerHTML = drinks.map(item => `
    <button class="quick-btn" onclick="addBarItem('${item.id}')">
      <strong>${item.name}</strong>
      <span>${money(item.price)}</span>
    </button>
  `).join('');
}

window.addBarItem = function(itemId) {
  const item = MENU_ITEMS.find(entry => entry.id === itemId);
  const existing = barOrder.find(entry => entry.id === itemId);
  if (existing) existing.qty += 1;
  else barOrder.push({ ...item, qty: 1 });
  renderBarOrder();
};

window.changeBarQty = function(itemId, delta) {
  barOrder = barOrder.map(item => item.id === itemId ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0);
  renderBarOrder();
};

function renderBarOrder() {
  const wrap = byId('bar-order-items');
  if (!barOrder.length) {
    wrap.className = 'order-items empty-state-mini';
    wrap.textContent = 'No drinks added.';
  } else {
    wrap.className = 'order-items';
    wrap.innerHTML = barOrder.map(item => `
      <div class="order-row">
        <div>
          <strong>${item.name}</strong>
          <small>${money(item.price)} each</small>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeBarQty('${item.id}', -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeBarQty('${item.id}', 1)">+</button>
        </div>
        <strong>${money(item.qty * item.price)}</strong>
      </div>
    `).join('');
  }
  const total = barOrder.reduce((sum, item) => sum + item.qty * item.price, 0);
  byId('bar-total').textContent = money(total);
}

function closeBarTab() {
  if (!barOrder.length) return safeAlert('No drinks on this tab.');
  const bar = getSelectedBar();
  const tabName = byId('bar-tab-name').value.trim() || 'Walk-in';
  let total = 0;

  for (const item of barOrder) {
    const stockItem = bar.items.find(entry => entry.id === item.id);
    if (!stockItem || stockItem.stock < item.qty) return safeAlert(`Insufficient stock for ${item.name}.`);
  }

  barOrder.forEach(item => {
    const stockItem = bar.items.find(entry => entry.id === item.id);
    stockItem.stock -= item.qty;
    total += item.qty * item.price;
  });

  BAR_SALES.unshift({ id: uid('BS'), date: TODAY, bar_id: bar.bar_id, site: bar.site, dept: 'Bars', revenue: total, items: barOrder.reduce((sum, item) => sum + item.qty, 0), tabName });
  SALES.push({ id: uid('S'), date: TODAY, site: bar.site, dept: 'Bars', revenue: total, category: 'Beverage' });

  barOrder = [];
  byId('bar-tab-name').value = '';
  renderBarOrder();
  renderBarStock();
  renderBarSales();
  renderKPIs();
  renderReports();
  safeAlert(`Bar tab for ${tabName} closed.`);
}

function renderBarStock() {
  const bar = getSelectedBar();
  byId('bar-stock-view').innerHTML = bar.items.map(item => `
    <div class="stock-item">
      <div>
        <strong>${item.name}</strong>
        <div class="meta">${bar.name}</div>
      </div>
      <strong>${item.stock} in stock</strong>
    </div>
  `).join('');
}

function renderBarSales() {
  byId('bar-sales-list').innerHTML = BAR_SALES.slice(0, 6).map(item => `
    <div class="sale-item">
      <div>
        <strong>${item.bar_id}</strong>
        <div class="meta">${item.site} · ${item.items} items${item.tabName ? ` · ${item.tabName}` : ''}</div>
      </div>
      <strong>${money(item.revenue)}</strong>
    </div>
  `).join('');
}

function getTodaySales() {
  return SALES.filter(item => item.date === TODAY);
}

function renderKPIs() {
  const checkedIn = RESERVATIONS.filter(item => item.status === 'Checked In').length;
  const occupancy = Math.round((checkedIn / ROOMS.length) * 100);
  const todaySales = getTodaySales();
  const restaurantRevenue = todaySales.filter(item => item.dept === 'Restaurant').reduce((sum, item) => sum + item.revenue, 0);
  const barRevenue = todaySales.filter(item => item.dept === 'Bars').reduce((sum, item) => sum + item.revenue, 0);

  const cards = [
    { label: 'Occupancy', value: `${occupancy}%` },
    { label: 'Checked-in guests', value: checkedIn },
    { label: 'Restaurant today', value: money(restaurantRevenue) },
    { label: 'Bars today', value: money(barRevenue) }
  ];

  byId('kpi-grid').innerHTML = cards.map(card => `<div class="kpi-card"><span>${card.label}</span><strong>${card.value}</strong></div>`).join('');
}

function renderReports() {
  const todaySales = getTodaySales();
  const roomsRevenue = todaySales.filter(item => item.dept === 'Rooms').reduce((sum, item) => sum + item.revenue, 0);
  const restaurantRevenue = todaySales.filter(item => item.dept === 'Restaurant').reduce((sum, item) => sum + item.revenue, 0);
  const barsRevenue = todaySales.filter(item => item.dept === 'Bars').reduce((sum, item) => sum + item.revenue, 0);

  byId('daily-revenue-summary').innerHTML = [
    { label: 'Rooms', value: money(roomsRevenue) },
    { label: 'Restaurant', value: money(restaurantRevenue) },
    { label: 'Bars', value: money(barsRevenue) },
    { label: 'Events', value: money(EVENTS_REVENUE) }
  ].map(item => `<div class="summary-card"><span>${item.label}</span><strong>${item.value}</strong></div>`).join('');

  const foodRevenue = todaySales.filter(item => item.category === 'Food').reduce((sum, item) => sum + item.revenue, 0);
  const beverageRevenue = todaySales.filter(item => item.category === 'Beverage').reduce((sum, item) => sum + item.revenue, 0) + barsRevenue;
  const totalRevenue = roomsRevenue + restaurantRevenue + barsRevenue;
  const foodCogs = Math.round(foodRevenue * 0.35);
  const beverageCogs = Math.round(beverageRevenue * 0.30);
  const grossProfit = totalRevenue - foodCogs - beverageCogs;

  byId('pnl-view').innerHTML = `
    <h3>Mini P&amp;L</h3>
    <div class="pnl-grid">
      <div><span>Revenue (Rooms + Restaurant + Bars)</span><strong>${money(totalRevenue)}</strong></div>
      <div><span>Estimated COGS - Food (35%)</span><strong>${money(foodCogs)}</strong></div>
      <div><span>Estimated COGS - Beverages (30%)</span><strong>${money(beverageCogs)}</strong></div>
      <div><span>Gross Profit</span><strong class="pnl-total">${money(grossProfit)}</strong></div>
    </div>
  `;

  renderCharts();
}

function renderCharts() {
  if (typeof Chart === 'undefined') return;

  const sites = ['Zomba HQ', 'Lilongwe', 'Blantyre Nyambadwe'];
  const checkedBySite = sites.map(site => RESERVATIONS.filter(item => item.site === site && item.status === 'Checked In').length);
  const roomsBySite = sites.map(site => ROOMS.filter(item => item.site === site).length);
  const occupancyData = checkedBySite.map((count, index) => Math.round((count / roomsBySite[index]) * 100) || 0);

  if (occupancyChart) occupancyChart.destroy();
  occupancyChart = new Chart(byId('occupancyChart'), {
    type: 'line',
    data: {
      labels: ['Zomba HQ', 'Lilongwe', 'Blantyre'],
      datasets: [{ label: 'Occupancy %', data: occupancyData, borderColor: '#0f766e', backgroundColor: 'rgba(15,118,110,.16)', tension: .35, fill: true }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } } }
  });

  const todaySales = getTodaySales();
  const deptTotals = ['Rooms', 'Restaurant', 'Bars', 'Events'].map(dept => dept === 'Events' ? EVENTS_REVENUE : todaySales.filter(item => item.dept === dept).reduce((sum, item) => sum + item.revenue, 0));
  if (revenueDeptChart) revenueDeptChart.destroy();
  revenueDeptChart = new Chart(byId('revenueDeptChart'), {
    type: 'bar',
    data: {
      labels: ['Rooms', 'Restaurant', 'Bars', 'Events'],
      datasets: [{ label: 'Revenue', data: deptTotals, backgroundColor: ['#1d4ed8', '#0f766e', '#f59e0b', '#7c3aed'] }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });

  const barTotals = BAR_STORES.map(bar => BAR_SALES.filter(item => item.bar_id === bar.bar_id && item.date === TODAY).reduce((sum, item) => sum + item.revenue, 0));
  if (barRevenueChart) barRevenueChart.destroy();
  barRevenueChart = new Chart(byId('barRevenueChart'), {
    type: 'pie',
    data: {
      labels: BAR_STORES.map(bar => bar.name),
      datasets: [{ data: barTotals, backgroundColor: ['#0f766e', '#1d4ed8'] }]
    },
    options: { responsive: true }
  });
}

function downloadCSV() {
  const rows = [['date', 'site', 'dept', 'revenue']];
  getTodaySales().forEach(item => rows.push([item.date, item.site, item.dept, item.revenue]));
  rows.push([TODAY, 'All Sites', 'Events', EVENTS_REVENUE]);
  const csv = rows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'annies-lodge-daily-revenue.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderAll() {
  renderKPIs();
  renderReservations();
  renderHousekeeping();
  renderRestaurantMenu();
  renderRestaurantOrder();
  renderKitchenOrders();
  renderBarMenu();
  renderBarOrder();
  renderBarStock();
  renderBarSales();
  renderReports();
}

function init() {
  initSplash();
  initLogin();
  initTabs();
  initSelectors();
  initEvents();
  renderRooms();
}

document.addEventListener('DOMContentLoaded', init);
