/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ConsoleCommandsListMessage = (function (_super) {
    __extends(ConsoleCommandsListMessage, _super);
    function ConsoleCommandsListMessage() {
        this.aliases = [];
        this.args = [];
        this.descriptions = [];
        _super.call(this);
    }
    ConsoleCommandsListMessage.prototype.getMessageId = function () {
        return ConsoleCommandsListMessage.ID;
    };
    ConsoleCommandsListMessage.prototype.reset = function () {
        this.aliases = [];
        this.args = [];
        this.descriptions = [];
    };
    ConsoleCommandsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ConsoleCommandsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ConsoleCommandsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ConsoleCommandsListMessage(param1);
    };
    ConsoleCommandsListMessage.prototype.serializeAs_ConsoleCommandsListMessage = function (param1) {
        param1.writeShort(this.aliases.length);
        var _loc2_ = 0;
        while (_loc2_ < this.aliases.length) {
            param1.writeUTF(this.aliases[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.args.length);
        var _loc3_ = 0;
        while (_loc3_ < this.args.length) {
            param1.writeUTF(this.args[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.descriptions.length);
        var _loc4_ = 0;
        while (_loc4_ < this.descriptions.length) {
            param1.writeUTF(this.descriptions[_loc4_]);
            _loc4_++;
        }
    };
    ConsoleCommandsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ConsoleCommandsListMessage(param1);
    };
    ConsoleCommandsListMessage.prototype.deserializeAs_ConsoleCommandsListMessage = function (param1) {
        var _loc8_ = null;
        var _loc9_ = null;
        var _loc10_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc8_ = param1.readUTF();
            this.aliases.push(_loc8_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc9_ = param1.readUTF();
            this.args.push(_loc9_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc10_ = param1.readUTF();
            this.descriptions.push(_loc10_);
            _loc7_++;
        }
    };
    ConsoleCommandsListMessage.ID = 6127;
    return ConsoleCommandsListMessage;
})(network_message_1.NetworkMessage);
module.exports = ConsoleCommandsListMessage;