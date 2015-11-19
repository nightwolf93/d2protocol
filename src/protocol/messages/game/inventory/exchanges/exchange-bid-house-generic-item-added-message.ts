/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseGenericItemAddedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5947;

    objGenericId: number;

    constructor() {
        this.objGenericId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseGenericItemAddedMessage.ID;
    }

    public reset(): void {
        this.objGenericId = 0;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ExchangeBidHouseGenericItemAddedMessage(param1);
    }

    public serializeAs_ExchangeBidHouseGenericItemAddedMessage(param1: ICustomDataOutput): void {
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element objGenericId.');
        }
        param1.writeVarShort(this.objGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseGenericItemAddedMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseGenericItemAddedMessage(param1: ICustomDataInput): void {
        this.objGenericId = param1.readVarUhShort();
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element of ExchangeBidHouseGenericItemAddedMessage.objGenericId.');
        }

    }
}

export = ExchangeBidHouseGenericItemAddedMessage;
