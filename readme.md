## Installation
 Clone or download zip to your machine 
 
then

 First of all, register https://infura.io/ website and get PROJECT_ID value

then

 Create .env file and  paste the PROJECT_ID value from you created in the previous step.

then

    cd etherium-api

then

    npm install

then 

    npm run start:dev


## Endpoints

### Fetch accounts balance given addresses array

#### Request

> Method: `POST`

> URL: [http://localhost:3000/api/eth/balance/check-balances](http://localhost:3000/api/eth/balance/check-balances)

> Body:

```json
{
  "addresses": [
        "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5",
        "sdfşlsdfdlkfs"
    ]
}
```

#### Response

```json
{
    "status": true,
    "result": [
        {
            "address": "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5",
            "balance": "4772.870685989215376441"
        },
        {
            "address": "sdfşlsdfdlkfs",
            "error": "Provided address sdfşlsdfdlkfs is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted."
        }
    ]
}
```

