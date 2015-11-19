/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
var AllianceListMessage = (function (_super) {
    __extends(AllianceListMessage, _super);
    function AllianceListMessage() {
        this.alliances = [];
        _super.call(this);
    }
    AllianceListMessage.prototype.getMessageId = function () {
        return AllianceListMessage.ID;
    };
    AllianceListMessage.prototype.reset = function () {
        this.alliances = [];
    };
    AllianceListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceListMessage(param1);
    };
    AllianceListMessage.prototype.serializeAs_AllianceListMessage = function (param1) {
        param1.writeShort(this.alliances.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alliances.length) {
            (this.alliances[_loc2_]).serializeAs_AllianceFactSheetInformations(param1);
            _loc2_++;
        }
    };
    AllianceListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceListMessage(param1);
    };
    AllianceListMessage.prototype.deserializeAs_AllianceListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new AllianceFactSheetInformations();
            _loc4_.deserialize(param1);
            this.alliances.push(_loc4_);
            _loc3_++;
        }
    };
    AllianceListMessage.ID = 6408;
    return AllianceListMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceListMessage;