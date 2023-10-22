import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: '123', description: 'User id'})
  readonly userId: number;

  @ApiProperty({ example: 'Violation Code of Conduct.', description: 'Ban reason.'})
  readonly banReason: string;
}
