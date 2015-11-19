/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PresetItem = require('../../../../types/game/inventory/preset/preset-item');

class InventoryPresetItemUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6168;

    presetId: number;
    presetItem: PresetItem;

    constructor() {
        this.presetId = 0;
        this.presetItem = new PresetItem();
        super();
    }

    public getMessageId(): number {
        return InventoryPresetItemUpdateMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.presetItem = new PresetItem();
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
        this.serializeAs_InventoryPresetItemUpdateMessage(param1);
    }

    public serializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        this.presetItem.serializeAs_PresetItem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetItemUpdateMessage(param1);
    }

    public deserializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataInput): void {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetItemUpdateMessage.presetId.');
        }
        this.presetItem = new PresetItem();
        this.presetItem.deserialize(param1);

    }
}

export = InventoryPresetItemUpdateMessage;
