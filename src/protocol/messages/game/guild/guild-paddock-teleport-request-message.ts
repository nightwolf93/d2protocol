/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildPaddockTeleportRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5957;

    paddockId: number;

    constructor() {
        this.paddockId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildPaddockTeleportRequestMessage.ID;
    }

    public reset(): void {
        this.paddockId = 0;
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
        this.serializeAs_GuildPaddockTeleportRequestMessage(param1);
    }

    public serializeAs_GuildPaddockTeleportRequestMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.paddockId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildPaddockTeleportRequestMessage(param1);
    }

    public deserializeAs_GuildPaddockTeleportRequestMessage(param1: ICustomDataInput): void {
        this.paddockId = param1.readInt();

    }
}

export = GuildPaddockTeleportRequestMessage;
