import Archetype, { Mage } from './Archetype';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._archetype = new Mage(name);
    this._race = new Elf(name, getRandomInt(1, 10));
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public special(enemy: Fighter): void {
    // RIP
    const R = (enemy.strength * enemy.defense);
    const I = enemy.defense / 2;
    const P = (enemy.lifePoints / 5) + (this._strength / 2);
    const restInPieces = Math.ceil(Math.abs((R / I) + P));
    enemy.receiveDamage(restInPieces);
  }

  public levelUp(): void {
    const lvlup = { maxHp: getRandomInt(1, 10),
      str: getRandomInt(1, 10),
      dex: getRandomInt(1, 10),
      def: getRandomInt(1, 10),
      energy: { amount: 10 },
    };
    const sumNewLifePoints = this._maxLifePoints + lvlup.maxHp;
    if (sumNewLifePoints < this._race.maxLifePoints) {
      this._maxLifePoints = sumNewLifePoints;
    }
    if (sumNewLifePoints >= this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
    this._strength += lvlup.str;
    this._dexterity += lvlup.dex;
    this._defense += lvlup.def;
    this._energy.amount = lvlup.energy.amount;
  }

  public receiveDamage(attackPoints: number): number {
    const ZERO = 0;
    const damage = attackPoints - this._defense;
    if (damage > ZERO) this._lifePoints -= damage;
    if (damage >= this._lifePoints) this._lifePoints = -1;

    return this._lifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }
}