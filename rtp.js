import {ReelGameSession, ReelGameSessionConfig, ReelGameSessionReelsController, ReelGameSessionWinCalculator, GameSessionSimulation} from "slotify.js";

const sessionConfig = new ReelGameSessionConfig();
sessionConfig.creditsAmount = Infinity;
sessionConfig.reelsItemsSequences = [
    ['J', '9', 'Q', '10', 'A', 'S', 'K'],
    ['K', 'S', '10', 'A', '9', 'Q', 'J'],
    ['J', 'Q', '10', '9', 'S', 'A', 'K'],
    ['Q', '10', '9', 'S', 'K', 'A', 'J'],
    ['Q', 'A', 'J', '10', '9', 'S', 'K']
];
const reelsController = new ReelGameSessionReelsController(sessionConfig);
const winningCalculator = new ReelGameSessionWinCalculator(sessionConfig);
const session = new ReelGameSession(sessionConfig, reelsController, winningCalculator);
const simulationConfig = {
    numberOfRounds: 10000
};
const simulation = new GameSessionSimulation(session, simulationConfig);


simulation.beforePlayCallback = () => {
    console.log("Before play");
};
simulation.afterPlayCallback = () => {
    console.log("After play");
};
simulation.onFinishedCallback = () => {
    console.log("Simulation finished");
};

simulation.run();  //10000 rounds will be played

console.log("getRtp():",simulation.getRtp()); //returns rtp for current session (about 50-60% with symbols distributions specified earlier at session config) 
