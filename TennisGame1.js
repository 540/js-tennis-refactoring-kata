var TennisGame1 = function(player1Name = 'player1', player2Name = 'player2') {
    this.m_score1 = 0;
    this.m_score2 = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        if (this.m_score1 < 3) {
          switch (this.m_score1) {
            case 0:
              score = "Love";
              break;
            case 1:
              score = "Fifteen";
              break;
            case 2:
              score = "Thirty";
              break;
          }

          score += "-All";
        } else {
          score = "Deuce";
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

TennisGame1.prototype.SetP1Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.wonPoint('player1');
  }
};

TennisGame1.prototype.SetP2Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.wonPoint('player2');
  }
};

export default TennisGame1;