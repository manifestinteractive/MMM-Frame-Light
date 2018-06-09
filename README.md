# MMM-Frame-Light

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Add Frame Light to Magic Mirror.  This will add a 40px wide band around the edge of the mirror, giving a nice little night coming from the mirror.

![screenshot](https://peter.build/magic-mirror/mmm-frame-light.gif)

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-Frame-Light'
    }
  ]
}
```

## Turning Light On / Off

From within another module:

```js
this.sendNotification('MIRROR_LIGHTS_ON', {})
this.sendNotification('MIRROR_LIGHTS_OFF', {})
```
