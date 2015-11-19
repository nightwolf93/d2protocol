/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeStartOkNpcTradeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5785;

    npcId: number;

    constructor() {
        this.npcId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkNpcTradeMessage.ID;
    }

    public reset(): void {
        this.npcId = 0;
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
        this.serializeAs_ExchangeStartOkNpcTradeMessage(param1);
    }

    public serializeAs_ExchangeStartOkNpcTradeMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.npcId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkNpcTradeMessage(param1);
    }

    public deserializeAs_ExchangeStartOkNpcTradeMessage(param1: ICustomDataInput): void {
        this.npcId = param1.readInt();

    }
}

export = ExchangeStartOkNpcTradeMessage;