export interface Hotel{
    id: number;
    name: string;
    street: string,
    government:string;
    description: string;
    thumbnail: string;
    images:Array<string>;
    reviews?:Array<string>;

}