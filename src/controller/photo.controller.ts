import { CreatePhotoDto } from './../dto/photo.dto';
import { PhotoService } from './../service/photo.service';

import { Controller, Inject, Post, Body, Get } from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate';

@Controller('/')
export class HomeController {
  @Inject()
  PhotoService: PhotoService;
  @Get('/')
  async get(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Post('/photo')
  @Validate()
  async create(@Body() createDto: CreatePhotoDto): Promise<string> {
    await this.PhotoService.savePhoto(createDto);
    return 'Hello Midwayjs!';
  }
}
