---
title: Authentication
description: Learn how to authenticate with the SecurityPro Access API.
---

The SecurityPro Access API uses a client credentials flow to authenticate requests.

Applications exchange their client credentials for a temporary access token, which is then used to authorize API requests.

## Obtain an access token

**Endpoint**

`POST /auth/token`

## Request body

```json
{
  "client_id": "sp_demo_client",
  "client_secret": "sp_demo_secret",
  "grant_type": "client_credentials"
}
```

## Example request

```bash
curl -X POST https://sandbox-api.securitypro.dev/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "sp_demo_client",
    "client_secret": "sp_demo_secret",
    "grant_type": "client_credentials"
  }'
```

## Example response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "users:read users:write audit:read roles:write"
}
```

## Use the token

Include the token in the Authorization header for all requests:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Token expiration

- Tokens expire after 3600 seconds
- Expired or invalid tokens return 401 Unauthorized

## Security notes

- Never expose `client_secret` in client-side code
- Store credentials in environment variables
- Rotate credentials periodically