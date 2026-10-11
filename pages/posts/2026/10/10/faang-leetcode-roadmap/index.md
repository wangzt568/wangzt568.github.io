---
title: "FAANG LeetCode roadmap — 360 representative Medium/Hard problems"
date: "2026-10-10T00:00:00-07:00"
updated: "2026-10-10T00:00:00-07:00"
layout: post
top: 100
categories: ["Leetcode"]
tags: ["Leetcode", "FAANG", "Interview", "Algorithms"]
description: "A study roadmap covering 270 Medium and 90 Hard LeetCode problems for FAANG coding interviews."
---

# FAANG LeetCode roadmap — 360 representative Medium/Hard problems

Revised October 10, 2026. **360 unique problems: 270 Medium + 90 Hard; 0 Easy.** Target: Meta, Amazon, Apple, Netflix and Google coding interviews. This is a curriculum with public company signals, not a prediction of interview questions.

The filename retains the previous “380” name for replacement compatibility; the audited curriculum now has **360** questions. Fewer repeated variants and stronger coverage are preferable to preserving an arbitrary total.

## What changed and what could be recovered

The uploaded `LeetCode分类.docx` and the complete 340-question list in the referenced conversation were inspected. The later 380-question Markdown artifact could not be retrieved from its old `/mnt/data` sandbox link. Therefore, this is a rebuilt successor, **not a verified line-by-line revision of that unavailable file**. Its claimed 296/84 split and 40 additions cannot be independently reconstructed. No comparison below treats those claims as audited facts.

| Audited measure | Count |
|---|---:|
| Recovered conversation baseline | 340 |
| Literal unique `Leetcode N` anchors in Word document | 228 |
| Literal anchors currently rated Easy | 30 |
| Literal Word anchors in final selection | 178 |
| Final IDs matching interpreted Word references | 184 |
| Retained from recovered 340 | 277 |
| Added beyond recovered 340 | 83 |
| Removed from recovered 340 | 63 |
| Final unique selection | 360 |
| P1 core / P2 transfer / P3 advanced | 106 / 162 / 92 |

The literal-anchor count deduplicates case-insensitive `Leetcode` followed by an integer; bare follow-up numbers are excluded. The interpreted set adds explicitly numbered follow-ups 235, 1650, 339 and 364 and resolves the documented title/ID conflicts below. It replaces the erroneous 318 reference with 315 and includes both canonical problems where the document mentions a series. It does not expand every unnamed “I/II/III” variant.

## Evidence, editorial judgment and prioritization

**Source-derived evidence:** official catalog metadata; literal/interpretive Word membership; company CSV membership and published frequency scores. Every problem's ID, English title, difficulty, URL slug and Premium flag was checked against the [LeetCode public catalog](https://leetcode.com/api/problems/all/) on the revision date. This validates metadata, not company claims. No individual paid problem statements were accessed.

**Editorial judgment:** inclusion, omissions, primary learning pattern, tiers, section order and checkpoints are model/editorial decisions informed by algorithm knowledge. The list emphasizes invariants, recognition, proof, implementation and transfer. A pattern is a teaching lens; some problems have other good solutions.

**Inferred priority:** P1 is assigned to broadly reusable archetypes; P2 introduces a meaningful changed constraint; P3 requires combined patterns, harder proofs or specialized state. Public company recurrence breaks ties and highlights useful variants. There is no invented numerical scoring model or claim that P1 is objectively “most frequent.” High-frequency problems can remain P3 because they need prerequisites; weakly evidenced problems can be P1 because they teach foundational skills.

Selection rules: cover each major pattern before multiplying variants; retain repeats when the changed constraint teaches something new; favor explainable interview implementations; place specialized material late. Exclude Easy problems from the counted list as requested. This excludes useful prerequisites, so first learn hashing, basic reversal, recursion and elementary BFS if needed.

### Public sources and freshness

| Source | Verified scope/freshness | Use and limitation |
|---|---|---|
| [AlliterationofA dataset, pinned CSV](https://github.com/AlliterationofA/PublicFiles/blob/bd185bf4458fc0a1595df38363ec84bc4f7aec5b/codedata.csv) | File commit September 27, 2026, `bd185bf…`; 1/3/6-month and older/all-time labels | **S6** evidence below uses only its `6 Months` rows. Update date is a file date, not proof every interview report is fresh. |
| [snehasishroy dataset, pinned repository](https://github.com/snehasishroy/leetcode-companywise-interview-questions/tree/e095c259cfd036e3ddb6886e84d7075c2faac477) | README says snapshot July 12, 2026; pinned tree `e095c25…` has August 15 README commit | **J6** uses `six-months.csv` for each FAANG company; repository commit date does not change the stated snapshot date. |
| [Official Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) | Official broad classic interview curriculum, checked October 10 | Coverage benchmark, not a recent company-frequency dataset. |
| [Grind 75/169 methodology](https://www.techinterviewhandbook.org/grind75/faq) | Author explains ranking through topics, popularity and frequency, with harder problems later | Supports balancing recognition, transfer and practice across topics; no claim that every row here belongs to Grind. |
| [NeetCode roadmap](https://neetcode.io/roadmap) | Public pattern roadmap; page contents dynamically rendered | Supplementary pattern reference only; no audited row-level membership claim. |
| [liquidslr repository](https://github.com/liquidslr/leetcode-company-wise-problems) | Describes June 2025 updates; README/about dates differ | Older reference inspected, not used as current frequency evidence. |

These public exports are community datasets, not company-confirmed interview records. Their sampling, denominators, normalization, report provenance and possible shared upstream data are insufficiently documented. **A frequency score of 100 is not a 100% interview probability.** Do not average scores across companies, treat missing rows as zero probability, or treat agreement between exports as independent confirmation.

| Company | September CSV `6 Months` rows | July CSV six-month rows |
|---|---:|---:|
| Amazon | 725 | 716 |
| Apple | 69 | 77 |
| Google | 785 | 783 |
| Meta | 377 | 366 |
| Netflix | 7 | 8 |

The much smaller Netflix and Apple samples make company-to-company rankings especially uncertain. Netflix coverage should not drive the whole curriculum. The counts above include all difficulties in the source windows, not just this roadmap. Window overlap and old/all-time rows are not summed as independent observations.

## How to study it

**Read P1 across all sections first, then P2, then P3.** Within a tier, use section order and listed row order. Rows are grouped by topic for lookup, so reading the entire file top-to-bottom without filtering by tier would jump ahead. Interleave two or three already introduced topics each week; revisit prerequisites before a combined problem. Keep topic names hidden during later random practice.

| Stage | Work and dependencies | Checkpoint before advancing |
|---|---|---|
| Foundation | Learn hash maps/sets, sorted two pointers, stack, lower bound, list reversal, tree traversals, BFS queue, heap, recursion and complexity | Implement the basic operations without copying; explain loop/recursion invariants. Optional Easy warm-ups do not enter the 360 count. |
| P1: core, 106 | Arrays → windows → parsing/stacks → monotonic sequences → search → lists → trees → heaps → intervals → backtracking → tries → graphs → DP → design | In 10 shuffled previously studied Mediums, solve at least 8 independently in about 35 minutes each, explain correctness and costs, and test edge cases. These are training targets, not hiring guarantees. |
| P2: transfer, 162 | Revisit each section with new constraints; DSU after flood fill, answer search after bounds, tree DP after DFS, knapsack after recurrence; implement a changed variant rather than recite a solution | Two separate batches of 10 unfamiliar Mediums: at least 7 correct without hints within 40 minutes each. Diagnose misses by recognition, proof, implementation or testing. Rebuild weak patterns before P3. |
| P3: depth, 92 | Monotonic contributions after 739/503; 2D/interval DP after 322/1143; 0-1 BFS after 743; bitmask BFS after ordinary state BFS; advanced design after 146 | Explain the reduction/state space and build a correct solution to representative Hards in 45–60 minutes of training. Target-company relevance and weak areas determine which P3 items you do first. |
| Interview rehearsal | Mixed unseen sets, a 45-minute single-question mock or a 60-minute two-question mock; articulate tradeoffs and test aloud | Three recent mocks with correct core solutions, sound reasoning and no repeated critical weakness. Adjust timing to the actual company process. |

At 15 **new** problems per week, 360 takes 24 weeks before extra review; at 20, 18 weeks. Reserve roughly one-third of study time for cold repeats and mocks, so do not equate new-problem throughput with total workload. With a short deadline, finish P1 and weak-pattern P2 before specialized P3. The complete 300+ collection is a long-term bank, not a requirement to complete everything before interviewing.

For each problem: write the brute force, identify the reusable invariant, state why the optimized method is valid, implement it, test boundary cases, and explain time/space costs. If stuck after 25–35 minutes on a Medium, use a small hint, then derive the rest. Mark a checkbox only after a later cold solve. Revisit around days 2, 7, 21 and 45; reset the interval after a failure. Those intervals are editorial practice guidance.

Keep an error log with `ID | date | recognition/proof/code/test issue | invariant | next review`. “Learned a solution” and “can transfer the pattern” are separate outcomes. In Python, practice `deque`, `heapq`, `bisect`, hash maps, explicit stacks and DSU. Implement LRU internals once rather than relying only on `OrderedDict`; do not assume third-party `SortedDict` is available during interviews.

### Essential transfer chains

| Learning chain | Changed skill |
|---|---|
| 560 → 523/974 → 1074 | Exact sum → modular state → dimension compression |
| 3 → 424 → 76 → 992 | Window validity → budget → covering → exact-count conversion |
| 739 → 84 → 907 → 2104 | Next boundary → histogram area → contribution accounting |
| 34 → 875 → 1011 → 410 | Bounds → monotone feasibility → partition optimization |
| 102 → 199 → 314 → 987 | Level order → visibility → columns → explicit tie ordering |
| 200 → 721 → 305 → 827 | Static traversal → equivalence → dynamic connectivity → hypothetical merge |
| 994 → 1293 → 743 → 2290 | Multi-source BFS → state dominance → weighted relaxation → binary weights |
| 198 → 416 → 518 → 494 | State choice → 0/1 feasibility → unlimited counts → signed choices |
| 1143 → 72/115 → 312 | Prefix state → edit/count transitions → choose last operation |
| 146 → 460 → 432 | Recency invariant → frequency/recency → ordered count buckets |

## Problem bank

Legend: **P1** core, **P2** transfer, **P3** advanced (editorial tiers). **M/H** official Medium/Hard. **Premium** is catalog access status. **S6** contains September export frequency scores, with codes Am=Amazon, Ap=Apple, G=Google, M=Meta, N=Netflix. **J6** lists companies appearing in the July six-month export; exact July scores are preserved in the companion audit JSON. `—` means no matching row in the inspected window, not “never asked.” **Doc L** = literal anchor; **Doc I** = interpreted reference only; **Doc —** = absent under this extraction rule. Pattern and ordering are editorial, not source tags.

### 1. Hashing, prefix sums and arrays — 27

- [ ] **P1** [LC 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/) — **M** · canonical grouping · S6: G 53.9, Ap 84.5, M 60.4, Am 74.9 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) — **M** · sequence starts · S6: G 64.1, Ap 48.1, M 58.4, Am 67.6 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 238 — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — **M** · prefix/suffix products · S6: G 47.9, M 56.1, Am 56.7 · J6: Am, Ap, G, M · Doc: —
- [ ] **P1** [LC 560 — Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) — **M** · prefix sum frequency · S6: G 59.3, Ap 74.7, M 80.7, Am 69.2 · J6: Am, Ap, G, M · Doc: —
- [ ] **P1** [LC 36 — Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) — **M** · constraint sets · S6: G 31, Ap 48.1, M 32.7, Am 45.1 · J6: Am, Ap, G, M · Doc: —
- [ ] **P1** [LC 380 — Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) — **M** · index map + swap deletion · S6: G 35.2, Ap 81.7, Am 41.2 · J6: Am, Ap, G · Doc: L
- [ ] **P1** [LC 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) — **M** · Kadane invariant · S6: G 58.8, M 64, Am 63.2 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 75 — Sort Colors](https://leetcode.com/problems/sort-colors/) — **M** · Dutch national flag · S6: G 45, M 43.4, Am 60.2 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 73 — Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) — **M** · in-place markers · S6: G 38.6, M 62.3, Am 46.8 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 54 — Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) — **M** · boundary simulation · S6: G 52.6, Ap 64.8, M 43.4, Am 51.1 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 48 — Rotate Image](https://leetcode.com/problems/rotate-image/) — **M** · matrix transpose/reverse · S6: G 53.9, Ap 64.8, M 47.3, Am 58.5 · J6: Am, Ap, G, M · Doc: —
- [ ] **P2** [LC 525 — Contiguous Array](https://leetcode.com/problems/contiguous-array/) — **M** · balanced prefix state · S6: G 21.9, M 43.4, Am 26 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 523 — Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) — **M** · modular prefix earliest index · S6: G 17.4 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 974 — Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) — **M** · remainder frequency · S6: G 33.2, M 38.7, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 930 — Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) — **M** · binary sum counting · S6: G 11.8 · J6: Am, G · Doc: —
- [ ] **P2** [LC 454 — 4Sum II](https://leetcode.com/problems/4sum-ii/) — **M** · meet-in-the-middle sums · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) — **M** · Floyd cycle on indices · S6: G 45, M 47.3, Am 48.3 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) — **M** · sign marking · S6: G 25.4 · J6: G · Doc: —
- [ ] **P2** [LC 229 — Majority Element II](https://leetcode.com/problems/majority-element-ii/) — **M** · Boyer-Moore candidates · S6: G 28.4, M 32.7, Am 33.5 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 31 — Next Permutation](https://leetcode.com/problems/next-permutation/) — **M** · lexicographic successor · S6: G 47.9, M 69.9, Am 59.4 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 189 — Rotate Array](https://leetcode.com/problems/rotate-array/) — **M** · reversal rotation · S6: G 51.2, Ap 48.1, M 58.4, Am 45.1 · J6: Am, Ap, G, M · Doc: —
- [ ] **P2** [LC 289 — Game of Life](https://leetcode.com/problems/game-of-life/) — **M** · encoded simultaneous update · S6: M 24.5, Am 14.3 · J6: M · Doc: —
- [ ] **P2** [LC 304 — Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) — **M** · 2D prefix sums · S6: G 21.9, Am 20.9 · J6: Am, G · Doc: L
- [ ] **P2** [LC 1423 — Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) — **M** · complement window · S6: G 11.8, Am 30.1 · J6: Am, G · Doc: L
- [ ] **P2** [LC 1031 — Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) — **M** · prefix/suffix best windows · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/) — **H** · cyclic placement · S6: G 46, M 38.7, Am 51.1 · J6: Am, G, M · Doc: —
- [ ] **P3** [LC 1074 — Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) — **H** · compress rows + prefix counts · S6: — · J6: — · Doc: —

### 2. Two pointers and sliding windows — 23

- [ ] **P1** [LC 167 — Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — **M** · sorted inward pointers · S6: G 49.6, M 56.1, Am 51.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/) — **M** · discard dominated boundary · S6: G 63.4, M 64, Am 69.2 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 15 — 3Sum](https://leetcode.com/problems/3sum/) — **M** · sort + duplicate suppression · S6: G 70.4, Ap 70.2, M 71.1, Am 74.9 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — **M** · unique-window invariant · S6: G 69.4, Ap 64.8, N 83.1, M 75.5, Am 81.6 · J6: Am, Ap, G, M, N · Doc: L
- [ ] **P1** [LC 209 — Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) — **M** · positive-sum window · S6: G 42.7, M 64, Am 43.2 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 424 — Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) — **M** · replacement budget · S6: G 47, M 32.7, Am 58.5 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 567 — Permutation in String](https://leetcode.com/problems/permutation-in-string/) — **M** · fixed-window counts · S6: G 21.9, Ap 48.1, M 43.4, Am 41.2 · J6: Am, Ap, G, M · Doc: —
- [ ] **P1** [LC 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) — **M** · expand around center · S6: G 63.7, Ap 48.1, M 67.1, Am 72.9 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 76 — Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) — **H** · minimum covering window · S6: G 25.4, M 50.6, Am 61.8 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — **H** · boundary maxima · S6: G 69.9, M 56.1, Am 85.7 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 713 — Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) — **M** · multiplicative positive window · S6: G 31, Ap 74.7, M 32.7, Am 26 · J6: Am, Ap, G, M · Doc: —
- [ ] **P2** [LC 1004 — Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) — **M** · zero budget · S6: G 41.4, M 67.1, Am 49.7 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 1658 — Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) — **M** · longest retained sum · S6: G 17.4, Am 20.9 · J6: Am, G · Doc: L
- [ ] **P2** [LC 1838 — Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) — **M** · sorted cost window · S6: G 33.2, Am 39 · J6: Am, G · Doc: —
- [ ] **P2** [LC 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) — **M** · merge two interval streams · S6: M 32.7, Am 20.9 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) — **M** · pair lightest with heaviest · S6: G 25.4, Am 45.1 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 340 — Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) — **M** · Premium · at-most-K distinct · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) — **M** · fast/slow cycle entry · S6: G 21.9, M 24.5, Am 46.8 · J6: Am, G · Doc: I
- [ ] **P3** [LC 30 — Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) — **H** · word-aligned windows · S6: G 28.4, Am 36.4 · J6: Am, G · Doc: —
- [ ] **P3** [LC 992 — Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) — **H** · exactly K via two at-most counts · S6: G 11.8, Am 33.5 · J6: Am, G · Doc: —
- [ ] **P3** [LC 862 — Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) — **H** · prefix + monotonic deque · S6: G 17.4, Am 14.3 · J6: G · Doc: —
- [ ] **P3** [LC 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) — **M** · dual monotonic deques · S6: Am 33.5 · J6: Am · Doc: L
- [ ] **P3** [LC 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) — **H** · deque maxima · S6: G 47.9, M 38.7, Am 60.2 · J6: Am, G, M · Doc: L

### 3. Strings, parsing and stacks — 19

- [ ] **P1** [LC 155 — Min Stack](https://leetcode.com/problems/min-stack/) — **M** · minimum augmentation · S6: G 42.7, M 32.7, Am 46.8 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) — **M** · postfix evaluation · S6: G 25.4, M 38.7, Am 30.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 394 — Decode String](https://leetcode.com/problems/decode-string/) — **M** · nested frames · S6: G 46, M 32.7, Am 45.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 1249 — Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) — **M** · parenthesis balance · S6: M 71.1 · J6: M · Doc: L
- [ ] **P1** [LC 71 — Simplify Path](https://leetcode.com/problems/simplify-path/) — **M** · path normalization · S6: G 21.9, M 50.6, Am 14.3 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 227 — Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) — **M** · precedence without parentheses · S6: G 17.4, Ap 74.7, M 43.4, Am 14.3 · J6: Am, Ap, G, M · Doc: I
- [ ] **P1** [LC 151 — Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) — **M** · tokenize + reverse words · S6: G 38.6, Ap 48.1, M 38.7, Am 14.3 · J6: Am, Ap, G, M · Doc: —
- [ ] **P2** [LC 735 — Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) — **M** · collision stack · S6: G 21.9, M 24.5, Am 56.7 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 1209 — Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) — **M** · run-count stack · S6: Am 26 · J6: Am, G · Doc: L
- [ ] **P2** [LC 678 — Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) — **M** · balance interval · S6: G 21.9, Ap 48.1, M 47.3, Am 36.4 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 636 — Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/) — **M** · exclusive-time frames · S6: G 17.4, M 38.7 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 8 — String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) — **M** · bounded numeric parsing · S6: G 47.9, N 73.2, Am 49.7 · J6: Am, G, M, N · Doc: —
- [ ] **P2** [LC 12 — Integer to Roman](https://leetcode.com/problems/integer-to-roman/) — **M** · greedy numeral tokens · S6: G 40.1, M 38.7, Am 39 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 43 — Multiply Strings](https://leetcode.com/problems/multiply-strings/) — **M** · digit multiplication · S6: G 17.4, Am 39 · J6: Am, G · Doc: —
- [ ] **P2** [LC 856 — Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) — **M** · parenthesis scoring · S6: M 24.5 · J6: M · Doc: L
- [ ] **P2** [LC 224 — Basic Calculator](https://leetcode.com/problems/basic-calculator/) — **H** · expression sign stack · S6: G 35.2, M 24.5, Am 36.4 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 772 — Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/) — **H** · Premium · full precedence parser · S6: — · J6: G · Doc: —
- [ ] **P3** [LC 68 — Text Justification](https://leetcode.com/problems/text-justification/) — **H** · line packing and spacing · S6: G 25.4, Ap 48.1 · J6: Am, Ap, G · Doc: —
- [ ] **P3** [LC 32 — Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) — **H** · valid-parenthesis state · S6: G 37, M 56.1, Am 41.2 · J6: Am, G, M · Doc: L

### 4. Monotonic stacks and ordered sequences — 11

- [ ] **P1** [LC 739 — Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) — **M** · next greater with indices · S6: G 45, M 43.4, Am 51.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 503 — Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) — **M** · circular next greater · S6: G 46, M 24.5, Am 46.8 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 901 — Online Stock Span](https://leetcode.com/problems/online-stock-span/) — **M** · compressed spans · S6: G 25.4, M 24.5, Am 26 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 402 — Remove K Digits](https://leetcode.com/problems/remove-k-digits/) — **M** · greedy monotonic deletion · S6: G 25.4, M 24.5, Am 39 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 316 — Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) — **M** · lexicographic stack + last occurrence · S6: G 17.4, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 1762 — Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/) — **M** · Premium · right-to-left maximum · S6: M 47.3 · J6: M · Doc: —
- [ ] **P3** [LC 84 — Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) — **H** · histogram contribution boundary · S6: G 46, M 47.3, Am 56.7 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 85 — Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) — **H** · row histograms · S6: G 38.6, Am 33.5 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 907 — Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) — **M** · minimum contribution counts · S6: G 28.4, Am 48.3 · J6: Am, G · Doc: L
- [ ] **P3** [LC 2104 — Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/) — **M** · min/max contribution difference · S6: G 11.8, M 24.5, Am 14.3 · J6: G, M · Doc: —
- [ ] **P3** [LC 895 — Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) — **H** · frequency buckets + recency · S6: Am 14.3 · J6: Am · Doc: L

### 5. Binary search and answer-space search — 20

- [ ] **P1** [LC 34 — Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) — **M** · lower/upper bounds · S6: G 43.9, Ap 70.2, M 58.4, Am 58.5 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 33 — Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) — **M** · identify sorted half · S6: G 53.2, Ap 48.1, M 60.4, Am 70.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 153 — Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) — **M** · rotated minimum · S6: G 28.4, M 32.7, Am 45.1 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 162 — Find Peak Element](https://leetcode.com/problems/find-peak-element/) — **M** · slope direction · S6: G 47, M 62.3, Am 48.3 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 74 — Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — **M** · flattened ordered matrix · S6: G 40.1, M 32.7, Am 43.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 875 — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) — **M** · monotone feasibility · S6: G 54.5, M 58.4, Am 71.1 · J6: Am, Ap, G, M · Doc: —
- [ ] **P1** [LC 1011 — Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) — **M** · capacity feasibility · S6: G 37, M 24.5, Am 58.5 · J6: Am, G · Doc: —
- [ ] **P1** [LC 528 — Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) — **M** · prefix weighted sampling · S6: G 37, M 60.4, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 240 — Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) — **M** · staircase elimination · S6: G 37, M 43.4, Am 46.8 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 540 — Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) — **M** · pair-index parity · S6: G 43.9, M 47.3, Am 49.7 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) — **M** · value count in sorted matrix · S6: Am 20.9 · J6: Am, M · Doc: L
- [ ] **P2** [LC 1552 — Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) — **M** · greedy placement feasibility · S6: G 11.8, Am 30.1 · J6: Am · Doc: —
- [ ] **P2** [LC 1482 — Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) — **M** · consecutive-bouquet feasibility · S6: G 28.4, Am 43.2 · J6: Am, G · Doc: —
- [ ] **P2** [LC 1891 — Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/) — **M** · Premium · piece count feasibility · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 1060 — Missing Element in Sorted Array](https://leetcode.com/problems/missing-element-in-sorted-array/) — **M** · Premium · missing-count inversion · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 1095 — Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/) — **H** · peak + two ordered searches · S6: G 11.8 · J6: G · Doc: L
- [ ] **P2** [LC 981 — Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) — **M** · timestamp floor search · S6: G 31, Ap 74.7, N 90.1, Am 45.1 · J6: Am, Ap, G, M, N · Doc: L
- [ ] **P3** [LC 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) — **H** · minimize maximum partition sum · S6: G 50.4, M 24.5, Am 53.5 · J6: Am, G · Doc: L
- [ ] **P3** [LC 4 — Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) — **H** · partition two sorted arrays · S6: G 69.4, Ap 48.1, M 75.5, Am 74.5 · J6: Am, Ap, G, M · Doc: L
- [ ] **P3** [LC 719 — Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) — **H** · distance count + window · S6: — · J6: — · Doc: —

### 6. Linked lists — 11

- [ ] **P1** [LC 2 — Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) — **M** · carry and dummy head · S6: G 76.6, M 74.5, Am 79 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) — **M** · fixed pointer gap · S6: G 37, M 47.3, Am 53.5 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 92 — Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) — **M** · sublist reversal · S6: G 28.4, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 143 — Reorder List](https://leetcode.com/problems/reorder-list/) — **M** · split + reverse + weave · S6: G 35.2, M 50.6, Am 41.2 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 138 — Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) — **M** · clone with identity map · S6: G 35.2, M 47.3, Am 62.5 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 82 — Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) — **M** · remove duplicate runs · S6: G 21.9, M 24.5, Am 26 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 86 — Partition List](https://leetcode.com/problems/partition-list/) — **M** · stable two-list partition · S6: G 11.8, M 24.5, Am 36.4 · J6: Am, G · Doc: —
- [ ] **P2** [LC 148 — Sort List](https://leetcode.com/problems/sort-list/) — **M** · merge sort list · S6: G 37, M 38.7, Am 33.5 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 430 — Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) — **M** · flatten with saved continuation · S6: — · J6: Am, G · Doc: —
- [ ] **P3** [LC 25 — Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) — **H** · reverse complete K-blocks · S6: G 41.4, M 24.5, Am 41.2 · J6: Am, G · Doc: —
- [ ] **P3** [LC 1171 — Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/) — **M** · prefix sums on nodes · S6: — · J6: — · Doc: —

### 7. Trees and BSTs — 32

- [ ] **P1** [LC 102 — Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — **M** · level BFS · S6: G 46, M 24.5, Am 33.5 · J6: Am, G · Doc: L
- [ ] **P1** [LC 199 — Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) — **M** · last node per level · S6: G 25.4, M 62.3, Am 48.3 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 98 — Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) — **M** · inherited BST bounds · S6: G 25.4, M 32.7, Am 36.4 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 230 — Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) — **M** · inorder rank · S6: G 25.4, M 24.5, Am 20.9 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 236 — Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) — **M** · subtree LCA return · S6: G 33.2, M 56.1, Am 65.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 105 — Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) — **M** · traversal partition · S6: G 31, Am 30.1 · J6: Am, G · Doc: L
- [ ] **P1** [LC 113 — Path Sum II](https://leetcode.com/problems/path-sum-ii/) — **M** · path backtracking · S6: M 24.5, Am 30.1 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 129 — Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) — **M** · path accumulator · S6: G 11.8, M 53.5 · J6: M · Doc: —
- [ ] **P1** [LC 114 — Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) — **M** · flatten postorder · S6: G 17.4, M 24.5, Am 14.3 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 173 — Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) — **M** · lazy inorder iterator · S6: M 32.7 · J6: G, M · Doc: —
- [ ] **P2** [LC 103 — Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) — **M** · level presentation · S6: G 33.2, M 24.5, Am 39 · J6: Am, G · Doc: L
- [ ] **P2** [LC 235 — Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) — **M** · BST-directed LCA · S6: G 21.9, Am 30.1 · J6: Am, G · Doc: L
- [ ] **P2** [LC 314 — Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) — **M** · Premium · column BFS order · S6: Ap 48.1, M 60.4 · J6: Ap, M · Doc: L
- [ ] **P2** [LC 545 — Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/) — **M** · Premium · boundary deduplication · S6: M 38.7 · J6: M · Doc: —
- [ ] **P2** [LC 863 — All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) — **M** · parent links + distance BFS · S6: G 21.9, Ap 48.1, M 47.3, Am 46.8 · J6: Am, Ap, G, M · Doc: L
- [ ] **P2** [LC 437 — Path Sum III](https://leetcode.com/problems/path-sum-iii/) — **M** · path prefix sums · S6: G 28.4, Am 30.1 · J6: Am, G · Doc: —
- [ ] **P2** [LC 337 — House Robber III](https://leetcode.com/problems/house-robber-iii/) — **M** · take/skip tree DP · S6: Am 39 · J6: Am, G · Doc: —
- [ ] **P2** [LC 450 — Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) — **M** · BST successor deletion · S6: G 11.8, Am 14.3 · J6: G · Doc: —
- [ ] **P2** [LC 652 — Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) — **M** · subtree structural IDs · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 662 — Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) — **M** · normalized positional indices · S6: G 33.2, Am 33.5 · J6: Am, G · Doc: —
- [ ] **P2** [LC 1110 — Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) — **M** · delete and create roots · S6: G 25.4 · J6: G · Doc: L
- [ ] **P2** [LC 951 — Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/) — **M** · unordered child equivalence · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 1650 — Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/) — **M** · Premium · parent-chain intersection · S6: M 53.5, Am 20.9 · J6: Am, M · Doc: I
- [ ] **P2** [LC 333 — Largest BST Subtree](https://leetcode.com/problems/largest-bst-subtree/) — **M** · Premium · valid-BST subtree summaries · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 285 — Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/) — **M** · Premium · inorder successor · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 366 — Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree/) — **M** · Premium · height buckets · S6: G 17.4 · J6: G · Doc: L
- [ ] **P3** [LC 124 — Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) — **H** · best downward gain vs global path · S6: G 28.4, M 43.4, Am 48.3 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 297 — Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) — **H** · unambiguous tree serialization · S6: G 17.4, M 32.7, Am 39 · J6: Am, G · Doc: L
- [ ] **P3** [LC 987 — Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) — **H** · column/row/value ordering · S6: G 11.8, M 43.4, Am 39 · J6: Am, M · Doc: L
- [ ] **P3** [LC 426 — Convert Binary Search Tree to Sorted Doubly Linked List](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) — **M** · Premium · inorder pointer linking · S6: — · J6: M · Doc: —
- [ ] **P3** [LC 428 — Serialize and Deserialize N-ary Tree](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/) — **H** · Premium · N-ary arity encoding · S6: Ap 64.8 · J6: Ap · Doc: —
- [ ] **P3** [LC 968 — Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) — **H** · three-state camera DP · S6: Am 26 · J6: Am · Doc: —

### 8. Heaps, selection and scheduling — 17

- [ ] **P1** [LC 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — **M** · randomized quickselect / bounded heap · S6: G 45, M 68.5, Am 46.8 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — **M** · frequency selection · S6: G 54.5, Ap 48.1, M 50.6, Am 64.5 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 973 — K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — **M** · distance selection · S6: M 47.3, Am 20.9 · J6: Am, M · Doc: L
- [ ] **P1** [LC 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — **H** · K-way merge · S6: G 21.9, Ap 57.9, M 50.6, Am 69.2 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 295 — Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) — **H** · two-heap partition · S6: G 40.1, Ap 48.1, Am 52.3 · J6: Am, Ap, G · Doc: L
- [ ] **P1** [LC 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/) — **M** · cooldown scheduling · S6: G 33.2, Ap 64.8, Am 54.6 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 692 — Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) — **M** · frequency with lexicographic tie · S6: Am 33.5 · J6: Am, G · Doc: L
- [ ] **P2** [LC 767 — Reorganize String](https://leetcode.com/problems/reorganize-string/) — **M** · avoid adjacent repeats · S6: G 28.4, M 24.5, Am 68.1 · J6: Am, G · Doc: L
- [ ] **P2** [LC 373 — Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) — **M** · best-first pair frontier · S6: G 25.4, M 24.5 · J6: G, M · Doc: —
- [ ] **P2** [LC 1642 — Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) — **M** · reserve ladders for largest climbs · S6: Am 20.9 · J6: Am · Doc: —
- [ ] **P2** [LC 1834 — Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) — **M** · time simulation + heap · S6: G 17.4, Am 14.3 · J6: — · Doc: —
- [ ] **P2** [LC 355 — Design Twitter](https://leetcode.com/problems/design-twitter/) — **M** · merge user feeds · S6: G 17.4 · J6: G · Doc: —
- [ ] **P3** [LC 871 — Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) — **H** · retroactive refueling · S6: G 11.8, Am 20.9 · J6: Am · Doc: —
- [ ] **P3** [LC 2402 — Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) — **H** · busy/free resource heaps · S6: G 11.8 · J6: Am · Doc: —
- [ ] **P3** [LC 502 — IPO](https://leetcode.com/problems/ipo/) — **H** · feasible-project frontier · S6: G 17.4, Am 33.5 · J6: Am, G · Doc: —
- [ ] **P3** [LC 480 — Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) — **H** · two heaps + lazy deletion · S6: M 32.7, Am 20.9 · J6: M · Doc: L
- [ ] **P3** [LC 632 — Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) — **H** · smallest range across K lists · S6: — · J6: — · Doc: —

### 9. Intervals, sweep lines and greedy proofs — 26

- [ ] **P1** [LC 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/) — **M** · sort and merge · S6: G 56.3, Ap 95.3, M 67.1, Am 72 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 57 — Insert Interval](https://leetcode.com/problems/insert-interval/) — **M** · three-phase insertion · S6: G 37, Am 36.4 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 253 — Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) — **M** · Premium · overlap count / end heap · S6: G 45, M 24.5, Am 55.7 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 435 — Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) — **M** · earliest-finish exchange · S6: G 21.9, Am 43.2 · J6: Am, G · Doc: —
- [ ] **P1** [LC 452 — Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) — **M** · interval stabbing · S6: G 21.9, Am 14.3 · J6: Am, G · Doc: —
- [ ] **P1** [LC 55 — Jump Game](https://leetcode.com/problems/jump-game/) — **M** · farthest reachable frontier · S6: G 50.4, M 56.1, Am 57.6 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 45 — Jump Game II](https://leetcode.com/problems/jump-game-ii/) — **M** · layered reachability · S6: G 40.1, M 32.7, Am 41.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 763 — Partition Labels](https://leetcode.com/problems/partition-labels/) — **M** · last-occurrence partition · S6: G 11.8, Am 14.3 · J6: Am · Doc: —
- [ ] **P2** [LC 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/) — **M** · ordered non-overlap · S6: Am 14.3 · J6: Am · Doc: L
- [ ] **P2** [LC 731 — My Calendar II](https://leetcode.com/problems/my-calendar-ii/) — **M** · double-booking intersections · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/) — **M** · difference events · S6: G 35.2, Am 14.3 · J6: Am, G · Doc: L
- [ ] **P2** [LC 759 — Employee Free Time](https://leetcode.com/problems/employee-free-time/) — **H** · Premium · K-way calendar merge · S6: G 17.4, Am 14.3 · J6: Am, G · Doc: L
- [ ] **P2** [LC 134 — Gas Station](https://leetcode.com/problems/gas-station/) — **M** · prefix deficit reset · S6: G 17.4, Am 36.4 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) — **M** · height-order insertion · S6: G 11.8 · J6: G, M · Doc: —
- [ ] **P2** [LC 846 — Hand of Straights](https://leetcode.com/problems/hand-of-straights/) — **M** · consume consecutive runs · S6: G 17.4, Am 14.3 · J6: — · Doc: L
- [ ] **P2** [LC 1024 — Video Stitching](https://leetcode.com/problems/video-stitching/) — **M** · greedy coverage · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 1405 — Longest Happy String](https://leetcode.com/problems/longest-happy-string/) — **M** · largest feasible next character · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 1647 — Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) — **M** · unique frequency allocation · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 1653 — Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/) — **M** · prefix deletions state · S6: — · J6: G, M · Doc: —
- [ ] **P2** [LC 646 — Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) — **M** · interval chain · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/) — **H** · maximum active bookings · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 715 — Range Module](https://leetcode.com/problems/range-module/) — **H** · maintain disjoint ranges · S6: G 21.9 · J6: G · Doc: —
- [ ] **P3** [LC 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) — **H** · active skyline heights · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 1851 — Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) — **H** · offline queries + eligible heap · S6: G 11.8 · J6: — · Doc: —
- [ ] **P3** [LC 135 — Candy](https://leetcode.com/problems/candy/) — **H** · two-direction constraints · S6: G 28.4, Am 26 · J6: Am, G · Doc: —
- [ ] **P3** [LC 1326 — Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) — **H** · interval coverage frontier · S6: Am 30.1 · J6: Am · Doc: —

### 10. Backtracking and constraint search — 22

- [ ] **P1** [LC 78 — Subsets](https://leetcode.com/problems/subsets/) — **M** · include/exclude subsets · S6: G 38.6, M 43.4, Am 63.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 46 — Permutations](https://leetcode.com/problems/permutations/) — **M** · used-element permutations · S6: G 46, M 43.4, Am 54.6 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 39 — Combination Sum](https://leetcode.com/problems/combination-sum/) — **M** · unbounded combination choices · S6: G 47, M 58.4, Am 30.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 22 — Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — **M** · prefix-valid parentheses · S6: G 52.6, M 50.6, Am 54.6 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 17 — Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) — **M** · Cartesian choices · S6: G 49.6, Ap 48.1, M 47.3, Am 64.5 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 79 — Word Search](https://leetcode.com/problems/word-search/) — **M** · grid visited-state restoration · S6: G 33.2, M 32.7, Am 49.7 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 131 — Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) — **M** · palindrome cut enumeration · S6: G 37, M 47.3, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 90 — Subsets II](https://leetcode.com/problems/subsets-ii/) — **M** · duplicate subset pruning · S6: G 37, M 38.7, Am 41.2 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 47 — Permutations II](https://leetcode.com/problems/permutations-ii/) — **M** · duplicate permutation pruning · S6: G 25.4, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 40 — Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) — **M** · single-use duplicate pruning · S6: G 21.9, Am 26 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 77 — Combinations](https://leetcode.com/problems/combinations/) — **M** · combination start index · S6: G 25.4, M 50.6, Am 30.1 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 216 — Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) — **M** · fixed-cardinality sum pruning · S6: — · J6: G · Doc: —
- [ ] **P2** [LC 93 — Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) — **M** · IP segment validation · S6: Am 20.9 · J6: Am · Doc: L
- [ ] **P2** [LC 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) — **M** · symmetric bucket pruning · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) — **M** · equal-sum bucket assignment · S6: Am 20.9 · J6: Am, G · Doc: L
- [ ] **P2** [LC 526 — Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) — **M** · position divisibility constraints · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 51 — N-Queens](https://leetcode.com/problems/n-queens/) — **H** · column/diagonal constraints · S6: G 49.6, M 56.1, Am 45.1 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) — **H** · Sudoku constraint propagation · S6: G 25.4, Am 26 · J6: Am, G · Doc: L
- [ ] **P3** [LC 301 — Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) — **H** · minimal invalid-parenthesis removal · S6: M 24.5, Am 14.3 · J6: Am, M · Doc: L
- [ ] **P3** [LC 291 — Word Pattern II](https://leetcode.com/problems/word-pattern-ii/) — **M** · Premium · bijective substring mapping · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 489 — Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/) — **H** · Premium · physical robot backtracking · S6: M 43.4 · J6: M · Doc: —
- [ ] **P3** [LC 126 — Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) — **H** · shortest-path DAG enumeration · S6: G 28.4, Am 20.9 · J6: Am, G · Doc: L

### 11. Tries and prefix matching — 10

- [ ] **P1** [LC 208 — Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) — **M** · prefix-tree operations · S6: G 33.2, Ap 48.1, M 32.7 · J6: Ap, G · Doc: L
- [ ] **P1** [LC 211 — Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) — **M** · wildcard trie DFS · S6: Am 14.3 · J6: Am · Doc: L
- [ ] **P1** [LC 1268 — Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) — **M** · sorted prefix range / trie · S6: Am 30.1 · J6: Am · Doc: L
- [ ] **P2** [LC 648 — Replace Words](https://leetcode.com/problems/replace-words/) — **M** · shortest root match · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 676 — Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/) — **M** · one-edit dictionary search · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 421 — Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) — **M** · bitwise greedy trie · S6: G 38.6, Am 14.3 · J6: G · Doc: —
- [ ] **P3** [LC 212 — Word Search II](https://leetcode.com/problems/word-search-ii/) — **H** · trie-guided grid pruning · S6: G 11.8, M 24.5, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 472 — Concatenated Words](https://leetcode.com/problems/concatenated-words/) — **H** · word segmentation + dictionary · S6: Am 39 · J6: Am · Doc: L
- [ ] **P3** [LC 1032 — Stream of Characters](https://leetcode.com/problems/stream-of-characters/) — **H** · reverse trie stream suffix · S6: — · J6: M · Doc: —
- [ ] **P3** [LC 642 — Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) — **H** · Premium · prefix ranked suggestions · S6: G 21.9 · J6: G · Doc: —

### 12. Graph traversal, topology and connectivity — 35

- [ ] **P1** [LC 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/) — **M** · component flood fill · S6: G 57.8, Ap 81.7, M 62.3, Am 76 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 133 — Clone Graph](https://leetcode.com/problems/clone-graph/) — **M** · identity-preserving clone · S6: G 28.4, M 24.5, Am 26 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) — **M** · boundary reachability · S6: G 33.2, M 43.4, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 994 — Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — **M** · multi-source BFS · S6: G 46, M 38.7, Am 70.6 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 542 — 01 Matrix](https://leetcode.com/problems/01-matrix/) — **M** · nearest-source distances · S6: G 25.4, Am 33.5 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 207 — Course Schedule](https://leetcode.com/problems/course-schedule/) — **M** · cycle detection / indegrees · S6: G 43.9, Ap 57.9, M 53.5, Am 72 · J6: Am, Ap, G, M · Doc: L
- [ ] **P1** [LC 210 — Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) — **M** · topological order · S6: G 17.4, Ap 87.1, N 90.1, Am 52.3 · J6: Am, Ap, G, M, N · Doc: —
- [ ] **P1** [LC 417 — Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) — **M** · reverse-flow reachability · S6: G 25.4, Am 36.4 · J6: Am, G · Doc: L
- [ ] **P1** [LC 721 — Accounts Merge](https://leetcode.com/problems/accounts-merge/) — **M** · DSU identity merging · S6: G 25.4, Am 36.4 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 684 — Redundant Connection](https://leetcode.com/problems/redundant-connection/) — **M** · cycle edge with DSU · S6: Am 14.3 · J6: Am · Doc: —
- [ ] **P1** [LC 785 — Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) — **M** · two-color invariant · S6: Ap 57.9, Am 26 · J6: Am, Ap · Doc: —
- [ ] **P2** [LC 695 — Max Area of Island](https://leetcode.com/problems/max-area-of-island/) — **M** · component area · S6: G 17.4, M 24.5, Am 26 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 261 — Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) — **M** · Premium · tree connectivity + edge count · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 323 — Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) — **M** · Premium · component counting · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 547 — Number of Provinces](https://leetcode.com/problems/number-of-provinces/) — **M** · adjacency-matrix connectivity · S6: G 37, M 24.5, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/) — **M** · weighted graph ratios · S6: G 21.9, Am 33.5 · J6: Am, G · Doc: L
- [ ] **P2** [LC 752 — Open the Lock](https://leetcode.com/problems/open-the-lock/) — **M** · implicit-state BFS · S6: Am 36.4 · J6: Am · Doc: L
- [ ] **P2** [LC 1091 — Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) — **M** · eight-neighbor shortest path · S6: G 11.8, M 47.3, Am 26 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 490 — The Maze](https://leetcode.com/problems/the-maze/) — **M** · Premium · rolling-stop graph · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 802 — Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) — **M** · reverse topology · S6: Am 20.9 · J6: Am, G · Doc: —
- [ ] **P2** [LC 310 — Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) — **M** · leaf peeling · S6: G 17.4, Am 20.9 · J6: Am · Doc: L
- [ ] **P2** [LC 694 — Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/) — **M** · Premium · shape normalization · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 1376 — Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) — **M** · rooted propagation · S6: G 11.8, Am 14.3 · J6: Am, G · Doc: L
- [ ] **P2** [LC 1319 — Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) — **M** · spare-edge connectivity · S6: Am 33.5 · J6: Am · Doc: —
- [ ] **P2** [LC 1162 — As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) — **M** · multi-source maximum distance · S6: Am 14.3 · J6: Am · Doc: —
- [ ] **P2** [LC 1254 — Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) — **M** · boundary-connected exclusion · S6: G 17.4 · J6: G · Doc: —
- [ ] **P2** [LC 1905 — Count Sub Islands](https://leetcode.com/problems/count-sub-islands/) — **M** · component containment · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 737 — Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/) — **M** · Premium · transitive synonym DSU · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 444 — Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/) — **M** · Premium · unique topological order · S6: G 17.4 · J6: G · Doc: L
- [ ] **P3** [LC 827 — Making A Large Island](https://leetcode.com/problems/making-a-large-island/) — **H** · label islands + deduplicate neighboring roots · S6: G 11.8, M 47.3, Am 14.3 · J6: Am, G, M · Doc: —
- [ ] **P3** [LC 305 — Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/) — **H** · Premium · incremental DSU · S6: G 17.4, Am 14.3 · J6: Am, G · Doc: L
- [ ] **P3** [LC 269 — Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) — **H** · Premium · lexicographic constraints + prefix invalidity · S6: G 17.4, Am 26 · J6: Am, G · Doc: L
- [ ] **P3** [LC 815 — Bus Routes](https://leetcode.com/problems/bus-routes/) — **H** · route-stop bipartite BFS · S6: G 31, Am 30.1 · J6: Am, G · Doc: L
- [ ] **P3** [LC 1293 — Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) — **H** · state BFS + dominance · S6: Am 20.9 · J6: Am, G · Doc: L
- [ ] **P3** [LC 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/) — **H** · low-link bridges · S6: G 11.8, Am 26 · J6: Am, G · Doc: —

### 13. Weighted graphs and advanced state search — 19

- [ ] **P1** [LC 743 — Network Delay Time](https://leetcode.com/problems/network-delay-time/) — **M** · Dijkstra relaxation · S6: G 33.2, Am 20.9 · J6: Am, G · Doc: —
- [ ] **P1** [LC 127 — Word Ladder](https://leetcode.com/problems/word-ladder/) — **H** · word-neighbor BFS · S6: G 37, Ap 57.9, M 32.7, Am 52.3 · J6: Am, Ap, G, M · Doc: L
- [ ] **P2** [LC 787 — Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) — **M** · edge-budget Bellman-Ford / layered state · S6: G 37, Ap 48.1, M 32.7, Am 33.5 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 1631 — Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) — **M** · minimax Dijkstra · S6: G 21.9, Am 14.3 · J6: G, M · Doc: —
- [ ] **P2** [LC 1584 — Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) — **M** · minimum spanning tree · S6: G 21.9, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 1514 — Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) — **M** · max-product Dijkstra · S6: G 11.8 · J6: G · Doc: —
- [ ] **P2** [LC 1135 — Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) — **M** · Premium · Kruskal edge ordering · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 1129 — Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) — **M** · color-augmented BFS · S6: G 11.8 · J6: G · Doc: —
- [ ] **P2** [LC 1136 — Parallel Courses](https://leetcode.com/problems/parallel-courses/) — **M** · Premium · topological semesters · S6: N 83.1 · J6: N · Doc: —
- [ ] **P2** [LC 505 — The Maze II](https://leetcode.com/problems/the-maze-ii/) — **M** · Premium · weighted rolling distances · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 778 — Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) — **H** · minimax elevation search · S6: G 28.4, M 38.7, Am 14.3 · J6: G, M · Doc: —
- [ ] **P3** [LC 332 — Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) — **H** · Eulerian trail · S6: G 17.4, Ap 48.1 · J6: G · Doc: —
- [ ] **P3** [LC 2290 — Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/) — **H** · 0-1 BFS · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 1368 — Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) — **H** · 0-1 direction cost · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) — **H** · visited-subset BFS · S6: G 11.8 · J6: G · Doc: —
- [ ] **P3** [LC 864 — Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) — **H** · key-mask BFS · S6: G 11.8 · J6: Am, G · Doc: —
- [ ] **P3** [LC 2092 — Find All People With Secret](https://leetcode.com/problems/find-all-people-with-secret/) — **H** · time-batched connectivity · S6: — · J6: G · Doc: —
- [ ] **P3** [LC 1976 — Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) — **M** · shortest-path counting · S6: — · J6: G · Doc: —
- [ ] **P3** [LC 1203 — Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) — **H** · two-level topological sorting · S6: — · J6: — · Doc: —

### 14. Dynamic programming: state, choices and knapsack — 43

- [ ] **P1** [LC 198 — House Robber](https://leetcode.com/problems/house-robber/) — **M** · take/skip recurrence · S6: G 51.2, M 47.3, Am 63.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 213 — House Robber II](https://leetcode.com/problems/house-robber-ii/) — **M** · circular decomposition · S6: G 25.4, M 24.5, Am 30.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 91 — Decode Ways](https://leetcode.com/problems/decode-ways/) — **M** · valid one/two-digit transitions · S6: G 21.9, M 24.5 · J6: G, M · Doc: L
- [ ] **P1** [LC 322 — Coin Change](https://leetcode.com/problems/coin-change/) — **M** · min-count unbounded knapsack · S6: G 45, M 62.3, Am 54.6 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 139 — Word Break](https://leetcode.com/problems/word-break/) — **M** · prefix segmentation · S6: G 33.2, M 24.5, Am 45.1 · J6: Am, G · Doc: L
- [ ] **P1** [LC 300 — Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) — **M** · LIS state / patience sorting · S6: G 41.4, M 24.5, Am 41.2 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 416 — Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) — **M** · 0/1 subset feasibility · S6: G 41.4, Ap 48.1, M 24.5, Am 48.3 · J6: Am, G, M · Doc: —
- [ ] **P1** [LC 518 — Coin Change II](https://leetcode.com/problems/coin-change-ii/) — **M** · unbounded combination counts · S6: G 28.4, Am 30.1 · J6: Am, G · Doc: L
- [ ] **P1** [LC 62 — Unique Paths](https://leetcode.com/problems/unique-paths/) — **M** · grid path recurrence · S6: G 40.1, M 43.4, Am 54.6 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 64 — Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) — **M** · grid minimum cost · S6: G 21.9, Am 30.1 · J6: Am, G, M · Doc: L
- [ ] **P1** [LC 1143 — Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) — **M** · two-prefix subsequences · S6: G 25.4, M 38.7, Am 36.4 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 279 — Perfect Squares](https://leetcode.com/problems/perfect-squares/) — **M** · min-square decomposition · S6: M 24.5, Am 20.9 · J6: Am, G · Doc: —
- [ ] **P2** [LC 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) — **M** · ordered composition counts · S6: G 11.8, Am 14.3 · J6: G · Doc: L
- [ ] **P2** [LC 494 — Target Sum](https://leetcode.com/problems/target-sum/) — **M** · sum-state / subset transform · S6: G 28.4, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 740 — Delete and Earn](https://leetcode.com/problems/delete-and-earn/) — **M** · aggregate values then take/skip · S6: G 11.8, Am 14.3 · J6: Am · Doc: L
- [ ] **P2** [LC 983 — Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) — **M** · ticket-end transitions · S6: G 25.4, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 1043 — Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) — **M** · last partition choice · S6: G 21.9 · J6: Am, G · Doc: L
- [ ] **P2** [LC 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/) — **M** · predecessor word chains · S6: G 11.8 · J6: G · Doc: L
- [ ] **P2** [LC 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) — **M** · divisibility DAG · S6: G 25.4, Am 14.3 · J6: G · Doc: L
- [ ] **P2** [LC 343 — Integer Break](https://leetcode.com/problems/integer-break/) — **M** · split integer products · S6: G 17.4, M 47.3 · J6: G, M · Doc: —
- [ ] **P2** [LC 474 — Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) — **M** · two-resource 0/1 knapsack · S6: Am 20.9 · J6: — · Doc: —
- [ ] **P2** [LC 63 — Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) — **M** · obstacle-state initialization · S6: G 21.9, Am 39 · J6: Am, G · Doc: I
- [ ] **P2** [LC 120 — Triangle](https://leetcode.com/problems/triangle/) — **M** · triangle rolling state · S6: G 17.4, M 32.7, Am 20.9 · J6: Am, G · Doc: —
- [ ] **P2** [LC 221 — Maximal Square](https://leetcode.com/problems/maximal-square/) — **M** · largest ending square · S6: G 25.4 · J6: Am, G · Doc: L
- [ ] **P2** [LC 931 — Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) — **M** · three-predecessor minimum · S6: G 25.4, Am 14.3 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 256 — Paint House](https://leetcode.com/problems/paint-house/) — **M** · Premium · color-exclusion state · S6: — · J6: Am · Doc: L
- [ ] **P2** [LC 309 — Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) — **M** · hold/sold/rest machine · S6: G 11.8, Ap 57.9, Am 14.3 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 714 — Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) — **M** · stock state with fee · S6: G 21.9, Ap 48.1 · J6: Ap, G · Doc: —
- [ ] **P2** [LC 97 — Interleaving String](https://leetcode.com/problems/interleaving-string/) — **M** · two-source prefix interleaving · S6: G 17.4, Am 43.2 · J6: Am, G · Doc: L
- [ ] **P2** [LC 647 — Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) — **M** · center expansion / palindrome DP · S6: G 11.8, M 53.5, Am 14.3 · J6: Am, G, M · Doc: L
- [ ] **P2** [LC 516 — Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) — **M** · interval subsequence · S6: G 17.4, M 24.5, Am 14.3 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) — **M** · common suffix lengths · S6: G 11.8 · J6: — · Doc: L
- [ ] **P2** [LC 926 — Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/) — **M** · monotone-string state · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 123 — Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) — **H** · two-transaction states · S6: G 11.8, M 38.7, Am 26 · J6: Am, M · Doc: —
- [ ] **P3** [LC 188 — Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) — **H** · K-transaction states · S6: G 11.8, Am 20.9 · J6: G · Doc: —
- [ ] **P3** [LC 265 — Paint House II](https://leetcode.com/problems/paint-house-ii/) — **H** · Premium · best two previous colors · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 115 — Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) — **H** · count distinct subsequences · S6: M 24.5, Am 20.9 · J6: — · Doc: L
- [ ] **P3** [LC 72 — Edit Distance](https://leetcode.com/problems/edit-distance/) — **M** · edit operations on prefixes · S6: G 37, Ap 64.8, M 38.7, Am 41.2 · J6: Am, Ap, G, M · Doc: L
- [ ] **P3** [LC 174 — Dungeon Game](https://leetcode.com/problems/dungeon-game/) — **H** · reverse required-health DP · S6: G 17.4, Am 26 · J6: Am · Doc: L
- [ ] **P3** [LC 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) — **H** · sort ties + LIS · S6: G 41.4, Am 20.9 · J6: Am, G · Doc: L
- [ ] **P3** [LC 1235 — Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) — **H** · weighted intervals + predecessor search · S6: G 17.4, Am 26 · J6: Am, G · Doc: L
- [ ] **P3** [LC 140 — Word Break II](https://leetcode.com/problems/word-break-ii/) — **H** · enumerate memoized sentence suffixes · S6: Am 26 · J6: Am, G · Doc: I
- [ ] **P3** [LC 403 — Frog Jump](https://leetcode.com/problems/frog-jump/) — **H** · position/jump state · S6: G 21.9, Am 26 · J6: Am, G · Doc: L

### 15. Dynamic programming: advanced composition — 16

- [ ] **P2** [LC 712 — Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) — **M** · weighted prefix deletion · S6: — · J6: — · Doc: L
- [ ] **P2** [LC 583 — Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) — **M** · LCS deletion reduction · S6: G 11.8 · J6: G · Doc: —
- [ ] **P2** [LC 1140 — Stone Game II](https://leetcode.com/problems/stone-game-ii/) — **M** · game state and score difference · S6: G 25.4, Am 30.1 · J6: — · Doc: L
- [ ] **P2** [LC 1626 — Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/) — **M** · sorted compatible subsequence · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/) — **H** · choose last balloon · S6: G 31, M 38.7, Am 36.4 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) — **H** · memoized increasing DAG · S6: G 31 · J6: Am, G · Doc: L
- [ ] **P3** [LC 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) — **H** · palindrome minimum cuts · S6: G 21.9, Am 20.9 · J6: Am, G · Doc: L
- [ ] **P3** [LC 10 — Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) — **H** · regex prefix transitions · S6: G 42.7, M 32.7, Am 39 · J6: Am, G, M · Doc: L
- [ ] **P3** [LC 44 — Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) — **H** · wildcard prefix transitions · S6: G 31, Am 39 · J6: Am, G · Doc: L
- [ ] **P3** [LC 639 — Decode Ways II](https://leetcode.com/problems/decode-ways-ii/) — **H** · weighted decoding cases · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 1335 — Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/) — **H** · day-boundary partition · S6: Am 20.9 · J6: — · Doc: L
- [ ] **P3** [LC 1216 — Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/) — **H** · Premium · deletion budget / LPS · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 1463 — Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/) — **H** · two-agent row state · S6: G 11.8, Am 14.3 · J6: Am · Doc: —
- [ ] **P3** [LC 1444 — Number of Ways of Cutting a Pizza](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) — **H** · remaining cuts + suffix counts · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 1039 — Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) — **M** · last triangle partition · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 887 — Super Egg Drop](https://leetcode.com/problems/super-egg-drop/) — **H** · coverage by moves/eggs · S6: — · J6: — · Doc: —

### 16. Design, range structures, math and bit invariants — 29

- [ ] **P1** [LC 146 — LRU Cache](https://leetcode.com/problems/lru-cache/) — **M** · hash map + doubly linked recency · S6: G 53.2, Ap 100, M 58.4, Am 80.2 · J6: Am, Ap, G, M, N · Doc: L
- [ ] **P1** [LC 362 — Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) — **M** · Premium · timestamp count window · S6: G 11.8, Ap 91.5 · J6: Ap, G, M · Doc: L
- [ ] **P1** [LC 50 — Pow(x, n)](https://leetcode.com/problems/powx-n/) — **M** · binary exponentiation · S6: G 48.8, M 64, Am 41.2 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 1146 — Snapshot Array](https://leetcode.com/problems/snapshot-array/) — **M** · per-index change history · S6: G 11.8, Ap 57.9, Am 14.3 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 622 — Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) — **M** · circular-buffer invariants · S6: G 11.8, Am 33.5 · J6: Am, Ap, G · Doc: —
- [ ] **P2** [LC 1472 — Design Browser History](https://leetcode.com/problems/design-browser-history/) — **M** · history cursor truncation · S6: Am 20.9 · J6: Am · Doc: L
- [ ] **P2** [LC 348 — Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/) — **M** · Premium · row/column counters · S6: Am 20.9 · J6: Am · Doc: L
- [ ] **P2** [LC 1166 — Design File System](https://leetcode.com/problems/design-file-system/) — **M** · Premium · parent-path existence · S6: — · J6: Am · Doc: L
- [ ] **P2** [LC 1570 — Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/) — **M** · Premium · sparse intersection · S6: M 24.5 · J6: M · Doc: —
- [ ] **P2** [LC 341 — Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/) — **M** · lazy nested iterator · S6: Am 20.9 · J6: Am, Ap · Doc: L
- [ ] **P2** [LC 307 — Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) — **M** · Fenwick point-update prefix query · S6: G 17.4 · J6: — · Doc: —
- [ ] **P2** [LC 2115 — Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) — **M** · dependency availability propagation · S6: Am 14.3 · J6: Am · Doc: —
- [ ] **P2** [LC 7 — Reverse Integer](https://leetcode.com/problems/reverse-integer/) — **M** · overflow-aware digit reversal · S6: G 63.7, Ap 57.9, M 60.4, Am 56.7 · J6: Am, Ap, G, M · Doc: —
- [ ] **P2** [LC 29 — Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) — **M** · binary long division · S6: G 37, M 32.7, Am 33.5 · J6: Am, G, M · Doc: —
- [ ] **P2** [LC 260 — Single Number III](https://leetcode.com/problems/single-number-iii/) — **M** · XOR partition · S6: G 11.8, Am 26 · J6: Am, G · Doc: —
- [ ] **P2** [LC 204 — Count Primes](https://leetcode.com/problems/count-primes/) — **M** · sieve · S6: G 43.9, Am 39 · J6: Am, G · Doc: —
- [ ] **P2** [LC 223 — Rectangle Area](https://leetcode.com/problems/rectangle-area/) — **M** · rectangle overlap · S6: G 11.8 · J6: Am, G · Doc: —
- [ ] **P2** [LC 593 — Valid Square](https://leetcode.com/problems/valid-square/) — **M** · squared-distance geometry · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 277 — Find the Celebrity](https://leetcode.com/problems/find-the-celebrity/) — **M** · Premium · eliminate then verify candidate · S6: Am 14.3 · J6: Am, Ap · Doc: L
- [ ] **P2** [LC 384 — Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/) — **M** · Fisher-Yates uniformity · S6: — · J6: — · Doc: —
- [ ] **P2** [LC 398 — Random Pick Index](https://leetcode.com/problems/random-pick-index/) — **M** · reservoir sampling · S6: — · J6: — · Doc: —
- [ ] **P3** [LC 460 — LFU Cache](https://leetcode.com/problems/lfu-cache/) — **H** · frequency + recency eviction · S6: G 25.4, Ap 48.1, Am 30.1 · J6: Am, G · Doc: —
- [ ] **P3** [LC 432 — All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) — **H** · frequency bucket linked list · S6: M 24.5 · J6: Am, Ap · Doc: —
- [ ] **P3** [LC 2034 — Stock Price Fluctuation ](https://leetcode.com/problems/stock-price-fluctuation/) — **M** · latest value + lazy price heaps · S6: G 11.8 · J6: G · Doc: —
- [ ] **P3** [LC 716 — Max Stack](https://leetcode.com/problems/max-stack/) — **H** · Premium · stack and maximum removal · S6: — · J6: — · Doc: L
- [ ] **P3** [LC 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) — **H** · merge-count / Fenwick compression · S6: G 25.4, Am 14.3 · J6: Am, G · Doc: I
- [ ] **P3** [LC 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) — **H** · prefix-pair range counting · S6: G 11.8, Am 20.9 · J6: Am, G, M · Doc: —
- [ ] **P3** [LC 149 — Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) — **H** · normalized rational slopes · S6: Am 20.9 · J6: Am · Doc: —
- [ ] **P3** [LC 381 — Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/) — **H** · duplicate-aware index sets · S6: M 24.5 · J6: M · Doc: —

## Source document corrections

The document's topic descriptions are learning notes, not audited frequency measurements. Its “one in ten interviews” estimates are not carried forward.

| Original issue | Correction / teaching implication |
|---|---|
| 27 “Remove elements” | LC 27 is Remove Element (Easy), excluded from counted bank. |
| 141 includes “Cycle II” | 141 is Linked List Cycle (Easy); 142 is Linked List Cycle II (Medium), included. |
| 224 “Basic Calculator II” | 224 is Basic Calculator (Hard); II is 227 (Medium); III is 772 (Hard). |
| 347 “Top k Largest Elements” | 347 is Top K Frequent Elements; 215 is Kth Largest Element in an Array. |
| 139 “Word Break II” | 139 is Word Break (Medium); 140 is Word Break II (Hard). Both are useful and included. |
| 318 “Count of Smaller Numbers After Self” | Correct ID is 315 (Hard); 318 is Maximum Product of Word Lengths (Medium). Interpreted membership uses 315. |
| 62 “Unique Paths II” | 62 is Unique Paths; II is 63. Both included for recurrence and obstacle initialization. |
| 85 “Maximum Rectangle” | Official name is Maximal Rectangle (Hard). |
| 4 grouped with Quickselect | Median of two sorted arrays teaches partition search; ordinary Quickselect ignores useful ordering and is not its canonical logarithmic approach. |
| Quicksort uses O(1) space | In-place partitioning uses O(1) extra storage, but ordinary recursive quicksort also uses a call stack: expected O(log n), worst O(n). |
| BFS only finds length | BFS can reconstruct an unweighted shortest path with predecessors; weighted paths require a suitable weighted algorithm. |
| General graph DFS for “longest path” | Longest simple path is not generally a tractable DFS template; DAG restrictions or exponential search change the problem. |
| DSU operations are O(1) | Path compression plus union by rank/size gives amortized O(α(n)), effectively tiny, not strict worst-case O(1). |
| Coin Change II labeled 0/1 knapsack | LC 518 allows unlimited copies: unbounded combination counting. Loop order determines whether order is counted. |
| Memoization always becomes polynomial | Complexity is reachable states × transition work; subset/state spaces may remain exponential. Bottom-up ordering is possible for finite acyclic dependencies, though sometimes awkward. |
| Sliding Window Maximum is the only deque use | 1438 and 862 teach other valuable monotonic-deque applications. |
| Prefix strings can always replace a trie at equal cost | Materializing/hashing strings changes character-copying and memory costs; complexity must count characters. |

## Editorial additions and removals

Examples of high-value additions relative to the **recovered 340**:

| Addition | Why it earns its place (editorial) |
|---|---|
| 23 Merge k Sorted Lists | Canonical K-way merging, reused in feeds, ranges and calendar streams. |
| 53 Maximum Subarray | Teaches a compact invariant and basic state recurrence. |
| 75 Sort Colors | Explicit in-place three-way partitioning, complementary to selection. |
| 150 Evaluate Reverse Polish Notation; 71 Simplify Path | Simpler stack anchors before calculators and nested parsing. |
| 173 Binary Search Tree Iterator | Lazy traversal and stateful API design. |
| 542 01 Matrix; 815 Bus Routes; 1293 obstacle elimination | Three distinct BFS transfers: many sources, graph modeling, augmented state/dominance. |
| 1192 Critical Connections | Representative low-link bridge problem; advanced, not assumed frequent. |
| 1235 Maximum Profit in Job Scheduling; 140 Word Break II | Weighted interval DP and output-sensitive memoized enumeration. |
| 315 Count of Smaller Numbers After Self; 307 range updates | Range counting and dynamic prefix queries; do not skip prerequisites. |
| 992 exactly-K distinct; 862 shortest sum at least K | Count conversion and the failure of ordinary positive-only windows with negative values. |

Redundancy is not intrinsically bad: 39/40, 46/47 and 78/90 are retained because deduplication changes the search invariant; 314/987 is retained because tie rules change ordering. Other near variants and narrow problems lose priority. From the recovered 340, omitted IDs are listed below with a transparent editorial reason; omission does not mean a question is useless or absent from interviews.

- [LC 16 — 3Sum Closest](https://leetcode.com/problems/3sum-closest/) — Near 3Sum variant; retain 15 as primary anchor.
- [LC 18 — 4Sum](https://leetcode.com/problems/4sum/) — Extra k-sum repetition; retain 15 and 454 for two distinct formulations.
- [LC 24 — Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) — Local pair swapping covered by more general list reversals.
- [LC 52 — N-Queens II](https://leetcode.com/problems/n-queens-ii/) — Counting variant of 51; little new search structure.
- [LC 61 — Rotate List](https://leetcode.com/problems/rotate-list/) — Rotation adds less than reorder and K-block reversal.
- [LC 106 — Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) — Second traversal-pair reconstruction; 105 suffices first.
- [LC 116 — Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) — Perfect-tree neighbor linking; 117 handles general sparse trees.
- [LC 117 — Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) — Neighbor-linking variant deferred in favor of iterator and postorder-summary coverage.
- [LC 122 — Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) — Basic unlimited-stock greedy is subsumed by 309/714 transaction-state training.
- [LC 154 — Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) — Duplicate-heavy variant with worst-case linear search; defer until needed.
- [LC 164 — Maximum Gap](https://leetcode.com/problems/maximum-gap/) — Specialized bucket-gap implementation; prioritize prefix, selection and range-counting coverage.
- [LC 179 — Largest Number](https://leetcode.com/problems/largest-number/) — Useful custom comparator, but lower marginal value than partitioning and boundary search.
- [LC 220 — Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) — Ordered-window near-duplicate detection is deferred; 480 and 307 cover harder ordered-state skills.
- [LC 286 — Walls and Gates](https://leetcode.com/problems/walls-and-gates/) — Multi-source shortest distances overlap 542/994; use those free anchors first.
- [LC 318 — Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/) — Document title actually refers to 315; bitmask compatibility is already represented by 421 and state search.
- [LC 328 — Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) — Position splitting overlaps stable list partition.
- [LC 334 — Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) — Length-three LIS specialization; 300 teaches the general invariant.
- [LC 372 — Super Pow](https://leetcode.com/problems/super-pow/) — Modular exponent decomposition is narrower than 50 binary exponentiation.
- [LC 376 — Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) — Oscillation-specific greedy proof; keep reachability and interval exchange proofs first.
- [LC 438 — Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) — Same fixed-count-window machinery as 567; skip output enumeration repetition.
- [LC 445 — Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) — Second arithmetic list orientation; 2 is the core anchor.
- [LC 449 — Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/) — BST-specific serialization deferred; retain 297 and 428.
- [LC 451 — Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) — Frequency sorting repeats 347/692 without a new core structure.
- [LC 477 — Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/) — Per-bit pair counting is deferred after XOR partition and trie bit reasoning.
- [LC 635 — Design Log Storage System](https://leetcode.com/problems/design-log-storage-system/) — Time granularity indexing is less essential than 981/1146 historical queries.
- [LC 650 — 2 Keys Keyboard](https://leetcode.com/problems/2-keys-keyboard/) — Factorization-specific DP reduction has lower general transfer.
- [LC 659 — Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) — Consecutive-subsequence greedy is deferred; 846 is the simpler grouping anchor.
- [LC 668 — Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) — Another rank-count answer search; 378/719 provide sufficient transfer.
- [LC 685 — Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) — Directed redundant-edge case analysis is specialized; 684 plus topology establish prerequisites.
- [LC 841 — Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) — Basic reachability repeats 133/200 with fewer new constraints.
- [LC 857 — Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) — Specialized ratio proof; selected other heap/greedy problems cover main operations.
- [LC 866 — Prime Palindrome](https://leetcode.com/problems/prime-palindrome/) — Palindrome/prime construction is narrow; sieve and palindrome expansion remain.
- [LC 889 — Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/) — Another traversal reconstruction with non-uniqueness issues; retain 105 and 297.
- [LC 904 — Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) — Special case of at-most-K distinct, covered by 340.
- [LC 1015 — Smallest Integer Divisible by K](https://leetcode.com/problems/smallest-integer-divisible-by-k/) — Modular remainder cycle arithmetic is useful but lower priority than modular prefix hashing.
- [LC 1105 — Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/) — Partition DP repetition; 1043/1335 give complementary simpler/advanced examples.
- [LC 1239 — Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) — String-mask packing overlaps constraints/bucket search; advanced state search retained elsewhere.
- [LC 1248 — Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) — Odd-count transform repeats exact binary-sum counting in 930.
- [LC 1288 — Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/) — Covered-interval sorting repeats existing interval foundations.
- [LC 1372 — Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) — Alternating-direction tree state overlaps more general take/skip and postorder summaries.
- [LC 1493 — Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) — Single-deletion zero budget repeats 1004.
- [LC 1530 — Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/) — Leaf-pair distance histograms are a specialized tree-summary variant.
- [LC 1557 — Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/) — Indegree-zero characterization adds less practice than full topological ordering.
- [LC 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/) — Subset enumeration for balanced transfers is narrower than constraint backtracking and bitmask BFS.
- [LC 1675 — Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/) — Parity normalization with heap is specialized; core heap scheduling and range streams remain.
- [LC 1786 — Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/) — Dijkstra plus DAG counting is represented more directly by 743/1976 and 329.
- [LC 1898 — Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/) — Deletion-feasibility answer search repeats established monotone feasibility.
- [LC 1899 — Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) — Coordinate-wise triplet feasibility offers limited additional pattern depth.
- [LC 1928 — Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/) — Cost/time Pareto-state search is specialized; 787/1293 already teach resource-constrained state.
- [LC 1963 — Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/) — Bracket swaps are another balance variant; 1249/678/301 give clearer progression.
- [LC 2024 — Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/) — Two-character replacement budget repeats 424/1004.
- [LC 2116 — Check if a Parentheses String Can Be Valid](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/) — Locked-parenthesis feasibility is deferred after 678 interval balance.
- [LC 2140 — Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/) — Skip-length recurrence repeats take/skip and weighted scheduling ideas.
- [LC 2226 — Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/) — Piece-allocation answer search overlaps 1891.
- [LC 2316 — Count Unreachable Pairs of Nodes in an Undirected Graph](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) — Component-size pair arithmetic follows directly from 323/DSU.
- [LC 2369 — Check if There is a Valid Partition For The Array](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/) — Fixed local block DP repeats recurrence fundamentals.
- [LC 2462 — Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) — Two-sided candidate hiring is another heap simulation; 1834/2402 remain.
- [LC 2466 — Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/) — Fixed-step string counting repeats ordered composition in 377.
- [LC 2492 — Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/) — Component minimum-edge characterization adds less than weighted shortest-path practice.
- [LC 2502 — Design Memory Allocator](https://leetcode.com/problems/design-memory-allocator/) — Memory allocator simulation is deferred; LRU, snapshots and range structures are more general anchors.
- [LC 2516 — Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) — Complement-window quota counting is deferred after 76/1658.
- [LC 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/) — Threshold sorting plus top-K sum is a specialized heap/greedy combination.
- [LC 2685 — Count the Number of Complete Components](https://leetcode.com/problems/count-the-number-of-complete-components/) — Component edge-count characterization is deferred after 261 and connectivity.

### Complete set comparison against recovered 340

**Added (83):** [LC 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/), [LC 8 — String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/), [LC 10 — Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/), [LC 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/), [LC 32 — Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/), [LC 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/), [LC 44 — Wildcard Matching](https://leetcode.com/problems/wildcard-matching/), [LC 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/), [LC 71 — Simplify Path](https://leetcode.com/problems/simplify-path/), [LC 75 — Sort Colors](https://leetcode.com/problems/sort-colors/), [LC 93 — Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/), [LC 97 — Interleaving String](https://leetcode.com/problems/interleaving-string/), [LC 126 — Word Ladder II](https://leetcode.com/problems/word-ladder-ii/), [LC 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/), [LC 140 — Word Break II](https://leetcode.com/problems/word-break-ii/), [LC 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/), [LC 151 — Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/), [LC 173 — Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/), [LC 174 — Dungeon Game](https://leetcode.com/problems/dungeon-game/), [LC 285 — Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/), [LC 291 — Word Pattern II](https://leetcode.com/problems/word-pattern-ii/), [LC 301 — Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/), [LC 304 — Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/), [LC 305 — Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/), [LC 307 — Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/), [LC 310 — Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/), [LC 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/), [LC 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/), [LC 333 — Largest BST Subtree](https://leetcode.com/problems/largest-bst-subtree/), [LC 340 — Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/), [LC 348 — Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/), [LC 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/), [LC 366 — Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree/), [LC 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/), [LC 381 — Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/), [LC 384 — Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/), [LC 398 — Random Pick Index](https://leetcode.com/problems/random-pick-index/), [LC 403 — Frog Jump](https://leetcode.com/problems/frog-jump/), [LC 444 — Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/), [LC 526 — Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/), [LC 540 — Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/), [LC 542 — 01 Matrix](https://leetcode.com/problems/01-matrix/), [LC 632 — Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/), [LC 639 — Decode Ways II](https://leetcode.com/problems/decode-ways-ii/), [LC 694 — Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/), [LC 714 — Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/), [LC 716 — Max Stack](https://leetcode.com/problems/max-stack/), [LC 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/), [LC 737 — Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/), [LC 759 — Employee Free Time](https://leetcode.com/problems/employee-free-time/), [LC 815 — Bus Routes](https://leetcode.com/problems/bus-routes/), [LC 846 — Hand of Straights](https://leetcode.com/problems/hand-of-straights/), [LC 856 — Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/), [LC 862 — Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/), [LC 887 — Super Egg Drop](https://leetcode.com/problems/super-egg-drop/), [LC 895 — Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/), [LC 926 — Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/), [LC 951 — Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/), [LC 968 — Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/), [LC 992 — Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/), [LC 1031 — Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/), [LC 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/), [LC 1060 — Missing Element in Sorted Array](https://leetcode.com/problems/missing-element-in-sorted-array/), [LC 1074 — Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/), [LC 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/), [LC 1095 — Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/), [LC 1110 — Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/), [LC 1140 — Stone Game II](https://leetcode.com/problems/stone-game-ii/), [LC 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/), [LC 1203 — Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/), [LC 1216 — Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/), [LC 1235 — Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/), [LC 1268 — Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/), [LC 1293 — Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/), [LC 1335 — Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/), [LC 1376 — Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/), [LC 1423 — Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/), [LC 1472 — Design Browser History](https://leetcode.com/problems/design-browser-history/), [LC 1650 — Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/), [LC 1891 — Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/), [LC 1976 — Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/), [LC 2104 — Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/), [LC 2115 — Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

**Removed (63):** [LC 16 — 3Sum Closest](https://leetcode.com/problems/3sum-closest/), [LC 18 — 4Sum](https://leetcode.com/problems/4sum/), [LC 24 — Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/), [LC 52 — N-Queens II](https://leetcode.com/problems/n-queens-ii/), [LC 61 — Rotate List](https://leetcode.com/problems/rotate-list/), [LC 106 — Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/), [LC 116 — Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/), [LC 117 — Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/), [LC 122 — Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/), [LC 154 — Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/), [LC 164 — Maximum Gap](https://leetcode.com/problems/maximum-gap/), [LC 179 — Largest Number](https://leetcode.com/problems/largest-number/), [LC 220 — Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/), [LC 286 — Walls and Gates](https://leetcode.com/problems/walls-and-gates/), [LC 318 — Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/), [LC 328 — Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/), [LC 334 — Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/), [LC 372 — Super Pow](https://leetcode.com/problems/super-pow/), [LC 376 — Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/), [LC 438 — Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/), [LC 445 — Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/), [LC 449 — Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/), [LC 451 — Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/), [LC 477 — Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/), [LC 635 — Design Log Storage System](https://leetcode.com/problems/design-log-storage-system/), [LC 650 — 2 Keys Keyboard](https://leetcode.com/problems/2-keys-keyboard/), [LC 659 — Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/), [LC 668 — Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/), [LC 685 — Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/), [LC 841 — Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/), [LC 857 — Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/), [LC 866 — Prime Palindrome](https://leetcode.com/problems/prime-palindrome/), [LC 889 — Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/), [LC 904 — Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/), [LC 1015 — Smallest Integer Divisible by K](https://leetcode.com/problems/smallest-integer-divisible-by-k/), [LC 1105 — Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/), [LC 1239 — Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/), [LC 1248 — Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/), [LC 1288 — Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/), [LC 1372 — Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/), [LC 1493 — Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/), [LC 1530 — Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/), [LC 1557 — Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/), [LC 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/), [LC 1675 — Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/), [LC 1786 — Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/), [LC 1898 — Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/), [LC 1899 — Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/), [LC 1928 — Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/), [LC 1963 — Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/), [LC 2024 — Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/), [LC 2116 — Check if a Parentheses String Can Be Valid](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/), [LC 2140 — Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/), [LC 2226 — Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/), [LC 2316 — Count Unreachable Pairs of Nodes in an Undirected Graph](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/), [LC 2369 — Check if There is a Valid Partition For The Array](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/), [LC 2462 — Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/), [LC 2466 — Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/), [LC 2492 — Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/), [LC 2502 — Design Memory Allocator](https://leetcode.com/problems/design-memory-allocator/), [LC 2516 — Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/), [LC 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/), [LC 2685 — Count the Number of Complete Components](https://leetcode.com/problems/count-the-number-of-complete-components/)

**Literal Word anchors not selected (50):** [LC 1 — Two Sum](https://leetcode.com/problems/two-sum/), [LC 16 — 3Sum Closest](https://leetcode.com/problems/3sum-closest/), [LC 18 — 4Sum](https://leetcode.com/problems/4sum/), [LC 20 — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/), [LC 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/), [LC 27 — Remove Element](https://leetcode.com/problems/remove-element/), [LC 69 — Sqrt(x)](https://leetcode.com/problems/sqrtx/), [LC 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/), [LC 87 — Scramble String](https://leetcode.com/problems/scramble-string/), [LC 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/), [LC 101 — Symmetric Tree](https://leetcode.com/problems/symmetric-tree/), [LC 104 — Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/), [LC 108 — Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/), [LC 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [LC 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [LC 141 — Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/), [LC 160 — Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/), [LC 179 — Largest Number](https://leetcode.com/problems/largest-number/), [LC 186 — Reverse Words in a String II](https://leetcode.com/problems/reverse-words-in-a-string-ii/), [LC 206 — Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), [LC 225 — Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/), [LC 226 — Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/), [LC 232 — Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/), [LC 264 — Ugly Number II](https://leetcode.com/problems/ugly-number-ii/), [LC 270 — Closest Binary Search Tree Value](https://leetcode.com/problems/closest-binary-search-tree-value/), [LC 278 — First Bad Version](https://leetcode.com/problems/first-bad-version/), [LC 281 — Zigzag Iterator](https://leetcode.com/problems/zigzag-iterator/), [LC 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/), [LC 299 — Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/), [LC 318 — Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/), [LC 328 — Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/), [LC 346 — Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/), [LC 350 — Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/), [LC 395 — Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/), [LC 409 — Longest Palindrome](https://leetcode.com/problems/longest-palindrome/), [LC 543 — Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/), [LC 572 — Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/), [LC 644 — Maximum Average Subarray II](https://leetcode.com/problems/maximum-average-subarray-ii/), [LC 669 — Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/), [LC 674 — Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/), [LC 700 — Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/), [LC 876 — Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/), [LC 1062 — Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/), [LC 1086 — High Five](https://leetcode.com/problems/high-five/), [LC 1087 — Brace Expansion](https://leetcode.com/problems/brace-expansion/), [LC 1274 — Number of Ships in a Rectangle](https://leetcode.com/problems/number-of-ships-in-a-rectangle/), [LC 1277 — Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/), [LC 1300 — Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/), [LC 1429 — First Unique Number](https://leetcode.com/problems/first-unique-number/), [LC 1485 — Clone Binary Tree With Random Pointer](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/)

Of the literal Word omissions, 30 are Easy and therefore outside scope. The remaining omissions reflect lower marginal coverage, explicit ID/title conflicts, or specialized variants. Literal anchors 139 and 62 remain in the bank with their correct titles; their intended II variants also appear.

### Audit and reproducibility

- All 360 selected IDs exist in the fetched official catalog; all selected difficulty levels are Medium or Hard; title and slug come from the same catalog record.
- Each problem appears exactly once in the bank. Counts and comparison sets were calculated from IDs, not handwritten totals. P1/P2/P3 counts sum to 360; Medium/Hard counts sum to 360.
- Premium flags are shown so blocked access is visible. If you lack access, use an already included conceptual alternative (e.g. 994/542 for 286, 987 for 314, 210 for 269's topology prerequisite, 1584 for 1135), then revisit the unavailable variant when accessible; alternatives do not create new counted questions.
- The recovered baseline labels 164 Maximum Gap as Medium; the catalog currently rates it Hard. It is omitted for editorial reasons, not retained with the stale label.
- Company evidence was joined through official URL slugs for September and integer IDs for July. 0 distinct September FAANG six-month slugs had no match in the fetched catalog; none are silently assigned to another problem. Raw CSV source counts may differ from matched counts if this changes in a future refresh.
- Companion [audit JSON](FAANG_LeetCode_Roadmap_Audit.json) preserves every selected ID, tier, pattern, metadata, document/baseline membership and both source scores. Published scores are retained as reported, without interpreting them as probabilities.
- Official catalog SHA-256: `e4ecac93d7aa17721b2b037d5f876db03ecbd08e775aa6970097ed9437e43cef`. September CSV SHA-256: `259cefa8dcb8bad1a359e99991295694bebdc9aaea112341ee4c50827a1e6997`.

Refresh company evidence near your interview while preserving prerequisites. Promote a target-company item only after checking its recent signal and the skill it adds. General coding preparation also needs communication, behavioral examples and role-appropriate system design; this bank covers algorithmic coding only.
