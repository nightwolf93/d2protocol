/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ProtectedEntityWaitingForHelpInfo = require('../fight/protected-entity-waiting-for-help-info');
var CharacterMinimalPlusLookInformations = require('../character/character-minimal-plus-look-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var PrismFightersInformation = (function () {
    function PrismFightersInformation() {
        this.subAreaId = 0;
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.allyCharactersInformations = [];
        this.enemyCharactersInformations = [];
    }
    PrismFightersInformation.prototype.getTypeId = function () {
        return PrismFightersInformation.ID;
    };
    PrismFightersInformation.prototype.reset = function () {
        this.subAreaId = 0;
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.allyCharactersInformations = [];
        this.enemyCharactersInformations = [];
    };
    PrismFightersInformation.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightersInformation(param1);
    };
    PrismFightersInformation.prototype.serializeAs_PrismFightersInformation = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        param1.writeShort(this.allyCharactersInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.allyCharactersInformations.length) {
            param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
            (this.allyCharactersInformations[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.enemyCharactersInformations.length);
        var _loc3_ = 0;
        while (_loc3_ < this.enemyCharactersInformations.length) {
            param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
            (this.enemyCharactersInformations[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    PrismFightersInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightersInformation(param1);
    };
    PrismFightersInformation.prototype.deserializeAs_PrismFightersInformation = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = 0;
        var _loc9_ = null;
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightersInformation.subAreaId.');
        }
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.waitingForHelpInfo.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.allyCharactersInformations.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readUnsignedShort();
            _loc9_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.enemyCharactersInformations.push(_loc9_);
            _loc5_++;
        }
    };
    PrismFightersInformation.ID = 443;
    return PrismFightersInformation;
})();
module.exports = PrismFightersInformation;