export interface Restaurant{
    id: number;
    name: string;
    email: string;
    rating:number;
    street: string,
    government:string;
    phone:string,
    description: string;
    thumbnail: string;
    images:Array<string>;
    reviews?:Array<string>;   
}