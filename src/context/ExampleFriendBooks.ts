export interface Book {
    title: string;
    author: string;
    categories: string[];
    description: string;
    pageCount: number;
    coverUrl: string;
}

export const friend1Books: Book[] = [
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        categories: ["Fantasy", "Epic"],
        description:
            "Kvothe recounts his life story, from traveling troupe kid to infamous arcanist and legend in a richly built fantasy world.",
        pageCount: 662,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL46835937M-L.jpg",
    },
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        categories: ["Fantasy", "Epic"],
        description:
            "A war on the Shattered Plains, ancient oaths, and the return of the Knights Radiant kick off the Stormlight Archive.",
        pageCount: 1008,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL25438340M-L.jpg",
    },
    {
        title: "The Fifth Season",
        author: "N. K. Jemisin",
        categories: ["Fantasy", "Dystopian"],
        description:
            "In a world wracked by apocalyptic quakes, a mother with forbidden power hunts for her stolen daughter.",
        pageCount: 464,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL27736347M-L.jpg",
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        categories: ["Science Fiction"],
        description:
            "A lone astronaut wakes up on a ship with no memory and must solve a cosmic problem to save Earth.",
        pageCount: 480,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL32436340M-L.jpg",
    },
];

export const friend2Books: Book[] = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        categories: ["Self-Help", "Productivity"],
        description:
            "Tiny, consistent changes compound into big results, with a system-focused approach to building and breaking habits.",
        pageCount: 320,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL27918581M-L.jpg",
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        categories: ["Productivity", "Work"],
        description:
            "Argues that focused, distraction-free work is a superpower, and offers rules for cultivating it.",
        pageCount: 304,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL28147339M-L.jpg",
    },
    {
        title: "Educated",
        author: "Tara Westover",
        categories: ["Memoir"],
        description:
            "A woman raised off the grid in a strict, isolated household finds her way to formal education and reinvents her life.",
        pageCount: 352,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL26826037M-L.jpg",
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        categories: ["Psychology", "Economics"],
        description:
            "Explores the two systems of thought—fast intuition and slow reasoning—and how they shape our decisions.",
        pageCount: 512,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL24896701M-L.jpg",
    },
];

export const friend3Books: Book[] = [
    {
        title: "1984",
        author: "George Orwell",
        categories: ["Dystopian", "Classics"],
        description:
            "A surveillance state controls truth itself, and one man quietly rebels against Big Brother.",
        pageCount: 328,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL18197720M-L.jpg",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        categories: ["Classics", "Historical Fiction"],
        description:
            "Through young Scout Finch’s eyes, a small Southern town confronts racism, injustice, and moral courage.",
        pageCount: 336,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL26467746M-L.jpg",
    },
    {
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        categories: ["Literary", "Dystopian"],
        description:
            "Boarding-school friends slowly uncover the unsettling purpose behind their sheltered upbringing.",
        pageCount: 288,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL3305465M-L.jpg",
    },
    {
        title: "The Secret History",
        author: "Donna Tartt",
        categories: ["Literary", "Dark Academia"],
        description:
            "A group of elite classics students commit a crime and spiral into guilt, obsession, and betrayal.",
        pageCount: 544,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL24933958M-L.jpg",
    },
];

export const friend4Books: Book[] = [
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        categories: ["Thriller", "Psychological"],
        description:
            "A missing wife, a suspicious husband, and a twisting narrative about marriage, media, and manipulation.",
        pageCount: 432,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL25651771M-L.jpg",
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        categories: ["Mystery", "Thriller"],
        description:
            "A journalist and a brilliant hacker dig into a wealthy family’s decades-old disappearance.",
        pageCount: 608,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL27940684M-L.jpg",
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        categories: ["Thriller", "Psychological"],
        description:
            "A woman who shot her husband refuses to speak, and a psychotherapist becomes obsessed with her case.",
        pageCount: 336,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL29794168M-L.jpg",
    },
    {
        title: "Lock Every Door",
        author: "Riley Sager",
        categories: ["Thriller", "Horror"],
        description:
            "An apartment sitter in a luxurious New York building uncovers sinister secrets behind its strict rules.",
        pageCount: 384,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL30199653M-L.jpg",
    },
];

export const friend5Books: Book[] = [
    {
        title: "Beach Read",
        author: "Emily Henry",
        categories: ["Romance", "Contemporary"],
        description:
            "A romance writer and a literary novelist swap genres for a summer and end up rewriting their own love stories.",
        pageCount: 384,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL38790132M-L.jpg",
    },
    {
        title: "The Flatshare",
        author: "Beth O'Leary",
        categories: ["Romance", "Contemporary"],
        description:
            "Two strangers share a flat—and a bed—on opposite schedules, leaving each other notes that slowly turn into something more.",
        pageCount: 400,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL28713697M-L.jpg",
    },
    {
        title: "The House in the Cerulean Sea",
        author: "T. J. Klune",
        categories: ["Fantasy", "Feel-Good"],
        description:
            "A by-the-book caseworker inspects a magical orphanage and unexpectedly finds found family and joy.",
        pageCount: 400,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL27930457M-L.jpg",
    },
    {
        title: "Red, White & Royal Blue",
        author: "Casey McQuiston",
        categories: ["Romance", "LGBTQ+"],
        description:
            "The First Son of the U.S. and a British prince fake a friendship for PR—and fall in love instead.",
        pageCount: 432,
        coverUrl: "https://covers.openlibrary.org/b/olid/OL37986306M-L.jpg",
    },
];