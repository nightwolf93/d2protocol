/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyFollowStatusUpdateMessage extends AbstractPartyMessage {
    public static ID: number = 5581;

    success: boolean;
    followedId: number;

    constructor() {
        this.success = false;
        this.followedId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyFollowStatusUpdateMessage.ID;
    }

    public reset(): void {
        this.success = false;
        this.followedId = 0;
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
        this.serializeAs_PartyFollowStatusUpdateMessage(param1);
    }

    public serializeAs_PartyFollowStatusUpdateMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeBoolean(this.success);
        if (this.followedId < 0) {
            throw new Error('Forbidden value (' + this.followedId + ') on element followedId.');
        }
        param1.writeVarInt(this.followedId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyFollowStatusUpdateMessage(param1);
    }

    public deserializeAs_PartyFollowStatusUpdateMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.success = param1.readBoolean();
        this.followedId = param1.readVarUhInt();
        if (this.followedId < 0) {
            throw new Error('Forbidden value (' + this.followedId + ') on element of PartyFollowStatusUpdateMessage.followedId.');
        }

    }
}

export = PartyFollowStatusUpdateMessage;