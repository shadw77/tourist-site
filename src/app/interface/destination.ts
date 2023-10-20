export interface Destination {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    images:Array<string>;
    reviews?:Array<string>;
}
