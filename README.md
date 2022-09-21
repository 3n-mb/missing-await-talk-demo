## Demo for presentation "Missing Await"

### Preparation
Run `bash setup.sh` to prep both js and ts sections

### JavaScript part
 - enter `demo-js`
 - observe failing `node ./missing-await-js.js`
 - talk about `./missing-await-js.js`, run eslint with `npm run build`

### Typescript part
 - enter `demo-ts`
 - run linter and compiler with `npm run build`, and observe and fix errors
 - run jest with `npm run test`, observe failings that type system missed, discuss

### Bonus folder `demo-ts/src/processes`
Folder `demo-ts/src/processes` contains mentioned in talk:
 - `Deferred` for elaborate assembling and handling processes,
 - `SingleProc` for synchronization and its variant `NamedProcs` for synchronization under each key individually,
 - sleep function(s).
