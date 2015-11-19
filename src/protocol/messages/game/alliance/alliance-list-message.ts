/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');

class AllianceListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6408;

    alliances: AllianceFactSheetInformations[];

    constructor() {
        this.alliances = [];
        super();
    }

    public getMessageId(): number {
        return AllianceListMessage.ID;
    }

    public reset(): void {
        this.alliances = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AllianceListMessage(param1);
    }

    public serializeAs_AllianceListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.alliances.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.alliances.length) {
            (this.alliances[_loc2_]).serializeAs_AllianceFactSheetInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceListMessage(param1);
    }

    public deserializeAs_AllianceListMessage(param1: ICustomDataInput): void {
        var _loc4_: AllianceFactSheetInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new AllianceFactSheetInformations();
            _loc4_.deserialize(param1);
            this.alliances.push(_loc4_);
            _loc3_++;
        }

    }
}

export = AllianceListMessage;