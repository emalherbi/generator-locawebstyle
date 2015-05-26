generator-locawebstyle
======================

*A generator for Locaweb Style.*

![alt tag](http://emalherbi.github.io/generator-locawebstyle/theme-gold.png)

What's Yeoman (yo)?
-------------------

Yeoman helps you kickstart new projects, prescribing best practices and tools to help you stay productive.

#### Installing yo

```
npm install -g yo
```

Installing generator-locawebstyle
---------------------------------

To scaffold a web application, you'll need to install the generator:

```
npm install -g generator-locawebstyle
```

Make a new directory, and cd into it:

```
mkdir my-new-project && cd $_
```

Finally, initiate the generator:

```
yo locawebstyle
```

### Layout

```
bower_components/
├── jquery/
├── locawebstyle/
├── normalize-css/
app/
├── index.html
├── img/
│   ├──
├── css/
│   ├── app.css
└── js/
    ├── app.js
```

*The bower dependencies are installed in another directory.*

How This Generator Works
------------------------

After finishing the implementation of your application, simply run the following command to deploy your project.

```javascript
grunt
```

Contributing
------------

1.	Fork it
2.	Create your feature branch (`git checkout -b my-new-feature`\)
3.	Test your changes to the best of your ability.
4.	Update the documentation to reflect your changes if they add or changes current functionality.
5.	Commit your changes (`git commit -am 'Added some feature'`\)
6.	Push to the branch (`git push origin my-new-feature`\)
7.	Create new Pull Request

License
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)