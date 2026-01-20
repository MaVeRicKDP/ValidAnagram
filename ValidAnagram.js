function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) { // Checking length of both strings
    return false;
  }

  // Sorting both strings to compare character sets
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2; // Comparing sorted strings
}
