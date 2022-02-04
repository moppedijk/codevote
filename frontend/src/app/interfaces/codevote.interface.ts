export interface CodevoteInterface {
    codeVote: {
        snippet1: string;
        snippet2: string;
        creator: {
            id: string;
            displayName: string;
            username: string;
            profileImageUrl: string;
        };
    }
}
