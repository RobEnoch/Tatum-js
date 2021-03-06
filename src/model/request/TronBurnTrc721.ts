import {IsNotEmpty, Length, Min, ValidateIf,} from 'class-validator'
import {BurnErc721} from './BurnErc721'

export class TronBurnTrc721 extends BurnErc721 {

  @ValidateIf(o => o.signatureId)
  @IsNotEmpty()
  @Length(34, 34)
  public from?: string;

  @IsNotEmpty()
  @Length(34, 34)
  public contractAddress: string;

  @IsNotEmpty()
  @Min(0)
  public feeLimit: number;
}
