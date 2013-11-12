// Returns a random integer between 0 and TOP (exclusive).
function rand (top) {
    return Math.floor(Math.random() * (top-1));
}

function getIdea() {
    // FORMAT: "It's a {adjective} {company} {ending}."
    var adjr = rand(adjectives.length);
    var adj = adjectives[adjr];
    var com = companies[rand(companies.length)];
    var end = endings[rand(endings.length)];
    
    var a = "a ";
    
    if (adjr == 0 || adjr == 6 || adjr == 8) {
        a = "an ";
    }
    
    document.write("It's " + a + adj + " " + com + end + ".");
}