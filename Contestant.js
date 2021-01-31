class Contestant {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCount.on("value",function(data){
            contestantCount = data.val();
        })}

        updateCount(count){
            database.ref('/').update({
                contestantCount : count
            })}
            updaṭe(){
                var contestantIndex ="contestant" + playerCount;
                database.ref(contestantIndex).set({
                    name:this.name,

                })}
                static getContestantInfo(){
                    var contestantInforef = database.ref('contestnat')
                    contestantInforef.on("value",function(data){
                        allContestants = data.val();
                    })}
}