const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("name").textContent = user.name;
  document.getElementById("age").textContent = user.age;
  document.getElementById("city").textContent = user.city;
  document.getElementById("email").textContent = user.email;
} else {
  alert("No user data found!");
}