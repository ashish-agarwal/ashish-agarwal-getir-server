# Welcome to getir-server

I have created an app which has the following routes

```
    GET /api/v1/records

    Example Request:
    {
        "startDate": "2016-01-26", // YYYY-MM-DD
        "endDate": "2018-02-02", // YYYY-MM-DD
        "minCount": 2700, 
        "maxCount": 3000 
    }

    Response:
    {
        "code": 0,
        "msg": "Success",
        "records": [
            {
                "key": "TAKwGc6Jr4i8Z487",
                "createdAt": "2017-01-28T01:22:14.398Z",
                "totalCount": 2800
            },
            {
                "key": "NAeQ8eX7e5TEg7oH",
                "createdAt": "2017-01-27T08:19:14.135Z",
                "totalCount": 2900
            }
        ]
    }


```

## Server Setup
1. Create ```.env``` file. (We can have this stored in a private bucket and have ci/cd copy it from that bucket for deployments)
    ```
    MONGODB_URI=<give_url_here>
    ```     
2. ```npm install``` all the dependencies
3. ```npm start``` - starts the server

## Useful commands

 * `npm test`         perform the unit tests
 * `npm start`        starts the server
 