# Verve Framework Documentation

**Version:** 1.0.0  
**Author:** Colson

Welcome to the official documentation for the Verve Framework. Verve is a client-side web framework designed to streamline data fetching, rendering content, handling user interactions, and persisting data on backend servers. This documentation provides a comprehensive guide on how to use and implement the Verve Framework, along with real code examples.

## Table of Contents

- [Verve Framework Documentation](#verve-framework-documentation)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction ](#1-introduction-)
  - [2. Getting Started ](#2-getting-started-)
  - [3. Components ](#3-components-)
    - [Model ](#model-)
    - [View ](#view-)
    - [Collection ](#collection-)
  - [4. Example Usage ](#4-example-usage-)
    - [Fetching Data and Rendering ](#fetching-data-and-rendering-)
    - [Updating Data ](#updating-data-)
    - [Displaying User Details ](#displaying-user-details-)
  - [5. Getting Started ](#5-getting-started-)
  - [6. License ](#6-license-)
  - [Screenshots of an Example App](#screenshots-of-an-example-app)
    - [Verve - Example app rendering user with updates features](#verve---example-app-rendering-user-with-updates-features)
    - [Verve - Example app rendering data from the JSON Server](#verve---example-app-rendering-data-from-the-json-server)

## 1. Introduction <a name="introduction"></a>

Verve is a powerful client-side web framework built to simplify the development of dynamic web applications. It provides a structured approach to fetching data, rendering content, and managing user interactions, all while offering a clean and intuitive API. Whether you're building a small application or a complex web system, Verve is designed to help you achieve your goals efficiently and effectively.

## 2. Getting Started <a name="getting-started"></a>

To get started with Verve, follow these steps:

1. **Clone the Repository:** Clone the [Verve GitHub repository](https://github.com/colson0x1/verve.git) to your local machine.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Start the Development Server:** Run `npm run start:db` to start the JSON server for testing data.

4. **Start the Application:** Run `npm run start:parcel` to start the development server and launch the application in your browser.

## 3. Components <a name="components"></a>

### Model <a name="model"></a>

The Model component is the core of the Verve framework. It encapsulates data attributes, handles events, and manages data synchronization with the server.

```typescript
import { Model } from './models/Model';

// Create a new user model
const user = new Model<UserProps>(
  new Attributes<UserProps>({ name: 'John', age: 25 }),
  new Eventing(),
  new ApiSync<UserProps>('http://localhost:3000/users')
);

// Fetch data from the server
user.fetch();

// Update and save user data
user.set({ age: 26 });
user.save();
```

### View <a name="view"></a>

The View component represents the user interface and interacts with the Model component. It renders templates and responds to user interactions.

```typescript
import { View } from './views/View';

class UserView extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h2>${this.model.get('name')}</h2>
        <p>Age: ${this.model.get('age')}</p>
      </div>
    `;
  }
}

const user = User.buildUser({ name: 'Alice', age: 30 });
const userView = new UserView(document.getElementById('root'), user);
userView.render();
```

### Collection <a name="collection"></a>

The Collection component manages a group of models and handles data fetching for multiple instances.

```typescript
import { Collection } from './models/Collection';

const users = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

users.on('change', () => {
  // Render user list
});

users.fetch();
```

## 4. Example Usage <a name="example-usage"></a>

### Fetching Data and Rendering <a name="fetching-data-and-rendering"></a>

```typescript
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

const users = User.buildUserCollection();

users.on('change', () => {
  const userList = new UserList(document.getElementById('user-list'), users);
  userList.render();
});

users.fetch();
```

### Updating Data <a name="updating-data"></a>

```typescript
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Alice', age: 30 });

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}
```

### Displaying User Details <a name="displaying-user-details"></a>

```typescript
import { UserShow } from './views/UserShow';
import { User } from './models/User';

const user = User.buildUser({ name: 'John', age: 25 });
const userShow = new UserShow(document.getElementById('user-details'), user);

userShow.render();
```

## 5. Getting Started <a name="getting-started"></a>

To begin using the Verve framework in your project, follow these steps:

1. **Clone the Repository:** Begin by cloning the [Verve GitHub repository](https://github.com/colson0x1/verve.git) to your local machine.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Start the Development Server:** Run `npm run start:db` to start the JSON server for testing data.

4. **Start the Application:** Run `npm run start:parcel` to start the development server and launch the application in your browser.

## 6. License <a name="license"></a>

Verve is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Screenshots of an Example App

### Verve - Example app rendering user with updates features
![Verve - Example app rendering user with updates features](https://i.imgur.com/unbMuN5.png)

### Verve - Example app rendering data from the JSON Server
![Verve - Example app rendering data from the JSON Server](https://i.imgur.com/GTyqJQe.png)
