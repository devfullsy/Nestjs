import { Injectable, NotFoundException } from '@nestjs/common';
import { IVehicle } from './vehicle.interface';

@Injectable()
export class VehiclesService {
  private vehicles: IVehicle[] = [
    {
      id: 1,
      type: 'car',
      brand: 'Lambo',
      model: 'Aventator',
      color: 'Yellow',
      year: 2010,
    },
    {
      id: 2,
      type: 'bike',
      brand: 'BMW',
      model: 'Two wheels',
      color: 'Red',
      year: 2020,
    },
    {
      id: 3,
      type: 'car',
      brand: 'Ferrari',
      model: 'X',
      color: 'Blue',
      year: 2010,
    },
  ];

  getAllVehicles(): IVehicle[] {
    return this.vehicles;
  }

  getAllVehiclesByType(vehicleType: string): IVehicle[] {
    return this.vehicles.filter(({ type }) => type === vehicleType);
  }

  getVehicleByTypeAndId(vehicleType: string, vehicleId: number): IVehicle {
    const vehiclesByType = this.getAllVehiclesByType(vehicleType);
    const vehicle = vehiclesByType.find(({ id }) => id === vehicleId);

    if (!vehicle) {
      throw new NotFoundException();
    }

    return vehicle;
  }

  createVehicleByType(
    vehicleType: string,
    newVehicle: Omit<IVehicle, 'id' | 'type'>,
  ): IVehicle {
    const vehicleToCreate = {
      ...newVehicle,
      id: this.vehicles.length + 1,
      type: vehicleType,
    };
    this.vehicles.push(vehicleToCreate);
    return vehicleToCreate;
  }

  deleteVehicleByTypeAndId(vehicleType: string, vehicleId: number): string {
    const vehiclesByType = this.getAllVehiclesByType(vehicleType); 
    if (!vehiclesByType.find(({ id }) => id === vehicleId)) {
      return "element already deleted";
    }else{
      return "element successfully deleted";
    } 
  } 

}
