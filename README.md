# Verve Framework (@ verve-nexus NPM)- Docs

**Version:** 1.0.1  
**Author:** Colson  
**Framework:** Verve Nexus  
**NPM:** [verve-nexus](https://www.npmjs.com/package/verve-nexus)

Welcome to the official documentation for the **Verve Framework (verve-nexus)**. Verve is a client-side web framework designed to streamline data fetching, rendering content, handling user interactions, and persisting data on backend servers. This documentation provides a comprehensive guide on how to use and implement the Verve Framework, along with real code examples.

## Table of Contents

- [Verve Framework (@ verve-nexus NPM)- Docs](#verve-framework--verve-nexus-npm--docs)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction ](#1-introduction-)
  - [2. Inspiration](#2-inspiration)
  - [3. Getting Started ](#3-getting-started-)
  - [4. Components ](#4-components-)
    - [Model ](#model-)
    - [View ](#view-)
    - [Collection ](#collection-)
  - [5. Getting Started ](#5-getting-started-)
  - [**6. Library Overview** ](#6-library-overview-)
    - [**@ Available Types**](#-available-types)
    - [1. `HasId`](#1-hasid)
    - [2. `UserProps`](#2-userprops)
    - [**@ Exported Modules**](#-exported-modules)
    - [1. **Models**](#1-models)
      - [`Model`](#model)
      - [`ApiSync`](#apisync)
      - [`Attributes`](#attributes)
      - [`Collection`](#collection)
      - [`Eventing`](#eventing)
    - [2. **Views**](#2-views)
      - [`View`](#view)
      - [`CollectionView`](#collectionview)
      - [`UserEdit`](#useredit)
      - [`UserForm`](#userform)
      - [`UserList`](#userlist)
      - [`UserShow`](#usershow)
    - [**Implementation Showcase**](#implementation-showcase)
      - [Updating Data ](#updating-data-)
      - [Displaying User Details ](#displaying-user-details-)
  - [7. License ](#7-license-)
  - [8. Screenshots of an Example App](#8-screenshots-of-an-example-app)
    - [Verve - Example app rendering user with updates features](#verve---example-app-rendering-user-with-updates-features)
    - [Verve - Example app rendering data from the JSON Server](#verve---example-app-rendering-data-from-the-json-server)
  - [9. Verve ToDo Application: Full Project Documentation](#9-verve-todo-application-full-project-documentation)
    - [**Table of Contents**](#table-of-contents-1)
    - [**Project Overview**](#project-overview)
    - [**Features to be Implemented**](#features-to-be-implemented)
    - [**Project Setup**](#project-setup)
      - [Prerequisites](#prerequisites)
      - [Step 1: Initialize Project](#step-1-initialize-project)
      - [Step 2: Install Dependencies](#step-2-install-dependencies)
      - [Step 3: Configure TypeScript](#step-3-configure-typescript)
      - [Step 4: Configure Webpack](#step-4-configure-webpack)
      - [Step 5: Mock API](#step-5-mock-api)
    - [**Project Structure**](#project-structure)
    - [**File Creation**](#file-creation)
      - [1. **Todo Model** (`src/models/Todo.ts`)](#1-todo-model-srcmodelstodots)
      - [2. **TodoCollection** (`src/collections/TodoCollection.ts`)](#2-todocollection-srccollectionstodocollectionts)
      - [3. **TodoFormView** (`src/views/TodoFormView.ts`)](#3-todoformview-srcviewstodoformviewts)
      - [4. **TodoItemView** (`src/views/TodoItemView.ts`)](#4-todoitemview-srcviewstodoitemviewts)
      - [5. **TodoListView** (`src/views/TodoListView.ts`)](#5-todolistview-srcviewstodolistviewts)
      - [6. **App** (`src/App.ts`)](#6-app-srcappts)
    - [**How the Application Works**](#how-the-application-works)
    - [**Extending the To-Do Application**](#extending-the-to-do-application)
    - [**Building Scalable Frontend Web Apps with Verve**](#building-scalable-frontend-web-apps-with-verve)
    - [**Conclusion**](#conclusion)
  - [10. Instagram like App with Verve: A Full-Feature, Production-Ready Application](#10-instagram-like-app-with-verve-a-full-feature-production-ready-application)
    - [Project Setup](#project-setup-1)
      - [1. **Project Initialization**](#1-project-initialization)
      - [2. **Project Structure**](#2-project-structure)
    - [Features to Be Built](#features-to-be-built)
  - [Core Architecture](#core-architecture)
    - [1. **API Layer**](#1-api-layer)
      - [**BaseAPI.ts**: Axios Setup for API Communication](#baseapits-axios-setup-for-api-communication)
      - [**PostAPI.ts**: API for Fetching Posts](#postapits-api-for-fetching-posts)
      - [**UserAPI.ts**: API for Fetching User Information](#userapits-api-for-fetching-user-information)
    - [2. **Models**](#2-models)
      - [**Post.ts**: Represents a Post Object](#postts-represents-a-post-object)
    - [3. **Views**](#3-views)
      - [**PostView.ts**: Renders a Single Post](#postviewts-renders-a-single-post)
      - [**PostListView.ts**: Renders the List of Posts](#postlistviewts-renders-the-list-of-posts)
      - [**ProfileView.ts**: Renders the User Profile](#profileviewts-renders-the-user-profile)
    - [4. **App Initialization**](#4-app-initialization)
      - [**App.ts**: Entry Point to Initialize Views](#appts-entry-point-to-initialize-views)
    - [Instagram API Mock Server Documentation](#instagram-api-mock-server-documentation)
    - [Additional Features \& Extensibility](#additional-features--extensibility)
  - [Conclusion - Instagram](#conclusion---instagram)
  - [**11. Verve Framework Culmination: From ToDo App to Instagram MVP**](#11-verve-framework-culmination-from-todo-app-to-instagram-mvp)

## 1. Introduction <a name="introduction"></a>

**Verve** is a powerful client-side web framework built to simplify the development of dynamic web applications. It provides a structured approach to fetching data, rendering content, and managing user interactions, all while offering a clean and intuitive API. Whether you're building a small application or a complex web system, Verve is designed to help you achieve your goals efficiently and effectively.

## 2. Inspiration

Verve draws its design philosophy and core concepts from two prominent frameworks in the JavaScript landscape: Backbone JS and Marionette JS. These frameworks have served as the wellspring of inspiration for numerous architectural decisions and functional aspects within Verve.

- **Backbone JS:** Verve's underpinning model structure and data management mechanism owe a debt to the principles championed by Backbone JS. The elegant organization of data and the orchestration of interactions within Backbone have fundamentally shaped the core capabilities of Verve's model components.

- **Marionette JS:** By building upon the solid foundation of Backbone, Verve also takes inspiration from Marionette JS, an extension that simplifies and enriches the development of Backbone applications. Verve's view class hierarchy and sophisticated handling of user interactions reflect the well-crafted paradigms encapsulated in Marionette.

The harmonious integration of insights from both Backbone and Marionette has significantly contributed to shaping Verve into a comprehensive, sophisticated framework tailored to crafting dynamic client-side web applications.

## 3. Getting Started <a name="getting-started"></a>

To get started with Verve, follow these steps:

1. **Clone the Repository:** Clone the [Verve GitHub repository](https://github.com/colson0x1/verve.git) to your local machine.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Start the Development Server:** Run `npm run start:db` to start the JSON server for testing data.

4. **Start the Application:** Run `npm run start:parcel` to start the development server and launch the application in your browser.

## 4. Components <a name="components"></a>

### Model <a name="model"></a>

The Model component is the core of the Verve framework. It encapsulates data attributes, handles events, and manages data synchronization with the server.

```typescript
import { Model } from './models/Model';

// Create a new user model
const user = new Model<UserProps>(
  new Attributes<UserProps>({ name: 'John', age: 25 }),
  new Eventing(),
  new ApiSync<UserProps>('http://localhost:3000/users'),
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
  (json: UserProps) => User.buildUser(json),
);

users.on('change', () => {
  // Render user list
});

users.fetch();
```

## 5. Getting Started <a name="getting-started"></a>

To begin using the Verve framework in your project, follow these steps:

1. **Clone the Repository:** Begin by cloning the [Verve GitHub repository](https://github.com/colson0x1/verve.git) to your local machine.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Start the Development Server:** Run `npm run start:db` to start the JSON server for testing data.

4. **Start the Application:** Run `npm run start:parcel` to start the development server and launch the application in your browser.

## **6. Library Overview** <a name="library-overview"></a>

Verve provides a collection of classes and interfaces that facilitate the development of sophisticated web applications. Below is a detailed description of the available exports and types from the Verve library.

### **@ Available Types**

### 1. `HasId`

An interface representing an entity that can have an optional identifier.

```typescript
export interface HasId {
  id?: number;
}
```

### 2. `UserProps`

An interface defining the properties of a `User` object.

```typescript
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
```

### **@ Exported Modules**

### 1. **Models**

#### `Model`

A base class for creating models with attributes, events, and synchronization capabilities.

```typescript
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>,
  ) {}

  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  fetch(): void;
  save(): void;
}
```

#### `ApiSync`

A class for synchronizing data with a REST API.

```typescript
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
```

#### `Attributes`

A class for managing model attributes.

```typescript
export class Attributes<T extends object> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}
```

#### `Collection`

A class for managing a collection of models.

```typescript
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T,
  ) {}

  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
  fetch(): void;
}
```

#### `Eventing`

A class for managing events and listeners.

```typescript
export class Eventing {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
```

### 2. **Views**

#### `View`

An abstract class for creating views that bind to a model and render UI.

```typescript
export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(
    public parent: Element,
    public model: T,
  ) {}

  abstract template(): string;

  regionsMap(): { [key: string]: string };
  eventsMap(): { [key: string]: () => void };
  bindModel(): void;
  bindEvents(fragment: DocumentFragment): void;
  mapRegions(fragment: DocumentFragment): void;
  onRender(): void;
  render(): void;
}
```

#### `CollectionView`

An abstract class for rendering a collection of models.

```typescript
export abstract class CollectionView<T, K> {
  constructor(
    public parent: Element,
    public collection: Collection<T, K>,
  ) {}

  abstract renderItem(model: T, itemParent: Element): void;
  render(): void;
}
```

#### `UserEdit`

A view class for editing user details.

```typescript
export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string };
  onRender(): void;
  template(): string;
}
```

#### `UserForm`

A view class for rendering a user form.

```typescript
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void };
  onSaveClick(): void;
  onSetNameClick(): void;
  onSetAgeClick(): void;
  template(): string;
}
```

#### `UserList`

A view class for rendering a list of users.

```typescript
export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void;
}
```

#### `UserShow`

A view class for displaying user details.

```typescript
export class UserShow extends View<User, UserProps> {
  template(): string;
}
```

### **Implementation Showcase**

Here is a simple example of how to use the Verve library to display a list of users:

```typescript
import { Collection } from 'verve-nexus';
import { User, UserProps } from 'verve-nexus';
import { UserList } from 'verve-nexus';

const users = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json),
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
```

````

## 5. Example Usage <a name="example-usage"></a>

#### Fetching Data and Rendering <a name="fetching-data-and-rendering"></a>

```typescript
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

const users = User.buildUserCollection();

users.on('change', () => {
  const userList = new UserList(document.getElementById('user-list'), users);
  userList.render();
});

users.fetch();
````

#### Updating Data <a name="updating-data"></a>

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

#### Displaying User Details <a name="displaying-user-details"></a>

```typescript
import { UserShow } from './views/UserShow';
import { User } from './models/User';

const user = User.buildUser({ name: 'John', age: 25 });
const userShow = new UserShow(document.getElementById('user-details'), user);

userShow.render();
```

## 7. License <a name="license"></a>

Verve is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 8. Screenshots of an Example App

### Verve - Example app rendering user with updates features

![Verve - Example app rendering user with updates features](https://i.imgur.com/unbMuN5.png)

### Verve - Example app rendering data from the JSON Server

![Verve - Example app rendering data from the JSON Server](https://i.imgur.com/GTyqJQe.png)

---

## 9. Verve ToDo Application: Full Project Documentation

This documentation will walk you through the process of setting up, building, and extending a full-fledged **To-Do Application** using the **Verve framework**. The Verve framework is a lightweight, custom-built, highly flexible TypeScript-based framework designed to facilitate rapid development of modular, front-end web applications while adhering to clean architectural principles such as separation of concerns, reusability, and scalability.

### **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features to be Implemented](#features-to-be-implemented)
3. [Project Setup](#project-setup)
4. [Project Structure](#project-structure)
5. [File Creation](#file-creation)
6. [How the Application Works](#how-the-application-works)
7. [Extending the To-Do Application](#extending-the-to-do-application)
8. [Building Scalable Frontend Web Apps](#building-scalable-frontend-web-apps-with-verve)
9. [Conclusion](#conclusion)

---

### **Project Overview**

The goal of this project is to build a **To-Do List Web Application** with all essential CRUD functionality, utilizing the Verve framework. Verve offers a lightweight model-view-controller (MVC) style architecture where state management, event handling, and rendering logic are separated into modular components. We will:

- Manage tasks (todos) with the ability to create, read, update, and delete (CRUD).
- Use TypeScript for enhanced type safety, clean code architecture, and scalable development.
- Implement reactivity, so any change to the state (such as adding a task or marking it complete) will trigger a re-render without reloading the page.

### **Features to be Implemented**

1. **Add New Task**: Users can input a title and save new to-dos.
2. **Edit Task**: Users can update the content of existing to-dos.
3. **Complete Task**: Users can mark a to-do as complete or incomplete.
4. **Delete Task**: Users can delete a to-do item from the list.
5. **Persist State**: To-dos are saved and loaded from an external API.
6. **Modular Views**: Each section of the app (task list, task item, task form) is rendered by a separate view component.
7. **Scalable Architecture**: Following MVC principles for long-term maintenance and scalability.

---

### **Project Setup**

#### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14+)
- **npm** or **yarn**
- **TypeScript** (Globally installed via `npm install -g typescript`)
- **JSON Server** (for mocking API, install via `npm install -g json-server`)

#### Step 1: Initialize Project

Create a new directory for the project and initialize a Node.js project.

```bash
mkdir verve-todo-app
cd verve-todo-app
npm init -y
```

#### Step 2: Install Dependencies

Install the required packages:

```bash
npm install typescript webpack webpack-cli ts-loader verve
npm install --save-dev webpack-dev-server
```

Install `json-server` globally to simulate the backend API for to-do persistence.

```bash
npm install -g json-server
```

#### Step 3: Configure TypeScript

Create a `tsconfig.json` file for TypeScript configuration:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### Step 4: Configure Webpack

Create a `webpack.config.js` file to bundle the TypeScript files.

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
```

#### Step 5: Mock API

Create a mock API using `json-server`. Add the following to a `db.json` file for initial tasks:

```json
{
  "todos": [
    { "id": 1, "title": "Learn Verve Framework", "completed": false },
    { "id": 2, "title": "Build To-Do App", "completed": true }
  ]
}
```

Run the server using:

```bash
json-server --watch db.json --port 3000
```

---

### **Project Structure**

A clean folder structure is critical for maintainability and scalability. Here's the proposed structure for the Verve To-Do App:

```
verve-todo-app/
│
├── src/
│   ├── models/
│   │   └── Todo.ts          # Todo Model
│   ├── collections/
│   │   └── TodoCollection.ts # Collection for Todo items
│   ├── views/
│   │   ├── TodoFormView.ts   # View for adding/editing todos
│   │   ├── TodoItemView.ts   # View for displaying a single todo
│   │   └── TodoListView.ts   # View for rendering the list of todos
│   └── App.ts               # Entry point to initialize the app
│
├── dist/                     # Compiled output folder
├── db.json                   # JSON Server mock data
├── package.json
├── tsconfig.json
└── webpack.config.js
```

---

### **File Creation**

Following the structure above, create the necessary files under the `src/` directory.

#### 1. **Todo Model** (`src/models/Todo.ts`)

The **Todo** model will manage each task's state, including data persistence.

```typescript
import { Model } from 'verve-nexus';
import { ApiSync } from 'verve-nexus';
import { Attributes } from 'verve-nexus';
import { Eventing } from 'verve-nexus';

export interface TodoProps {
  id?: number;
  title?: string;
  completed?: boolean;
}

const ROOT_URL = 'http://localhost:3000/todos';

export class Todo extends Model<TodoProps> {
  static buildTodo(attrs: TodoProps): Todo {
    return new Todo(
      new Attributes<TodoProps>(attrs),
      new Eventing(),
      new ApiSync<TodoProps>(ROOT_URL),
    );
  }
}
```

#### 2. **TodoCollection** (`src/collections/TodoCollection.ts`)

A collection of **Todo** items. It handles fetching the to-do list from the API.

```typescript
import { Collection } from 'verve-nexus';
import { Todo, TodoProps } from '../models/Todo';

export class TodoCollection extends Collection<Todo, TodoProps> {
  constructor() {
    super('http://localhost:3000/todos', (json: TodoProps) =>
      Todo.buildTodo(json),
    );
  }
}
```

#### 3. **TodoFormView** (`src/views/TodoFormView.ts`)

Form view responsible for creating or updating a task.

```typescript
import { View } from 'verve-nexus';
import { Todo, TodoProps } from '../models/Todo';

export class TodoFormView extends View<Todo, TodoProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.save-todo': this.onSaveClick,
      'input:.todo-title': this.onTitleInput,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onTitleInput = (): void => {
    const input = this.parent.querySelector('.todo-title') as HTMLInputElement;
    this.model.set({ title: input.value });
  };

  template(): string {
    return `
      <div>
        <input class="todo-title" placeholder="Add a new task" value="${this.model.get('title') || ''}" />
        <button class="save-todo">Save</button>
      </div>
    `;
  }
}
```

#### 4. **TodoItemView** (`src/views/TodoItemView.ts`)

Renders an individual task and allows completion or deletion.

```typescript
import { View } from 'verve-nexus';
import { Todo, TodoProps } from '../models/Todo';

export class TodoItemView extends View<Todo, TodoProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.toggle-completed': this.onToggleCompleted,
      'click:.delete-todo': this.onDeleteTodo,
    };
  }

  onToggleCompleted = (): void => {
    const completed = this.model.get('completed');
    this.model.set({ completed: !completed });
    this.model.save();
  };

  onDeleteTodo = (): void => {
    this.model.delete();
  };

  template(): string {
    const { title, completed } = this.model.getAll();
    return `
      <div class="todo-item ${completed ? 'completed' : ''}">
        <input type="checkbox" class="

toggle-completed" ${completed ? 'checked' : ''} />
        <span>${title}</span>
        <button class="delete-todo">Delete</button>
      </div>
    `;
  }
}
```

#### 5. **TodoListView** (`src/views/TodoListView.ts`)

Renders the full list of tasks.

```typescript
import { ViewCollection } from 'verve-nexus';
import { Todo, TodoProps } from '../models/Todo';
import { TodoItemView } from './TodoItemView';

export class TodoListView extends ViewCollection<Todo, TodoProps> {
  renderItem(model: Todo, itemParent: Element): void {
    new TodoItemView(itemParent, model).render();
  }

  template(): string {
    return `<div class="todo-list"></div>`;
  }
}
```

#### 6. **App** (`src/App.ts`)

The entry point that initializes the application and ties all components together.

```typescript
import { Todo } from './models/Todo';
import { TodoCollection } from './collections/TodoCollection';
import { TodoListView } from './views/TodoListView';
import { TodoFormView } from './views/TodoFormView';

const todos = new TodoCollection();

todos.fetch().then(() => {
  const root = document.getElementById('root');

  if (root) {
    const todoList = new TodoListView(root, todos);
    todoList.render();

    const form = new TodoFormView(
      document.querySelector('.form-root')!,
      Todo.buildTodo({}),
    );
    form.render();
  }
});
```

---

### **How the Application Works**

This application follows the **MVC (Model-View-Controller)** architecture to ensure separation of concerns:

1. **Models** represent the state and logic of the application. They are responsible for handling data persistence and triggering events.
2. **Views** handle the presentation logic. They render the UI based on model data and trigger updates to the model in response to user interactions.
3. **Controllers** (implicitly present in the View layer) connect models and views, responding to user actions and updating models accordingly.

The **TodoCollection** fetches tasks from the API and instantiates **Todo** models. Each **Todo** is rendered as a **TodoItemView**, which is responsible for allowing users to interact with individual tasks (completing, deleting, etc.).

### **Extending the To-Do Application**

This project is structured in a modular way that can be easily extended. Possible extensions include:

- **Filter Tasks by Completion**: Add a view that allows filtering tasks by their completion status.
- **Task Due Dates**: Extend the **Todo** model to include due dates and add corresponding UI elements to handle dates.
- **Task Prioritization**: Implement task priorities with sorting functionality.
- **User Authentication**: Integrate a login system to allow multiple users to manage separate to-do lists.

### **Building Scalable Frontend Web Apps with Verve**

The principles laid down in this project can be used to build larger, more complex frontend applications. The **Verve framework** provides the following benefits for building scalable apps:

1. **Modularization**: Each feature or component of the application is isolated, promoting code reuse and easier testing.
2. **Type Safety with TypeScript**: Leveraging TypeScript’s type checking ensures that changes are caught at compile time, reducing bugs.
3. **Separation of Concerns**: The strict separation of Models and Views ensures that the code remains easy to maintain as the application grows.
4. **Scalable State Management**: Since each model handles its own state and persistence, managing large stateful applications becomes easier, allowing for potential integrations with more advanced state management systems like Redux in the future.

### **Conclusion**

The Verve-based To-Do Application provides a simple yet robust foundation for building modular, scalable, and maintainable frontend applications. By following modern software engineering principles, we've created a reusable architecture that can be easily extended and adapted to suit any business need in the frontend web development domain. This project can act as a template for any future application, providing a strong base to scale while ensuring high-quality, production-ready code.

## 10. Instagram like App with Verve: A Full-Feature, Production-Ready Application

This documentation outlines the process of building a **fully functional Instagram-like app** using the **Verve framework**. The goal is to demonstrate how the framework can be used to build **production-grade applications** with a clean and modular architecture. This app will adhere to the principles of **scalability, maintainability, and extensibility**, just like the previously discussed to-do application.

The architecture will leverage **TypeScript** for strong type safety, **Model-View-Controller (MVC)** principles for separation of concerns, and the **Verve framework** to seamlessly handle state management, rendering, and event handling. The project will also integrate external API services for user posts, comments, likes, and user profiles.

### Project Setup

#### 1. **Project Initialization**

```bash
mkdir instagram-clone-app
cd instagram-clone-app
npm init -y
npm install verve-nexus typescript axios
```

#### 2. **Project Structure**

Here's the ideal project structure for the app:

```
.
├── src
│   ├── api
│   │   ├── BaseAPI.ts
│   │   ├── PostAPI.ts
│   │   └── UserAPI.ts
│   ├── collections
│   │   └── PostCollection.ts
│   ├── models
│   │   └── Post.ts
│   ├── views
│   │   ├── PostView.ts
│   │   ├── PostListView.ts
│   │   ├── ProfileView.ts
│   │   └── CommentView.ts
│   └── App.ts
├── index.html
├── styles.css
└── tsconfig.json
```

### Features to Be Built

1. **User Profile**: Displays user information, including profile picture, bio, and follower count.
2. **Posts Feed**: Displays a list of user posts with pictures, captions, likes, and comments.
3. **Post Creation**: Allows users to create a new post with an image and caption.
4. **Likes & Comments**: Users can like and comment on posts.
5. **User Authentication**: Basic authentication system with login/logout flow.

---

## Core Architecture

We will follow the **Model-View-Controller (MVC)** paradigm:

1. **Models** will encapsulate business logic and data.
2. **Views** will manage DOM updates and user interaction.
3. **Controllers** (implicit) will manage the communication between views and models, ensuring data flows correctly between the frontend and backend services.

### 1. **API Layer**

We will use **Axios** to communicate with the backend API, encapsulating API calls in dedicated classes for **Posts** and **Users**.

#### **BaseAPI.ts**: Axios Setup for API Communication

```typescript
import axios from 'axios';

export class BaseAPI {
  static axiosInstance = axios.create({
    baseURL: 'https://instagram-clone-backend/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  static async get<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(url);
    return response.data;
  }

  static async post<T>(url: string, data: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }
}
```

#### **PostAPI.ts**: API for Fetching Posts

```typescript
import { BaseAPI } from './BaseAPI';

export class PostAPI {
  static fetchAllPosts() {
    return BaseAPI.get('/posts');
  }

  static createPost(data: { imageUrl: string; caption: string }) {
    return BaseAPI.post('/posts', data);
  }

  static likePost(postId: string) {
    return BaseAPI.post(`/posts/${postId}/like`, {});
  }

  static commentOnPost(postId: string, comment: string) {
    return BaseAPI.post(`/posts/${postId}/comment`, { comment });
  }
}
```

#### **UserAPI.ts**: API for Fetching User Information

```typescript
import { BaseAPI } from './BaseAPI';

export class UserAPI {
  static fetchUserProfile(userId: string) {
    return BaseAPI.get(`/users/${userId}`);
  }

  static fetchCurrentUser() {
    return BaseAPI.get('/users/me');
  }
}
```

---

### 2. **Models**

#### **Post.ts**: Represents a Post Object

```typescript
import { Model } from 'verve-nexus';

export interface PostProps {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: { text: string; userId: string }[];
}

export class Post extends Model<PostProps> {
  like() {
    const likes = this.get('likes') + 1;
    this.set({ likes });
  }

  addComment(comment: { text: string; userId: string }) {
    const comments = [...this.get('comments'), comment];
    this.set({ comments });
  }
}
```

---

### 3. **Views**

#### **PostView.ts**: Renders a Single Post

```typescript
import { View } from 'verve-nexus';
import { Post, PostProps } from '../models/Post';
import { PostAPI } from '../api/PostAPI';

export class PostView extends View<Post, PostProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.like-button': this.onLikeClick,
      'submit:.comment-form': this.onCommentSubmit,
    };
  }

  async onLikeClick(): Promise<void> {
    await PostAPI.likePost(this.model.get('id'));
    this.model.like();
  }

  async onCommentSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const input = this.parent.querySelector(
      'input.comment-input',
    ) as HTMLInputElement;
    const comment = input.value;
    await PostAPI.commentOnPost(this.model.get('id'), comment);
    this.model.addComment({ text: comment, userId: 'me' });
  }

  template(): string {
    const { imageUrl, caption, likes, comments } = this.model.getAll();

    return `
      <div class="post">
        <img src="${imageUrl}" alt="Post Image" />
        <p>${caption}</p>
        <button class="like-button">Like (${likes})</button>
        <form class="comment-form">
          <input class="comment-input" placeholder="Add a comment..." />
          <button type="submit">Post</button>
        </form>
        <div class="comments">
          ${comments.map((comment) => `<p>${comment.text}</p>`).join('')}
        </div>
      </div>
    `;
  }
}
```

#### **PostListView.ts**: Renders the List of Posts

```typescript
import { ViewCollection } from 'verve-nexus';
import { Post, PostProps } from '../models/Post';
import { PostView } from './PostView';

export class PostListView extends ViewCollection<Post, PostProps> {
  renderItem(model: Post, itemParent: Element): void {
    new PostView(itemParent, model).render();
  }

  template(): string {
    return `<div class="post-list"></div>`;
  }
}
```

#### **ProfileView.ts**: Renders the User Profile

```typescript
import { View } from 'verve-nexus';
import { UserAPI } from '../api/UserAPI';

export class ProfileView extends View<any, any> {
  async fetchProfile(): Promise<void> {
    const userProfile = await UserAPI.fetchCurrentUser();
    this.set(userProfile);
    this.render();
  }

  template(): string {
    const { username, profilePicture, bio, followers } = this.get('user') || {};

    return `
      <div class="profile">
        <img src="${profilePicture}" alt="${username}'s profile picture" />
        <h1>${username}</h1>
        <p>${bio}</p>
        <p>Followers: ${followers}</p>
      </div>
    `;
  }
}
```

---

### 4. **App Initialization**

#### **App.ts**: Entry Point to Initialize Views

```typescript
import { PostCollection } from './collections/PostCollection';
import { PostListView } from './views/PostListView';
import { ProfileView } from './views/ProfileView';
import { PostAPI } from './api/PostAPI';

const postCollection = new PostCollection();

postCollection.fetch().then(() => {
  const postList = new PostListView(
    document.querySelector('.post-list-root')!,
    postCollection,
  );
  postList.render();
});

const profileView = new ProfileView(document.querySelector('.profile-root')!);
profileView.fetchProfile();
```

---

### Instagram API Mock Server Documentation

**Overview**

This document provides a comprehensive guide for setting up and using a mock server for the Instagram API, implemented with JSON Server. This server is designed to simulate API endpoints for the Instagram MVP clone application, allowing developers to test and integrate features such as user management, media handling, and social interactions in a controlled environment.

**Features**

- **User Management**: Create, retrieve, update, and delete user profiles.
- **Media Management**: Upload and retrieve media posts.
- **Social Interactions**: Like and comment on posts.
- **Search and Feed**: Retrieve user feeds and search for posts.

**Setup and Installation**

1. **Install JSON Server**

   First, ensure you have Node.js installed. Then, install JSON Server globally using npm:

   ```bash
   npm install -g json-server
   ```

2. **Create a Database File**

   Create a file named `db.json` in your project directory. This file will serve as the database for JSON Server. Below is the initial structure for `db.json`:

   ```json
   {
     "users": [
       {
         "id": 1,
         "username": "colson",
         "name": "COLSON",
         "profilePicture": "https://example.com/profile/colson.jpg",
         "bio": "Software Engineer"
       }
     ],
     "posts": [
       {
         "id": 1,
         "userId": 1,
         "mediaUrl": "https://example.com/media/post1.jpg",
         "caption": "A beautiful sunrise!",
         "likes": 131,
         "comments": [
           {
             "id": 1,
             "userId": 2,
             "text": "Amazing view!"
           }
         ]
       }
     ],
     "comments": [
       {
         "id": 1,
         "postId": 1,
         "userId": 2,
         "text": "Amazing view!"
       }
     ]
   }
   ```

3. **Run the JSON Server**

   Start the JSON Server with the following command:

   ```bash
   json-server --watch db.json --port 3000
   ```

   By default, the server will be available at `http://localhost:3000`.

**API Endpoints**

- **Users**

  - **GET /users**: Retrieve the list of users.
  - **GET /users/{id}**: Retrieve a single user by ID.
  - **POST /users**: Create a new user.
  - **PUT /users/{id}**: Update an existing user.
  - **DELETE /users/{id}**: Delete a user by ID.

- **Posts**

  - **GET /posts**: Retrieve the list of posts.
  - **GET /posts/{id}**: Retrieve a single post by ID.
  - **POST /posts**: Create a new post.
  - **PUT /posts/{id}**: Update an existing post.
  - **DELETE /posts/{id}**: Delete a post by ID.

- **Comments**

  - **GET /comments**: Retrieve the list of comments.
  - **GET /comments/{id}**: Retrieve a single comment by ID.
  - **POST /comments**: Create a new comment.
  - **PUT /comments/{id}**: Update an existing comment.
  - **DELETE /comments/{id}**: Delete a comment by ID.

**Integration with Instagram MVP Clone**

Integrate this mock server with the Instagram MVP clone application by configuring the app’s API client to point to `http://localhost:3000`. Update the API endpoints in the application code to match the ones provided above. This setup allows you to develop and test features against a simulated backend, ensuring that your application can handle real-world scenarios effectively.

**Example Integration**

Here is a basic example of how to configure the API client in your Instagram MVP clone:

```javascript
const API_BASE_URL = 'http://localhost:3000';

async function fetchUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const users = await response.json();
  return users;
}

async function createPost(postData) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const newPost = await response.json();
  return newPost;
}
```

**Conclusion**

The JSON Server setup provided offers a robust solution for simulating the Instagram API, enabling effective development and testing for the Instagram MVP clone application. By leveraging this mock server, we can ensure that our application’s integration points are correctly aligned with the API’s expected behavior, ultimately contributing to a more reliable and scalable final product.

---

### Additional Features & Extensibility

1. **Modularized Design**: Each component (e.g., Post, User) has a clearly defined responsibility. This modularity makes it easy to extend features such as adding more user interactions (e.g., saving posts or sharing).
2. **TypeScript Support**: Using TypeScript ensures strong typing and compile-time error detection, essential for large-scale production apps.
3. **API Abstraction**: All API interactions are abstracted into classes, making the application easily adaptable to different backend systems.
4. **Scaling**: The design follows scalable architecture principles, allowing for easy addition of new features, such as **Direct Messaging**, **Stories**, and **Explore Pages**.

---

## Conclusion - Instagram

This **Instagram-like App** demonstrates how Verve can be used to build **full-featured production applications** with a robust and scalable architecture. Each element is modular, well-typed with TypeScript, and adheres to MVC principles. This framework is flexible enough to serve as the base for building any **frontend web application** with sophisticated, production-ready features.

## **11. Verve Framework Culmination: From ToDo App to Instagram MVP**

In the culmination of this transformative journey, building not only a refined **ToDo application** but also a production-grade **Instagram MVP clone** with the **Verve framework**, we have traversed the intricate layers of web application development, unveiling the full spectrum of Verve's capabilities. This evolution showcases the framework’s dexterity in not just managing simple task flows but architecting robust, feature-rich, and **production-ready applications**.

The leap from a streamlined ToDo app to a full-fledged Instagram-like clone epitomizes the versatility and strength of Verve. Through its sophisticated **modular architecture**, seamless **real-time data updates**, **state management**, and **API abstractions**, Verve empowers developers to craft complex, scalable, and interactive applications with precision and efficiency. From handling user authentication and rendering dynamic user feeds to managing media uploads and social interactions (likes, comments), the framework effortlessly bridges the gap between **conceptual design** and **production-grade implementation**.

The journey from building simple task completion mechanisms in the ToDo app to developing a comprehensive social media platform reinforces the **adaptability** and **scalability** of Verve. The structured MVC approach, combined with strong **TypeScript** support, ensures that even large-scale applications maintain clarity, maintainability, and extensibility, allowing the framework to grow with the evolving demands of the web.

In essence, Verve stands not just as a framework but as a catalyst for innovation—empowering developers to shape complex digital experiences with elegance and efficiency. It harnesses the synergy between **sophisticated technical design** and **user-centric functionality**, making it the definitive choice for crafting modern, scalable, and production-grade web applications in today’s dynamic development landscape.
