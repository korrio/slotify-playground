// Simple casino game logic.

import {GameSession, GameSessionConfig} from "slotify.js";

const config = new GameSessionConfig();
config.availableBets = [10, 20, 30];
config.creditsAmount = 5000;

const session = new GameSession(config);
console.log("getAvailableBets()",session.getAvailableBets()); //[10, 20, 30]
console.log("getBet()",session.getBet()); //10
console.log("getCreditsAmount():",session.getCreditsAmount()); //5000

session.setBet(20);
console.log("getBet():",session.getBet()); //20

session.play();
console.log("getCreditsAmount():",session.getCreditsAmount()); //4980

// Video slot game logic.

import {ReelGameSession, ReelGameSessionConfig, ReelGameSessionReelsController, ReelGameSessionWinCalculator} from "slotify.js";

const reelGameConfig = new ReelGameSessionConfig();
const reelGameSession = new ReelGameSession(reelGameConfig, new ReelGameSessionReelsController(reelGameConfig), new ReelGameSessionWinCalculator(reelGameConfig));

//specified at config
console.log("getPaytable():\n",reelGameSession.getPaytable()); //paytable
console.log("getReelsItemsNumber()\n",reelGameSession.getReelsItemsNumber()); //number of reels (columns)
console.log("getReelsNumber()\n",reelGameSession.getReelsNumber()); //number of items on reels (rows)
console.log("getReelsItemsSequences()\n",reelGameSession.getReelsItemsSequences()); //distributions of symbols on reels (probabilities)

reelGameConfig.creditsAmount = 5000;
reelGameSession.setBet(100);
reelGameSession.play();
console.log("getCreditsAmount():",reelGameSession.getCreditsAmount()); //4980

// console.log("getReelsItems():\n", reelGameSession.getReelsItems()); //combination of symbols on reels after play
// console.log("getWinningAmount():\n",reelGameSession.getWinningAmount()); //if there where a winning combination returns total winning amount
// console.log("getWinningLines():\n",reelGameSession.getWinningLines()); //returns winning lines data
// console.log("getWinningScatters():\n",reelGameSession.getWinningScatters()); //returns winning scatters data

