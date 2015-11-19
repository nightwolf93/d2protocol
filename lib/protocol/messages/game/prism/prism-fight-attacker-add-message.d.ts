/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalPlusLookInformations = require('../../../types/game/character/character-minimal-plus-look-informations');
declare class PrismFightAttackerAddMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    subAreaId: number;
    fightId: number;
    attacker: CharacterMinimalPlusLookInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PrismFightAttackerAddMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PrismFightAttackerAddMessage(param1: ICustomDataInput): void;
}
export = PrismFightAttackerAddMessage;