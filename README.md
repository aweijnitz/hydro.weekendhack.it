# Homepage for hydro.weekendhack.it


## Setup
This project was created using the Yeoman
[```webapp``` generator](https://github.com/yeoman/generator-webapp).
See link for basic instructions.

## Build project
```sh
$ grunt build // or just 'grunt' to include linting and tests
```

The result is available in folder ```dist```.

## Developing

### Start local server with hot reload
```sh
$ grunt serve
```

### Adding Third-Party Dependencies
Copied from the webapp generator docs linked above.

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with
[grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep). Add
new dependencies using **Bower** and then run the **Grunt** task to
load them:

```sh
$ bower install --save jquery
$ grunt wiredep
```

This works if the package author has followed the
[Bower spec](https://github.com/bower/bower.json-spec). If the files
are not automatically added to your source code, check with the
package's repo for support and/or file an issue with them to have it
updated.

To manually add dependencies, `bower install --save depName` to get
the files, then add a `script` or `style` tag to your `index.html` or
another appropriate place.

The components are installed in the root of the project at
`/bower_components`. To reference them from index.html, use
`src="bower_components"` or `src="/bower_components"`. Treat the
`bower_components` directory as if it was a sibling to `index.html`.

*Testing Note*: a project checked into source control and later
 checked out needs to have `bower install` run from the `test` folder
 as well as from the project root.
 
