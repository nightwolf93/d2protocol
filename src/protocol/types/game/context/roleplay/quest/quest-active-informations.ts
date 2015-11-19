/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class QuestActiveInformations implements INetworkType {
    public static ID: number = 381;

    questId: number;

    constructor() {
        this.questId = 0;
    }

    public getTypeId(): number {
        return QuestActiveInformations.ID;
    }

    public reset(): void {
        this.questId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_QuestActiveInformations(param1);
    }

    public serializeAs_QuestActiveInformations(param1: ICustomDataOutput): void {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestActiveInformations(param1);
    }

    public deserializeAs_QuestActiveInformations(param1: ICustomDataInput): void {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestActiveInformations.questId.');
        }

    }
}

export = QuestActiveInformations;
