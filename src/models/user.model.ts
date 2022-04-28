import { IAddressEntity } from '../entities/address.entity';
import { IUserEntity } from '../entities/user.entity';

export class UserModel implements IUserEntity {
    constructor(public name: string, public email: string) { }

    async getAddresses(): Promise<IAddressEntity[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    {
                        street: 'Av Samuel Adams',
                        number: 123,
                    },
                    {
                        street: 'Alguma rua Adams',
                        number: 321,
                    },
                ]);
            }, 5000);
        });
    }
}
