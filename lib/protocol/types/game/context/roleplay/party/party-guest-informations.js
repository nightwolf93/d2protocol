/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityLook = require('../../../look/entity-look');
var PlayerStatus = require('../../../character/status/player-status');
var PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var PartyGuestInformations = (function () {
    function PartyGuestInformations() {
        this.guestId = 0;
        this.hostId = 0;
        this.name = '';
        this.guestLook = new EntityLook();
        this.breed = 0;
        this.sex = false;
        this.status = new PlayerStatus();
        this.companions = [];
    }
    PartyGuestInformations.prototype.getTypeId = function () {
        return PartyGuestInformations.ID;
    };
    PartyGuestInformations.prototype.reset = function () {
        this.guestId = 0;
        this.hostId = 0;
        this.name = '';
        this.guestLook = new EntityLook();
        this.breed = 0;
        this.sex = false;
        this.status = new PlayerStatus();
        this.companions = [];
    };
    PartyGuestInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyGuestInformations(param1);
    };
    PartyGuestInformations.prototype.serializeAs_PartyGuestInformations = function (param1) {
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeInt(this.guestId);
        if (this.hostId < 0) {
            throw new Error('Forbidden value (' + this.hostId + ') on element hostId.');
        }
        param1.writeInt(this.hostId);
        param1.writeUTF(this.name);
        this.guestLook.serializeAs_EntityLook(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);
        param1.writeShort(this.companions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.companions.length) {
            (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
            _loc2_++;
        }
    };
    PartyGuestInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyGuestInformations(param1);
    };
    PartyGuestInformations.prototype.deserializeAs_PartyGuestInformations = function (param1) {
        var _loc5_ = null;
        this.guestId = param1.readInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyGuestInformations.guestId.');
        }
        this.hostId = param1.readInt();
        if (this.hostId < 0) {
            throw new Error('Forbidden value (' + this.hostId + ') on element of PartyGuestInformations.hostId.');
        }
        this.name = param1.readUTF();
        this.guestLook = new EntityLook();
        this.guestLook.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = new PartyCompanionBaseInformations();
            _loc5_.deserialize(param1);
            this.companions.push(_loc5_);
            _loc4_++;
        }
    };
    PartyGuestInformations.ID = 374;
    return PartyGuestInformations;
})();
module.exports = PartyGuestInformations;