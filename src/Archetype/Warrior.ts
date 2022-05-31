import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior._instances += 1;
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}