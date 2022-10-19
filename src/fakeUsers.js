const faker = require ('faker/locale/es');
const fs = require ('fs');

function generateUser() {
	let users = [];
	for(let id = 1; id <= 1000; id++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();

		users.push({
			id: id,
			firstName: firstName,
			lastName: lastName
		});
	}

	return { data: users }
}

const generatedUsers = generateUser();
fs.writeFileSync('name.txt', JSON.stringify(generatedUsers, null, '\t'))
