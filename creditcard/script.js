document.getElementById("submit-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const ccNum = document.getElementById("cc-num").value.replace(/\s/g, "");
  const cvv = document.getElementById("cvv").value.trim();
  const mm = document.getElementById("exp-mm").value.trim();
  const yy = document.getElementById("exp-yy").value.trim();
  const errorBox = document.getElementById("error-messages");

  let errors = [];

  if (!/^\d{16}$/.test(ccNum)) errors.push("Card number must be 16 digits.");
  if (name === "") errors.push("Cardholder name is required.");
  if (!/^\d{2}$/.test(mm) || parseInt(mm) < 1 || parseInt(mm) > 12) errors.push("Invalid expiration month.");
  if (!/^\d{2}$/.test(yy)) errors.push("Invalid expiration year.");
  if (!/^\d{3}$/.test(cvv)) errors.push("CVV must be 3 digits.");

  if (errors.length > 0) {
    errorBox.innerHTML = errors.map(msg => `<p>${msg}</p>`).join("");
  } else {
    errorBox.innerHTML = "";
    alert("Payment submitted successfully!");
  }
});
