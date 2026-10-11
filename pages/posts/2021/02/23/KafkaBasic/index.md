---
title: "KafkaBasic"
date: "2021-02-23T21:40:46.000Z"
updated: "2021-02-23T21:51:21.288Z"
layout: "post"
from: "/2021/02/23/KafkaBasic/"
categories: ["Kafka"]
tags: ["MessageBroker","Kafka"]
---

# Topics and partitions {#Topics-and-partitions}

-   `Topics`: a particular stream of data
    -   Similar to a table in a database (without all the constraints)
    -   You can have as many topics as you want.
    -   A topic is identified by its name
-   Topics are split in `partitions`
    -   Each partition is ordered
    -   Each message within a partition gets an incremental id, called offset.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218111333.png)

-   Offset only have a meaning for a specific partition.  
    E.g. offset 3 in partition doesn’t represent the same data as offset 3 in partition 1.
-   Order is guraranteed only within a partition (not across partitions)
-   Data is kept only for a limited time (default is one weeks)
-   Once the data is written to partition, it can’t be changed(immutability)
-   Data is assigned randomly to a partition unless a key is provided
-   You can have as many partitions per topics as you want

# Kafka Brokers and Data Replication Explained {#Kafka-Brokers-and-Data-Replication-Explained}

-   A Kafka cluster is composed of multiple brokers (servers)
-   Each broker is identified with its ID (integer)
-   Each broker contains certain topic partitions
-   After connecting to any broker (called a bootstrap broker), you will be connected to the entire cluster.
-   A good number to get started is 3 brokers, but some big clusters have over 100 brokers.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218112118.png)

-   Example of 2 topics (3 partitions and 2 partitions)

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218112222.png)

-   Data is distributed and Broker 3 doesnt have any Topic 2 data

## Topic replication factor {#Topic-replication-factor}

-   Topics should have a replication factor > 1 (usually between 2 and 3)
-   This way if a broker is down, another broker can serve the data
-   Example: Topic with 2 partitions and replication factor of 2.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218112603.png)

-   Example: we lost Broker 2
-   Result: Broker 1 and 3 can still serve the data.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218112722.png)

## Concept of Leader for a partition {#Concept-of-Leader-for-a-partition}

-   **At any time only 1 broker can be a leader for a given partition**
-   **Only that leader can receive and serve data for a partition**
-   The other brokers will synchronize the data
-   There each partition has: one leader, and multiple ISR (in-sync replica)

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218112954.png)

# Kafka Producers {#Kafka-Producers}

-   Producers write data to topics
-   **They only have to specify the topic name and one broker to connect to, and Kafka will automatically take care of routing the data to the right brokers**

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218113928.png)

-   Producers can choose to receive acknowledgement of data writes:(from fast to slow and unsafe to sage)
-   Acks=0:Producer won’t wait for acknowledgement (possible data loss)
-   Acks=1: Producer will wait for leader acknowledgement (limited data loss)
-   Acks=all:Leader + replicas acknowledgement (no data loss)

## Producers: Message keys {#Producers-Message-keys}

-   Producers can choose to send a key with the message
-   if a key is sent, then the producer has the guarantee that all message for that key will always go to the same partition
-   Thiss enables to guarantee ordering for a specific key.  
    !\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218114353.png)

# Consumers {#Consumers}

-   Consumers read data from a topic
-   They only have to specify the topic name and one broker to connect to, and Kafka will automatically take care of pulling the data from the right brokers
-   Data is read in order for each partitions.
-   Consumer can read data in parallelism between different partitions.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218115623.png)

## Consumer Groups(for parallelism) {#Consumer-Groups-for-parallelism}

-   Consumers read data in consumer groups
-   Each consumer within a group reads from exclusive(different) partitions
-   You cannot have more consumers than partitions(otherwise some will be in active)

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218115825.png)

## Consumer Offsets {#Consumer-Offsets}

-   kafka stores the offsets at which a consumer group has been reading
-   The offsets commit live in a Kafka topic named “\_\_consumer\_offsets”
-   When a consumer has processed data received some Kafka, it should be committing the offsets.
-   If a consumer process dies, it will be able to read back from where it left off thanks to consumer offsets.

!\[\](E:\\NoteBook\\Message-Broker\\img\\Pasted image 20210218120115.png)

​
