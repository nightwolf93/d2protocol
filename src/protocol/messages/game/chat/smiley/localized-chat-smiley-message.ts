/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ChatSmileyMessage = require('./chat-smiley-message');

class LocalizedChatSmileyMessage extends ChatSmileyMessage {
    public static ID: number = 6185;

    cellId: number;

    constructor() {
        this.cellId = 0;
        super();
    }

    public getMessageId(): number {
        return LocalizedChatSmileyMessage.ID;
    }

    public reset(): void {
        this.cellId = 0;
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
        this.serializeAs_LocalizedChatSmileyMessage(param1);
    }

    public serializeAs_LocalizedChatSmileyMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatSmileyMessage(param1);
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LocalizedChatSmileyMessage(param1);
    }

    public deserializeAs_LocalizedChatSmileyMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of LocalizedChatSmileyMessage.cellId.');
        }

    }
}

export = LocalizedChatSmileyMessage;