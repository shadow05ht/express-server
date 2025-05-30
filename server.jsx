const express = require("express");
const app = express();
const port = 3000;

const employees = [
  { id: 1, name: "Elvin", age: 28 },
  { id: 2, name: "Aysel", age: 32 },
  { id: 3, name: "Rauf", age: 25 },
];

app.get("/employees", (req, res) => {
  let html = "<h2>İşçilər Siyahısı</h2><ul>";
  employees.forEach((emp) => {
    html += `<li>ID: ${emp.id}; Ad: ${emp.name}; Yaş: ${emp.age}</li>`;
  });
  html += "</ul>";
  res.send(html);
});

app.get("/", (req, res) => {
  res.send('<h1> Server </h1> <p> <a href="/employees">İşçilərə bax </a> </p>');
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} ünvanında işləyir`);
});
