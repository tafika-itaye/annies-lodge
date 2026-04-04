const TODAY = '2026-04-04';
const EVENTS_REVENUE = 125000;

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
  {
    bar_id: 'BAR1', site: 'Zomba HQ', name: 'Main Bar',
    items: [
      {id: 'B001', name: 'Stella Lager', stock: 36},
      {id: 'B002', name: 'Carlsberg Green', stock: 44},
      {id: 'B003', name: 'Coke 300ml', stock: 30},
      {id: 'B006', name: 'Savanna Dry', stock: 24},
      {id: 'B007', name: 'House Wine Glass', stock: 18}
    ]
  },
  {
    bar_id: 'BAR2', site: 'Blantyre Nyambadwe', name: 'Lounge Bar',
    items: [
      {id: 'B001', name: 'Stella Lager', stock: 28},
      {id: 'B004', name: 'Sprite 300ml', stock: 34},
      {id: 'B005', name: 'Water 500ml', stock: 40},
      {id: 'B006', name: 'Savanna Dry', stock: 20},
      {id: 'B007', name: 'House Wine Glass', stock: 15}
    ]
  }
];

const BAR_SALES = [
  {id: 'BS001', date: TODAY, bar_id: 'BAR1', site: 'Zomba HQ', dept: 'Bars', revenue: 14200, items: 8},
  {id: 'BS002', date: TODAY, bar_id: 'BAR2', site: 'Blantyre Nyambadwe', dept: 'Bars', revenue: 9800, items: 6}
];

const HOUSEKEEPING_STORAGE_KEY = 'annies_housekeeping';
const defaultHousekeeping = Object.fromEntries(ROOMS.map((room, index) => [room.room_id, ['Clean', 'Dirty', 'Maintenance'][index % 3]]));
let housekeepingState = loadHousekeeping();
let restaurantOrder = [];
let barOrder = [];
let occupancyChart;
let revenueDeptChart;
let barRevenueChart;

function loadHousekeeping() {
  try {
    const saved = localStorage.getItem(HOUSEKEEPING_STORAGE_KEY);
    return saved ? {...defaultHousekeeping, ...JSON.parse(saved)} : {...defaultHousekeeping};
  } catch (error) {
    return {...defaultHousekeeping};
  }
}

function saveHousekeeping() {
  try { localStorage.setItem(HOUSEKEEPING_STORAGE_KEY, JSON.stringify(housekeepingState)); } catch (error) {}
}

function currency(value, prefix = 'MWK') {
  return `${prefix} ${Number(value).toLocaleString()}`;
}

function usd(value) {
  return `$${Number(value).toLocaleString()}`;
}

function byId(id) { return document.getElementById(id); }
function nowTime() { return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); }
function uid(prefix) { return `${prefix}${Math.random().toString(36).slice(2, 7).toUpperCase()}`; }

function initApp() {
  setTimeout(() => byId('splash-screen').classList.remove('active'), 900);
  bindLogin();
  renderRooms();
  renderTabSwitching();
  initSelectors();
  renderReservations();
  renderHousekeeping();
  renderRestaurantMenu();
  renderRestaurantOrder();
  renderKitchenOrders();
  renderBarSelectors();
  renderBarMenu();
  renderBarOrder();
  renderBarStock();
  renderBarSales();
  renderKPIs();
  renderReports();
  bindActions();
}

function bindLogin() {
  byId('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = byId('username').value.trim();
    const pass = byId('password').value.trim();
    if (user === 'admin' && pass === 'demo') {
      byId('login-screen').classList.remove('active');
      byId('app-content').classList.remove('hidden');
      byId('login-message').textContent = '';
      renderCharts();
    } else {
      byId('login-message').textContent = 'Invalid credentials. Use admin / demo.';
    }
  });
}

function bindActions() {
  byId('logout-btn').addEventListener('click', () => {
    byId('app-content').classList.add('hidden');
    byId('login-screen').classList.add('active');
  });

  byId('reservation-site-filter').addEventListener('change', renderReservations);
  byId('reservation-status-filter').addEventListener('change', renderReservations);

  byId('clear-restaurant-order').addEventListener('click', () => {
    restaurantOrder = [];
    renderRestaurantOrder();
  });

  byId('send-kitchen-btn').addEventListener('click', sendToKitchen);
  byId('close-pay-restaurant-btn').addEventListener('click', closeRestaurantOrder);

  byId('bar-selector').addEventListener('change', () => {
    renderBarMenu();
    renderBarStock();
  });

  byId('clear-bar-order').addEventListener('click', () => {
    barOrder = [];
    renderBarOrder();
  });

  byId('close-bar-tab-btn').addEventListener('click', closeBarTab);
  byId('download-csv-btn').addEventListener('click', downloadCSV);
}

function renderTabSwitching() {
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      byId(`tab-${button.dataset.tab}`).classList.add('active');
      if (button.dataset.tab === 'reports') renderReports();
    });
  });
}

function renderRooms() {
  byId('rooms-grid').innerHTML = ROOMS.map(room => `
    <article class="room-card">
      <div class="room-thumb">${room.site}</div>
      <div class="room-body">
        <div class="section-tag">${room.room_id}</div>
        <h3>${room.type}</h3>
        <div class="room-meta">${room.amenities}</div>
        <div class="room-meta">Board: ${room.board} · Max: ${room.max_occupancy}</div>
        <div class="room-rate">${usd(room.rate)} / night</div>
      </div>
    </article>
  `).join('');
}

function initSelectors() {
  const sites = ['All', ...new Set(RESERVATIONS.map(r => r.site))];
  byId('reservation-site-filter').innerHTML = sites.map(site => `<option value="${site}">${site}</option>`).join('');
  const statuses = ['All', ...new Set(RESERVATIONS.map(r => r.status))];
  byId('reservation-status-filter').innerHTML = statuses.map(status => `<option value="${status}">${status}</option>`).join('');

  const propertySites = [...new Set(['Zomba HQ', 'Lilongwe', 'Blantyre Nyambadwe'])];
  byId('restaurant-site').innerHTML = propertySites.map(site => `<option value="${site}">${site}</option>`).join('');
  byId('restaurant-table').innerHTML = Array.from({length: 10}, (_, i) => `<option value="T${i+1}">Table ${i+1}</option>`).join('');
  byId('restaurant-room').innerHTML = ['','Walk-in', ...ROOMS.map(room => room.room_id)].map(room => `<option value="${room}">${room || 'None'}</option>`).join('');
}

function renderReservations() {
  const site = byId('reservation-site-filter').value || 'All';
  const status = byId('reservation-status-filter').value || 'All';
  const data = RESERVATIONS.filter(res => (site === 'All' || res.site === site) && (status === 'All' || res.status === status));
  byId('reservations-body').innerHTML = data.map(res => `
    <tr>
      <td>${res.id}</td>
      <td>${res.guest_name}</td>
      <td>${res.site}</td>
      <td>${res.room_id}</td>
      <td>${res.check_in}</td>
      <td>${res.check_out}</td>
      <td>${res.status}</td>
      <td>${res.board}</td>
      <td>${usd(res.total_room_charge)}</td>
    </tr>
  `).join('');
}

function renderHousekeeping() {
  byId('housekeeping-widget').innerHTML = ROOMS.map(room => {
    const status = housekeepingState[room.room_id] || 'Clean';
    const cls = `status-${status.toLowerCase()}`;
    return `
      <div class="housekeeping-item">
        <div>
          <strong>${room.room_id}</strong>
          <div class="room-meta">${room.site}</div>
        </div>
        <button class="status-toggle ${cls}" onclick="toggleHousekeeping('${room.room_id}')">${status}</button>
      </div>
    `;
  }).join('');
}

window.toggleHousekeeping = function(roomId) {
  const order = ['Clean', 'Dirty', 'Maintenance'];
  const current = housekeepingState[roomId] || 'Clean';
  housekeepingState[roomId] = order[(order.indexOf(current) + 1) % order.length];
  saveHousekeeping();
  renderHousekeeping();
};

function renderRestaurantMenu() {
  const grouped = MENUS.restaurant.reduce((acc, item) => {
    acc[item.category] ??= [];
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
            <span>${currency(item.price)}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

window.addRestaurantItem = function(itemId) {
  const item = MENU_ITEMS.find(menu => menu.id === itemId);
  const found = restaurantOrder.find(entry => entry.id === itemId);
  if (found) found.qty += 1;
  else restaurantOrder.push({...item, qty: 1});
  renderRestaurantOrder();
};

window.changeRestaurantQty = function(itemId, delta) {
  restaurantOrder = restaurantOrder.map(item => item.id === itemId ? {...item, qty: item.qty + delta} : item).filter(item => item.qty > 0);
  renderRestaurantOrder();
};

function renderRestaurantOrder() {
  const container = byId('restaurant-order-items');
  if (!restaurantOrder.length) {
    container.className = 'order-items empty-state-mini';
    container.textContent = 'No items yet.';
  } else {
    container.className = 'order-items';
    container.innerHTML = restaurantOrder.map(item => `
      <div class="order-row">
        <div>
          <strong>${item.name}</strong>
          <small>${currency(item.price)} each</small>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeRestaurantQty('${item.id}', -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeRestaurantQty('${item.id}', 1)">+</button>
        </div>
        <strong>${currency(item.qty * item.price)}</strong>
      </div>
    `).join('');
  }
  const subtotal = restaurantOrder.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const tax = Math.round(subtotal * 0.165);
  const total = subtotal + tax;
  byId('restaurant-subtotal').textContent = currency(subtotal);
  byId('restaurant-tax').textContent = currency(tax);
  byId('restaurant-total').textContent = currency(total);
}

function sendToKitchen() {
  if (!restaurantOrder.length) return alert('Add items before sending to kitchen.');
  const subtotal = restaurantOrder.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const tax = Math.round(subtotal * 0.165);
  const order = {
    id: uid('KO'),
    site: byId('restaurant-site').value,
    table: byId('restaurant-table').value,
    room: byId('restaurant-room').value,
    items: restaurantOrder.map(item => ({id: item.id, name: item.name, qty: item.qty, price: item.price})),
    subtotal,
    tax,
    total: subtotal + tax,
    status: 'Pending',
    created_at: nowTime()
  };
  KITCHEN_ORDERS.unshift(order);
  renderKitchenOrders();
  alert(`Order ${order.id} sent to kitchen.`);
}

function closeRestaurantOrder() {
  if (!restaurantOrder.length) return alert('No order to close.');
  const site = byId('restaurant-site').value;
  restaurantOrder.forEach(item => {
    SALES.push({
      id: uid('S'),
      date: TODAY,
      site,
      dept: 'Restaurant',
      revenue: item.qty * item.price,
      category: item.category
    });
  });
  restaurantOrder = [];
  renderRestaurantOrder();
  renderKPIs();
  renderReports();
  alert('Restaurant order closed and payment posted.');
}

function renderKitchenOrders() {
  const container = byId('kitchen-orders');
  if (!KITCHEN_ORDERS.length) {
    container.innerHTML = '<div class="empty-state-mini">No open kitchen orders.</div>';
    return;
  }
  container.innerHTML = KITCHEN_ORDERS.map(order => `
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

window.setKitchenStatus = function(orderId, status) {
  const order = KITCHEN_ORDERS.find(item => item.id === orderId);
  if (!order) return;
  order.status = status;
  renderKitchenOrders();
};

function renderBarSelectors() {
  byId('bar-selector').innerHTML = BAR_STORES.map(bar => `<option value="${bar.bar_id}">${bar.name} · ${bar.site}</option>`).join('');
}

function getSelectedBar() {
  return BAR_STORES.find(bar => bar.bar_id === byId('bar-selector').value) || BAR_STORES[0];
}

function renderBarMenu() {
  const bar = getSelectedBar();
  const availableIds = new Set(bar.items.map(item => item.id));
  const items = MENUS.bar.filter(item => availableIds.has(item.id));
  byId('bar-menu-buttons').innerHTML = items.map(item => `
    <button class="quick-btn" onclick="addBarItem('${item.id}')">
      <strong>${item.name}</strong>
      <span>${currency(item.price)}</span>
    </button>
  `).join('');
}

window.addBarItem = function(itemId) {
  const item = MENU_ITEMS.find(menu => menu.id === itemId);
  const found = barOrder.find(entry => entry.id === itemId);
  if (found) found.qty += 1;
  else barOrder.push({...item, qty: 1});
  renderBarOrder();
};

window.changeBarQty = function(itemId, delta) {
  barOrder = barOrder.map(item => item.id === itemId ? {...item, qty: item.qty + delta} : item).filter(item => item.qty > 0);
  renderBarOrder();
};

function renderBarOrder() {
  const container = byId('bar-order-items');
  if (!barOrder.length) {
    container.className = 'order-items empty-state-mini';
    container.textContent = 'No drinks added.';
  } else {
    container.className = 'order-items';
    container.innerHTML = barOrder.map(item => `
      <div class="order-row">
        <div>
          <strong>${item.name}</strong>
          <small>${currency(item.price)} each</small>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeBarQty('${item.id}', -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeBarQty('${item.id}', 1)">+</button>
        </div>
        <strong>${currency(item.qty * item.price)}</strong>
      </div>
    `).join('');
  }
  const total = barOrder.reduce((sum, item) => sum + (item.qty * item.price), 0);
  byId('bar-total').textContent = currency(total);
}

function closeBarTab() {
  if (!barOrder.length) return alert('No drinks on this tab.');
  const bar = getSelectedBar();
  const tabName = byId('bar-tab-name').value.trim() || 'Walk-in';
  let total = 0;
  for (const item of barOrder) {
    const stockItem = bar.items.find(entry => entry.id === item.id);
    if (!stockItem || stockItem.stock < item.qty) {
      return alert(`Insufficient stock for ${item.name}.`);
    }
  }
  barOrder.forEach(item => {
    const stockItem = bar.items.find(entry => entry.id === item.id);
    stockItem.stock -= item.qty;
    total += item.qty * item.price;
  });
  BAR_SALES.unshift({id: uid('BS'), date: TODAY, bar_id: bar.bar_id, site: bar.site, dept: 'Bars', revenue: total, items: barOrder.reduce((sum, item) => sum + item.qty, 0), tabName});
  SALES.push({id: uid('S'), date: TODAY, site: bar.site, dept: 'Bars', revenue: total, category: 'Beverage'});
  barOrder = [];
  byId('bar-tab-name').value = '';
  renderBarOrder();
  renderBarStock();
  renderBarSales();
  renderKPIs();
  renderReports();
  alert(`Bar tab for ${tabName} closed.`);
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
  byId('bar-sales-list').innerHTML = BAR_SALES.slice(0, 6).map(sale => `
    <div class="sale-item">
      <div>
        <strong>${sale.bar_id}</strong>
        <div class="meta">${sale.site} · ${sale.items} items${sale.tabName ? ` · ${sale.tabName}` : ''}</div>
      </div>
      <strong>${currency(sale.revenue)}</strong>
    </div>
  `).join('');
}

function getTodaySales() {
  return SALES.filter(sale => sale.date === TODAY);
}

function renderKPIs() {
  const checkedIn = RESERVATIONS.filter(res => res.status === 'Checked In').length;
  const occupancy = Math.round((checkedIn / ROOMS.length) * 100);
  const todaySales = getTodaySales();
  const restaurantRevenue = todaySales.filter(s => s.dept === 'Restaurant').reduce((sum, s) => sum + s.revenue, 0);
  const barRevenue = todaySales.filter(s => s.dept === 'Bars').reduce((sum, s) => sum + s.revenue, 0);
  const cards = [
    {label: 'Occupancy', value: `${occupancy}%`},
    {label: 'Checked-in guests', value: checkedIn},
    {label: 'Restaurant today', value: currency(restaurantRevenue)},
    {label: 'Bars today', value: currency(barRevenue)}
  ];
  byId('kpi-grid').innerHTML = cards.map(card => `<div class="kpi-card"><span>${card.label}</span><strong>${card.value}</strong></div>`).join('');
}

function renderReports() {
  const todaySales = getTodaySales();
  const roomsRevenue = todaySales.filter(s => s.dept === 'Rooms').reduce((sum, s) => sum + s.revenue, 0);
  const restaurantRevenue = todaySales.filter(s => s.dept === 'Restaurant').reduce((sum, s) => sum + s.revenue, 0);
  const barsRevenue = todaySales.filter(s => s.dept === 'Bars').reduce((sum, s) => sum + s.revenue, 0);

  byId('daily-revenue-summary').innerHTML = [
    {label: 'Rooms', value: currency(roomsRevenue)},
    {label: 'Restaurant', value: currency(restaurantRevenue)},
    {label: 'Bars', value: currency(barsRevenue)},
    {label: 'Events', value: currency(EVENTS_REVENUE)}
  ].map(card => `<div class="summary-card"><span>${card.label}</span><strong>${card.value}</strong></div>`).join('');

  const foodRevenue = todaySales.filter(s => s.category === 'Food').reduce((sum, s) => sum + s.revenue, 0);
  const beverageRevenue = todaySales.filter(s => s.category === 'Beverage').reduce((sum, s) => sum + s.revenue, 0) + barsRevenue;
  const totalRevenue = roomsRevenue + restaurantRevenue + barsRevenue;
  const foodCogs = Math.round(foodRevenue * 0.35);
  const beverageCogs = Math.round(beverageRevenue * 0.30);
  const grossProfit = totalRevenue - foodCogs - beverageCogs;

  byId('pnl-view').innerHTML = `
    <h3>Mini P&amp;L</h3>
    <div class="pnl-grid">
      <div><span>Revenue (Rooms + Restaurant + Bars)</span><strong>${currency(totalRevenue)}</strong></div>
      <div><span>Estimated COGS - Food (35%)</span><strong>${currency(foodCogs)}</strong></div>
      <div><span>Estimated COGS - Beverages (30%)</span><strong>${currency(beverageCogs)}</strong></div>
      <div><span>Gross Profit</span><strong class="pnl-total">${currency(grossProfit)}</strong></div>
    </div>
  `;

  renderCharts();
}

function renderCharts() {
  const checkedBySite = ['Zomba HQ', 'Lilongwe', 'Blantyre Nyambadwe'].map(site => RESERVATIONS.filter(r => r.site === site && r.status === 'Checked In').length);
  const roomsBySite = ['Zomba HQ', 'Lilongwe', 'Blantyre Nyambadwe'].map(site => ROOMS.filter(room => room.site === site).length);
  const occupancyData = checkedBySite.map((count, index) => Math.round((count / roomsBySite[index]) * 100) || 0);

  if (occupancyChart) occupancyChart.destroy();
  occupancyChart = new Chart(byId('occupancyChart'), {
    type: 'line',
    data: {
      labels: ['Zomba HQ', 'Lilongwe', 'Blantyre'],
      datasets: [{label: 'Occupancy %', data: occupancyData, borderColor: '#0f766e', backgroundColor: 'rgba(15,118,110,0.18)', tension: 0.35, fill: true}]
    },
    options: {responsive: true, plugins: {legend: {display: false}}, scales: {y: {beginAtZero: true, max: 100}}}
  });

  const todaySales = getTodaySales();
  const deptTotals = ['Rooms', 'Restaurant', 'Bars', 'Events'].map(dept => {
    if (dept === 'Events') return EVENTS_REVENUE;
    return todaySales.filter(s => s.dept === dept).reduce((sum, s) => sum + s.revenue, 0);
  });
  if (revenueDeptChart) revenueDeptChart.destroy();
  revenueDeptChart = new Chart(byId('revenueDeptChart'), {
    type: 'bar',
    data: {
      labels: ['Rooms', 'Restaurant', 'Bars', 'Events'],
      datasets: [{label: 'Revenue', data: deptTotals, backgroundColor: ['#1d4ed8', '#0f766e', '#f59e0b', '#7c3aed']}]
    },
    options: {responsive: true, plugins: {legend: {display: false}}}
  });

  const barTotals = BAR_STORES.map(bar => BAR_SALES.filter(sale => sale.bar_id === bar.bar_id && sale.date === TODAY).reduce((sum, sale) => sum + sale.revenue, 0));
  if (barRevenueChart) barRevenueChart.destroy();
  barRevenueChart = new Chart(byId('barRevenueChart'), {
    type: 'pie',
    data: {
      labels: BAR_STORES.map(bar => bar.name),
      datasets: [{data: barTotals, backgroundColor: ['#0f766e', '#1d4ed8']}]
    },
    options: {responsive: true}
  });
}

function downloadCSV() {
  const rows = [['date', 'site', 'dept', 'revenue']];
  getTodaySales().forEach(sale => rows.push([sale.date, sale.site, sale.dept, sale.revenue]));
  rows.push([TODAY, 'All Sites', 'Events', EVENTS_REVENUE]);
  const csv = rows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'annies-lodge-daily-revenue.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', initApp);
