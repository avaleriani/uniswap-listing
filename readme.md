
## Uniswap Pool List

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##Note:
Real pagination is not possible on filtered transactions table since I wasn't able to find the amount of transactions by type, so I don't know the total amount.

Unfortunately this issue is also present on reference page: https://info.uniswap.org/#/pools
I tried with using the total amount of transactions (which is not correct) and paginate with that but since the reference is just fetching the last 100 transactions and paginating that on the frontend. 
This strategy don't allow the user to see all the information and does not scale.

###TODO: 

- Probably pair data can be fetched server side to already display the page with completed data on load.
- Implement SWR preload next page.
- Move routes to standalone routes file, so we can have all our routes in one place.
- More loading interactions when fetching. 

## Known Bugs
- Some pairs return weird HTML, need to be validated before printing.
- Some transactions have more than 1 burn, swap or mint type, and it's giving repeated results and filtering sometimes breaks.