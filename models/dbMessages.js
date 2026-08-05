const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date().toLocaleDateString(),
    id: crypto.randomUUID,
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date().toLocaleString(),
    id: crypto.randomUUID,
  },
];

module.exports = messages;
