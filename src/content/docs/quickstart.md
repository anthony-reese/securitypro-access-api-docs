---
title: Quickstart
description: Make your first authenticated request to the SecurityPro Access API.
---

This quickstart shows how to authenticate and make your first successful API request.

## Obtain an access token

```bash
curl -X POST https://sandbox-api.securitypro.dev/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "sp_demo_client",
    "client_secret": "sp_demo_secret",
    "grant_type": "client_credentials"
  }'
```

Save the `access_token` from the response.

## Retrieve a user

**Endpoint**

`GET /users/{user_id}`

## Example request

```bash
curl https://sandbox-api.securitypro.dev/v1/users/usr_1024 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Example response

```json
{
  "id": "usr_1024",
  "email": "maya.chen@example.com",
  "status": "active",
  "created_at": "2026-03-01T10:15:22Z",
  "roles": [
    {
      "id": "role_admin",
      "name": "Administrator"
    }
  ]
}
```

## Next steps

After authentication, you can:

- Create and manage users
- Assign and remove roles
- Retrieve audit events
- Integrate the API into internal workflows
