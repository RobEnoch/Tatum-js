import {IsOptional, Min} from 'class-validator'
import {UpdateCashbackErc721} from './UpdateCashbackErc721'

export class OneUpdateCashback721 extends UpdateCashbackErc721 {

    @IsOptional()
    @Min(0)
    public fromShardID?: number;

    @IsOptional()
    @Min(0)
    public toShardID?: number;
}
