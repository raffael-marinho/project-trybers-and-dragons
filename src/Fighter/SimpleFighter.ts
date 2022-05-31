export default interface NomalFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: NomalFighter): void;
  receiveDamage(attackPoints: number): void;
}