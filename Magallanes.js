let age = prompt("Enter the age of your favorite artist:");

if (age < 25) {
  console.log(`They're ${age} old and they're younger than Google`);
  document.write(`They're ${age} old and they're younger than Google`)
} else if (age === 25) {
  console.log(`They're ${age} and they're as old as Google`);
  document.write(`They're ${age} and they're as old as Google`)
} else {
  alert(`They're ${age} and they're older than Google`);
}