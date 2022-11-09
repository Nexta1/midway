import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from '../dto/photo.dto';
@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  // save
  async savePhoto(createPhoto: CreatePhotoDto): Promise<boolean> {
    await this.photoModel.insert(createPhoto);
    return true;
  }
}
