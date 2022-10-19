import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { EstiamGuard } from 'src/guards/estiamUsers.quard';
import { IVehicle } from './vehicle.interface';
import { VehicleDto } from './vehicles.dto';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {}

  @Get()
  getAllVehicles(): IVehicle[] {
    return this.vehicleService.getAllVehicles();
  }

  @Get('/:type')
  getAllVehiclesByType(@Param('type') vehicleType: string): IVehicle[] {
    return this.vehicleService.getAllVehiclesByType(vehicleType);
  }

  @Get('/:type/:id')
  getVehicleByTypeAndId(
    @Param('type') vehicleType: string,
    @Param('id') vehicleId: string,
  ): IVehicle {
    return this.vehicleService.getVehicleByTypeAndId(
      vehicleType,(+vehicleId)
    );
  }

  @Post('/:type')
  @UseGuards(EstiamGuard)
  @UsePipes(new ValidationPipe())
  createVehicleByType(
    @Param('type') vehicleType: string,
    @Body() newVehicle: VehicleDto,
  ): IVehicle {
    return this.vehicleService.createVehicleByType(vehicleType, newVehicle);
  }

  @Delete('/:type/:id')
  deleteVehicleByTypeAndId(
    @Param('type') vehicleType: string,
    @Param('id') vehicleId: string,
  ): String {
    return this.vehicleService.deleteVehicleByTypeAndId(
      vehicleType,(+vehicleId)
    );
  }
}
