function assignPlayerInGroups(players_string){
    angular = [];
    react = [];
    players = players_string.split(',');
    loop_length = players.length;
    for(i = 0; i < loop_length; i++){
        index = Math.floor(Math.random()*players.length+0);
        if(angular.length < parseInt(loop_length/2)){
            angular.push(players[index]);
            players.splice(index, 1);
        } else if(react.length < parseInt(loop_length/2)) {
            react.push(players[index]);
            players.splice(index, 1);
        } else if(players.length == 1){
            groups = ['react','angular'];
            group_index = Math.floor(Math.random()*groups.length+0)
            eval(groups[group_index]).push(players[index]);		
            players.splice(index, 1);
        }
    }
    console.log('Angular - ', angular);
    console.log('React - ', react);
}