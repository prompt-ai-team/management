const input = document.getElementById("userInput");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const chat = document.getElementById("chat");
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = text;
  chat.appendChild(userMsg);
  input.value = "";

  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = data.joke;
    chat.appendChild(botMsg);
  })
  .catch(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = "Sorry, I couldn't fetch a joke right now.";
    chat.appendChild(botMsg);
  });
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
