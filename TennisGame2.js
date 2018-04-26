var TennisGame2 = function (player1Name = 'player1', player2Name = 'player2') {
    this.player1 = {
        points: 0,
        name: player1Name
    };
    this.player2 = {
        points: 0,
        name: player2Name
    };
};

const playingResult = (player1, player2) => {
    const result = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };

    return `${result[player1.points]}-${result[player2.points]}`
};

const equalityResult = player => {
    const result = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All"
    };

    return result[player.points] || "Deuce";
};

const advantageResult = (player1, player2) => {
    const advantage = hasAdvantage(player1).over(player2) ? player1 : player2;

    return `Advantage ${advantage.name}`;
};

const winnerResult = (player1, player2) => {
    const winner = hasWon(player1).to(player2) ? player1 : player2;

    return `Win for ${winner.name}`
};

const isThereEquality = (player1, player2) =>
    player1.points === player2.points;

const hasAdvantage = (player1) => ({
    over: player2 => player1.points > player2.points && player2.points >= 3 && (player1.points - player2.points) === 1
});

const isThereAdvantage = (player1, player2) =>
    hasAdvantage(player1).over(player2) || hasAdvantage(player2).over(player1)

const hasWon = (player1) => ({
    to: player2 => player1.points >= 4 && (player1.points - player2.points) >= 2
});

const isThereAWinner = (player1, player2) =>
    hasWon(player1).to(player2) || hasWon(player2).to(player1)

TennisGame2.prototype.getScore = function () {
    if (isThereEquality(this.player1, this.player2)) {
        return equalityResult(this.player1)
    }

    if (isThereAdvantage(this.player1, this.player2)) {
        return advantageResult(this.player1, this.player2);
    }

    if (isThereAWinner(this.player1, this.player2)) {
        return winnerResult(this.player1, this.player2);
    }

    return playingResult(this.player1, this.player2)
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