# 1Inch mock and swap simulator

Server has two main functions:
1. Mocking 1inch API for generating swap data
2. Cron job simulating trader swaps (on demand custom swaps are available too)

**Base url** for all requests: `https://oneinchmock-production.up.railway.app`

## 1Inch mock

**GET** `/swap` Generate swap data for 1inch contract

|name|required|type|location|description|example|
|---|---|---|---|---|---|
|src|yes|string|query|source token address (token sold)|0xeAECc18DCb38558C3D255060D3A181ab046936b4|
dst|yes|string|query|destination token address (token bought) |0xceeb4737b512130172dc3eee76f0b3074ceced55|
|amount|yes|number|query|source token amount to swap (in 18 decimal value)|1000000000000000|
|from|yes|string|query|wallet address| 0xdc2df2191f89781d8027846AcC748C773F5614C4|
|slippage|yes|number|query| swap slippage percent (does not matter in mock version)| 1|
|protocols|no|string|query|defines swap protocols, allowed values are "SWAP" and "UNISWAP_V2"| UNISWAP_V2|

> Notice: In every request to use Eth instead of token , use zero address (0x0000000000000000000000000000000000000000)

Example request: `https://oneinchmock-production.up.railway.app/swap?src=0x0000000000000000000000000000000000000000&dst=0xeAECc18DCb38558C3D255060D3A181ab046936b4&amount=1000000000000000&from=0xdc2df2191f89781d8027846AcC748C773F5614C4&slippage=1&protocols=UNISWAP_V2`
<br>
<br>
<br>
<br>

## Cron jobs and custom swaps

**POST** /cron/schedule/:id Sets cron execution time

Swaps are simulated with 2 crons and 2 wallets to execute swaps. Each cron time can be set individually with `id` path param.
Swap source token and amounts are randomized.


|name|required|type|location|description|example|
|---|---|---|---|---|---|
|id|yes|number|path param|cron identifier, only values 1 and 2 are permitted| 1|
|time|yes|string|body|cron time string in formt: second minute hour day-of-month month day-of-week| 0 */20 * * * * (every 20 minutes)|
|numSwapsPerExecution|no|number|body| number of trader swaps per cron execution (recommended 1) | 1|

Example request: `http://oneinchmock-production.up.railway.app/cron/schedule/1`
Body:
```json
{
    "time": "0 0 */3 * * *",
    "numSwapsPerExecution": 1
}
```
<br>
<br>
<br>
<br>

**POST** `/cron/stop/:id` Stops cron with requested id


|name|required|type|location|description|example|
|---|---|---|---|---|---|
|id|yes|number|path param|cron identifier, only values 1 and 2 are permitted| 1|

Example request: `http://oneinchmock-production.up.railway.app/cron/stop/1`

<br>
<br>
<br>
<br>

**POST** `/cron/execute` Executes random swap

Swap initiated from this request is executed from third wallet that is not used for scheduled cron jobs.

Example request: `https://oneinchmock-production.up.railway.app/cron/execute`


<br>
<br>
<br>
<br>

**POST** `/cron/execute/custom` Executes custom swap

Swap initiated from this request is executed from third wallet that is not used for scheduled cron jobs.


|name|required|type|location|description|example|
|---|---|---|---|---|---|
|tokenOut|yes|string|body|Sell token address|0xb5c52b56bb58664448a217c924c169bc5af50761|
|tokenIn|yes|string|body|Buy token address| 0x0000000000000000000000000000000000000000|
|tokenOutAmount|yes|string|Sell amount|1000000000000000|

Example request: `https://oneinchmock-production.up.railway.app/cron/execute/custom`
Body:
```json
{
    "tokenOut": "0xb5c52b56bb58664448a217c924c169bc5af50761",
    "tokenIn": "0x0000000000000000000000000000000000000000",
    "tokenOutAmount": "1000000000000000"
}
```

> Notice: In every request to use Eth instead of token , use zero address (0x0000000000000000000000000000000000000000)
