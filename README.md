# Email Capture Page via Airtable


<div align="center">
<img src="https://github.com/btahir/air-capture/blob/main/landing.png">
<img src="https://github.com/btahir/air-capture/blob/main/admin.png">
</div>

## Overview

This is a demo of using Airtable to capture emails with a Next.js + Tailwind CSS app (used the vercel examples starter). 

The flow is
- User enters email
- email is added to Airtable
- Admin page showing subscriber list is refreshed using On-Demand Revalidation

You can add an extra step in Airtable with an automation to send a confirmation email to the user that they are subscribed.

## Setup

Create a .env.local file at the root of the project. Add these two variables with your credentials from Airtable:

```
AIRTABLE_ACCESS_TOKEN=
AIRTABLE_BASE_ID=
```

You can start the project locally with the command

```
yarn && yarn dev
```
