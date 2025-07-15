
export interface Article {
    _id?: string;
    title: string;
    overview: string;
    publicationDate: Date;
    status?: 'draft' | 'published';
    graphic_url: string;
    label: string;
} 
