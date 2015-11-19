/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import MapCoordinatesAndId = require('./map-coordinates-and-id');
declare class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType {
    static ID: number;
    subAreaId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapCoordinatesExtended(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapCoordinatesExtended(param1: ICustomDataInput): void;
}
export = MapCoordinatesExtended;