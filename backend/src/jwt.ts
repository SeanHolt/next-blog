export interface IPost {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: String;
    content?: String;
    published: Boolean;
    viewCount: number;
    authorId: number;
}
export interface IUser {
    id: number;
    email: string;
    name: string | null;
    password: string;
    posts?: IPost[];
}
export interface IComment {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    postId: number;
    post?: IPost;
    authorId: number;
    author?: IUser;
}