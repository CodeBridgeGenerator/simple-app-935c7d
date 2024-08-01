
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ProjectID: faker.lorem.sentence("8"),
NotficationSettings: faker.lorem.sentence("8"),
ServerSettings: faker.lorem.sentence(""),
SecuritySettings: faker.lorem.sentence(""),
PaymentSettings: faker.lorem.sentence(""),
AuthenticationSettings: faker.lorem.sentence(""),
IntegrationSettings: faker.lorem.sentence(""),
DatabaseSettings: faker.lorem.sentence(""),
PerformanceSettings: faker.lorem.sentence(""),
BackupSettings: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
