---
title: "Multi-threading-Concepts"
date: "2021-02-15T02:04:15.000Z"
updated: "2021-02-15T03:57:47.578Z"
layout: "post"
from: "/2021/02/14/Multi-threading-Concepts/"
categories: ["Multi-threading"]
tags: ["Java"]
---

# Semaphores {#Semaphores}

-   Invented by Dijkstra back in 1962
-   semaphores are simple variables(or abstract data types) that are used for controlling access to a common resource.

**_It is a record of how many units of particular resource are available, we have to wait until a unit of the resource becomes available again._**

* * *

-   Counting semaphores: allows an arbitrary resource count

* * *

-   Binary semaphores: semaphores that are restricted to the values 0 and 1

* * *

### Usage: {#Usage}

```
1. semaphores tracks only how many resources are free - it does not keep track of which of the resources are free.
2. the semaphore count may serve as a useful trigger for a number of different actions(web servers)
3. producer-consumer problem can be solved and implemented with the help of semaphores.
```

### Mutexes(Mutual Exclusion Objects) {#Mutexes-Mutual-Exclusion-Objects}

-   To prevent race conditions
-   mutex is very similar to a binary semaphore, while binary semaphore can be used as mutex, a mutex is a more specific use-case.
-   a Lock is designed to enforce a mutual exclusion concurrency control policy.

### Differences between mutex and semaphore {#Differences-between-mutex-and-semaphore}

**SEMAPHORE**

-   signalling mechanism, threads and process perform wait() and notify() operations to indicate whether they are acquiring or releasing the resource.
-   allows multiple program threads to access the finite instance of resources(not just a single resource)
-   the process or thread blocks itself if no resource if free till the count of semaphore become greater than 0.

**MUTEX**

-   locking mechanism, threads or processes have to acquire the lock on mutex object if it wants to acquire the resource.
-   mutex allows multiple program threads to access a single shared resource but one at a time.
-   if the lock is already acquired by another thread or process then the thread will wait until the mutex object gets unlocked.

## SemaphoreExample {#SemaphoreExample}

> Only 3 threads can access the resource at one time cause there is only 3 permits in Semaphore.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Semaphore;
enum DownLoader{
    INSTANCE;
    private Semaphore semaphore = new Semaphore(3, true);
    public void downLoadData(){
        try {
            semaphore.acquire();
            downLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally{
            semaphore.release();
        }        
    }
    private void downLoad(){
        System.out.println("DownLoading data........");
        try {
            Thread.sleep(3000);    
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
    } 
}
class Multithreading{
    public static void main(String [] args){
        ExecutorService executorService = Executors.newCachedThreadPool();
        for(int i = 0; i < 12; i++){
            executorService.execute(()->{
                DownLoader.INSTANCE.downLoadData();
            });
        }        
    }
}
```
