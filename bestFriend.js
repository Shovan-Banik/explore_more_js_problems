function bestFriend(friends){
    var largeName=friends[0];
for (let i=0; i<friends.length;i++){
    let element=friends[i];
    // console.log(element);
    if(largeName.length<element.length){
        largeName=element;
    }
}
return largeName;
}
const friendName=['abul','bablu','aboila','tobla','tutul','mirzashafi','tpu'];
const valoFriend=bestFriend(friendName);
console.log(valoFriend);