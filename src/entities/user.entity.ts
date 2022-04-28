import { IAddressEntity } from "./address.entity";

export interface IUserEntity {
    name: string,
    email: string,

    getAddresses(): Promise<IAddressEntity[]>;

}