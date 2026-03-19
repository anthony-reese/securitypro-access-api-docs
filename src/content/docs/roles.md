---
title: Roles
description: Assign and manage user roles through the SecurityPro Access API.
---

Use the Roles resource to assign access levels and manage role-based permissions for users.

## Assign a role

**Endpoint**

`POST /roles/assign`

### Request body

```json
{
  "user_id": "usr_1024",
  "role_id": "role_admin"
}
```

## Example response

```json
{
  "user_id": "usr_1024",
  "role_id": "role_admin",
  "assigned_at": "2026-03-15T14:30:00Z"
}
```

## Remove a role

**Endpoint**

`POST /roles/remove`

## Request body

```json
{
  "user_id": "usr_1024",
  "role_id": "role_admin"
}
```

## Example request

```bash
curl -X POST https://sandbox-api.securitypro.dev/v1/roles/remove \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "usr_1024",
    "role_id": "role_admin"
  }'
```

## List roles

**Endpoint**

`GET /roles`

## Example response

```json
{
  "data": [
    {
      "id": "role_admin",
      "name": "Administrator",
      "description": "Full administrative access"
    },
    {
      "id": "role_analyst",
      "name": "Analyst",
      "description": "Read-only access to reports and audit events"
    }
  ]
}
```