var TennisGame2 = function (player1Name = 'player1', player2Name = 'player2') {
    this.player1 = {
        points: 0
    };
    this.player2 = {
        points: 0
    };
};

const individualResult = player => {
    const result = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };

    return result[player.points]
};

const equalityResult = player => {
    const result = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All"
    };

    return result[player.points] || "Deuce";
};

const hasAdvantage = (player1) => ({
    over: player2 => player1.points > player2.points && player2.points >= 3 && (player1.points - player2.points) === 1
});

const hasWon = (player1) => ({
    to: player2 => player1.points >= 4 && (player1.points - player2.points) >= 2
});

const isEquality = (player1, player2) =>
    player1.points === player2.points;


TennisGame2.prototype.getScore = function () {
    if (isEquality(this.player1, this.player2)) {
        return equalityResult(this.player1)
    }

    if (hasAdvantage(this.player1).over(this.player2)) {
        return "Advantage player1";
    }

    if (hasAdvantage(this.player2).over(this.player1)) {
        return "Advantage player2";
    }

    if (hasWon(this.player1).to(this.player2)) {
        return "Win for player1";
    }

    if (hasWon(this.player2).to(this.player1)) {
        return "Win for player2";
    }

    return individualResult(this.player1) + "-" + individualResult(this.player2);
};

TennisGame2.prototype.P1Score = function () {
    this.player1.points++;
};

TennisGame2.prototype.P2Score = function () {
    this.player2.points++;
};

TennisGame2.prototype.wonPoint = function (player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

export default TennisGame2;