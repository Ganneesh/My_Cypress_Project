let str = 'ggggaaaannneessh';
let arr = [];
let store = {};
let duplicates = {};

for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
}

for (let char of arr) {
    // Initialize the store object for the character if not already present
    if (!store[char]) {
        store[char] = 1;
    } else {
        store[char]++;
        if (store[char] > 1) {
            duplicates[char] = store[char];
        }
    }
}

console.log(duplicates);