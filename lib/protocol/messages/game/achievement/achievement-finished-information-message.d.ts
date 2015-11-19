/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AchievementFinishedMessage = require('./achievement-finished-message');
declare class AchievementFinishedInformationMessage extends AchievementFinishedMessage {
    static ID: number;
    name: string;
    playerId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AchievementFinishedInformationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AchievementFinishedInformationMessage(param1: ICustomDataInput): void;
}
export = AchievementFinishedInformationMessage;