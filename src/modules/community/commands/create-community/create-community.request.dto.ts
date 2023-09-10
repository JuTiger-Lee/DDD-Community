import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommunityRequestDto {
  @ApiProperty({
    example: 'Community Title',
    description: 'Community Title',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  readonly title: string;

  @ApiProperty({ example: 'contents', description: 'Community Contents' })
  @IsString()
  readonly contents: string;
}
