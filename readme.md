
## Uniswap Pool List

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##Note:
Pagination probably will not work well on filtered table since I wasn't able to find the amount of transactions by type, so I don't know the total amount.

I'm using the total amount of transactions (which is not correct) and paginate with that.

###TODO: 

- Implement SWR preload next page.
- Test and QA pagination, it's a quick and dirty implementation.
- Move routes to standalone routes file, so we can have all our routes in one place.
- Refactor Graphql transactions filter after learning more GraphQL.
- More loading interactions when fetching.
- Improvements and refactor for pages when I discover and made available the required data.
  
## Known Bugs
- Some pairs return weird HTML, need to be validated before printing.
- Some transactions have more than 1 burn, swap or mint type, and it's giving repeated results.