/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

import MagCharacter from './MagCharacter';

export default class Daemon extends MagCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
