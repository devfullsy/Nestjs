import { IsString, IsDefined, IsNumber } from "class-validator";

export class VehicleDto{
    @IsString()
    @IsDefined()
    type: string;
    @IsString()
    @IsDefined()
    brand: string;
    @IsString()
    @IsDefined()
    model: string;
    @IsString()
    @IsDefined()
    color: string;
    @IsNumber()
    @IsDefined()
    year: number;
}