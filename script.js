// Movie data 
const movies = [
    { title: "Red Notice", year: "2021", description: "An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.", genre: "Action", image: "assets/images/action-movies/red-notice.png"},
    { title: "Extraction", year: "2020", description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.", genre: "Action", image: "assets/images/action-movies/extraction.png"},
    { title: "Mad Max: Fury Road", year: "2015", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.", genre: "Action", image: "assets/images/action-movies/mad-max.png"},
    { title: "The Dark Knight", year: "2008", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", genre: "Action", image: "assets/images/action-movies/the-dark-knight.png"},
    { title: "Top Gun: Maverick", year: "2022", description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.", genre: "Action", image: "assets/images/action-movies/top-gun.png"},
    { title: "Inception", year: "2010", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", genre: "Action", image: "assets/images/action-movies/inception.png"},
    { title: "The Matrix", year: "1999", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", genre: "Action", image: "assets/images/action-movies/matrix.png"},
    { title: "Die Hard", year: "1988", description: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.", genre: "Action", image: "assets/images/action-movies/die-hard.png"},
    { title: "John Wick", year: "2014", description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.", genre: "action", image: "assets/images/action-movies/john-wick.png"},

    { title: "Poor Things", year: "2023", description: "An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.", genre: "Comedy", image: "assets/images/comedy-movies/poor-thing.png"},
    { title: "American Pie", year: "1999", description: "Four teenage boys enter a pact to lose their virginity by prom night.", genre: "Comedy", image: "assets/images/comedy-movies/american-pie.png"},
    { title: "Ghostbusters: Afterlife", year: "2021", description: "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.", genre: "Comedy", image: "assets/images/comedy-movies/ghostbusters.png"},
    { title: "The Hangover", year: "2009", description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.", genre: "Comedy", image: "assets/images/comedy-movies/hangover.png"},
    { title: "Wonka", year: "2023", description: "With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.", genre: "Comedy", image: "assets/images/comedy-movies/wonka.png"},
    { title: "Anyone But You", year: "2023", description: "After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.", genre: "Comedy", image: "assets/images/comedy-movies/anyone-but-you.png"},
    { title: "Ghostbusters: Frozen Empire", year: "2024", description: "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.", genre: "Comedy", image: "assets/images/comedy-movies/ghostbusters-frozen-empire.png"},
    { title: "Irish Wish", year: "2024", description: "When the love of Maddie's life gets engaged to her best friend, she puts her feelings aside to be a bridesmaid at their wedding in Ireland.", genre: "Comedy", image: "assets/images/comedy-movies/irish-wish.png"},
    { title: "American Fiction", year: "2023", description: "A novelist who's fed up with the establishment profiting from Black entertainment uses a pen name to write a book that propels him into the heart of the hypocrisy and madness he claims to disdain.", genre: "Comedy", image: "assets/images/comedy-movies/american-fiction.png"},
   
    { title: "Perfume: The Story of a Murderer", year: "2022", description: "Jean-Baptiste Grenouille, born with a superior olfactory sense, creates the world's finest perfume. His work, however, takes a dark turn as he searches for the ultimate scent.", genre: "Drama", image: "assets/images/drama-movies/perfume.png" },
    { title: "Fight Club", year: "2006", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", genre: "Drama", image: "assets/images/drama-movies/fight-club.png" },
    { title: "City of God", year: "2002", description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", genre: "Drama", image: "assets/images/drama-movies/city-of-god.png" },
    { title: "Butterfly", year: "1999", description: "Based in 1936 Spain, Moncho is an outcast at school but is able to form a strong bond with his outspoken teacher. When fascism arrives to Spain, his teacher is considered an enemy of the regime & arrested.", genre: "Drama", image: "assets/images/drama-movies/butterfly.png" },
    { title: "Oldboy", year: "2003", description: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must track down his captor in five days.", genre: "Drama", image: "assets/images/drama-movies/old-boy.png" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: "2001", description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", genre: "Drama", image: "assets/images/drama-movies/lord-of-rings.png" },
    { title: "Amadeus", year: "1984", description: "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozart's talent and claimed to have murdered him.", genre: "Drama", image: "assets/images/drama-movies/amadeus.png" },
    { title: "Mother", year: "2009", description: "A mother desperately searches for the killer who framed her son for a girl's horrific murder.", genre: "Drama", image: "assets/images/drama-movies/mother.png" },
    { title: "Pan's Labyrinth", year: "2006", description: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.", genre: "Drama", image: "assets/images/drama-movies/pan's-labyrinth.png" },

    { title: "Late Night with the Devil", year: "2023", description: "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.", genre: "Horror", image: "assets/images/horror-movies/night-devil.png" },
    { title: "Immaculate", year: "2024", description: "Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent. But it becomes clear to Cecilia that her new home harbors dark and horrifying secrets.", genre: "Horror", image: "assets/images/horror-movies/immaculate.png" },
    { title: "Alien: Romulus", year: "2024", description: "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.", genre: "Horror", image: "assets/images/horror-movies/alien-romulus.png" },
    { title: "Imaginary", year: "2024", description: "A woman returns to her childhood home to discover that the imaginary friend she left behind is very real and unhappy that she abandoned him.", genre: "Horror", image: "assets/images/horror-movies/imaginary.png" },
    { title: "Dream Scenario", year: "2023", description: "An ordinary family man finds his life turned upside down when strangers suddenly start seeing him in their dreams.", genre: "Horror", image: "assets/images/horror-movies/dream-scenario.png" },
    { title: "The Crow", year: "2024", description: "Soulmates Eric Draven and Shelly Webster are brutally murdered. Given the chance to save his true love by sacrificing himself, Eric sets out to seek revenge, traversing the worlds of the living and the dead to put the wrong things right.", genre: "Horror", image: "assets/images/horror-movies/crow.png" },
    { title: "Godzilla Minus One", year: "2023", description: "Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.", genre: "Horror", image: "assets/images/horror-movies/godzilla.png" },
    { title: "You'll Never Find Me", year: "2023", description: "Patrick, a strange and lonely resident, lives in a mobile home at the back of an isolated trailer park. After a violent storm, a mysterious young woman appears at his door seeking shelter from the elements.", genre: "Horror", image: "assets/images/horror-movies/you-will-never-find-me.png" },
    { title: "The First Omen", year: "2024", description: "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.", genre: "Horror", image: "assets/images/horror-movies/first-omen.png" },

    { title: "The Phantom of the Opera", year: "1925", description: "A mad, disfigured composer seeks love with a lovely young opera singer.", genre: "Classics", image: "assets/images/classic-movies/opera-phantom.png" },
    { title: "Casablanca", year: "1942", description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.", genre: "Classics", image: "assets/images/classic-movies/casablanca.png" },
    { title: "The Invisible Man", year: "1933", description: "A scientist finds a way of becoming invisible, but in doing so, he becomes murderously insane.", genre: "Classics", image: "assets/images/classic-movies/invisible-man.png" },
    { title: "North by Northwest", year: "1959", description: "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.", genre: "Classics", image: "assets/images/classic-movies/north-by-northwest.png" },
    { title: "Singin' in the Rain", year: "1952", description: "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.", genre: "Classics", image: "assets/images/classic-movies/singing-in-rain.png" },
    { title: "Gone with the Wind", year: "1939", description: "A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.", genre: "Classics", image: "assets/images/classic-movies/gone-with-wind.png" },
    { title: "The Wolf Man", year: "1942", description: "Larry Talbot returns to his father's castle in Wales and meets a beautiful woman. One fateful night, Talbot escorts her to a local carnival where they meet a mysterious gypsy fortune teller.", genre: "Classics", image: "assets/images/classic-movies/wolfman.png" },
    { title: "Abbott and Costello Meet Frankenstein", year: "1948", description: "The Wolf Man tries to warn a dimwitted porter that Dracula wants his brain for Frankenstein monster's body.", genre: "Classics", image: "assets/images/classic-movies/frankestein.png" },
    { title: "The Day the Earth Stood Still", year: "1951", description: "An alien lands in Washington, D.C. and tells the people of Earth that they must live peacefully or be destroyed as a danger to other planets.", genre: "Classics", image: "assets/images/classic-movies/earth-stood-still.png" },

    { title: "The Wolf of Wall Street", year: "2013", description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.", genre: "Crime", image: "assets/images/crime-movies/wallstreet.png" },
    { title: "The Gentlemen", year: "2019", description: "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.", genre: "Crime", image: "assets/images/crime-movies/gentlemen.png" },
    { title: "Anatomy of a Fall", year: "2023", description: "A woman is suspected of murder after her husband's death; their half-blind son faces a moral dilemma as the main witness.", genre: "Crime", image: "assets/images/crime-movies/anatomy-of-fall.png" },
    { title: "Love Lies Bleeding", year: "2024", description: "Gym manager Lou falls for Jackie, a bodybuilder who is passing through town en route to a competition in Las Vegas.", genre: "Crime", image: "assets/images/crime-movies/love-lies-bleeding.png" },
    { title: "Killers of the Flower Moon", year: "2023", description: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.", genre: "Crime", image: "assets/images/crime-movies/killers-flower-moon.png" },
    { title: "The Batman", year: "2022", description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.", genre: "Crime", image: "assets/images/crime-movies/batman.png" },
    { title: "Animal", year: "2023", description: "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.", genre: "Crime", image: "assets/images/crime-movies/animal.png" },
    { title: "The Godfather", year: "1972", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", genre: "Crime", image: "assets/images/crime-movies/godfather.png" }
];

// Function to render movie posters
function renderMoviePosters(genreFilter) {
    // Clear previous posters
    $('#moviePosters').empty();
    
    // Filter movies based on genre and render posters
    movies.filter(function(movie) {
        if (genreFilter === 'all' || movie.genre === genreFilter) {
            // Append movie poster card
            $('#moviePosters').append(
                '<div class="col-lg-3 col-md-4 col-sm-6 mb-4">' +
                    '<div class="card h-100  movie-details" data-title="' + movie.title + '" data-year="' + movie.year + '" data-description="' + movie.description + '" data-bs-toggle="modal" data-bs-target="#movieModal"">' +
                        '<img src="' + movie.image + '" class="card-img-top" alt="Movie Poster">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title ">' + movie.title + '</h5>' +
                            '<p class="card-text fw-bold mb-2">' + movie.genre + '</p>' + 
                            '<p class="card-text fw-bold mb-2">' + movie.year + '</p>' +
                            '<p class="card-text mb-2">' + movie.description + '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        }
    });
}

// Show movie details in modal on click
$(document).on('click', '.movie-details', function() {
    const title = $(this).data('title');
    const year = $(this).data('year');
    const description = $(this).data('description');

    // Modal with movie details
    $('#movieModalBody').html (
        '<p class="mb-2"><strong>Title: </strong>' + title + '</p>' +
        '<p class="mb-2"><strong>Year: </strong>' + year + '</p>' +
        '<p class="mb-2"><strong>Description: </strong>' + description + '</p>' 
    );
});

// Render movies posters on page load
$(document).ready(function() {
    renderMoviePosters('all');
});

// Filter movies by genre
$('#genreSelect').change(function() {
    const selectGenre = $(this).val();
    renderMoviePosters(selectGenre);
});