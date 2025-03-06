//your JS code here. If required.
const bands = [
    "The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", 
    "The Bled", "Say Anything", "The Midway State", "We Came as Romans", 
    "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"
];

// Function to strip 'A', 'An', 'The' for sorting
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').toLowerCase().trim(); 
}

// Sort the array using the stripped version for comparison
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Append sorted list to the HTML
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});