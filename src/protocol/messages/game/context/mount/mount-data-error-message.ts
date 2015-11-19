/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountDataErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6172;

    reason: number;

    constructor() {
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return MountDataErrorMessage.ID;
    }

    public reset(): void {
        this.reason = 0;
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
        this.serializeAs_MountDataErrorMessage(param1);
    }

    public serializeAs_MountDataErrorMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountDataErrorMessage(param1);
    }

    public deserializeAs_MountDataErrorMessage(param1: ICustomDataInput): void {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of MountDataErrorMessage.reason.');
        }

    }
}

export = MountDataErrorMessage;