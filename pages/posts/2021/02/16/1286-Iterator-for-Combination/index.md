---
title: "1286.Iterator for Combination"
date: "2021-02-16T15:04:58.000Z"
updated: "2021-02-16T15:07:51.989Z"
layout: "post"
from: "/2021/02/16/1286-Iterator-for-Combination/"
categories: ["Leetcode"]
tags: ["Leetcode"]
---

# 1286\. Iterator for Combination {#1286-Iterator-for-Combination}

Design the `CombinationIterator` class:

-   `CombinationIterator(string characters, int combinationLength)` Initializes the object with a string `characters` of **sorted distinct** lowercase English letters and a number `combinationLength` as arguments.
-   `next()` Returns the next combination of length `combinationLength` in **lexicographical order**.
-   `hasNext()` Returns `true` if and only if there exists a next combination.

**Example 1:**

**Input**  
\[“CombinationIterator”, “next”, “hasNext”, “next”, “hasNext”, “next”, “hasNext”\]  
\[\[“abc”, 2\], \[\], \[\], \[\], \[\], \[\], \[\]\]  
**Output**  
\[null, “ab”, true, “ac”, true, “bc”, false\]

**Explanation**  
CombinationIterator itr = new CombinationIterator(“abc”, 2);  
itr.next(); // return “ab”  
itr.hasNext(); // return True  
itr.next(); // return “ac”  
itr.hasNext(); // return True  
itr.next(); // return “bc”  
itr.hasNext(); // return False

**Constraints:**

-   `1 <= combinationLength <= characters.length <= 15`
-   All the characters of `characters` are **unique**.
-   At most `104` calls will be made to `next` and `hasNext`.
-   It’s guaranteed that all calls of the function `next` are valid.

## Solution {#Solution}

```java
class CombinationIterator {
    
    Stack<Character> st;
    String result, str;
    Map<Character, Integer> map;
    int comLength;
        
    public CombinationIterator(String characters, int combinationLength) {
        str = characters;
        comLength = combinationLength;
        int index = 0;
        st = new Stack();
        map = new HashMap<>();
        result = "";
		
		//create first permutation.
        for(Character c : characters.toCharArray()) {
            st.push(c);
            result += c;
            if(st.size() == combinationLength) 
                break;      
		}
		//extract all the index of the character in characters.
        for(Character c : characters.toCharArray()) {
            map.put(c, index++);
        }
    }
    
    public String next(){
		//calculate next
        String currResult = result;
		//因为是符合lexicographical order,所以每次更新permutation,组合中从末尾开始与原String从末尾开始
		//相一致的元素,必然要发生改变. 比如: ac abc.那么c必然要变化. acd, abcd, 那么cd必然要发生变化,不然无法符
		//合lexicographical order.
		//从末尾开始,移除当前组合和原str位置对应的元素.
		//比如当前组合是ac, 原str是abc, 那么就移除c.
		//当前组合变为a, 原str的index减少一,对应元素为b,
		//此时组合中末尾元素为a, 无法与str中的b对应,跳出循环
        int index = str.length() - 1;
        while(!st.isEmpty() && index == map.get(st.peek())){
            st.pop();
            index--;
			//对应的,结果中也要移除相应的元素.
            result = result.substring(0, result.length() - 1);
        }
        
		//如果所有元素都被移除,说明当前组合已经是lexicographical order下的最后一个.
		//比如 abcd,要求长度是3, 那么bcd为最后一种组合. 运行到此, bcd可以被上面的循环完全移除.所以st为空可以判断
		//没有next
        if(st.isEmpty()) return currResult;
        
        index = map.get(st.pop());
		//末尾元素移除完毕后, 当前元素也必然要改变, 形成新的组合.
		//移除当前元素, 并按顺序加入当前元素的后置位元素,直到组合长度符合要求.
        result = result.substring(0, result.length() - 1);
        
        while(st.size() != comLength){
            Character temp = str.charAt(++index);
            st.push(temp);
            result += temp;
        }
        
        return currResult;
    }
    
    public boolean hasNext(){
        return !st.isEmpty();
    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * CombinationIterator obj = new CombinationIterator(characters, combinationLength);
 * String param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */
```

### 时间与空间复杂度: {#时间与空间复杂度}

O(n)space  
O(n)init  
O(n)next  
O(n)hasNext
