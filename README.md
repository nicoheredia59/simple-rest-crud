# Notes Crud

A notes api using REST arquitecture. Using mysql as databse, and setting up the proyect to use with Planetscale service.

## API Reference

## Running Tests

To run tests, run the following command before run npm run build

```bash
  npm run test
```

#### Get all items

```http
  GET /api/notes
```

#### Get item

```http
  GET /api/notes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create a note

```http
  POST /api/notes
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `content` | `string` | **Required**. Content for note |

#### Update a note

```http
  PUT /api/notes/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of note to update |

#### Updated body in the request

```json
{
  "content": "updated content"
}
```

#### Delete a note

```http
  DELETE /api/notes/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of note to delete |
