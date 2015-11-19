/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractCharacterToRefurbishInformation = require('./abstract-character-to-refurbish-information');
declare class CharacterToRelookInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
    static ID: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterToRelookInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterToRelookInformation(param1: ICustomDataInput): void;
}
export = CharacterToRelookInformation;