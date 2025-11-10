export interface User {
    id: number;
    displayName: string;
    username: string;
    email: string;
    bio: string;
    pfp: string;
}

export interface ActiveUser extends User {
    booksRead: string[];
    booksReading: string[];
    booksToRead: string[];
}

export const defaultUser: ActiveUser = {
    id: 1,
    displayName: "John Doe",
    username: "John_Man_32",
    email: "johnman32@example.com",
    bio: "I’m a lifelong reader with an endless curiosity for stories of every kind—from timeless classics to modern thrillers. Every book teaches me something new about the world and myself. When I’m not reading, I’m writing reviews, building book lists, and helping others discover stories they’ll love.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
    booksRead: [],
    booksReading: [],
    booksToRead: [],
};

export const friend1: User = {
    id: 2,
    displayName: "Emily Rivers",
    username: "BookBelle88",
    email: "emilyrivers88@example.com",
    bio: "A devoted lover of historical fiction and cozy mysteries. When I’m not lost in a Victorian novel, I’m sipping tea, journaling, or planning my next visit to an old library.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
};

export const friend2: User = {
    id: 3,
    displayName: "Marcus Reed",
    username: "PageTurner_Marc",
    email: "marcusreed@example.com",
    bio: "Tech enthusiast by day, fantasy reader by night. I enjoy exploring worlds filled with magic, adventure, and complex characters who defy the odds.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
};

export const friend3: User = {
    id: 4,
    displayName: "Sofia Nguyen",
    username: "LitLover_Sofia",
    email: "sofianbooks@example.com",
    bio: "Poetry, philosophy, and powerful prose are my passions. I love connecting words to emotion and helping others find meaning in the stories they read.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
};

export const friend4: User = {
    id: 5,
    displayName: "Dylan Brooks",
    username: "EpicReadsDylan",
    email: "dylanbrooks@example.com",
    bio: "An adventure seeker who loves epic fantasy and sci-fi sagas. My weekends are for long hikes, deep dives into lore, and sharing book recs online.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
};

export const friend5: User = {
    id: 6,
    displayName: "Rachel Kim",
    username: "StoryScout_Rachel",
    email: "rachelkim@example.com",
    bio: "Storyteller at heart, editor by trade. I’m passionate about character-driven dramas and literary fiction that spark empathy and conversation.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
};