---
title: Overview
description: Learn what the SecurityPro Access API does and how to get started.
---

The SecurityPro Access API provides a secure, scalable interface for managing user access, authentication, and system activity across modern applications.

It enables teams to provision users, assign roles, and retrieve audit events through a consistent REST API designed for developer-first integration.

## Key capabilities

- User provisioning and lifecycle management
- Role-based access control
- Audit event retrieval and monitoring
- Bearer token authentication
- Secure integration with external systems

## Base URLs

| Environment | Base URL |
| --- | --- |
| Sandbox | `https://sandbox-api.securitypro.dev/v1` |
| Production | `https://api.securitypro.dev/v1` |

## Request format

- All requests and responses use `application/json`
- All endpoints are served over HTTPS
- All timestamps are returned in ISO 8601 UTC format

## Authentication

All requests require a valid bearer token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Continue to the Authentication section to obtain an access token, or follow the Quickstart guide to make your first API request.
