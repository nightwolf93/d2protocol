/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class CheckIntegrityMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6372;

    data: number[];

    constructor() {
        this.data = [];
        super();
    }

    public getMessageId(): number {
        return CheckIntegrityMessage.ID;
    }

    public reset(): void {
        this.data = [];
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
        this.serializeAs_CheckIntegrityMessage(param1);
    }

    public serializeAs_CheckIntegrityMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.data.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.data.length) {
            param1.writeByte(this.data[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CheckIntegrityMessage(param1);
    }

    public deserializeAs_CheckIntegrityMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        var _loc2_: number = param1.readVarInt();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readByte();
            this.data.push(_loc4_);
            _loc3_++;
        }

    }
}

export = CheckIntegrityMessage;