import { IAddressEntity } from '../entities/address.entity';
import { IUserEntity } from '../entities/user.entity';
import { UserModel } from './user.model';

export class UserModelProxy implements IUserEntity {
    private realUser: IUserEntity | null = null;
    private realUserAddress: IAddressEntity[] | null = null;

    constructor(public name: string, public email: string) { }

    private createUser(): IUserEntity {
        if (this.realUser === null) {
            this.realUser = new UserModel(this.name, this.email);
        }
        return this.realUser;
    }

    async getAddresses(): Promise<IAddressEntity[]> {
        this.realUser = this.createUser();

        if (this.realUserAddress === null) {
            this.realUserAddress = await this.realUser.getAddresses();
        }

        return this.realUserAddress;
    }
}
