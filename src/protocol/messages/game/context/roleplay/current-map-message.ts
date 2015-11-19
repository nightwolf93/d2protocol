/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class CurrentMapMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 220;

    mapId: number;
    mapKey: string;

    constructor() {
        this.mapId = 0;
        this.mapKey = '';
        super();
    }

    public getMessageId(): number {
        return CurrentMapMessage.ID;
    }

    public reset(): void {
        this.mapId = 0;
        this.mapKey = '';
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
        this.serializeAs_CurrentMapMessage(param1);
    }

    public serializeAs_CurrentMapMessage(param1: ICustomDataOutput): void {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
        param1.writeUTF(this.mapKey);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CurrentMapMessage(param1);
    }

    public deserializeAs_CurrentMapMessage(param1: ICustomDataInput): void {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of CurrentMapMessage.mapId.');
        }
        this.mapKey = param1.readUTF();

    }
}

export = CurrentMapMessage;