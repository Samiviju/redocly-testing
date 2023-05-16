import { PartialType } from '@nestjs/swagger';
import { CreateRedoclyDto } from './create-redocly.dto';

export class UpdateRedoclyDto extends PartialType(CreateRedoclyDto) {}
