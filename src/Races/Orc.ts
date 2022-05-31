import Race from './Race';
import maxLifePoints from './maxLifePoints';

export default class Orc extends Race {
  private _lifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = maxLifePoints.Orc.life;
    Orc._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._lifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._instances;
  }
}