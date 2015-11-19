/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeStartedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5512;

    exchangeType: number;

    constructor() {
        this.exchangeType = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedMessage.ID;
    }

    public reset(): void {
        this.exchangeType = 0;
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
        this.serializeAs_ExchangeStartedMessage(param1);
    }

    public serializeAs_ExchangeStartedMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.exchangeType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedMessage(param1);
    }

    public deserializeAs_ExchangeStartedMessage(param1: ICustomDataInput): void {
        this.exchangeType = param1.readByte();

    }
}

export = ExchangeStartedMessage;