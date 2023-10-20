export interface Trip {
    id: number;
    name: string;
    government:string;
    thumbnail: string;
    rating:number;
    description: string;
    duration:number;
    cost:number;
    images:Array<string>;
    reviews?:Array<string>;    
}
