---
sidebar_position: 4
---

# Entities

Entities are the things use to describe your database structure.

They are made with `decorators`, and here is a list of all of they:

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Entities Decorators

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@Entity`

The `@Entity` decorator is used to define a **table** or a sub-entity of your database.

Example of a table:

```ts
@Entity()
export class ExampleEntity {}
```

Example of a sub-entity:

```ts
@Entity({ isSubEntity: true })
class ExampleSubEntity {}

@Entity()
export class ExampleEntity {
  @Column()
  subEntity: ExampleSubEntity;
}
```

Here are a list of all the configs that you can specify at the decorator options:

#### `name`

The name of the entity in the database.

```ts
@Entity({
  name: "example_name",
})
class ExampleEntity {}

// Or

@Entity("example_name")
class ExampleEntity {}
```

:::caution

This name **isn't affected** by the `namingStrategy`, `prefix` or `suffix` of the connection.

:::

#### `isSubEntity`

If the entity is only used as a column value and doesn't have it's own table, you should defined this option as `true`, otherwise a table for this entity will be generated by the migrations.

```ts
@Entity({
  isSubEntity: true,
})
class ExampleEntity {}
```

#### `extras`

Extra data that may be required by plugins.

```ts
@Entity({
  extras: {
    pluginSpecificData: "foo",
  },
})
class ExampleEntity {}
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Columns Decorators

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@PrimaryGeneratedColumn`

Use this decorator at your primary columns, that you want to be generated **by Techmmunity Symbiosis**. If you want to manually generate the value of the column, or the database will do this for you, use the [`@PrimaryColumn`](#primarycolumn) decorator.

**When to use?**

- You want that Symbiosis automatically generate the value of this column

:::caution

Primary columns only accept `string` and `number` as type! Types like arrays, objects, boolean and classes will throw an error!

:::

#### `strategy`

The strategy used to generate values.

| DEFAULT | Supported Strategies |
| :-----: | :------------------: |
|    x    |       `"uuid"`       |

```ts
class ExampleEntity {
  @PrimaryGeneratedColumn({
    strategy: "uuid",
  })
  id: string;
}

// Or

class ExampleEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@PrimaryColumn`

Use this decorator at your primary columns, that you want to be generated **manually** or **by the database**. If you want that the value of this column be generated automatically, use the [`@PrimaryGeneratedColumn`](#primarygeneratedcolumn) decorator.

**When to use?**

- You want to set the value of this column by your own
- The database will automatically generate the value

:::caution

Primary columns only accept `string` and `number` as type! Types like arrays, objects, boolean and classes will throw an error!

:::

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@Column`

Use this decorator for almost all of your columns. It's a generic decorator.

#### `type`

The type of the column. Currently, it's only used when the column type is an array, so you need to specify what type are the array items.

:::danger

Do **NOT** use the TypeScript types for typing! Use the [native javascript classes](#simple-types) or your own custom classes.

:::

```ts
class ExampleEntity {
  @Column({
    type: String,
  })
  foo: Array<string>;
}

// Or

class ExampleEntity {
  @Column(String)
  foo: Array<string>;
}
```

#### `enum`

A enum to get the values of. **It's a required field** if you use a enum as type.

:::caution

Symbiosis **NOT** validate if the values passed on the repository methods are the same as the enum!

:::

#### `defaultValue`

The default value that the column will have on inserting it on the database.

It can a true raw value, or a function that receive zero parameters and return the value

:::caution

If the default value is a function, **it cannot return a Promise**, it must just return the value directly.

:::

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@SaveDateColumn`

Date columns that will be automatically generated on **saving a record** to the database.

This decorator accepts columns with [simple types](#simple-types), and will [generate a value](#date-formats) based on this type.

:::info

The values are affected by the `timeZone` config at the connection.

:::

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@UpdateDateColumn`

Date columns that will be automatically generated on **updating a record** to the database.

This decorator accepts columns with [simple types](#simple-types), and will [generate a value](#date-formats) based on this type.

:::info

The values are affected by the `timeZone` config at the connection.

:::

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `@DeleteDateColumn`

Date columns that will be automatically generated on **soft-deleting a record** to the database.

This decorator accepts columns with [simple types](#simple-types), and will [generate a value](#date-formats) based on this type.

:::info

The values are affected by the `timeZone` config at the connection.

:::

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Special Decorators

## References

### Default Column Options

#### `name`

:::caution

This name **isn't affected** by the `namingStrategy`, `prefix` or `suffix` of the connection

:::

The name of the entity in the database.

**Type:** `string`

#### `comment`

A comment for the column. This may be just decorative, or in some databases, truly add a comment on the column.

**Type:** `string`

#### `databaseType`

Most used for SQL databases, to specify exactly what type that column should have.

**Type:** `string`

#### `extras`

Extra data that may be required by plugins.

**Type:** `object`

### Simple Types

Simples types are `String`, `Number` and `Date`.

:::danger

They **AREN'T** TypeScript types! They are native javascript classes!

:::

### Semi-Complex Types

Semi-Complex types are `Array` and **custom classes**.

### Complex Types

Complex types are an **`Array` OF custom classes**.

### Date formats

| type   | value format | value example                                       |
| ------ | ------------ | --------------------------------------------------- |
| String | ISO          | `"2021-08-14T12:06:38.228Z"`                        |
| Number | Epoch        | `1628942827629`                                     |
| Date   | Date Object  | An date instance that will be handled by the plugin |