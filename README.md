# jsonkey-remover-cli

This is a JSON key-remover CLI, useful when you need remove a key on a specific JSON file.

## Getting Started

*  Install with npm: `npm install jsonkey-remover-cli -D`
*  Run it with `keyremover`

## Docs

```	
keyremover -s source-path/file.json -d dist-path/file.json -k keyToDelete

Basic options

-s, --src    Source path of origin JSON file
-d, --dest   Destination path of modified JSON file
-k, --key    Key that will be removed on JSON file

```

## License

Copyright (c) FoxyThemes
Licensed under the MIT license.
