/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectGroundRemovedMessage = (function (_super) {
    __extends(ObjectGroundRemovedMessage, _super);
    function ObjectGroundRemovedMessage() {
        this.cell = 0;
        _super.call(this);
    }
    ObjectGroundRemovedMessage.prototype.getMessageId = function () {
        return ObjectGroundRemovedMessage.ID;
    };
    ObjectGroundRemovedMessage.prototype.reset = function () {
        this.cell = 0;
    };
    ObjectGroundRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectGroundRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectGroundRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectGroundRemovedMessage(param1);
    };
    ObjectGroundRemovedMessage.prototype.serializeAs_ObjectGroundRemovedMessage = function (param1) {
        if (this.cell < 0 || this.cell > 559) {
            throw new Error('Forbidden value (' + this.cell + ') on element cell.');
        }
        param1.writeVarShort(this.cell);
    };
    ObjectGroundRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectGroundRemovedMessage(param1);
    };
    ObjectGroundRemovedMessage.prototype.deserializeAs_ObjectGroundRemovedMessage = function (param1) {
        this.cell = param1.readVarUhShort();
        if (this.cell < 0 || this.cell > 559) {
            throw new Error('Forbidden value (' + this.cell + ') on element of ObjectGroundRemovedMessage.cell.');
        }
    };
    ObjectGroundRemovedMessage.ID = 3014;
    return ObjectGroundRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectGroundRemovedMessage;