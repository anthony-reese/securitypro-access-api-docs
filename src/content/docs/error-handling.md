---
title: Error Handling
description: Understand error responses returned by the SecurityPro Access API.
---

The SecurityPro Access API returns standard HTTP status codes and structured error responses to help diagnose and resolve issues.

## Error response format

```json
{
  "error": {
    "code": "invalid_token",
    "message": "The access token provided is expired or invalid.",
    "request_id": "req_7f4d2aa9"
  }
}
```

## Common error codes

| Status | Code                   | Meaning                               |
| ------ | ---------------------- | ------------------------------------- |
| `400`  | `bad_request`          | Request payload is invalid            |
| `401`  | `invalid_token`        | Token is missing, expired, or invalid |
| `403`  | `insufficient_scope`   | Token lacks required permissions      |
| `404`  | `user_not_found`       | Requested resource does not exist     |
| `409`  | `email_already_exists` | Email is already in use               |
| `429`  | `rate_limit_exceeded`  | Too many requests                     |
| `500`  | `internal_error`       | Unexpected server error               |

## Troubleshooting tips

- Confirm the token is valid and unexpired
- Verify required scopes are present
- Check request body format and field names
- Use the request_id when reporting issues