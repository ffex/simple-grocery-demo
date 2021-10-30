# SimpleGrocery

<p align="center">
<img src="https://github.com/ffex/simple-grocery-demo/blob/main/Public/built-with-appwrite.svg" width="200px">
</p>
<p align="center">
This project was created with [Appwrite](https://github.com/appwrite) and [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.
</p>
<p align="center">
The purpose is to create grocery shopping list fast and simple.
</p>

## Feature

<img src="https://github.com/ffex/simple-grocery-demo/blob/main/Public/Screenshot%202021-10-30%20at%2013.44.49.png" >

1. Add shopping list with name

2. Select simple and fast a product in the right tab

3. See the list grow!

## Run locally

1. Install Appwrite by following the [installation guide](https://appwrite.io/docs/installation).

2. Open the Appwrite console and create a new project.

3. Navigate to `Database` and add a new `Collection` called `Product`.

4. Add the following rules and permissions:

#### Rules:

| Label       | Key          | Type      | Required | Array | Default Value |
| :---------- | :----------- | :-------- | :------- | :---- | :------------ | 
| Name        | `name`       | Text      | `true`   | false |               |
| Description | `description`| Text      | `false`  | false |               |
| Icon        | `icon`       | Text      | `true`   | false |               |
| Category    | `category`   | Document  | `true`   | false |               |

5. Navigate to `Database` and add a new `Collection` called `Category`.

6. Add the following rules and permissions:

#### Rules:

| Label       | Key          | Type      | Required | Array | Default Value |
| :---------- | :----------- | :-------- | :------- | :---- | :------------ | 
| Name        | `name`       | Text      | `true`   | false |               |
| Description | `description`| Text      | `false`  | false |               |

7. Navigate to `Database` and add a new `Collection` called `List`.

8. Add the following rules and permissions:

#### Rules:

| Label       | Key          | Type      | Required | Array | Default Value |
| :---------- | :----------- | :-------- | :------- | :---- | :------------ | 
| Name        | `name`       | Text      | `true`   | false |               |
| Description | `description`| Text      | `false`  | false |               |

9. Navigate to `Database` and add a new `Collection` called `List_Product`.

10. Add the following rules and permissions:

#### Rules:

| Label       | Key          | Type      | Required | Array | Default Value |
| :---------- | :----------- | :-------- | :------- | :---- | :------------ | 
| List        | `list`       | Document  | `true`   | false |               |
| Product     | `product`    | Document  | `true`   | false |               |

#### Permissions:

Read Access: `*`

Write Access: `*`

3. Clone this repo
```bash
  git clone https://github.com/ffex/simple-grocery-demo.git
  cd simple-grocery-demo
```

4. Install dependencies
```bash
  npm install
```

5. From the Appwrite console, note down the `API Endpoint`, `Project ID` and `Collection ID` of the `Photos` Collection and enter these in `src/config.js`.

6. The project is ready to run! :rocket:
```bash
  ng serve
```

#### Special Thanks
[Agata](https://goodstuffnononsense.com/) for the food images.

