# ts-prisma2-rest-boilerplate

# Getting Started
`$ git clone --depth 1 git@github.com:cotterjd/ts-prisma2-rest-boilerplate.git my-actual-project-name`<br>
`$ cd my-actual-project-name`<br>
Add .env file with DATABASE_URL value<br>
`$ npm install && npm run update-client && npm run dev`<br>

First thing to do when you start adding your own code is to do a find all and replace on `myEntity`, `MyEntity`, and `MyEntities` and replace with the name of the thing you'll actually be doing crud operations on. Also do the same with `src/controllers/myEntity.ts`<br>

# Running Tests
`$ npm test`<br>
or <br>
`$ npm run test:watch`<br>

## Troubleshooting

If you have your env file and the server crashes because it can't read your DATABASE_URL value then try one of the following
<ol>
  <li>Make sure `?ssl=true` is at the end of your connection string</li>
  <li>Delete `node_modules` and reinstall. You have have accidently used `yarn` istead of `npm` or another install issue may be causing the error</li>
  <li>run `npm run update-client`</li>
</ol>
