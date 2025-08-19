export interface Podcast{
    _id?: string;
    title: string;
    summary: string;
    publicationDate: Date;
    video_url: string;
    thumbnail_url: string;
    guest_speaker: string;
    creator_team: string[];
    labels: string[];
    createdAt?: Date;
    updatedAt?: Date;
}