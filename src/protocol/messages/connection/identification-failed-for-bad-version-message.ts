/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import IdentificationFailedMessage = require('./identification-failed-message');
import Version = require('../../types/version/version');

class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage {
    public static ID: number = 21;

    requiredVersion: Version;

    constructor() {
        this.requiredVersion = new Version();
        super();
    }

    public getMessageId(): number {
        return IdentificationFailedForBadVersionMessage.ID;
    }

    public reset(): void {
        this.requiredVersion = new Version();
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
        this.serializeAs_IdentificationFailedForBadVersionMessage(param1);
    }

    public serializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataOutput): void {
        super.serializeAs_IdentificationFailedMessage(param1);
        this.requiredVersion.serializeAs_Version(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationFailedForBadVersionMessage(param1);
    }

    public deserializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.requiredVersion = new Version();
        this.requiredVersion.deserialize(param1);

    }
}

export = IdentificationFailedForBadVersionMessage;