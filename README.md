# Verve Framework (@ cols-verve)- Docs

**Version:** 1.0.0  
**Author:** Colson

Welcome to the official documentation for the **Verve Framework (cols-verve)**. Verve is a client-side web framework designed to streamline data fetching, rendering content, handling user interactions, and persisting data on backend servers. This documentation provides a comprehensive guide on how to use and implement the Verve Framework, along with real code examples.

## Table of Contents

- [Verve Framework - Docs](#verve-framework---docs)
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
  - [9. Code Walkthrough - ToDo App](#9-code-walkthrough---todo-app)
    - [Verve TODO App - Features](#verve-todo-app---features)
    - [Verve ToDo App - Culmination](#verve-todo-app---culmination)

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
import { Collection } from 'verve';
import { User, UserProps } from 'verve';
import { UserList } from 'verve';

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

## 9. Code Walkthrough - ToDo App

Welcome to the Verve TODO App Code Walkthrough! In this section, we'll delve into the key components of the Verve framework and their application in building a functional TODO app. This showcase highlights how Verve's features come together to create a seamless user experience.

### Verve TODO App - Features

1. **Task List Display:**

   - The app displays a list of tasks on the screen.
   - Each task is represented by a checkbox, the task title, and a delete button.

2. **Toggle Task Completion:**

   - Users can toggle the completion status of each task by clicking on the checkbox.
   - Completed tasks are visually distinguished from incomplete tasks.

3. **Delete Tasks:**

   - Users can delete tasks by clicking on the "Delete" button associated with each task.
   - Deleted tasks are removed from the list.

4. **Create New Tasks:**

   - The app allows users to create new tasks.
   - Users can enter the title of the new task in an input field and click the "Create Task" button to add it to the list.

5. **Real-Time Updates:**

   - The task list updates in real-time when tasks are created, completed, or deleted.
   - Changes are automatically reflected on the screen without the need to refresh the page.

6. **Interactive UI:**

   - The user interface provides an interactive and user-friendly experience.
   - Visual cues such as checkboxes and buttons make it clear how users can interact with the app.

7. **Model-View Separation:**

   - The app follows the Model-View-Controller (MVC) pattern using the Verve framework.
   - Models represent the data (tasks), views handle the UI, and controllers manage the application logic.

8. **Framework Utilization:**

   - The app demonstrates the usage of the Verve framework to create models, views, and collections.
   - Models encapsulate task data and logic, while views handle rendering and user interactions.

9. **API Interaction:**

   - The app interacts with a JSON server API to fetch, update, and delete task data.
   - Tasks are stored and managed on the server, allowing for data persistence.

10. **Code Modularity:**

    - The app's codebase is organized into separate modules for models, views, and the main application logic.
    - This modular structure promotes code reusability and maintainability.

11. **User-Friendly Interface:**

    - The user interface is clear, intuitive, and minimalistic.
    - Users can easily understand and interact with the tasks without any complexity.

12. **JSON Server Integration:**

    - The app integrates with JSON server to simulate a back-end API for task data management.
    - JSON server allows for tasks to be created, updated, and deleted, providing a realistic data interaction experience.

13. **Component Reusability:**
    - Views are designed as reusable components that can be easily extended for other purposes.
    - This architecture encourages the development of additional features without significant code duplication.

These features collectively create a functional and user-friendly TODO app built using the Verve framework. The app effectively showcases the framework's capabilities, including data management, real-time updates, and user interaction handling.

Building a complete and fully functional TODO app from scratch involves several steps. I'll guide you through the process step by step, including the code snippets for each component. This example will provide a deeper understanding of how the Verve framework works. Let's get started:

1. **Setting Up the Project:**

Create a new directory for your project and navigate into it:

```bash
mkdir verve-todo-app
cd verve-todo-app
```

Initialize a new Node.js project and install the required dependencies:

```bash
npm init -y
npm install axios
```

2. **Creating the Files:**

Inside the project directory, create the following files and directories:

```
verve-todo-app/
  ├── src/
  │    ├── models/
  │    │    ├── Task.ts
  │    │    ├── TaskList.ts
  │    ├── views/
  │    │    ├── View.ts
  │    │    ├── TaskView.ts
  │    │    ├── TaskListView.ts
  │    │    ├── CreateTaskView.ts
  │    ├── index.ts
  │    ├── index.html
  ├── package.json
  ├── db.json
  ├── README.md
```

3. **Defining the Models:**

**`Task.ts` Model:**

```typescript
// src/models/Task.ts

import { Model } from './Model';

export interface TaskProps {
  id?: number;
  title: string;
  completed: boolean;
}

const rootUrl = 'http://localhost:3000/tasks';

export class Task extends Model<TaskProps> {
  static buildTask(attrs: TaskProps): Task {
    return new Task(attrs);
  }

  toggleCompleted(): void {
    const completed = !this.get('completed');
    this.set({ completed });
    this.save();
  }
}
```

**`TaskList.ts` Collection:**

```typescript
// src/models/TaskList.ts

import { Collection } from './Collection';
import { Task, TaskProps } from './Task';

export class TaskList extends Collection<Task, TaskProps> {
  constructor() {
    super(rootUrl, (json: TaskProps) => Task.buildTask(json));
  }
}
```

4. **Creating Views:**

**`View.ts` Base View:**

```typescript
// src/views/View.ts

export abstract class View<T> {
  constructor(
    public parent: Element,
    public model: T,
  ) {}

  abstract template(): string;

  render(): void {
    this.parent.innerHTML = this.template();
  }
}
```

**`TaskView.ts` View for Individual Task:**

```typescript
// src/views/TaskView.ts

import { View } from './View';
import { Task, TaskProps } from '../models/Task';

export class TaskView extends View<Task> {
  template(): string {
    const checked = this.model.get('completed') ? 'checked' : '';
    return `
      <div>
        <input type="checkbox" ${checked} />
        <span>${this.model.get('title')}</span>
        <button class="delete-button">Delete</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:input': this.onCheckboxClick,
      'click:.delete-button': this.onDeleteClick,
    };
  }

  onCheckboxClick = (): void => {
    this.model.toggleCompleted();
  };

  onDeleteClick = (): void => {
    this.model.destroy();
  };
}
```

**`TaskListView.ts` CollectionView for Task List:**

```typescript
// src/views/TaskListView.ts

import { CollectionView } from './CollectionView';
import { Task, TaskProps } from '../models/Task';
import { TaskView } from './TaskView';

export class TaskListView extends CollectionView<Task, TaskProps> {
  renderItem(model: Task, itemParent: Element): void {
    new TaskView(itemParent, model).render();
  }
}
```

**`CreateTaskView.ts` View for Creating Tasks:**

```typescript
// src/views/CreateTaskView.ts

import { View } from './View';
import { TaskList } from '../models/TaskList';

export class CreateTaskView extends View<TaskList> {
  template(): string {
    return `
      <div>
        <input type="text" placeholder="Enter task title" />
        <button class="create-button">Create Task</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.create-button': this.onCreateClick,
    };
  }

  onCreateClick = (): void => {
    const input = this.parent.querySelector('input') as HTMLInputElement;
    const title = input.value.trim();

    if (title) {
      this.model.create({ title, completed: false });
      input.value = '';
    }
  };
}
```

5. **Setting Up the Application:**

**`index.ts` Implementation:**

```typescript
// src/index.ts

import { TaskList } from './models/TaskList';
import { TaskListView } from './views/TaskListView';
import { CreateTaskView } from './views/CreateTaskView';

const tasks = new TaskList();
const root = document.getElementById('root');

if (root) {
  tasks.on('change', () => {
    new TaskListView(root, tasks).render();
  });

  new CreateTaskView(root, tasks).render();
  tasks.fetch();
}
```

**`index.html` Entry Point:**

```html
<!-- src/index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verve TODO App</title>
  </head>
  <body>
    <h1>TODO App</h1>
    <div id="root"></div>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

6. **Populating `db.json`:**

Ensure that you have the following content in your `db.json` file:

```json
{
  "tasks": [
    { "id": 1, "title": "Buy groceries", "completed": false },
    { "id": 2, "title": "Read a book", "completed": true },
    { "id": 3, "title": "Go for a run", "completed": false }
  ]
}
```

7. **Run the App:**

Open two terminal windows:

In the first terminal, start the JSON server:

```bash
npx json-server --watch db.json
```

In the second terminal, start the application:

```bash
npx parcel src/index.html
```

This will start the development server and open the app in your browser. You can now create tasks, toggle their completion status, and delete tasks.

---

### Verve ToDo App - Culmination

In **summation**, the culmination of this developmental odyssey, crafting a refined and fully operational TODO application via the Verve framework, not only underscores the meticulous attention to detail but also illuminates the expanse of capabilities the framework holds in its arsenal. The symphony of features—dynamic real-time updates, judicious separation of models and views, and seamless API interactions—paints a vivid picture of the framework's prowess in orchestrating user-centric, interactive digital experiences.

Through the meticulous orchestration of tasks, from toggling completion states to crafting new entries with effortless finesse, we've effectively harnessed the latent potential within the Verve framework. The modular architecture, an embodiment of our discerning coding practices, resonates with the framework's capacity to streamline intricate development paradigms.

As we momentarily recede to survey the tapestry of accomplishments this endeavor has woven, the Verve framework emerges as an unequivocal catalyst for realizing the synergy between functionality and sophistication. The intrinsic adaptability of the framework unleashes the gates to a realm of boundless prospects, rendering it the quintessential toolkit for shaping solutions that seamlessly accommodate the kaleidoscope of contemporary web development requisites. Our expedition through the construct of this TODO application stands testament to the framework's faculty in translating conceptual blueprints into elegantly robust digital landscapes.
