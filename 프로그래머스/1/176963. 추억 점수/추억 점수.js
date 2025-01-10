function solution(name, yearning, photo) {
    let info = {};
    
    name.forEach((person, index) => {
        info[person] = yearning[index];
    })
    
    let ans = [];
    
    for(let i = 0; i < photo.length; i++){
        const image = photo[i];
        
        let sum = 0;
        
        for(let j = 0; j < image.length; j++){
            if(info[image[j]]){
                sum += info[image[j]];
            }
        }
        
        ans.push(sum);
    }
    
    return ans;
}