class Quiz{
constructor(){}

getState(){
var gameStateref = database.ref(gameState);
gameStateref.on('value',function (data)
{
gameState = data.val()

})}

update(gameState){
    database.ref('/').update({
        gameState:gameState
    })}
    
    async start(){
        if(gameState === 0){
           contestant = new Contestant();
           var contestantCountRef = await database.ref('contestantCount').once("value");
       if(contestantCountRef){
           contestantCount = contestantCountRef.val();
           contestant.getCount();
       }
       question = new Question();
       question.display();
        }
    }
}