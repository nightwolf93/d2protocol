/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeStartedMessage = require('./exchange-started-message');
declare class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage {
    static ID: number;
    storageMaxSlot: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartedWithStorageMessage;