function printstar(times) {
  if(times < 1) {
    return;
  }

  setTimeout(function() {
    console.log("*".repeat(times));
    printstar(times-1);
  }, 1000);
}

printstar(10); // Calling Function
