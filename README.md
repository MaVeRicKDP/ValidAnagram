# ValidAnagram
# Valid Anagram Checker

This project provides a straightforward JavaScript solution to determine if two strings are anagrams of each other.

## My Approach
I implemented this using a **Sorting Strategy**. The core logic is that any two strings that are anagrams will become identical once their characters are rearranged into alphabetical order.

**The process:**
* **Length Guard**: First, I check if the strings are the same length. If they aren't, I return `false` immediately.
* **Sorting**: I convert the strings into arrays using `.split("")`, sort them with `.sort()`, and join them back into strings.
* **Comparison**: I return the result of a strict equality check between the two sorted strings.



## Performance
* **Time Complexity**: $O(n \log n)$ — This is due to the sorting process.
* **Space Complexity**: $O(n)$ — We create new arrays and strings during the sorting process.

## Environment & Workflow
This repository was managed using **Git Bash**. I handled the initial setup, remote synchronization via `pull --rebase`, and version control directly from the command line.

## Usage
```javascript
checkAnagram("listen", "silent"); // returns true
checkAnagram("hello", "world");   // returns false
