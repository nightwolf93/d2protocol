/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience');
declare class JobExperienceMultiUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    experiencesUpdate: JobExperience[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataInput): void;
}
export = JobExperienceMultiUpdateMessage;
