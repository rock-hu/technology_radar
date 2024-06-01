# spring-integration

## dependencies

- spring-integration-amqp
- spring-integration-camel
- spring-integration-cassandra
- spring-integration-core
- spring-integration-debezium
- spring-integration-event
- spring-integration-feed
- spring-integration-file
- spring-integration-ftp
- spring-integration-graphql
- spring-integration-groovy
- spring-integration-hazelcast
- spring-integration-http
- spring-integration-ip
- spring-integration-jdbc
- spring-integration-jms
- spring-integration-jmx
- spring-integration-jpa
- spring-integration-kafka
- spring-integration-mail
- spring-integration-mongodb
- spring-integration-mqtt
- spring-integration-r2dbc
- spring-integration-redis
- spring-integration-rsocket
- spring-integration-scripting
- spring-integration-sftp
- spring-integration-smb
- spring-integration-stomp
- spring-integration-stream
- spring-integration-syslog
- spring-integration-test
- spring-integration-test-support
- spring-integration-webflux
- spring-integration-websocket
- spring-integration-ws
- spring-integration-xml
- spring-integration-xmpp
- spring-integration-zeromq
- spring-integration-zip
- spring-integration-zookeeper



## context  

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```

```mermaid
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }

```

```mermaid
---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

```mermaid

```

## references

| Item | Link(s) |
| :--- | ------- |
|      |         |
