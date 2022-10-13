export class CreateCommentDto{
    readonly text: string;
    readonly userId: number;
    readonly postId: number;
}