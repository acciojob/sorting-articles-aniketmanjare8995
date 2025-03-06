//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const bands = [
        "The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", 
        "The Bled", "Say Anything", "The Midway State", "We Came as Romans", 
        "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"
    ];

    // Function to remove "A", "An", "The" for sorting purposes
    function stripArticle(name) {
        return name.replace(/^(a |an |the )/i, '').toLowerCase().trim(); 
    }

    // Sort list ignoring articles
    const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

    // Ensure element exists
    const bandList = document.getElementById('band');
    if (!bandList) {
        console.error("Element #band not found!");
        return;
    }

    // Append to the DOM
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});