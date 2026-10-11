---
title: "MultithreadingBasicTheory"
date: "2021-02-23T21:39:47.000Z"
updated: "2021-02-23T21:44:54.793Z"
layout: "post"
from: "/2021/02/23/MultithreadingBasicTheory/"
categories: ["Multithreading"]
tags: ["Multithreading"]
---

# Multithreading {#Multithreading}

## Threads: a thread is a “light-weight” process {#Threads-a-thread-is-a-“light-weight”-process}

-   It is a unit of execution within a given process (a process may have several threads)
-   Each thread in a process shares the memory(except stack) and resources while processes don’t share memory.
-   Creating a new thread requires fewer resources than creating a new process.

## Time-Slicing Algorithm {#Time-Slicing-Algorithm}

Processing time for a single core is shared among processes and threads.  
!\[\](E:\\wztblog\\source\\img\\Pasted image 20210223163210.png)

## THREAD STATES {#THREAD-STATES}

1.  `NEW`: Instantiate a thread. We use **start()** method.
2.  `Runnable`: After we have started the thread.The thread is executing.
3.  `Waiting`: A thread waits for other threads to finish. Use `wait()`, `sleep()` method. Can be waken up by other threads.
4.  `Dead` After the thread finished its task.
