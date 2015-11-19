/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class KrosmasterPlayingStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6347;

    playing: boolean;

    constructor() {
        this.playing = false;
        super();
    }

    public getMessageId(): number {
        return KrosmasterPlayingStatusMessage.ID;
    }

    public reset(): void {
        this.playing = false;
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
        this.serializeAs_KrosmasterPlayingStatusMessage(param1);
    }

    public serializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.playing);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KrosmasterPlayingStatusMessage(param1);
    }

    public deserializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataInput): void {
        this.playing = param1.readBoolean();

    }
}

export = KrosmasterPlayingStatusMessage;
