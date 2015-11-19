/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class FriendsGetListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 4001;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return FriendsGetListMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_FriendsGetListMessage(param1);
    }

    public serializeAs_FriendsGetListMessage(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendsGetListMessage(param1);
    }

    public deserializeAs_FriendsGetListMessage(param1: ICustomDataInput): void {

    }
}

export = FriendsGetListMessage;