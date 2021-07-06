import Character from './Character';

export default class MagCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let mathAttack = Math.round(this.setAttack * (1.1 - 0.1 * this.distance));
    if (this.setStoned) {
      mathAttack = Math.round(mathAttack - Math.log2(this.distance) * 5);
      if (mathAttack < 0) {
        return 0;
      }
      return mathAttack;
    }
    return mathAttack;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(cast) {
    this.setStoned = cast;
  }
}
