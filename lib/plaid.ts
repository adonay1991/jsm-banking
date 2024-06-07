import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configurarion = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

export const PlaidClient = new PlaidApi(configurarion);
