---
title: Audit Events
description: Retrieve security and activity events from the SecurityPro Access API.
---

Use the Audit Events resource to retrieve system activity, authentication events, and access changes for monitoring and analysis.

## List audit events

**Endpoint**

`GET /audit-events`

### Query parameters

| Parameter    | Type    | Description          |
| ---------    | ----    | -----------          |
| `user_id`    | string  | Filter by user ID    |
| `event_type` | string  | Filter by event type |
| `start_date` | string  | ISO 8601 start time  |
| `end_date`   | string  | ISO 8601 end time    |
| `page`       | integer | Page number          |
| `limit`      | integer | Results per page     |

Example:

```http
GET /audit-events?user_id=usr_1024&event_type=login.success
```

## Example response

```json
{
  "data": [
    {
      "id": "evt_9001",
      "event_type": "login.success",
      "user_id": "usr_1024",
      "ip_address": "203.0.113.24",
      "timestamp": "2026-03-15T12:05:10Z"
    },
    {
      "id": "evt_9002",
      "event_type": "role.assigned",
      "user_id": "usr_1024",
      "metadata": {
        "role_id": "role_admin"
      },
      "timestamp": "2026-03-15T14:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 25,
    "total": 2
  }
}
```

## Get an audit event

**Endpoint**

`GET /audit-events/{event_id}`
