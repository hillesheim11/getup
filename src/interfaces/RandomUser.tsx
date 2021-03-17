export interface RandomUser {
    results: Array<User>;
    info: Info;
}

interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateOfBirthday;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Location {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface DateOfBirthday {
    date: string;
    age: number;
}

interface Registered {
    date: string;
    age: number;
}

interface Id {
    name: string;
    value: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string
}