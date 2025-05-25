function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    alert("Plese enter your date of birth first.");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById(
    "result"
  ).innerText = `you are ${years} years, ${months} months , ${days} days old. `;
}
