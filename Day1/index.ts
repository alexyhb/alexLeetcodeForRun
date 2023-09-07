function twoSum(nums: number[], target: number): number[] {
    let res=[]
    for(let i = 0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(!(i==j)){

                if(nums[i]+nums[j]===target){
                    res.push(i)
                    res.push(j)
                    return res
                }
            }
        }
    }
    return res
}