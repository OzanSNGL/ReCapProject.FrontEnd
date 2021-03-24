import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    brandName:string;
    carName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imgPath:string,
    imgDate:Date
    carImage:CarImage;
}