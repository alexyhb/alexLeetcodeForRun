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

//2
function twoSum2(nums: number[], target: number): number[] {
    let helperMap: Map<number, number>;
    helperMap = new Map();
    let index: number | undefined;
    let resArr: number[] = [];
    for (let i = 0, length = nums.length; i < length; i++) {
        index = helperMap.get(target - nums[i]);
        if (index !== undefined) {
            resArr = [i, index];
        }
        helperMap.set(nums[i], i);
    }
    return resArr;
};