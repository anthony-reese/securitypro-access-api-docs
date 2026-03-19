---
title: Rate Limits
description: Learn about rate limiting policies for the SecurityPro Access API.
---

The SecurityPro Access API enforces rate limits to ensure fair usage and maintain reliable performance.

## Default limits

| Environment | Limit                   |
| ----------- | ----------------------- |
| Sandbox     | 100 requests per minute |
| Production  | 500 requests per minute |

## Rate limit headers

Responses may include the following headers:

- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## Exceeded limits

Requests above the allowed threshold return:

```http
429 Too Many Requests
```

## Best practices

- Cache tokens where appropriate
- Avoid unnecessary polling
- Batch operations when possible
- Retry after the reset window