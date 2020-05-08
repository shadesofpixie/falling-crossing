
const params = new URLSearchParams( location.search );
const channel = params.get( "channel" ) || "";
const rewardId = params.get( "reward" ) || "";
let c = document.getElementById('canvas')
let s = sprinkler.create(c) 
function fallingCrossing(message) {
    
    let images = [
        'tom-nook.png',
        'peach.png',
        'isabelle.png'
      ]
      let stop = s.start(images, {
        imagesInSecond: 8,
        ddyMin: 200,
        ddyMax: 200,

      })

      setTimeout(function(){
        stop();
      }, 5000)

}




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