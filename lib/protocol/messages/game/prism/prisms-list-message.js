/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var PrismsListMessage = (function (_super) {
    __extends(PrismsListMessage, _super);
    function PrismsListMessage() {
        this.prisms = [];
        _super.call(this);
    }
    PrismsListMessage.prototype.getMessageId = function () {
        return PrismsListMessage.ID;
    };
    PrismsListMessage.prototype.reset = function () {
        this.prisms = [];
    };
    PrismsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismsListMessage(param1);
    };
    PrismsListMessage.prototype.serializeAs_PrismsListMessage = function (param1) {
        param1.writeShort(this.prisms.length);
        var _loc2_ = 0;
        while (_loc2_ < this.prisms.length) {
            param1.writeShort((this.prisms[_loc2_]).getTypeId());
            (this.prisms[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    PrismsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismsListMessage(param1);
    };
    PrismsListMessage.prototype.deserializeAs_PrismsListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _loc4_);
            _loc5_.deserialize(param1);
            this.prisms.push(_loc5_);
            _loc3_++;
        }
    };
    PrismsListMessage.ID = 6440;
    return PrismsListMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismsListMessage;