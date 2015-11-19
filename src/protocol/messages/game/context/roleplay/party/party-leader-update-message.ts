/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');

class PartyLeaderUpdateMessage extends AbstractPartyEventMessage {
    public static ID: number = 5578;

    partyLeaderId: number;

    constructor() {
        this.partyLeaderId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyLeaderUpdateMessage.ID;
    }

    public reset(): void {
        this.partyLeaderId = 0;
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
        this.serializeAs_PartyLeaderUpdateMessage(param1);
    }

    public serializeAs_PartyLeaderUpdateMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element partyLeaderId.');
        }
        param1.writeVarInt(this.partyLeaderId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyLeaderUpdateMessage(param1);
    }

    public deserializeAs_PartyLeaderUpdateMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.partyLeaderId = param1.readVarUhInt();
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element of PartyLeaderUpdateMessage.partyLeaderId.');
        }

    }
}

export = PartyLeaderUpdateMessage;
