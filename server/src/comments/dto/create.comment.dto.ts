export class CreateCommentDto{
    readonly text: string;
    readonly userLogin: string;
    readonly postId: number;
}