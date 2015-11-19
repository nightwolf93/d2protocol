/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectEffect = require('./effects/object-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class BidExchangerObjectInfo implements INetworkType {
    public static ID: number = 122;

    objectUID: number;
    effects: ObjectEffect[];
    prices: number[];

    constructor() {
        this.objectUID = 0;
        this.effects = [];
        this.prices = [];
    }

    public getTypeId(): number {
        return BidExchangerObjectInfo.ID;
    }

    public reset(): void {
        this.objectUID = 0;
        this.effects = [];
        this.prices = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_BidExchangerObjectInfo(param1);
    }

    public serializeAs_BidExchangerObjectInfo(param1: ICustomDataOutput): void {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeShort(this.effects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.prices.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.prices.length) {
            if (this.prices[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 3 (starting at 1) of prices.');
            }
            param1.writeInt(this.prices[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BidExchangerObjectInfo(param1);
    }

    public deserializeAs_BidExchangerObjectInfo(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: ObjectEffect = null;
        var _loc8_: number = 0;
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of BidExchangerObjectInfo.objectUID.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
            _loc7_.deserialize(param1);
            this.effects.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = param1.readInt();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
            }
            this.prices.push(_loc8_);
            _loc5_++;
        }

    }
}

export = BidExchangerObjectInfo;