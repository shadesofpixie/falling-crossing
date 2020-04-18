

var c = document.getElementById('canvas')
var s = sprinkler.create(c) 
function rainingTea(message) {
    
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
    if( command === "teaparty" &&
        ( !rewardId || flags.broadcaster || flags.mod ) ) {
        rainingTea( message );
    }
    if( flags.customReward && extra.customRewardId === rewardId ) {
        rainingTea( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "f1d2db18-77eb-4f0c-a0d7-5790cc735f01" ) {
        rainingTea( message );
    }
};
ComfyJS.Init( "shadesofpixie" );