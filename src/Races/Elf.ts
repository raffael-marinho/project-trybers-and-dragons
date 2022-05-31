import Race from './Race';
import maxLifePoints from './maxLifePoints';

export default class Elf extends Race {
  private _lifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = maxLifePoints.Elf.life;
    Elf._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._lifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._instances;
  }
}