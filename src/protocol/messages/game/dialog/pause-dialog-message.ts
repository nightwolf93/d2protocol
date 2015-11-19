/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PauseDialogMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6012;

    dialogType: number;

    constructor() {
        this.dialogType = 0;
        super();
    }

    public getMessageId(): number {
        return PauseDialogMessage.ID;
    }

    public reset(): void {
        this.dialogType = 0;
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
        this.serializeAs_PauseDialogMessage(param1);
    }

    public serializeAs_PauseDialogMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.dialogType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PauseDialogMessage(param1);
    }

    public deserializeAs_PauseDialogMessage(param1: ICustomDataInput): void {
        this.dialogType = param1.readByte();
        if (this.dialogType < 0) {
            throw new Error('Forbidden value (' + this.dialogType + ') on element of PauseDialogMessage.dialogType.');
        }

    }
}

export = PauseDialogMessage;