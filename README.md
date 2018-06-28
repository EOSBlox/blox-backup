# \<blox-backup\>

Creates a file to download with the given extension and data

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.


## Install blox-backup

```
$ npm install blox-backup
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-backup';
```

## Basic Use

```html
<blox-backup
    filename="myfile"
    suffix="csv"
    data="this, is , in, the, file,">
</blox-backup>
```

## Javascript Generate Number

```html
<blox-backup id="bloxBackup"></blox-backup>
<script>
    this.$.bloxBackup.backup('myfile', 'csv', 'this, is , in, the, file')
    .then(() => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```