/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemToSellInNpcShop = require('../../../../types/game/data/items/object-item-to-sell-in-npc-shop');

class ExchangeStartOkNpcShopMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5761;

    npcSellerId: number;
    tokenId: number;
    objectsInfos: ObjectItemToSellInNpcShop[];

    constructor() {
        this.npcSellerId = 0;
        this.tokenId = 0;
        this.objectsInfos = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkNpcShopMessage.ID;
    }

    public reset(): void {
        this.npcSellerId = 0;
        this.tokenId = 0;
        this.objectsInfos = [];
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
        this.serializeAs_ExchangeStartOkNpcShopMessage(param1);
    }

    public serializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.npcSellerId);
        if (this.tokenId < 0) {
            throw new Error('Forbidden value (' + this.tokenId + ') on element tokenId.');
        }
        param1.writeVarShort(this.tokenId);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInNpcShop(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkNpcShopMessage(param1);
    }

    public deserializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItemToSellInNpcShop = null;
        this.npcSellerId = param1.readInt();
        this.tokenId = param1.readVarUhShort();
        if (this.tokenId < 0) {
            throw new Error('Forbidden value (' + this.tokenId + ') on element of ExchangeStartOkNpcShopMessage.tokenId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemToSellInNpcShop();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeStartOkNpcShopMessage;
