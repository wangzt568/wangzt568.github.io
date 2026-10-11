---
title: "FAANG LeetCode Roadmap: 360 Medium and Hard Problems"
date: "2026-10-10T00:00:00-07:00"
updated: "2026-10-10T00:00:00-07:00"
layout: post
top: 100
categories: ["Leetcode"]
tags: ["Leetcode", "FAANG", "Interview", "Algorithms"]
description: "A study roadmap covering 270 Medium and 90 Hard LeetCode problems for FAANG coding interviews."
---

360 questions: **270 Medium + 90 Hard**, grouped by coding pattern.

## Practice order

- **P1:** core patterns. Start here.
- **P2:** variations that build on P1.
- **P3:** advanced problems and combined patterns.

For each question, write a solution, test edge cases, and explain its time and space complexity. Check it off when you can solve it again without hints. **Premium** marks questions that require paid access.

## Questions

### 1. Hashing, prefix sums and arrays — 27

- [ ] **P1** [LC 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/) — Medium · canonical grouping
- [ ] **P1** [LC 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) — Medium · sequence starts
- [ ] **P1** [LC 238 — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — Medium · prefix/suffix products
- [ ] **P1** [LC 560 — Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) — Medium · prefix sum frequency
- [ ] **P1** [LC 36 — Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) — Medium · constraint sets
- [ ] **P1** [LC 380 — Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) — Medium · index map + swap deletion
- [ ] **P1** [LC 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) — Medium · Kadane invariant
- [ ] **P1** [LC 75 — Sort Colors](https://leetcode.com/problems/sort-colors/) — Medium · Dutch national flag
- [ ] **P1** [LC 73 — Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) — Medium · in-place markers
- [ ] **P1** [LC 54 — Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) — Medium · boundary simulation
- [ ] **P1** [LC 48 — Rotate Image](https://leetcode.com/problems/rotate-image/) — Medium · matrix transpose/reverse
- [ ] **P2** [LC 525 — Contiguous Array](https://leetcode.com/problems/contiguous-array/) — Medium · balanced prefix state
- [ ] **P2** [LC 523 — Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) — Medium · modular prefix earliest index
- [ ] **P2** [LC 974 — Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) — Medium · remainder frequency
- [ ] **P2** [LC 930 — Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) — Medium · binary sum counting
- [ ] **P2** [LC 454 — 4Sum II](https://leetcode.com/problems/4sum-ii/) — Medium · meet-in-the-middle sums
- [ ] **P2** [LC 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) — Medium · Floyd cycle on indices
- [ ] **P2** [LC 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) — Medium · sign marking
- [ ] **P2** [LC 229 — Majority Element II](https://leetcode.com/problems/majority-element-ii/) — Medium · Boyer-Moore candidates
- [ ] **P2** [LC 31 — Next Permutation](https://leetcode.com/problems/next-permutation/) — Medium · lexicographic successor
- [ ] **P2** [LC 189 — Rotate Array](https://leetcode.com/problems/rotate-array/) — Medium · reversal rotation
- [ ] **P2** [LC 289 — Game of Life](https://leetcode.com/problems/game-of-life/) — Medium · encoded simultaneous update
- [ ] **P2** [LC 304 — Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) — Medium · 2D prefix sums
- [ ] **P2** [LC 1423 — Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) — Medium · complement window
- [ ] **P2** [LC 1031 — Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) — Medium · prefix/suffix best windows
- [ ] **P3** [LC 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/) — Hard · cyclic placement
- [ ] **P3** [LC 1074 — Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) — Hard · compress rows + prefix counts

### 2. Two pointers and sliding windows — 23

- [ ] **P1** [LC 167 — Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — Medium · sorted inward pointers
- [ ] **P1** [LC 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/) — Medium · discard dominated boundary
- [ ] **P1** [LC 15 — 3Sum](https://leetcode.com/problems/3sum/) — Medium · sort + duplicate suppression
- [ ] **P1** [LC 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — Medium · unique-window invariant
- [ ] **P1** [LC 209 — Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) — Medium · positive-sum window
- [ ] **P1** [LC 424 — Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) — Medium · replacement budget
- [ ] **P1** [LC 567 — Permutation in String](https://leetcode.com/problems/permutation-in-string/) — Medium · fixed-window counts
- [ ] **P1** [LC 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) — Medium · expand around center
- [ ] **P1** [LC 76 — Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) — Hard · minimum covering window
- [ ] **P1** [LC 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — Hard · boundary maxima
- [ ] **P2** [LC 713 — Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) — Medium · multiplicative positive window
- [ ] **P2** [LC 1004 — Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) — Medium · zero budget
- [ ] **P2** [LC 1658 — Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) — Medium · longest retained sum
- [ ] **P2** [LC 1838 — Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) — Medium · sorted cost window
- [ ] **P2** [LC 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) — Medium · merge two interval streams
- [ ] **P2** [LC 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) — Medium · pair lightest with heaviest
- [ ] **P2** [LC 340 — Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) — Medium · Premium · at-most-K distinct
- [ ] **P2** [LC 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) — Medium · fast/slow cycle entry
- [ ] **P3** [LC 30 — Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) — Hard · word-aligned windows
- [ ] **P3** [LC 992 — Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) — Hard · exactly K via two at-most counts
- [ ] **P3** [LC 862 — Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) — Hard · prefix + monotonic deque
- [ ] **P3** [LC 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) — Medium · dual monotonic deques
- [ ] **P3** [LC 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) — Hard · deque maxima

### 3. Strings, parsing and stacks — 19

- [ ] **P1** [LC 155 — Min Stack](https://leetcode.com/problems/min-stack/) — Medium · minimum augmentation
- [ ] **P1** [LC 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) — Medium · postfix evaluation
- [ ] **P1** [LC 394 — Decode String](https://leetcode.com/problems/decode-string/) — Medium · nested frames
- [ ] **P1** [LC 1249 — Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) — Medium · parenthesis balance
- [ ] **P1** [LC 71 — Simplify Path](https://leetcode.com/problems/simplify-path/) — Medium · path normalization
- [ ] **P1** [LC 227 — Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) — Medium · precedence without parentheses
- [ ] **P1** [LC 151 — Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) — Medium · tokenize + reverse words
- [ ] **P2** [LC 735 — Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) — Medium · collision stack
- [ ] **P2** [LC 1209 — Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) — Medium · run-count stack
- [ ] **P2** [LC 678 — Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) — Medium · balance interval
- [ ] **P2** [LC 636 — Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/) — Medium · exclusive-time frames
- [ ] **P2** [LC 8 — String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) — Medium · bounded numeric parsing
- [ ] **P2** [LC 12 — Integer to Roman](https://leetcode.com/problems/integer-to-roman/) — Medium · greedy numeral tokens
- [ ] **P2** [LC 43 — Multiply Strings](https://leetcode.com/problems/multiply-strings/) — Medium · digit multiplication
- [ ] **P2** [LC 856 — Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) — Medium · parenthesis scoring
- [ ] **P2** [LC 224 — Basic Calculator](https://leetcode.com/problems/basic-calculator/) — Hard · expression sign stack
- [ ] **P3** [LC 772 — Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/) — Hard · Premium · full precedence parser
- [ ] **P3** [LC 68 — Text Justification](https://leetcode.com/problems/text-justification/) — Hard · line packing and spacing
- [ ] **P3** [LC 32 — Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) — Hard · valid-parenthesis state

### 4. Monotonic stacks and ordered sequences — 11

- [ ] **P1** [LC 739 — Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) — Medium · next greater with indices
- [ ] **P1** [LC 503 — Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) — Medium · circular next greater
- [ ] **P1** [LC 901 — Online Stock Span](https://leetcode.com/problems/online-stock-span/) — Medium · compressed spans
- [ ] **P1** [LC 402 — Remove K Digits](https://leetcode.com/problems/remove-k-digits/) — Medium · greedy monotonic deletion
- [ ] **P2** [LC 316 — Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) — Medium · lexicographic stack + last occurrence
- [ ] **P2** [LC 1762 — Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/) — Medium · Premium · right-to-left maximum
- [ ] **P3** [LC 84 — Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) — Hard · histogram contribution boundary
- [ ] **P3** [LC 85 — Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) — Hard · row histograms
- [ ] **P3** [LC 907 — Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) — Medium · minimum contribution counts
- [ ] **P3** [LC 2104 — Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/) — Medium · min/max contribution difference
- [ ] **P3** [LC 895 — Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) — Hard · frequency buckets + recency

### 5. Binary search and answer-space search — 20

- [ ] **P1** [LC 34 — Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) — Medium · lower/upper bounds
- [ ] **P1** [LC 33 — Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) — Medium · identify sorted half
- [ ] **P1** [LC 153 — Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) — Medium · rotated minimum
- [ ] **P1** [LC 162 — Find Peak Element](https://leetcode.com/problems/find-peak-element/) — Medium · slope direction
- [ ] **P1** [LC 74 — Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — Medium · flattened ordered matrix
- [ ] **P1** [LC 875 — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) — Medium · monotone feasibility
- [ ] **P1** [LC 1011 — Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) — Medium · capacity feasibility
- [ ] **P1** [LC 528 — Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) — Medium · prefix weighted sampling
- [ ] **P2** [LC 240 — Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) — Medium · staircase elimination
- [ ] **P2** [LC 540 — Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) — Medium · pair-index parity
- [ ] **P2** [LC 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) — Medium · value count in sorted matrix
- [ ] **P2** [LC 1552 — Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) — Medium · greedy placement feasibility
- [ ] **P2** [LC 1482 — Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) — Medium · consecutive-bouquet feasibility
- [ ] **P2** [LC 1891 — Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/) — Medium · Premium · piece count feasibility
- [ ] **P2** [LC 1060 — Missing Element in Sorted Array](https://leetcode.com/problems/missing-element-in-sorted-array/) — Medium · Premium · missing-count inversion
- [ ] **P2** [LC 1095 — Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/) — Hard · peak + two ordered searches
- [ ] **P2** [LC 981 — Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) — Medium · timestamp floor search
- [ ] **P3** [LC 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) — Hard · minimize maximum partition sum
- [ ] **P3** [LC 4 — Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) — Hard · partition two sorted arrays
- [ ] **P3** [LC 719 — Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) — Hard · distance count + window

### 6. Linked lists — 11

- [ ] **P1** [LC 2 — Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) — Medium · carry and dummy head
- [ ] **P1** [LC 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) — Medium · fixed pointer gap
- [ ] **P1** [LC 92 — Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) — Medium · sublist reversal
- [ ] **P1** [LC 143 — Reorder List](https://leetcode.com/problems/reorder-list/) — Medium · split + reverse + weave
- [ ] **P1** [LC 138 — Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) — Medium · clone with identity map
- [ ] **P2** [LC 82 — Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) — Medium · remove duplicate runs
- [ ] **P2** [LC 86 — Partition List](https://leetcode.com/problems/partition-list/) — Medium · stable two-list partition
- [ ] **P2** [LC 148 — Sort List](https://leetcode.com/problems/sort-list/) — Medium · merge sort list
- [ ] **P2** [LC 430 — Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) — Medium · flatten with saved continuation
- [ ] **P3** [LC 25 — Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) — Hard · reverse complete K-blocks
- [ ] **P3** [LC 1171 — Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/) — Medium · prefix sums on nodes

### 7. Trees and BSTs — 32

- [ ] **P1** [LC 102 — Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — Medium · level BFS
- [ ] **P1** [LC 199 — Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) — Medium · last node per level
- [ ] **P1** [LC 98 — Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) — Medium · inherited BST bounds
- [ ] **P1** [LC 230 — Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) — Medium · inorder rank
- [ ] **P1** [LC 236 — Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) — Medium · subtree LCA return
- [ ] **P1** [LC 105 — Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) — Medium · traversal partition
- [ ] **P1** [LC 113 — Path Sum II](https://leetcode.com/problems/path-sum-ii/) — Medium · path backtracking
- [ ] **P1** [LC 129 — Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) — Medium · path accumulator
- [ ] **P1** [LC 114 — Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) — Medium · flatten postorder
- [ ] **P1** [LC 173 — Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) — Medium · lazy inorder iterator
- [ ] **P2** [LC 103 — Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) — Medium · level presentation
- [ ] **P2** [LC 235 — Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) — Medium · BST-directed LCA
- [ ] **P2** [LC 314 — Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) — Medium · Premium · column BFS order
- [ ] **P2** [LC 545 — Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/) — Medium · Premium · boundary deduplication
- [ ] **P2** [LC 863 — All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) — Medium · parent links + distance BFS
- [ ] **P2** [LC 437 — Path Sum III](https://leetcode.com/problems/path-sum-iii/) — Medium · path prefix sums
- [ ] **P2** [LC 337 — House Robber III](https://leetcode.com/problems/house-robber-iii/) — Medium · take/skip tree DP
- [ ] **P2** [LC 450 — Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) — Medium · BST successor deletion
- [ ] **P2** [LC 652 — Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) — Medium · subtree structural IDs
- [ ] **P2** [LC 662 — Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) — Medium · normalized positional indices
- [ ] **P2** [LC 1110 — Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) — Medium · delete and create roots
- [ ] **P2** [LC 951 — Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/) — Medium · unordered child equivalence
- [ ] **P2** [LC 1650 — Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/) — Medium · Premium · parent-chain intersection
- [ ] **P2** [LC 333 — Largest BST Subtree](https://leetcode.com/problems/largest-bst-subtree/) — Medium · Premium · valid-BST subtree summaries
- [ ] **P2** [LC 285 — Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/) — Medium · Premium · inorder successor
- [ ] **P2** [LC 366 — Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree/) — Medium · Premium · height buckets
- [ ] **P3** [LC 124 — Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) — Hard · best downward gain vs global path
- [ ] **P3** [LC 297 — Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) — Hard · unambiguous tree serialization
- [ ] **P3** [LC 987 — Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) — Hard · column/row/value ordering
- [ ] **P3** [LC 426 — Convert Binary Search Tree to Sorted Doubly Linked List](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) — Medium · Premium · inorder pointer linking
- [ ] **P3** [LC 428 — Serialize and Deserialize N-ary Tree](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/) — Hard · Premium · N-ary arity encoding
- [ ] **P3** [LC 968 — Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) — Hard · three-state camera DP

### 8. Heaps, selection and scheduling — 17

- [ ] **P1** [LC 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — Medium · randomized quickselect / bounded heap
- [ ] **P1** [LC 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — Medium · frequency selection
- [ ] **P1** [LC 973 — K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — Medium · distance selection
- [ ] **P1** [LC 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — Hard · K-way merge
- [ ] **P1** [LC 295 — Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) — Hard · two-heap partition
- [ ] **P1** [LC 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/) — Medium · cooldown scheduling
- [ ] **P2** [LC 692 — Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) — Medium · frequency with lexicographic tie
- [ ] **P2** [LC 767 — Reorganize String](https://leetcode.com/problems/reorganize-string/) — Medium · avoid adjacent repeats
- [ ] **P2** [LC 373 — Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) — Medium · best-first pair frontier
- [ ] **P2** [LC 1642 — Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) — Medium · reserve ladders for largest climbs
- [ ] **P2** [LC 1834 — Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) — Medium · time simulation + heap
- [ ] **P2** [LC 355 — Design Twitter](https://leetcode.com/problems/design-twitter/) — Medium · merge user feeds
- [ ] **P3** [LC 871 — Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) — Hard · retroactive refueling
- [ ] **P3** [LC 2402 — Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) — Hard · busy/free resource heaps
- [ ] **P3** [LC 502 — IPO](https://leetcode.com/problems/ipo/) — Hard · feasible-project frontier
- [ ] **P3** [LC 480 — Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) — Hard · two heaps + lazy deletion
- [ ] **P3** [LC 632 — Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) — Hard · smallest range across K lists

### 9. Intervals, sweep lines and greedy proofs — 26

- [ ] **P1** [LC 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/) — Medium · sort and merge
- [ ] **P1** [LC 57 — Insert Interval](https://leetcode.com/problems/insert-interval/) — Medium · three-phase insertion
- [ ] **P1** [LC 253 — Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) — Medium · Premium · overlap count / end heap
- [ ] **P1** [LC 435 — Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) — Medium · earliest-finish exchange
- [ ] **P1** [LC 452 — Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) — Medium · interval stabbing
- [ ] **P1** [LC 55 — Jump Game](https://leetcode.com/problems/jump-game/) — Medium · farthest reachable frontier
- [ ] **P1** [LC 45 — Jump Game II](https://leetcode.com/problems/jump-game-ii/) — Medium · layered reachability
- [ ] **P1** [LC 763 — Partition Labels](https://leetcode.com/problems/partition-labels/) — Medium · last-occurrence partition
- [ ] **P2** [LC 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/) — Medium · ordered non-overlap
- [ ] **P2** [LC 731 — My Calendar II](https://leetcode.com/problems/my-calendar-ii/) — Medium · double-booking intersections
- [ ] **P2** [LC 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/) — Medium · difference events
- [ ] **P2** [LC 759 — Employee Free Time](https://leetcode.com/problems/employee-free-time/) — Hard · Premium · K-way calendar merge
- [ ] **P2** [LC 134 — Gas Station](https://leetcode.com/problems/gas-station/) — Medium · prefix deficit reset
- [ ] **P2** [LC 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) — Medium · height-order insertion
- [ ] **P2** [LC 846 — Hand of Straights](https://leetcode.com/problems/hand-of-straights/) — Medium · consume consecutive runs
- [ ] **P2** [LC 1024 — Video Stitching](https://leetcode.com/problems/video-stitching/) — Medium · greedy coverage
- [ ] **P2** [LC 1405 — Longest Happy String](https://leetcode.com/problems/longest-happy-string/) — Medium · largest feasible next character
- [ ] **P2** [LC 1647 — Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) — Medium · unique frequency allocation
- [ ] **P2** [LC 1653 — Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/) — Medium · prefix deletions state
- [ ] **P2** [LC 646 — Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) — Medium · interval chain
- [ ] **P3** [LC 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/) — Hard · maximum active bookings
- [ ] **P3** [LC 715 — Range Module](https://leetcode.com/problems/range-module/) — Hard · maintain disjoint ranges
- [ ] **P3** [LC 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) — Hard · active skyline heights
- [ ] **P3** [LC 1851 — Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) — Hard · offline queries + eligible heap
- [ ] **P3** [LC 135 — Candy](https://leetcode.com/problems/candy/) — Hard · two-direction constraints
- [ ] **P3** [LC 1326 — Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) — Hard · interval coverage frontier

### 10. Backtracking and constraint search — 22

- [ ] **P1** [LC 78 — Subsets](https://leetcode.com/problems/subsets/) — Medium · include/exclude subsets
- [ ] **P1** [LC 46 — Permutations](https://leetcode.com/problems/permutations/) — Medium · used-element permutations
- [ ] **P1** [LC 39 — Combination Sum](https://leetcode.com/problems/combination-sum/) — Medium · unbounded combination choices
- [ ] **P1** [LC 22 — Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — Medium · prefix-valid parentheses
- [ ] **P1** [LC 17 — Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) — Medium · Cartesian choices
- [ ] **P1** [LC 79 — Word Search](https://leetcode.com/problems/word-search/) — Medium · grid visited-state restoration
- [ ] **P1** [LC 131 — Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) — Medium · palindrome cut enumeration
- [ ] **P2** [LC 90 — Subsets II](https://leetcode.com/problems/subsets-ii/) — Medium · duplicate subset pruning
- [ ] **P2** [LC 47 — Permutations II](https://leetcode.com/problems/permutations-ii/) — Medium · duplicate permutation pruning
- [ ] **P2** [LC 40 — Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) — Medium · single-use duplicate pruning
- [ ] **P2** [LC 77 — Combinations](https://leetcode.com/problems/combinations/) — Medium · combination start index
- [ ] **P2** [LC 216 — Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) — Medium · fixed-cardinality sum pruning
- [ ] **P2** [LC 93 — Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) — Medium · IP segment validation
- [ ] **P2** [LC 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) — Medium · symmetric bucket pruning
- [ ] **P2** [LC 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) — Medium · equal-sum bucket assignment
- [ ] **P2** [LC 526 — Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) — Medium · position divisibility constraints
- [ ] **P3** [LC 51 — N-Queens](https://leetcode.com/problems/n-queens/) — Hard · column/diagonal constraints
- [ ] **P3** [LC 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) — Hard · Sudoku constraint propagation
- [ ] **P3** [LC 301 — Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) — Hard · minimal invalid-parenthesis removal
- [ ] **P3** [LC 291 — Word Pattern II](https://leetcode.com/problems/word-pattern-ii/) — Medium · Premium · bijective substring mapping
- [ ] **P3** [LC 489 — Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/) — Hard · Premium · physical robot backtracking
- [ ] **P3** [LC 126 — Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) — Hard · shortest-path DAG enumeration

### 11. Tries and prefix matching — 10

- [ ] **P1** [LC 208 — Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) — Medium · prefix-tree operations
- [ ] **P1** [LC 211 — Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) — Medium · wildcard trie DFS
- [ ] **P1** [LC 1268 — Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) — Medium · sorted prefix range / trie
- [ ] **P2** [LC 648 — Replace Words](https://leetcode.com/problems/replace-words/) — Medium · shortest root match
- [ ] **P2** [LC 676 — Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/) — Medium · one-edit dictionary search
- [ ] **P2** [LC 421 — Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) — Medium · bitwise greedy trie
- [ ] **P3** [LC 212 — Word Search II](https://leetcode.com/problems/word-search-ii/) — Hard · trie-guided grid pruning
- [ ] **P3** [LC 472 — Concatenated Words](https://leetcode.com/problems/concatenated-words/) — Hard · word segmentation + dictionary
- [ ] **P3** [LC 1032 — Stream of Characters](https://leetcode.com/problems/stream-of-characters/) — Hard · reverse trie stream suffix
- [ ] **P3** [LC 642 — Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) — Hard · Premium · prefix ranked suggestions

### 12. Graph traversal, topology and connectivity — 35

- [ ] **P1** [LC 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/) — Medium · component flood fill
- [ ] **P1** [LC 133 — Clone Graph](https://leetcode.com/problems/clone-graph/) — Medium · identity-preserving clone
- [ ] **P1** [LC 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) — Medium · boundary reachability
- [ ] **P1** [LC 994 — Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — Medium · multi-source BFS
- [ ] **P1** [LC 542 — 01 Matrix](https://leetcode.com/problems/01-matrix/) — Medium · nearest-source distances
- [ ] **P1** [LC 207 — Course Schedule](https://leetcode.com/problems/course-schedule/) — Medium · cycle detection / indegrees
- [ ] **P1** [LC 210 — Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) — Medium · topological order
- [ ] **P1** [LC 417 — Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) — Medium · reverse-flow reachability
- [ ] **P1** [LC 721 — Accounts Merge](https://leetcode.com/problems/accounts-merge/) — Medium · DSU identity merging
- [ ] **P1** [LC 684 — Redundant Connection](https://leetcode.com/problems/redundant-connection/) — Medium · cycle edge with DSU
- [ ] **P1** [LC 785 — Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) — Medium · two-color invariant
- [ ] **P2** [LC 695 — Max Area of Island](https://leetcode.com/problems/max-area-of-island/) — Medium · component area
- [ ] **P2** [LC 261 — Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) — Medium · Premium · tree connectivity + edge count
- [ ] **P2** [LC 323 — Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) — Medium · Premium · component counting
- [ ] **P2** [LC 547 — Number of Provinces](https://leetcode.com/problems/number-of-provinces/) — Medium · adjacency-matrix connectivity
- [ ] **P2** [LC 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/) — Medium · weighted graph ratios
- [ ] **P2** [LC 752 — Open the Lock](https://leetcode.com/problems/open-the-lock/) — Medium · implicit-state BFS
- [ ] **P2** [LC 1091 — Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) — Medium · eight-neighbor shortest path
- [ ] **P2** [LC 490 — The Maze](https://leetcode.com/problems/the-maze/) — Medium · Premium · rolling-stop graph
- [ ] **P2** [LC 802 — Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) — Medium · reverse topology
- [ ] **P2** [LC 310 — Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) — Medium · leaf peeling
- [ ] **P2** [LC 694 — Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/) — Medium · Premium · shape normalization
- [ ] **P2** [LC 1376 — Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) — Medium · rooted propagation
- [ ] **P2** [LC 1319 — Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) — Medium · spare-edge connectivity
- [ ] **P2** [LC 1162 — As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) — Medium · multi-source maximum distance
- [ ] **P2** [LC 1254 — Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) — Medium · boundary-connected exclusion
- [ ] **P2** [LC 1905 — Count Sub Islands](https://leetcode.com/problems/count-sub-islands/) — Medium · component containment
- [ ] **P2** [LC 737 — Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/) — Medium · Premium · transitive synonym DSU
- [ ] **P2** [LC 444 — Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/) — Medium · Premium · unique topological order
- [ ] **P3** [LC 827 — Making A Large Island](https://leetcode.com/problems/making-a-large-island/) — Hard · label islands + deduplicate neighboring roots
- [ ] **P3** [LC 305 — Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/) — Hard · Premium · incremental DSU
- [ ] **P3** [LC 269 — Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) — Hard · Premium · lexicographic constraints + prefix invalidity
- [ ] **P3** [LC 815 — Bus Routes](https://leetcode.com/problems/bus-routes/) — Hard · route-stop bipartite BFS
- [ ] **P3** [LC 1293 — Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) — Hard · state BFS + dominance
- [ ] **P3** [LC 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/) — Hard · low-link bridges

### 13. Weighted graphs and advanced state search — 19

- [ ] **P1** [LC 743 — Network Delay Time](https://leetcode.com/problems/network-delay-time/) — Medium · Dijkstra relaxation
- [ ] **P1** [LC 127 — Word Ladder](https://leetcode.com/problems/word-ladder/) — Hard · word-neighbor BFS
- [ ] **P2** [LC 787 — Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) — Medium · edge-budget Bellman-Ford / layered state
- [ ] **P2** [LC 1631 — Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) — Medium · minimax Dijkstra
- [ ] **P2** [LC 1584 — Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) — Medium · minimum spanning tree
- [ ] **P2** [LC 1514 — Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) — Medium · max-product Dijkstra
- [ ] **P2** [LC 1135 — Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) — Medium · Premium · Kruskal edge ordering
- [ ] **P2** [LC 1129 — Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) — Medium · color-augmented BFS
- [ ] **P2** [LC 1136 — Parallel Courses](https://leetcode.com/problems/parallel-courses/) — Medium · Premium · topological semesters
- [ ] **P2** [LC 505 — The Maze II](https://leetcode.com/problems/the-maze-ii/) — Medium · Premium · weighted rolling distances
- [ ] **P3** [LC 778 — Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) — Hard · minimax elevation search
- [ ] **P3** [LC 332 — Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) — Hard · Eulerian trail
- [ ] **P3** [LC 2290 — Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/) — Hard · 0-1 BFS
- [ ] **P3** [LC 1368 — Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) — Hard · 0-1 direction cost
- [ ] **P3** [LC 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) — Hard · visited-subset BFS
- [ ] **P3** [LC 864 — Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) — Hard · key-mask BFS
- [ ] **P3** [LC 2092 — Find All People With Secret](https://leetcode.com/problems/find-all-people-with-secret/) — Hard · time-batched connectivity
- [ ] **P3** [LC 1976 — Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) — Medium · shortest-path counting
- [ ] **P3** [LC 1203 — Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) — Hard · two-level topological sorting

### 14. Dynamic programming: state, choices and knapsack — 43

- [ ] **P1** [LC 198 — House Robber](https://leetcode.com/problems/house-robber/) — Medium · take/skip recurrence
- [ ] **P1** [LC 213 — House Robber II](https://leetcode.com/problems/house-robber-ii/) — Medium · circular decomposition
- [ ] **P1** [LC 91 — Decode Ways](https://leetcode.com/problems/decode-ways/) — Medium · valid one/two-digit transitions
- [ ] **P1** [LC 322 — Coin Change](https://leetcode.com/problems/coin-change/) — Medium · min-count unbounded knapsack
- [ ] **P1** [LC 139 — Word Break](https://leetcode.com/problems/word-break/) — Medium · prefix segmentation
- [ ] **P1** [LC 300 — Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) — Medium · LIS state / patience sorting
- [ ] **P1** [LC 416 — Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) — Medium · 0/1 subset feasibility
- [ ] **P1** [LC 518 — Coin Change II](https://leetcode.com/problems/coin-change-ii/) — Medium · unbounded combination counts
- [ ] **P1** [LC 62 — Unique Paths](https://leetcode.com/problems/unique-paths/) — Medium · grid path recurrence
- [ ] **P1** [LC 64 — Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) — Medium · grid minimum cost
- [ ] **P1** [LC 1143 — Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) — Medium · two-prefix subsequences
- [ ] **P2** [LC 279 — Perfect Squares](https://leetcode.com/problems/perfect-squares/) — Medium · min-square decomposition
- [ ] **P2** [LC 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) — Medium · ordered composition counts
- [ ] **P2** [LC 494 — Target Sum](https://leetcode.com/problems/target-sum/) — Medium · sum-state / subset transform
- [ ] **P2** [LC 740 — Delete and Earn](https://leetcode.com/problems/delete-and-earn/) — Medium · aggregate values then take/skip
- [ ] **P2** [LC 983 — Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) — Medium · ticket-end transitions
- [ ] **P2** [LC 1043 — Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) — Medium · last partition choice
- [ ] **P2** [LC 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/) — Medium · predecessor word chains
- [ ] **P2** [LC 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) — Medium · divisibility DAG
- [ ] **P2** [LC 343 — Integer Break](https://leetcode.com/problems/integer-break/) — Medium · split integer products
- [ ] **P2** [LC 474 — Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) — Medium · two-resource 0/1 knapsack
- [ ] **P2** [LC 63 — Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) — Medium · obstacle-state initialization
- [ ] **P2** [LC 120 — Triangle](https://leetcode.com/problems/triangle/) — Medium · triangle rolling state
- [ ] **P2** [LC 221 — Maximal Square](https://leetcode.com/problems/maximal-square/) — Medium · largest ending square
- [ ] **P2** [LC 931 — Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) — Medium · three-predecessor minimum
- [ ] **P2** [LC 256 — Paint House](https://leetcode.com/problems/paint-house/) — Medium · Premium · color-exclusion state
- [ ] **P2** [LC 309 — Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) — Medium · hold/sold/rest machine
- [ ] **P2** [LC 714 — Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) — Medium · stock state with fee
- [ ] **P2** [LC 97 — Interleaving String](https://leetcode.com/problems/interleaving-string/) — Medium · two-source prefix interleaving
- [ ] **P2** [LC 647 — Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) — Medium · center expansion / palindrome DP
- [ ] **P2** [LC 516 — Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) — Medium · interval subsequence
- [ ] **P2** [LC 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) — Medium · common suffix lengths
- [ ] **P2** [LC 926 — Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/) — Medium · monotone-string state
- [ ] **P3** [LC 123 — Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) — Hard · two-transaction states
- [ ] **P3** [LC 188 — Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) — Hard · K-transaction states
- [ ] **P3** [LC 265 — Paint House II](https://leetcode.com/problems/paint-house-ii/) — Hard · Premium · best two previous colors
- [ ] **P3** [LC 115 — Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) — Hard · count distinct subsequences
- [ ] **P3** [LC 72 — Edit Distance](https://leetcode.com/problems/edit-distance/) — Medium · edit operations on prefixes
- [ ] **P3** [LC 174 — Dungeon Game](https://leetcode.com/problems/dungeon-game/) — Hard · reverse required-health DP
- [ ] **P3** [LC 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) — Hard · sort ties + LIS
- [ ] **P3** [LC 1235 — Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) — Hard · weighted intervals + predecessor search
- [ ] **P3** [LC 140 — Word Break II](https://leetcode.com/problems/word-break-ii/) — Hard · enumerate memoized sentence suffixes
- [ ] **P3** [LC 403 — Frog Jump](https://leetcode.com/problems/frog-jump/) — Hard · position/jump state

### 15. Dynamic programming: advanced composition — 16

- [ ] **P2** [LC 712 — Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) — Medium · weighted prefix deletion
- [ ] **P2** [LC 583 — Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) — Medium · LCS deletion reduction
- [ ] **P2** [LC 1140 — Stone Game II](https://leetcode.com/problems/stone-game-ii/) — Medium · game state and score difference
- [ ] **P2** [LC 1626 — Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/) — Medium · sorted compatible subsequence
- [ ] **P3** [LC 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/) — Hard · choose last balloon
- [ ] **P3** [LC 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) — Hard · memoized increasing DAG
- [ ] **P3** [LC 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) — Hard · palindrome minimum cuts
- [ ] **P3** [LC 10 — Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) — Hard · regex prefix transitions
- [ ] **P3** [LC 44 — Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) — Hard · wildcard prefix transitions
- [ ] **P3** [LC 639 — Decode Ways II](https://leetcode.com/problems/decode-ways-ii/) — Hard · weighted decoding cases
- [ ] **P3** [LC 1335 — Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/) — Hard · day-boundary partition
- [ ] **P3** [LC 1216 — Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/) — Hard · Premium · deletion budget / LPS
- [ ] **P3** [LC 1463 — Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/) — Hard · two-agent row state
- [ ] **P3** [LC 1444 — Number of Ways of Cutting a Pizza](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) — Hard · remaining cuts + suffix counts
- [ ] **P3** [LC 1039 — Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) — Medium · last triangle partition
- [ ] **P3** [LC 887 — Super Egg Drop](https://leetcode.com/problems/super-egg-drop/) — Hard · coverage by moves/eggs

### 16. Design, range structures, math and bit invariants — 29

- [ ] **P1** [LC 146 — LRU Cache](https://leetcode.com/problems/lru-cache/) — Medium · hash map + doubly linked recency
- [ ] **P1** [LC 362 — Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) — Medium · Premium · timestamp count window
- [ ] **P1** [LC 50 — Pow(x, n)](https://leetcode.com/problems/powx-n/) — Medium · binary exponentiation
- [ ] **P2** [LC 1146 — Snapshot Array](https://leetcode.com/problems/snapshot-array/) — Medium · per-index change history
- [ ] **P2** [LC 622 — Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) — Medium · circular-buffer invariants
- [ ] **P2** [LC 1472 — Design Browser History](https://leetcode.com/problems/design-browser-history/) — Medium · history cursor truncation
- [ ] **P2** [LC 348 — Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/) — Medium · Premium · row/column counters
- [ ] **P2** [LC 1166 — Design File System](https://leetcode.com/problems/design-file-system/) — Medium · Premium · parent-path existence
- [ ] **P2** [LC 1570 — Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/) — Medium · Premium · sparse intersection
- [ ] **P2** [LC 341 — Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/) — Medium · lazy nested iterator
- [ ] **P2** [LC 307 — Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) — Medium · Fenwick point-update prefix query
- [ ] **P2** [LC 2115 — Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) — Medium · dependency availability propagation
- [ ] **P2** [LC 7 — Reverse Integer](https://leetcode.com/problems/reverse-integer/) — Medium · overflow-aware digit reversal
- [ ] **P2** [LC 29 — Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) — Medium · binary long division
- [ ] **P2** [LC 260 — Single Number III](https://leetcode.com/problems/single-number-iii/) — Medium · XOR partition
- [ ] **P2** [LC 204 — Count Primes](https://leetcode.com/problems/count-primes/) — Medium · sieve
- [ ] **P2** [LC 223 — Rectangle Area](https://leetcode.com/problems/rectangle-area/) — Medium · rectangle overlap
- [ ] **P2** [LC 593 — Valid Square](https://leetcode.com/problems/valid-square/) — Medium · squared-distance geometry
- [ ] **P2** [LC 277 — Find the Celebrity](https://leetcode.com/problems/find-the-celebrity/) — Medium · Premium · eliminate then verify candidate
- [ ] **P2** [LC 384 — Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/) — Medium · Fisher-Yates uniformity
- [ ] **P2** [LC 398 — Random Pick Index](https://leetcode.com/problems/random-pick-index/) — Medium · reservoir sampling
- [ ] **P3** [LC 460 — LFU Cache](https://leetcode.com/problems/lfu-cache/) — Hard · frequency + recency eviction
- [ ] **P3** [LC 432 — All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) — Hard · frequency bucket linked list
- [ ] **P3** [LC 2034 — Stock Price Fluctuation ](https://leetcode.com/problems/stock-price-fluctuation/) — Medium · latest value + lazy price heaps
- [ ] **P3** [LC 716 — Max Stack](https://leetcode.com/problems/max-stack/) — Hard · Premium · stack and maximum removal
- [ ] **P3** [LC 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) — Hard · merge-count / Fenwick compression
- [ ] **P3** [LC 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) — Hard · prefix-pair range counting
- [ ] **P3** [LC 149 — Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) — Hard · normalized rational slopes
- [ ] **P3** [LC 381 — Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/) — Hard · duplicate-aware index sets

## Python coding patterns

### Prefix sums + frequency map

Use for counting subarrays with a target sum (LC 560). Count earlier prefixes before inserting the current one. **O(n)** time and **O(n)** space.

```python
def subarray_sum(nums, k):
    frequency = {0: 1}
    prefix = answer = 0
    for value in nums:
        prefix += value
        answer += frequency.get(prefix - k, 0)
        frequency[prefix] = frequency.get(prefix, 0) + 1
    return answer
```

### Sliding window

Use for a longest substring with no repeated characters (LC 3). Move the left boundary past the previous occurrence. **O(n)** time and **O(u)** space for `u` distinct characters.

```python
def longest_unique_substring(s):
    last_seen = {}
    left = answer = 0
    for right, char in enumerate(s):
        left = max(left, last_seen.get(char, -1) + 1)
        last_seen[char] = right
        answer = max(answer, right - left + 1)
    return answer
```

### Binary search: lower bound

Find the first index whose value is at least `target` in a sorted array (a building block for LC 34). Return `len(nums)` if no such index exists. Keep the search interval `[left, right)`. **O(log n)** time and **O(1)** space.

```python
def lower_bound(nums, target):
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left
```

### BFS: shortest unweighted path

Use for graphs with equal-cost edges. Mark nodes when enqueuing so each node enters the queue once. `graph[node]` contains its neighbors. **O(V + E)** time and **O(V)** space.

```python
from collections import deque


def shortest_distance(graph, start, target):
    queue = deque([(start, 0)])
    seen = {start}
    while queue:
        node, distance = queue.popleft()
        if node == target:
            return distance
        for neighbor in graph.get(node, []):
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append((neighbor, distance + 1))
    return -1
```

### Dynamic programming: take or skip

Use for non-adjacent selection (LC 198). Track the best total before the previous house and through the previous house. For nonnegative house values: **O(n)** time and **O(1)** space.

```python
def house_robber(nums):
    previous_two = previous_one = 0
    for value in nums:
        previous_two, previous_one = (
            previous_one,
            max(previous_one, previous_two + value),
        )
    return previous_one
```
