//your JS code here. If required.
 // Get references to the counter element and the increment button
    const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Add event listener to the increment button
    incrementBtn.addEventListener("click", () => {
      // Get the current value of the counter
      const currentValue = parseInt(counterElement.innerText);

      // Display an alert with the current value before incrementing
      alert("Current value: " + currentValue);

      // Increment the counter
      counterElement.innerText = (currentValue + 1).toString();

    });