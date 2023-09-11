var longestPalindrome = function(s) {
    let left = 0, right = 0, maxLength = 0;
    const extend = (s, i, j, n) => {// s为字符串 i,j为双指针 n为字符串长度
        while(i >= 0 && j < n && s[i] === s[j]){
            if(j - i + 1 > maxLength){
                left = i; // 更新开始位置
                right = j; // 更新结尾位置
                maxLength = j - i + 1; // 更新子串最大长度
            }
            // 指针移动
            i--;
            j++;
        }
    }
    for(let i = 0; i < s.length; i++){
        extend(s, i, i, s.length); // 以i为中心
        extend(s, i, i + 1, s.length); // 以i和i+1为中心
    }
    return s.substr(left, maxLength);
};