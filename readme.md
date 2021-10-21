
## Uniswap Pool List

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



###TODO: 

- Test and QA pagination, it's a quick and dirty implementation.
- Move routes to standalone routes file, so we can have all our routes in one place.
- Refactor Graphql transactions filter after learning more GraphQL.
- More loading interactions when fetching.
- BUG: Some transactions have more than 1 burn, swap or mint, and it's giving repeated results.