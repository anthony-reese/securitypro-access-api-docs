---
title: Users
description: Manage user accounts through the SecurityPro Access API.
---

Use the Users resource to create, retrieve, list, and update user accounts within the SecurityPro Access API.

## Create a user

**Endpoint**

`POST /users`

### Request body

```json
{
  "email": "maya.chen@example.com",
  "first_name": "Maya",
  "last_name": "Chen",
  "status": "active"
}
```

## Example response

```json
{
  "id": "usr_1024",
  "email": "maya.chen@example.com",
  "first_name": "Maya",
  "last_name": "Chen",
  "status": "active",
  "created_at": "2026-03-01T10:15:22Z"
}
```

## Get a user

**Endpoint**

`GET /users/{user_id}`

Example:

```bash
curl https://sandbox-api.securitypro.dev/v1/users/usr_1024 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## List users

**Endpoint**

`GET /users`

## Query parameters

| Parameter | Type    | Description                |
| --------- | ------- | -------------------------- |
| `status`  | string  | Filter by status           |
| `page`    | integer | Page number                |
| `limit`   | integer | Number of records per page |
| `email`   | string  | Filter by email            |

Example:

```http
GET /users?status=active&page=1&limit=25
```

## Update a user

**Endpoint**

`PATCH /users/{user_id}`

## Request body

```json
{
  "status": "suspended"
}
```

