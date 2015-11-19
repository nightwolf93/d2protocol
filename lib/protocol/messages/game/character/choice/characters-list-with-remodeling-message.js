/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharactersListMessage = require('./characters-list-message');
var CharacterToRemodelInformations = require('../../../../types/game/character/choice/character-to-remodel-informations');
var CharactersListWithRemodelingMessage = (function (_super) {
    __extends(CharactersListWithRemodelingMessage, _super);
    function CharactersListWithRemodelingMessage() {
        this.charactersToRemodel = [];
        _super.call(this);
    }
    CharactersListWithRemodelingMessage.prototype.getMessageId = function () {
        return CharactersListWithRemodelingMessage.ID;
    };
    CharactersListWithRemodelingMessage.prototype.reset = function () {
        this.charactersToRemodel = [];
    };
    CharactersListWithRemodelingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharactersListWithRemodelingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharactersListWithRemodelingMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharactersListWithRemodelingMessage(param1);
    };
    CharactersListWithRemodelingMessage.prototype.serializeAs_CharactersListWithRemodelingMessage = function (param1) {
        _super.prototype.serializeAs_CharactersListMessage.call(this, param1);
        param1.writeShort(this.charactersToRemodel.length);
        var _loc2_ = 0;
        while (_loc2_ < this.charactersToRemodel.length) {
            (this.charactersToRemodel[_loc2_]).serializeAs_CharacterToRemodelInformations(param1);
            _loc2_++;
        }
    };
    CharactersListWithRemodelingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharactersListWithRemodelingMessage(param1);
    };
    CharactersListWithRemodelingMessage.prototype.deserializeAs_CharactersListWithRemodelingMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new CharacterToRemodelInformations();
            _loc4_.deserialize(param1);
            this.charactersToRemodel.push(_loc4_);
            _loc3_++;
        }
    };
    CharactersListWithRemodelingMessage.ID = 6550;
    return CharactersListWithRemodelingMessage;
})(CharactersListMessage);
module.exports = CharactersListWithRemodelingMessage;