/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import InventoryContentMessage = require('../items/inventory-content-message');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class StorageInventoryContentMessage extends InventoryContentMessage {
    public static ID: number = 5646;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return StorageInventoryContentMessage.ID;
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
        this.serializeAs_StorageInventoryContentMessage(param1);
    }

    public serializeAs_StorageInventoryContentMessage(param1: ICustomDataOutput): void {
        super.serializeAs_InventoryContentMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StorageInventoryContentMessage(param1);
    }

    public deserializeAs_StorageInventoryContentMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = StorageInventoryContentMessage;
