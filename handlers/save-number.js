function saveNumberHandler() {
  debugger;
  // read new number from user input
  const newInput = parseInt(document.getElementById("input").value);
  // read from state the data you will need for the next step
  let newBig = numbers.biggest;
  let newSmall = numbers.smallest;
  // find the new biggest and smallest values
  if (newInput > newBig) {
    newBig = newInput;
  }
  if (newInput < newSmall) {
    newSmall = newInput;
  }
  // update state: new biggest, new smallest, new current & save the last current
  numbers.smallest = newSmall;
  numbers.biggest = newBig;
  numbers.all.push(numbers.current);
  numbers.current = newInput;
  // re-render the user interface with values stored in state
  document.getElementById("input").value = numbers.current;
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save number",
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  });
}
