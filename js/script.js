

var c = document.getElementById('canvas')
var s = sprinkler.create(c) 
function fallingCrossing(message) {
    
    var images = [
        'tom-nook.png',
        'peach.png',
        'isabelle.png'
      ]
      var stop = s.start(images, {
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