/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import DungeonPartyFinderPlayer = require('../../../../../types/game/context/roleplay/party/dungeon-party-finder-player');

class DungeonPartyFinderRoomContentMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6247;

    dungeonId: number;
    players: DungeonPartyFinderPlayer[];

    constructor() {
        this.dungeonId = 0;
        this.players = [];
        super();
    }

    public getMessageId(): number {
        return DungeonPartyFinderRoomContentMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.players = [];
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
        this.serializeAs_DungeonPartyFinderRoomContentMessage(param1);
    }

    public serializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.players.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.players.length) {
            (this.players[_loc2_]).serializeAs_DungeonPartyFinderPlayer(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DungeonPartyFinderRoomContentMessage(param1);
    }

    public deserializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataInput): void {
        var _loc4_: DungeonPartyFinderPlayer = null;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonPartyFinderRoomContentMessage.dungeonId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new DungeonPartyFinderPlayer();
            _loc4_.deserialize(param1);
            this.players.push(_loc4_);
            _loc3_++;
        }

    }
}

export = DungeonPartyFinderRoomContentMessage;