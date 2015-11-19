/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import ObjectEffect = require('./object-effect');
declare class ObjectEffectDuration extends ObjectEffect implements INetworkType {
    static ID: number;
    days: number;
    hours: number;
    minutes: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectEffectDuration(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectEffectDuration(param1: ICustomDataInput): void;
}
export = ObjectEffectDuration;