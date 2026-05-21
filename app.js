const team = ["Steven", "Théo", "David", "Zacharie", "Valérie", "Didier"];
const drivers = ["Romain", "Cyril", "Stuart"];

const statusMeta = {
  "À préparer": "info",
  "En cours": "warning",
  "Préparation terminée": "success",
  "Envoyée au livreur": "info",
  "Livraison terminée": "success",
  "en attente": "info",
  "bloqué": "danger",
  "terminé": "success",
  "nouveau": "info",
  "résolu": "success",
  "Livré": "success",
  "À livrer": "warning",
};

const state = {
  selectedOrderId: null,
  orders: [
    {
      id: "CMD-1042",
      clientId: "CLI-01",
      clientName: "Avi Rebibo Bala",
      source: "Préparation boutique",
      requestedBy: "Zacharie",
      assignedTo: "Théo",
      driver: null,
      status: "Préparation terminée",
      dueDate: "2026-05-18",
      products: [
        { ref: "PNAU-NOIRE", name: "PNAU noire", qty: 12 },
        { ref: "ROT-BEA-75", name: "Béatrice Rot", qty: 6 },
      ],
      missingComment: "",
      comments: ["Client souhaite livraison après 17h.", "Adresse récupérée depuis Winess Livraison."],
    },
    {
      id: "CMD-1041",
      clientId: "CLI-02",
      clientName: "Charles Traiteur",
      source: "Dépôt Winessit'g",
      requestedBy: "David",
      assignedTo: "Steven",
      driver: "Romain",
      status: "Envoyée au livreur",
      dueDate: "2026-05-21",
      products: [{ ref: "ROT-BEA-75", name: "Béatrice Rot", qty: 60 }],
      missingComment: "",
      comments: ["Prévente arrivée semaine 25."],
    },
    {
      id: "CMD-1040",
      clientId: "CLI-03",
      clientName: "Encore",
      source: "Préparation boutique",
      requestedBy: "Didier",
      assignedTo: "Steven",
      driver: null,
      status: "En cours",
      dueDate: "2026-05-20",
      products: [{ ref: "CHAMP-LP", name: "Laurent-Perrier Brut", qty: 24 }],
      missingComment: "Manque 4 bouteilles selon Wino.",
      comments: ["Steven vérifie alternative en cave."],
    },
  ],
  clients: [
    {
      id: "CLI-01",
      name: "Avi Rebibo Bala",
      phone: "06 12 45 89 10",
      address: "14 rue de Longchamp, 75116 Paris",
      instructions: "Sonner au bureau, appeler en arrivant.",
    },
    {
      id: "CLI-02",
      name: "Charles Traiteur",
      phone: "01 44 20 10 10",
      address: "22 avenue Victor Hugo, 75116 Paris",
      instructions: "Entrée livraison côté cour.",
    },
    {
      id: "CLI-03",
      name: "Encore",
      phone: "01 40 00 20 20",
      address: "18 rue Quentin-Bauchart, 75008 Paris",
      instructions: "Demander Sarah.",
    },
  ],
  reminders: [
    {
      id: "RAP-021",
      subject: "Préparer 12 pièces PNAU noire pour M. Azran au magasin",
      requestedBy: "Zacharie",
      assignedTo: "Théo",
      tagged: ["Steven"],
      requestedAt: "2026-05-18",
      comments: ["Attente confirmation Wino sur le stock disponible."],
      status: "en cours",
    },
    {
      id: "RAP-020",
      subject: "Relancer Encore pour créneau de livraison",
      requestedBy: "Valérie",
      assignedTo: "Steven",
      tagged: ["David"],
      requestedAt: "2026-05-19",
      comments: ["Client préfère fin de journée."],
      status: "bloqué",
    },
    {
      id: "RAP-019",
      subject: "Vérifier arrivage Béatrice Rot semaine 25",
      requestedBy: "Didier",
      assignedTo: "Zacharie",
      tagged: ["Valérie"],
      requestedAt: "2026-05-21",
      comments: ["Mettre à jour les préventes dès confirmation."],
      status: "en attente",
    },
  ],
  disputes: [
    {
      id: "LIT-008",
      client: "Avi Rebibo Bala",
      product: "PNAU noire",
      ref: "PNAU-NOIRE",
      reason: "Produit manquant",
      comment: "Le client signale 2 pièces absentes sur la dernière livraison.",
      tagged: ["Théo", "Romain"],
      status: "nouveau",
    },
    {
      id: "LIT-007",
      client: "Charles Traiteur",
      product: "Béatrice Rot",
      ref: "ROT-BEA-75",
      reason: "Quantité réservée à confirmer",
      comment: "Prévente supérieure au solde restant annoncé.",
      tagged: ["Zacharie", "Valérie"],
      status: "en cours",
    },
  ],
  arrivals: [
    {
      id: "APP-014",
      product: "Béatrice Rot",
      ref: "ROT-BEA-75",
      expectedQty: 100,
      expectedAt: "Semaine 25",
      presales: [
        { owner: "Zacharie", client: "Charles Traiteur", qty: 60 },
        { owner: "Steven", client: "Encore", qty: 48 },
      ],
    },
    {
      id: "APP-013",
      product: "Mademoiselle Rosé 2024",
      ref: "ROSE-MAD-75",
      expectedQty: 180,
      expectedAt: "Semaine 24",
      presales: [
        { owner: "David", client: "Avi Rebibo Bala", qty: 24 },
        { owner: "Zacharie", client: "Hôtel Belles Rives", qty: 36 },
      ],
    },
  ],
  stock: [
    { ref: "PNAU-NOIRE", product: "PNAU noire", available: 8, source: "Wino API mock", updatedAt: "10:42" },
    { ref: "ROT-BEA-75", product: "Béatrice Rot", available: 0, source: "Wino API mock", updatedAt: "10:35" },
    { ref: "CHAMP-LP", product: "Laurent-Perrier Brut", available: 20, source: "Wino API mock", updatedAt: "10:40" },
    { ref: "ROSE-MAD-75", product: "Mademoiselle Rosé 2024", available: 54, source: "Wino API mock", updatedAt: "10:38" },
  ],
  notifications: [
    { id: "NOT-1", type: "nouvelle commande assignée", text: "CMD-1040 assignée à Steven", unread: true },
    { id: "NOT-2", type: "préparation terminée", text: "CMD-1042 est prête à partir", unread: true },
    { id: "NOT-3", type: "rappel en retard", text: "RAP-021 a 3 jours de retard", unread: true },
  ],
  activity: [
    "Théo a terminé la préparation CMD-1042.",
    "Romain a reçu CMD-1041 dans Winess Livraison.",
    "Valérie a tagué David sur RAP-020.",
    "Zacharie a réservé 60 pièces Béatrice Rot pour Charles Traiteur.",
  ],
};

const apiClients = {
  wino: {
    getLiveStock(reference) {
      return state.stock.find((item) => item.ref === reference) || null;
    },
  },
  winessLivraison: {
    getClient(clientId) {
      return state.clients.find((client) => client.id === clientId) || null;
    },
    createClient(clientDraft) {
      const client = { id: `CLI-${String(state.clients.length + 1).padStart(2, "0")}`, ...clientDraft };
      state.clients.push(client);
      return client;
    },
    sendOrder(order, driver) {
      return {
        deliveryUrl: `https://winess-livraison.example/commandes/${encodeURIComponent(order.id)}`,
        driver,
      };
    },
  },
};

const nodes = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheNodes();
  initNavigation();
  initSearch();
  initActions();
  render();
  registerServiceWorker();
});

function cacheNodes() {
  [
    "teamList",
    "pageTitle",
    "globalSearch",
    "searchClearButton",
    "searchResults",
    "kpiGrid",
    "recentOrders",
    "activePreparations",
    "activeDeliveries",
    "lateReminders",
    "openDisputes",
    "arrivalSummary",
    "activityFeed",
    "ordersGrid",
    "preparationsGrid",
    "deliveriesGrid",
    "remindersGrid",
    "disputesGrid",
    "arrivalsGrid",
    "stockGrid",
    "notificationButton",
    "notificationCount",
    "notificationsDialog",
    "notificationsList",
    "sendDeliveryDialog",
    "sendDeliverySummary",
    "driverSelect",
    "confirmSendDelivery",
    "newOrderButton",
    "newDisputeButton",
  ].forEach((id) => {
    nodes[id] = document.getElementById(id);
  });
}

function initNavigation() {
  window.addEventListener("hashchange", setRouteFromHash);
  setRouteFromHash();
}

function initSearch() {
  nodes.globalSearch.addEventListener("input", () => renderSearch(nodes.globalSearch.value));
  nodes.searchClearButton.addEventListener("click", () => {
    nodes.globalSearch.value = "";
    renderSearch("");
    nodes.globalSearch.focus();
  });
}

function initActions() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const { action, orderId, reminderId, disputeId } = button.dataset;
    if (action === "start-order") updateOrder(orderId, { status: "En cours" }, "préparation démarrée");
    if (action === "finish-prep") updateOrder(orderId, { status: "Préparation terminée" }, "préparation terminée");
    if (action === "send-delivery") openSendDelivery(orderId);
    if (action === "mark-delivered") updateOrder(orderId, { status: "Livraison terminée" }, "livraison terminée");
    if (action === "complete-reminder") updateReminder(reminderId, "terminé");
    if (action === "resolve-dispute") updateDispute(disputeId, "résolu");
    if (action === "add-missing") addMissingComment(orderId);
  });

  nodes.confirmSendDelivery.addEventListener("click", confirmSendDelivery);
  nodes.notificationButton.addEventListener("click", openNotifications);
  nodes.newOrderButton.addEventListener("click", createMockOrder);
  nodes.newDisputeButton.addEventListener("click", createMockDispute);
}

function setRouteFromHash() {
  const route = (window.location.hash || "#home").replace("#", "");
  const knownRoute = document.getElementById(route) ? route : "home";

  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === knownRoute));
  document.querySelectorAll(".side-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === knownRoute);
  });

  const titles = {
    home: "Accueil",
    orders: "Commandes",
    preparations: "Préparations",
    deliveries: "Livraisons",
    reminders: "Rappels",
    disputes: "Litiges",
    arrivals: "Arrivages",
    stock: "Stock Wino",
  };
  nodes.pageTitle.textContent = titles[knownRoute] || "Accueil";
}

function render() {
  renderTeam();
  renderKpis();
  renderHome();
  renderOrders();
  renderReminders();
  renderDisputes();
  renderArrivals();
  renderStock();
  renderNotifications();
  renderSearch(nodes.globalSearch.value);
}

function renderTeam() {
  nodes.teamList.innerHTML = [...team, ...drivers].map((person) => `<span>${person}</span>`).join("");
}

function renderKpis() {
  const late = state.reminders.filter((item) => daysLate(item.requestedAt) > 0 && item.status !== "terminé").length;
  const openDisputes = state.disputes.filter((item) => item.status !== "résolu").length;
  const negativeArrivals = state.arrivals.filter((item) => arrivalBalance(item) < 0).length;
  const activeOrders = state.orders.filter((item) => item.status !== "Livraison terminée").length;

  nodes.kpiGrid.innerHTML = [
    { label: "Commandes actives", value: activeOrders, tone: "info" },
    { label: "Préparations", value: state.orders.filter((item) => item.source === "Préparation boutique").length, tone: "warning" },
    { label: "Rappels en retard", value: late, tone: "danger" },
    { label: "Litiges ouverts", value: openDisputes, tone: "danger" },
    { label: "Arrivages en alerte", value: negativeArrivals, tone: negativeArrivals ? "danger" : "success" },
  ]
    .map((kpi) => `<article class="kpi ${kpi.tone}"><strong>${kpi.value}</strong><span>${kpi.label}</span></article>`)
    .join("");
}

function renderHome() {
  nodes.recentOrders.innerHTML = state.orders.map(renderCompactOrder).join("");
  nodes.activePreparations.innerHTML = state.orders.filter((order) => order.status !== "Livraison terminée").slice(0, 3).map(renderCompactOrder).join("");
  nodes.activeDeliveries.innerHTML = state.orders.filter((order) => order.driver).map(renderCompactOrder).join("") || emptyState("Aucune livraison en cours.");
  nodes.lateReminders.innerHTML = state.reminders.filter((item) => daysLate(item.requestedAt) > 0 && item.status !== "terminé").map(renderCompactReminder).join("") || emptyState("Aucun retard.");
  nodes.openDisputes.innerHTML = state.disputes.filter((item) => item.status !== "résolu").map(renderCompactDispute).join("");
  nodes.arrivalSummary.innerHTML = state.arrivals.map(renderCompactArrival).join("");
  nodes.activityFeed.innerHTML = state.activity.map((item) => `<p>${item}</p>`).join("");
}

function renderOrders() {
  nodes.ordersGrid.innerHTML = state.orders.map(renderOrderCard).join("");
  nodes.preparationsGrid.innerHTML = state.orders.filter((order) => order.source === "Préparation boutique").map(renderOrderCard).join("");
  nodes.deliveriesGrid.innerHTML = state.orders.filter((order) => order.driver || order.status === "Préparation terminée").map(renderDeliveryCard).join("");
}

function renderReminders() {
  nodes.remindersGrid.innerHTML = state.reminders.map(renderReminderCard).join("");
}

function renderDisputes() {
  nodes.disputesGrid.innerHTML = state.disputes.map(renderDisputeCard).join("");
}

function renderArrivals() {
  nodes.arrivalsGrid.innerHTML = state.arrivals.map(renderArrivalCard).join("");
}

function renderStock() {
  nodes.stockGrid.innerHTML = state.stock.map(renderStockCard).join("");
}

function renderNotifications() {
  const unread = state.notifications.filter((item) => item.unread).length;
  nodes.notificationCount.textContent = unread;
  nodes.notificationsList.innerHTML = state.notifications
    .map((item) => `<article class="compact-card ${item.unread ? "is-unread" : ""}"><strong>${item.type}</strong><span>${item.text}</span></article>`)
    .join("");
}

function renderSearch(query) {
  const terms = tokenize(query);
  if (!terms.length) {
    nodes.searchResults.innerHTML = `<p class="search-hint">Tapez un client, produit, commande, livreur, litige, rappel, approvisionnement ou commentaire.</p>`;
    return;
  }

  const groups = {
    Livraison: rankMatches(state.orders.filter((order) => order.driver || order.status.includes("Livraison")), terms),
    Commande: rankMatches(state.orders, terms),
    Client: rankMatches(state.clients, terms),
    Litige: rankMatches(state.disputes, terms),
    Historique: rankMatches(state.activity, terms),
    Rappel: rankMatches(state.reminders, terms),
    Approvisionnement: rankMatches(state.arrivals, terms),
  };

  const html = Object.entries(groups)
    .filter(([, items]) => items.length)
    .map(([label, items]) => {
      const rendered = items
        .map((item) => {
          if (typeof item === "string") return `<li>${item}</li>`;
          return `<li><strong>${item.id || item.name || item.client || item.product}</strong><span>${searchSummary(item)}</span></li>`;
        })
        .join("");
      return `<section><h3>${label}</h3><ul>${rendered}</ul></section>`;
    })
    .join("");

  nodes.searchResults.innerHTML = html || `<p class="search-hint">Aucun résultat pour “${escapeHtml(query)}”.</p>`;
}

function renderCompactOrder(order) {
  return `<article class="compact-card">
    <div><strong>${order.id}</strong><span>${order.clientName}</span></div>
    ${badge(order.status)}
  </article>`;
}

function renderCompactReminder(reminder) {
  return `<article class="compact-card">
    <div><strong>${reminder.subject}</strong><span>${reminder.assignedTo} · retard +${daysLate(reminder.requestedAt)} jours</span></div>
    ${badge(reminder.status)}
  </article>`;
}

function renderCompactDispute(dispute) {
  return `<article class="compact-card">
    <div><strong>${dispute.client}</strong><span>${dispute.reason} · ${dispute.product}</span></div>
    ${badge(dispute.status)}
  </article>`;
}

function renderCompactArrival(arrival) {
  const balance = arrivalBalance(arrival);
  return `<article class="compact-card">
    <div><strong>${arrival.product}</strong><span>${arrival.expectedAt} · solde ${balance}</span></div>
    ${badge(balance < 0 ? "alerte" : "ok", balance < 0 ? "danger" : "success")}
  </article>`;
}

function renderOrderCard(order) {
  const client = apiClients.winessLivraison.getClient(order.clientId);
  const missing = getMissingProducts(order);
  return `<article class="data-card">
    <div class="card-head">
      <div><span class="id">${order.id}</span><h3>${order.clientName}</h3></div>
      ${badge(order.status)}
    </div>
    <dl>
      <div><dt>Source</dt><dd>${order.source}</dd></div>
      <div><dt>Demandé par</dt><dd>${order.requestedBy}</dd></div>
      <div><dt>Assigné à</dt><dd>${order.assignedTo}</dd></div>
      <div><dt>Livreur</dt><dd>${order.driver || "À choisir"}</dd></div>
      <div><dt>Client</dt><dd>${client ? `${client.phone} · ${client.address}` : "À créer dans Winess Livraison"}</dd></div>
    </dl>
    <ul class="product-list">${order.products.map((product) => `<li>${product.qty} × ${product.name} <span>${product.ref}</span></li>`).join("")}</ul>
    ${missing.length ? `<p class="alert-text">Stock Wino insuffisant : ${missing.join(", ")}</p>` : ""}
    ${order.missingComment ? `<p class="note">${order.missingComment}</p>` : ""}
    <div class="actions">${renderOrderActions(order)}</div>
  </article>`;
}

function renderDeliveryCard(order) {
  return `<article class="data-card">
    <div class="card-head">
      <div><span class="id">${order.id}</span><h3>${order.clientName}</h3></div>
      ${badge(order.status)}
    </div>
    <p class="note">Winess Livraison : ${order.driver ? `assignée à ${order.driver}` : "pas encore envoyée"}</p>
    <div class="actions">
      ${order.status === "Préparation terminée" ? actionButton("Envoyer au livreur", "send-delivery", order.id) : ""}
      ${order.status === "Envoyée au livreur" ? actionButton("Marquer livré", "mark-delivered", order.id) : ""}
      <a class="button-link" href="https://winess-livraison.example/commandes/${encodeURIComponent(order.id)}" target="_blank" rel="noreferrer">Ouvrir Winess Livraison</a>
    </div>
  </article>`;
}

function renderReminderCard(reminder) {
  const late = daysLate(reminder.requestedAt);
  return `<article class="data-card">
    <div class="card-head">
      <div><span class="id">${reminder.id}</span><h3>${reminder.subject}</h3></div>
      ${badge(reminder.status)}
    </div>
    <dl>
      <div><dt>Demandé par</dt><dd>${reminder.requestedBy}</dd></div>
      <div><dt>Assigné à</dt><dd>${reminder.assignedTo}</dd></div>
      <div><dt>Personnes taguées</dt><dd>${reminder.tagged.join(", ")}</dd></div>
      <div><dt>Date demande</dt><dd>${formatDate(reminder.requestedAt)}</dd></div>
      <div><dt>Retard</dt><dd>${late > 0 ? `+${late} jours` : "à jour"}</dd></div>
    </dl>
    <p class="note">${reminder.comments.join(" ")}</p>
    <div class="actions">${reminder.status !== "terminé" ? `<button data-action="complete-reminder" data-reminder-id="${reminder.id}" type="button">Terminer</button>` : ""}</div>
  </article>`;
}

function renderDisputeCard(dispute) {
  return `<article class="data-card">
    <div class="card-head">
      <div><span class="id">${dispute.id}</span><h3>${dispute.client}</h3></div>
      ${badge(dispute.status)}
    </div>
    <dl>
      <div><dt>Produit</dt><dd>${dispute.product}</dd></div>
      <div><dt>Référence</dt><dd>${dispute.ref}</dd></div>
      <div><dt>Raison</dt><dd>${dispute.reason}</dd></div>
      <div><dt>Tagués</dt><dd>${dispute.tagged.join(", ")}</dd></div>
    </dl>
    <p class="note">${dispute.comment}</p>
    <div class="actions">${dispute.status !== "résolu" ? `<button data-action="resolve-dispute" data-dispute-id="${dispute.id}" type="button">Résoudre</button>` : ""}</div>
  </article>`;
}

function renderArrivalCard(arrival) {
  const reserved = arrival.presales.reduce((sum, item) => sum + item.qty, 0);
  const balance = arrivalBalance(arrival);
  return `<article class="data-card ${balance < 0 ? "has-alert" : ""}">
    <div class="card-head">
      <div><span class="id">${arrival.id}</span><h3>${arrival.product}</h3></div>
      ${badge(balance < 0 ? "solde négatif" : "solde ok", balance < 0 ? "danger" : "success")}
    </div>
    <dl>
      <div><dt>Référence</dt><dd>${arrival.ref}</dd></div>
      <div><dt>Quantité attendue</dt><dd>${arrival.expectedQty}</dd></div>
      <div><dt>Arrivée prévue</dt><dd>${arrival.expectedAt}</dd></div>
      <div><dt>Réservé</dt><dd>${reserved}</dd></div>
      <div><dt>Solde restant</dt><dd>${balance}</dd></div>
    </dl>
    <ul class="product-list">${arrival.presales.map((sale) => `<li>${sale.owner} → ${sale.client} <span>${sale.qty} pièces</span></li>`).join("")}</ul>
    ${balance < 0 ? `<p class="alert-text">Alerte : préventes supérieures à la quantité attendue.</p>` : ""}
  </article>`;
}

function renderStockCard(item) {
  const impactedOrders = state.orders.filter((order) => order.products.some((product) => product.ref === item.ref));
  return `<article class="data-card">
    <div class="card-head">
      <div><span class="id">${item.ref}</span><h3>${item.product}</h3></div>
      ${badge(`${item.available} dispo`, item.available > 10 ? "success" : item.available > 0 ? "warning" : "danger")}
    </div>
    <dl>
      <div><dt>Source officielle</dt><dd>${item.source}</dd></div>
      <div><dt>Dernière lecture</dt><dd>${item.updatedAt}</dd></div>
      <div><dt>Commandes liées</dt><dd>${impactedOrders.map((order) => order.id).join(", ") || "aucune"}</dd></div>
    </dl>
  </article>`;
}

function renderOrderActions(order) {
  const actions = [];
  if (order.status === "À préparer") actions.push(actionButton("Démarrer", "start-order", order.id));
  if (order.status === "En cours") actions.push(actionButton("Préparation terminée", "finish-prep", order.id));
  if (order.status === "Préparation terminée") actions.push(actionButton("Envoyer au livreur", "send-delivery", order.id));
  if (order.status === "Envoyée au livreur") actions.push(actionButton("Marquer livré", "mark-delivered", order.id));
  actions.push(actionButton("Ajouter manquant", "add-missing", order.id));
  return actions.join("");
}

function actionButton(label, action, orderId) {
  return `<button data-action="${action}" data-order-id="${orderId}" type="button">${label}</button>`;
}

function openSendDelivery(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  state.selectedOrderId = orderId;
  nodes.sendDeliverySummary.textContent = `${order.id} · ${order.clientName}. Le fichier client sera lu ou créé dans Winess Livraison avant l’envoi.`;
  nodes.driverSelect.innerHTML = drivers.map((driver) => `<option value="${driver}">${driver}</option>`).join("");
  nodes.sendDeliveryDialog.showModal();
}

function confirmSendDelivery() {
  const order = state.orders.find((item) => item.id === state.selectedOrderId);
  if (!order) return;

  const driver = nodes.driverSelect.value;
  const client = apiClients.winessLivraison.getClient(order.clientId) || apiClients.winessLivraison.createClient({
    name: order.clientName,
    phone: "à compléter",
    address: "à compléter",
    instructions: "Créé depuis Winess Hub",
  });

  const delivery = apiClients.winessLivraison.sendOrder(order, driver, client);
  order.driver = driver;
  order.status = "Envoyée au livreur";
  pushNotification("livraison envoyée", `${order.id} envoyée à ${driver}`);
  state.activity.unshift(`${order.id} envoyée à ${driver} dans Winess Livraison.`);
  nodes.sendDeliveryDialog.close();
  render();
  window.open(delivery.deliveryUrl, "_blank", "noopener");
}

function updateOrder(orderId, patch, notificationType) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  Object.assign(order, patch);
  pushNotification(notificationType, `${order.id} · ${order.clientName}`);
  state.activity.unshift(`${order.id} : ${patch.status}.`);
  render();
}

function updateReminder(reminderId, status) {
  const reminder = state.reminders.find((item) => item.id === reminderId);
  if (!reminder) return;

  reminder.status = status;
  pushNotification("rappel terminé", reminder.subject);
  state.activity.unshift(`${reminder.id} terminé par ${reminder.assignedTo}.`);
  render();
}

function updateDispute(disputeId, status) {
  const dispute = state.disputes.find((item) => item.id === disputeId);
  if (!dispute) return;

  dispute.status = status;
  pushNotification("litige résolu", `${dispute.id} · ${dispute.client}`);
  state.activity.unshift(`${dispute.id} résolu.`);
  render();
}

function addMissingComment(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  const missing = getMissingProducts(order);
  order.missingComment = missing.length
    ? `Manquant détecté automatiquement via Wino : ${missing.join(", ")}.`
    : "Commentaire manquant ajouté manuellement : stock à revérifier.";
  pushNotification("commentaire ajouté", `${order.id} · ${order.missingComment}`);
  render();
}

function createMockOrder() {
  const order = {
    id: `CMD-${1042 + state.orders.length}`,
    clientId: "CLI-01",
    clientName: "Avi Rebibo Bala",
    source: "Préparation boutique",
    requestedBy: "David",
    assignedTo: "Théo",
    driver: null,
    status: "À préparer",
    dueDate: "2026-05-22",
    products: [{ ref: "ROSE-MAD-75", name: "Mademoiselle Rosé 2024", qty: 12 }],
    missingComment: "",
    comments: ["Commande mock créée depuis Winess Hub."],
  };
  state.orders.unshift(order);
  state.reminders.unshift({
    id: `RAP-${String(22 + state.reminders.length).padStart(3, "0")}`,
    subject: `Préparer ${order.id} pour ${order.clientName}`,
    requestedBy: order.requestedBy,
    assignedTo: order.assignedTo,
    tagged: ["Steven"],
    requestedAt: "2026-05-21",
    comments: ["Créé automatiquement car la commande n'est pas terminée."],
    status: "en attente",
  });
  pushNotification("nouvelle commande assignée", `${order.id} assignée à ${order.assignedTo}`);
  render();
}

function createMockDispute() {
  state.disputes.unshift({
    id: `LIT-${String(9 + state.disputes.length).padStart(3, "0")}`,
    client: "Encore",
    product: "Laurent-Perrier Brut",
    ref: "CHAMP-LP",
    reason: "Casse signalée",
    comment: "Photo demandée au client, notification envoyée aux personnes taguées.",
    tagged: ["Steven", "David"],
    status: "nouveau",
  });
  pushNotification("litige créé", "Nouveau litige Encore tagué Steven et David");
  render();
}

function openNotifications() {
  state.notifications.forEach((item) => {
    item.unread = false;
  });
  renderNotifications();
  nodes.notificationsDialog.showModal();
}

function getMissingProducts(order) {
  return order.products
    .filter((product) => {
      const liveStock = apiClients.wino.getLiveStock(product.ref);
      return liveStock && liveStock.available < product.qty;
    })
    .map((product) => `${product.name} (${product.qty} demandés)`);
}

function pushNotification(type, text) {
  state.notifications.unshift({ id: `NOT-${Date.now()}`, type, text, unread: true });
}

function arrivalBalance(arrival) {
  return arrival.expectedQty - arrival.presales.reduce((sum, item) => sum + item.qty, 0);
}

function daysLate(dateString) {
  const today = new Date("2026-05-21T12:00:00+02:00");
  const date = new Date(`${dateString}T12:00:00+02:00`);
  const diff = Math.floor((today - date) / 86400000);
  return Math.max(diff, 0);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(dateString));
}

function badge(label, tone = statusMeta[label] || "info") {
  return `<span class="badge ${tone}">${label}</span>`;
}

function emptyState(text) {
  return `<p class="empty">${text}</p>`;
}

function searchable(item) {
  return normalize(JSON.stringify(item));
}

function tokenize(value) {
  return normalize(value)
    .split(/[^a-z0-9]+/i)
    .filter((term) => term.length > 2 && !["les", "des", "une", "pour", "avec"].includes(term));
}

function rankMatches(items, terms) {
  return items
    .map((item) => ({ item, score: scoreMatch(item, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}

function scoreMatch(item, terms) {
  const haystack = typeof item === "string" ? normalize(item) : searchable(item);
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0);
}

function searchSummary(item) {
  if (item.clientName) return `${item.status} · ${item.assignedTo || item.driver || ""}`;
  if (item.phone) return `${item.phone} · ${item.address}`;
  if (item.reason) return `${item.reason} · ${item.status}`;
  if (item.subject) return `${item.assignedTo} · ${item.status}`;
  if (item.expectedQty) return `${item.expectedAt} · solde ${arrivalBalance(item)}`;
  return item.product || "";
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
