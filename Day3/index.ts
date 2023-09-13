function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let length = nums.length;
    let left: number = 0,
        right: number = length - 1;
    let resArr: number[][] = [];
    for (let i = 0; i < length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        left = i + 1;
        right = length - 1;
        while (left < right) {
            let total: number = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                resArr.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return resArr;
};