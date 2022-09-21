## Demo for presentation "Missing Await"

### Preparation
Run `bash setup.sh` to prep both js and ts sections

### JavaScript part
 - enter `demo-js`
 - observe failing `node ./missing-await-js.js`
 - talk about `./missing-await-js.js`, run eslint with `npm run build`

### Typescript part
 - enter `demo-ts`
 - run linter and compiler with `npm run build`, and fix errors
 - run jest with `npm run test`, observe failing that type system missed
