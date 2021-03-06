import {IsOptional, Min} from 'class-validator'
import {TransferErc20} from './TransferErc20'

export class OneTransfer extends TransferErc20 {

    @IsOptional()
    @Min(0)
    public fromShardID?: number;

    @IsOptional()
    @Min(0)
    public toShardID?: number;
}
