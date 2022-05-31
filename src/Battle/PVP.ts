import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  public fight(): number {
    do {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    } while (this.player.lifePoints > 0 && this._player2.lifePoints > 0);

    return super.fight(); 
  }
}