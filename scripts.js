const container = document.getElementById("quotes");

quotes.forEach(item => {

  const div = document.createElement("div");
  div.className = "quote";

  div.innerHTML = `
    <span class="name">@${item.name}</span>
    <p>${item.text}</p>
    <span class="com">${item.time}</span>
    <span class="com">From ${item.address}</span>
  `;

  container.appendChild(div);

});