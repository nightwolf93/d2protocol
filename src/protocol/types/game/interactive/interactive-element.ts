/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import InteractiveElementSkill = require('./interactive-element-skill');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class InteractiveElement implements INetworkType {
    public static ID: number = 80;

    elementId: number;
    elementTypeId: number;
    enabledSkills: InteractiveElementSkill[];
    disabledSkills: InteractiveElementSkill[];

    constructor() {
        this.elementId = 0;
        this.elementTypeId = 0;
        this.enabledSkills = [];
        this.disabledSkills = [];
    }

    public getTypeId(): number {
        return InteractiveElement.ID;
    }

    public reset(): void {
        this.elementId = 0;
        this.elementTypeId = 0;
        this.enabledSkills = [];
        this.disabledSkills = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_InteractiveElement(param1);
    }

    public serializeAs_InteractiveElement(param1: ICustomDataOutput): void {
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeInt(this.elementId);
        param1.writeInt(this.elementTypeId);
        param1.writeShort(this.enabledSkills.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.enabledSkills.length) {
            param1.writeShort((this.enabledSkills[_loc2_]).getTypeId());
            (this.enabledSkills[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.disabledSkills.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.disabledSkills.length) {
            param1.writeShort((this.disabledSkills[_loc3_]).getTypeId());
            (this.disabledSkills[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveElement(param1);
    }

    public deserializeAs_InteractiveElement(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: InteractiveElementSkill = null;
        var _loc8_: number = 0;
        var _loc9_: InteractiveElementSkill = null;
        this.elementId = param1.readInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of InteractiveElement.elementId.');
        }
        this.elementTypeId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <InteractiveElementSkill>ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc6_);
            _loc7_.deserialize(param1);
            this.enabledSkills.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = param1.readUnsignedShort();
            _loc9_ = <InteractiveElementSkill>ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc8_);
            _loc9_.deserialize(param1);
            this.disabledSkills.push(_loc9_);
            _loc5_++;
        }

    }
}

export = InteractiveElement;