export interface User {
    id: number;
    displayName: string;
    username: string;
    email: string;
    bio: string;
    pfp: string;
}

export const defaultUsers: User = {
    id: 1,
    displayName: "John Doe",
    username: "John_Man_32",
    email: "johnman32@example.com",
    bio: "I’m a lifelong reader with an endless curiosity for stories of every kind—from timeless classics to modern thrillers. Every book teaches me something new about the world and myself. When I’m not reading, I’m writing reviews, building book lists, and helping others discover stories they’ll love.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
}