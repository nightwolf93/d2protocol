/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SymbioticObjectErrorMessage = require('./symbiotic-object-error-message');

class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage {
    public static ID: number = 6529;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return WrapperObjectErrorMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_WrapperObjectErrorMessage(param1);
    }

    public serializeAs_WrapperObjectErrorMessage(param1: ICustomDataOutput): void {
        super.serializeAs_SymbioticObjectErrorMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_WrapperObjectErrorMessage(param1);
    }

    public deserializeAs_WrapperObjectErrorMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = WrapperObjectErrorMessage;
