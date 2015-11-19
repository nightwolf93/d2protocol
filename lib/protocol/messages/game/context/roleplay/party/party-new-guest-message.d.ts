/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyEventMessage = require('./abstract-party-event-message');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
declare class PartyNewGuestMessage extends AbstractPartyEventMessage {
    static ID: number;
    guest: PartyGuestInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyNewGuestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyNewGuestMessage(param1: ICustomDataInput): void;
}
export = PartyNewGuestMessage;