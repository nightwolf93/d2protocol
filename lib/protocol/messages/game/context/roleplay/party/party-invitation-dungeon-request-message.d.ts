/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PartyInvitationRequestMessage = require('./party-invitation-request-message');
declare class PartyInvitationDungeonRequestMessage extends PartyInvitationRequestMessage {
    static ID: number;
    dungeonId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyInvitationDungeonRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyInvitationDungeonRequestMessage(param1: ICustomDataInput): void;
}
export = PartyInvitationDungeonRequestMessage;