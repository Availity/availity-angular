## AvModal

![Modal](./docs/modal.png)


`avModal` is a service that allows the creation of modal windows.  

### Examples

**Constructor**
```js

import tpl from './template';
const modal = new AvModal({
  scope: this.$scope,
  templateUrl: tpl
});
```

**Static**
```js
AvModal.create({
  show: true,
  scope: this.$scope,
  templateUrl: tpl
});
```

##
```js
AvModal.create({
  show: true,
  templateUrl: controllerTpl,
  controller: 'DemoModalDedicatedController',
  controllerAs: 'vm',
  locals: {
    someValue: 'This is a value passed in using locals, they become injectable values into the controller based on their key name.'
  }
});
```

## Options

### `show`
Boolean that triggers modal to immediately show upon creation.  Default is `false`;

### `templateUrl`

### `controller`

### `controllerAs`

### `locals`
Values become injectable in the controller based on their key names.


## Methods

### `AvModal.create`
Create a modal window on demand without having to call the contructor.





