const tokens = [20, 10, 5, 2, 1];

function tokenAmounts() {
  let total = parseInt(prompt("What's the total amount?"));
  if (total < 20 || total > 100 || isNaN(total)) {
    alert("Please enter a number between 20 and 100");
  } else {
    document.getElementById("total").innerHTML = total;

    let tokenCounts = [];
    for (let i = 0; i < tokens.length; i++) {
      tokenCounts.push(0);
    }

    for (let i = 0; i < tokens.length; i++) {
      tokenCounts[i] = Math.floor(total / tokens[i]);
      total %= tokens[i];
      if (tokenCounts[i] == 0) {
        document.getElementById("token" + i).style.display = "none";
        document.getElementById("token" + i + "Container").style.display =
          "none";
      } else {
        document.getElementById("token" + i).style.display = "block";
        document.getElementById("token" + i + "Container").style.display =
          "block";

        document.getElementById("token" + i).innerHTML = tokenCounts[i];
      }
    }
  }
}
