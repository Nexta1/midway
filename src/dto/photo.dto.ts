import { Rule, RuleType } from '@midwayjs/validate';
export class CreatePhotoDto {
  @Rule(RuleType.string().required().max(100))
  name: string;

  @Rule(RuleType.string().required())
  description: string;

  @Rule(RuleType.string().required())
  filename: string;

  @Rule(RuleType.number().required())
  views: number;

  @Rule(RuleType.boolean().required())
  isPublished: boolean;
}
