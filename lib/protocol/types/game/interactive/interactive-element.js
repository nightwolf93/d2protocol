/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var InteractiveElementSkill = require('./interactive-element-skill');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var InteractiveElement = (function () {
    function InteractiveElement() {
        this.elementId = 0;
        this.elementTypeId = 0;
        this.enabledSkills = [];
        this.disabledSkills = [];
    }
    InteractiveElement.prototype.getTypeId = function () {
        return InteractiveElement.ID;
    };
    InteractiveElement.prototype.reset = function () {
        this.elementId = 0;
        this.elementTypeId = 0;
        this.enabledSkills = [];
        this.disabledSkills = [];
    };
    InteractiveElement.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveElement(param1);
    };
    InteractiveElement.prototype.serializeAs_InteractiveElement = function (param1) {
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeInt(this.elementId);
        param1.writeInt(this.elementTypeId);
        param1.writeShort(this.enabledSkills.length);
        var _loc2_ = 0;
        while (_loc2_ < this.enabledSkills.length) {
            param1.writeShort((this.enabledSkills[_loc2_]).getTypeId());
            (this.enabledSkills[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.disabledSkills.length);
        var _loc3_ = 0;
        while (_loc3_ < this.disabledSkills.length) {
            param1.writeShort((this.disabledSkills[_loc3_]).getTypeId());
            (this.disabledSkills[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    InteractiveElement.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveElement(param1);
    };
    InteractiveElement.prototype.deserializeAs_InteractiveElement = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = 0;
        var _loc9_ = null;
        this.elementId = param1.readInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of InteractiveElement.elementId.');
        }
        this.elementTypeId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc6_);
            _loc7_.deserialize(param1);
            this.enabledSkills.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readUnsignedShort();
            _loc9_ = ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc8_);
            _loc9_.deserialize(param1);
            this.disabledSkills.push(_loc9_);
            _loc5_++;
        }
    };
    InteractiveElement.ID = 80;
    return InteractiveElement;
})();
module.exports = InteractiveElement;