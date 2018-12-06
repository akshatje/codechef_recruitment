## Codechef Recruitment portal
Record and show recruitment details as well as quiz

<br />

| route |  type  |  data  |  response  |
|---|---|---|---|
| /record | POST | User object | User object | 
| /show | POST with Authorization:token | {"domain":"technical", "subdomain": "machinelearning"} | 
[]User object |
| /login | POST | {"passphrase":"some passphrase"} | {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6ImFkbWluIiwiaWF0IjoxNTQzNTc5Njg5fQ.wOE2EyoXSeNZ-YfsNWVwAWplPDEXI0yAWQ-pn6p7Hb8"} | 

<br />
<br />

### User object

<br />

```json

{
    "sub_design": {
        "uiux": false,
        "graphic": false,
        "video": false
    },
    "sub_management": {
        "manager": false
    },
    "sub_technical": {
        "machinelearning": true,
        "frontend": false,
        "backend": false,
        "python": false,
        "android": false,
        "general": false
    },
    "test":{
        "question":"q1",
        "answer":"a1"
    },
    "technical": true,
    "design": false,
    "management": false,
    "_id": "5c08f9e9bed9e45a40de026c",
    "name": "angad sharma",
    "regno": "17BCE2009",
    "phno": "1111111111",
    "email": "sadsda@l.com",
    "__v": 0
}

```

<br />
<br />

