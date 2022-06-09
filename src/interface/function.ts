export default interface MovieFunction{
    movie:string;
    duration:String;
    roomname:String;
    available:{ChairNumber:string}[];
    startingTime:Date;
    endingTime:Date;
    functionType:string;
}
