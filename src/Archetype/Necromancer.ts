import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer._instances += 1;
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}