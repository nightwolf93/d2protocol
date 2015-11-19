/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
declare class GameActionFightTriggerGlyphTrapMessage extends AbstractGameActionMessage {
    static ID: number;
    markId: number;
    triggeringCharacterId: number;
    triggeredSpellId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataInput): void;
}
export = GameActionFightTriggerGlyphTrapMessage;