// Returns a random integer between 0 and TOP (exclusive).
function rand (top) {
    return Math.floor(Math.random() * (top-1));
}

// Returns a new string, prefaced by either "a " or "an ".
function getArticle(str) {
    if (str.charAt(0) == '+') {
        return "an " + str.substring(1);
    }
    
    return "a " + str;
}

// Returns a potentially new string, only if it must be prefaced with an article.
function getArticleNoun(str) {
    if (str.charAt(0) == '+') {
        return "an " + str.substring(1);
    }
    else if (str.charAt(0) == '-') {
        return "a " + str.substring(1);
    }
    
    return str;
}

function getArticleEnd(str) {
    if (str.charAt(0) == '+') {
        var i = 2;
        while (str.charAt(i) != ' ') {
            i++;
        }
        str = "it" + str.substring(i);
    }
    
    return str;
}

// Remove character encodings if situation does not call for them.
function sanitize(str) {
    if (str.charAt(0) == '+') {
        return str.substring(1);
    }
    
    return str;
}

// Returns the greatest startup idea ever.
function getIdea() {

    var selector = rand(100);
    
    // FORMAT 1 (25%): "It's a {adjective} {thing} {ending}."
    if (selector < 25) {
        var adj = adjectives[rand(adjectives.length)];
        var com = companies[rand(companies.length)];
        var end = endings[rand(endings.length)];
        
        adj = getArticle(adj);
        com = sanitize(com);
        end = sanitize(end);

        document.write("It's " + adj + " " + com + end + ".");
    }
    // FORMAT 2 (25%): "It's a {adjective}, {adjective} {thing}."
    else if (selector < 50)
    {
        var r1 = rand(adjectives.length);
        var r2;
        do {
            r2 = rand(adjectives.length);
        } while (r2 == r1);
        
        adj1 = adjectives[r1];
        adj2 = adjectives[r2];
        com = companies[rand(companies.length)];
        
        adj1 = getArticle(adj1);
        adj2 = sanitize(adj2);
        com = sanitize(com);
        
        document.write("It's " + adj1 + ", " + adj2 + " " + com + ".");
    }  
    // FORMAT 3 (25%): "It's like {thing}, but {adjective OR ending}."
    else if (selector < 75) {
        var com = companies[rand(companies.length)];
        com = getArticleNoun(com);
        var r = rand(adjectives.length + endings.length);
        
        var other;
        if (r < adjectives.length) {
            other = adjectives[r];
            other = sanitize(other);
        }
        else {
            other = endings[r - adjectives.length];
            other = getArticleEnd(other);
        }
        
        document.write("It's like " + com + ", but " + other + ".");
    }
    // FORMAT 4 (25%): "{funny thing}.io"
    else {
        var r1 = rand(syl1.length);
        var r2;
        do {
            r2 = rand(syl2.length);
        } while (r2 == r1);
        
        var s1 = syl1[r1];
        var s2 = syl2[r2];
        
        var r = rand(2);
        if (r == 0) {
            document.write(s1 + s2 + ".io");
        }
        else {
            document.write(s1 + s2 + ".ly");
        }
    }
}