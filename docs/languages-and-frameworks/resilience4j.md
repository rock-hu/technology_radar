# resilience4j

## context  

> Resilience4j is a lightweight fault tolerance library inspired by Netflix Hystrix, but designed for functional programming.

Resilience4j provides higher-order functions (decorators) to enhance any functional interface, lambda expression or method reference with a Circuit Breaker, Rate Limiter, Retry or Bulkhead. You can stack more than one decorator on any functional interface, lambda expression or method reference. The advantage is that you have the choice to select the decorators you need and nothing else.

**resilience4j vsNetflix Hystrix**

- In Hystrix calls to external systems have to be wrapped in a `HystrixCommand`. This library, in contrast, provides higher-order functions (decorators) to enhance any functional interface, lambda expression or method reference with a `Circuit Breaker`, `Rate Limiter` or Bulkhead. Furthermore, the library provides decorators to retry failed calls or cache call results. You can stack more than one decorator on any functional interface, lambda expression or method reference. That means, you can combine a `Bulkhead`, `RateLimiter` and `Retry` decorator with a `CircuitBreaker` decorator. The advantage is that you have the choice to select the decorator you need and nothing else. Any decorated function can be executed synchronously or asynchronously by using a CompletableFuture or RxJava.
- The `CircuitBreaker` can open when too many calls exceed a certain response time threshold, even before the remote system is unresponsive and exceptions are thrown.
- Hystrix only performs a single execution when in half-open state to determine whether to close a CircuitBreaker. This library allows to perform a configurable number of executions and compares the result against a configurable threshold to determine whether to close a CircuitBreaker.
- This library provides custom Reactor or RxJava operators to decorate any reactive type with a `Circuit Breaker`, `Bulkhead` or `Ratelimiter`.
- Hystrix and this library emit a stream of events which are useful to system operators to monitor metrics about execution outcomes and latency.

## dependencies

- resilience4j-core
- resilience4j-ratelimiter
- resilience4j-cache
- resilience4j-retry
- resilience4j-circuitbreaker
- resilience4j-bulkhead
- resilience4j-circularbuffer
- resilience4j-metrics
- resilience4j-consumer
- resilience4j-annotations
- resilience4j-spring
- resilience4j-spring6
- resilience4j-spring-boot2
- resilience4j-spring-boot3
- resilience4j-spring-cloud2
- resilience4j-feign
- resilience4j-timelimiter
- resilience4j-rxjava2
- resilience4j-rxjava3
- resilience4j-reactor
- resilience4j-micrometer
- resilience4j-kotlin
- resilience4j-vavr

```mermaid

```

## references

| Item         | Link(s)                                             |
| :----------- | --------------------------------------------------- |
| resilience4j | <https://resilience4j.readme.io/docs/getting-started> |
