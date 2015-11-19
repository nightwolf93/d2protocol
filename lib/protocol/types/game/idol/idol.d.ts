/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class Idol implements INetworkType {
    static ID: number;
    id: number;
    xpBonusPercent: number;
    dropBonusPercent: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_Idol(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_Idol(param1: ICustomDataInput): void;
}
export = Idol;