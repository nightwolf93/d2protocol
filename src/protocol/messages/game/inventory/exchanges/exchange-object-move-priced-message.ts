/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeObjectMoveMessage = require('./exchange-object-move-message');

class ExchangeObjectMovePricedMessage extends ExchangeObjectMoveMessage {
    public static ID: number = 5514;

    price: number;

    constructor() {
        this.price = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectMovePricedMessage.ID;
    }

    public reset(): void {
        this.price = 0;
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
        this.serializeAs_ExchangeObjectMovePricedMessage(param1);
    }

    public serializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeObjectMoveMessage(param1);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectMovePricedMessage(param1);
    }

    public deserializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of ExchangeObjectMovePricedMessage.price.');
        }

    }
}

export = ExchangeObjectMovePricedMessage;