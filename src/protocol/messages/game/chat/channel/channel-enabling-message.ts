/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ChannelEnablingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 890;

    channel: number;
    enable: boolean;

    constructor() {
        this.channel = 0;
        this.enable = false;
        super();
    }

    public getMessageId(): number {
        return ChannelEnablingMessage.ID;
    }

    public reset(): void {
        this.channel = 0;
        this.enable = false;
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
        this.serializeAs_ChannelEnablingMessage(param1);
    }

    public serializeAs_ChannelEnablingMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.channel);
        param1.writeBoolean(this.enable);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChannelEnablingMessage(param1);
    }

    public deserializeAs_ChannelEnablingMessage(param1: ICustomDataInput): void {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChannelEnablingMessage.channel.');
        }
        this.enable = param1.readBoolean();

    }
}

export = ChannelEnablingMessage;