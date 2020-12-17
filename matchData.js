const four = {
  name_of_shot: "4",
  batsman: "Aryaman",
  bowler: "Hellix",
  umpire: "Aviral",
};

const six = {
  name_of_shot: "6",
  batsman: "Aryaman",
  bowler: "Hellix",
  umpire: "Aviral",
};

const customData = {
  "score": {
    "runs": "3",
    "wickets": "0",
    "overs": "0.1",
    "inning": "1",
    "batting_team": "India",
    "bowling_team": "Australia",
    "batsman": [
      {
        "bowls": "1",
        "fours": "0",
        "name": "Virat Kohli",
        "runs": "3",
        "six": "0"
      },
      {
        "bowls": "0",
        "fours": "0",
        "name": "Rohit Sharma",
        "runs": "0",
        "six": "0"
      }
    ],
    "bowler": {
      "maidens": "0",
      "name": "Starc",
      "overs": "0.1",
      "runs": "3",
      "wickets": "0"
    },
    "stricker": "Virat,",
    "shot_type": "thirdman"
  }
}

const list_of_matches = {
  1: "IND v/s AUS",
  2: "UAE v/s IND",
  3: "SA v/s AUS",
  4: "PAK v/s NZ",
};

module.exports = {
  four: four,
  six: six,
  listOfMatches: list_of_matches,
  customData: customData
};
