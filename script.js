// Set wordcount goal
var wordGoal = prompt("How many words do you want to write today?", "1000");

// Word counter

// Add event listener
document.getElementById("text").addEventListener("keyup", function () {
  // Get the text from the textarea
  var text = document.getElementById("text").value;

  // Split the text into words
  var words = text.split(/\s+/);

  // Remove empty strings
  words = words.filter(function (word) {
    return word !== "";
  });

  // Count the number of words
  var wordCount = words.length;
  // Count the number of characters
  var charCount = text.length;

  // Display the word count
  document.getElementById("wordCount").innerHTML = wordCount;
  // Display the character count
  document.getElementById("charCount").innerHTML = charCount;
});

// Progress bar

document.getElementById("progress").style.width =
  (wordCount / wordGoal) * 100 + "%";
