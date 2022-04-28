import moment from 'moment';
import { IUserEntity } from './entities/user.entity';
import { UserModel } from './models/user.model';
import { UserModelProxy } from './models/user_model.proxy';

async function client(user: IUserEntity): Promise<void> {
    console.log(
        `Buscando endereços pela primeira vez: ${moment(new Date()).format(
            'HH:mm:ss'
        )}`
    );
    console.log(await user.getAddresses());
    console.log(`Finalizou: ${moment(new Date()).format('HH:mm:ss')}\n`);

    for (let i = 0; i < 3; i++) {
        console.log(
            `${i} - Buscando endereços: ${moment(new Date()).format('HH:mm:ss')}`
        );
        console.log(await user.getAddresses());
        console.log(`${i} - Finalizou: ${moment(new Date()).format('HH:mm:ss')}\n`);
    }
}

const user = new UserModel('Samuel Adams',  'samuel@adams.com');
// const user = new UserModelProxy('Samuel Adams', 'samuel@adams.com');

client(user);
