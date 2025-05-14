import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComponentsService } from './components.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Post()
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentsService.create({
      name: createComponentDto.name,
      link: createComponentDto.link,
      quantity: createComponentDto.quantity,
      price: createComponentDto.price,
      Build: { connect: { id: createComponentDto.buildId } },
      ...(createComponentDto.categoryId && {
        Category: { connect: { id: createComponentDto.categoryId } },
      }),
    });
  }

  @Get()
  findAll() {
    return this.componentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComponentDto: UpdateComponentDto,
  ) {
    return this.componentsService.update({
      where: { id },
      data: {
        ...updateComponentDto,
        ...(updateComponentDto.buildId && {
          Build: { connect: { id: updateComponentDto.buildId } },
        }),
        ...(updateComponentDto.categoryId && {
          Category: { connect: { id: updateComponentDto.categoryId } },
        }),
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentsService.remove({ id });
  }
}
