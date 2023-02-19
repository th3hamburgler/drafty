import Model, { attr, belongsTo } from '@ember-data/model';

export default class FantasyFixtureModel extends Model {
  // Attributes

  @attr('boolean') finished;
  @attr('number') league_entry_1_points;
  @attr('number') league_entry_2_points;
  @attr('boolean') started;
  @attr('string') winning_league_entry;
  @attr('string') winning_method;

  // Relationships
  @belongsTo('fantasy-team') home;
  @belongsTo('fantasy-team') away;
  @belongsTo('game-week') gameWeek;

  // Aliases

  get homeScore() {
    return this.league_entry_1_points;
  }

  get awayScore() {
    return this.league_entry_2_points;
  }

  get homeWin() {
    return this.league_entry_1_points > this.league_entry_2_points;
  }

  get awayWin() {
    return this.league_entry_2_points > this.league_entry_1_points;
  }

  get statusColor() {
    // pending
    if (!this.started) {
      return 'bg-yellow';
    } else if (!this.finished) {
      // in progress
      return 'bg-lime';
    } else {
      // complete
      return 'bg-cyan';
    }
  }
}
