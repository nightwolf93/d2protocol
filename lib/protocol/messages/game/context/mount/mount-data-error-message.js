/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountDataErrorMessage = (function (_super) {
    __extends(MountDataErrorMessage, _super);
    function MountDataErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    MountDataErrorMessage.prototype.getMessageId = function () {
        return MountDataErrorMessage.ID;
    };
    MountDataErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    MountDataErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountDataErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountDataErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountDataErrorMessage(param1);
    };
    MountDataErrorMessage.prototype.serializeAs_MountDataErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    MountDataErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountDataErrorMessage(param1);
    };
    MountDataErrorMessage.prototype.deserializeAs_MountDataErrorMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of MountDataErrorMessage.reason.');
        }
    };
    MountDataErrorMessage.ID = 6172;
    return MountDataErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = MountDataErrorMessage;