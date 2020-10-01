
const params = new URLSearchParams( location.search );
const channel = params.get( "channel" ) || "";
const rewardId = params.get( "reward" ) || "";
let c = document.getElementById('canvas')
let s = sprinkler.create(c) 
function fallingCrossing(message) {
    
  

}


fallingCrossing();

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command === "animalcrossing" &&
        ( !rewardId || flags.broadcaster || flags.mod ) ) {
        fallingCrossing( message );
    }
    if( flags.customReward && extra.customRewardId === rewardId ) {
        fallingCrossing( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward )
        if ( extra.customRewardId === rewardId ) {
        fallingCrossing( message );
    }
};
ComfyJS.Init( "channel" );
