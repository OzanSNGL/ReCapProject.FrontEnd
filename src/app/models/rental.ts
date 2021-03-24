export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate:Date;
    userName:string;
    rented:boolean;
}

export interface RentalDetail{
    id:number;
    rentDate:Date;
    returnDate:Date;
    companyName:string;
    firstName:string;
    lastName:string;
    carName:string;
    description:string;
}