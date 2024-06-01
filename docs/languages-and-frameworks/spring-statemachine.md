# spring-statemachine

## context  

Spring Statemachine is a framework for application developers to use state machine concepts with Spring applications.
Spring Statemachine aims to provide following features:
- Easy to use flat one level state machine for simple use cases.
- Hierarchical state machine structure to ease complex state configuration.
- State machine regions to provide even more complex state configurations.
- Usage of triggers, transitions, guards and actions.
- Type safe configuration adapter.
- Builder pattern for easy instantiation for use outside of Spring Application context
- Recipes for usual use cases
- Distributed state machine based on a Zookeeper
- State machine event listeners.
- UML Eclipse Papyrus modeling.
- Store machine config in a persistent storage.
- Spring IOC integration to associate beans with a state machine.

## dependencies

- spring-statemachine-autoconfigure
- spring-statemachine-cluster
- spring-statemachine-core
- spring-statemachine-data-common
- spring-statemachine-data-jpa
- spring-statemachine-data-mongodb
- spring-statemachine-data-redis
- spring-statemachine-kryo
- spring-statemachine-recipes-common
- spring-statemachine-starter
- spring-statemachine-uml
- spring-statemachine-zookeeper


## usage scenarios
A project is a good candidate to use a state machine when:
- You can represent the application or part of its structure as states.
- You want to split complex logic into smaller manageable tasks.
- The application is already suffering concurrency issues with (for example) something happening asynchronously.

You are already trying to implement a state machine when you:
- Use boolean flags or enums to model situations.
- Have variables that have meaning only for some part of your application lifecycle.
- Loop through an if-else structure (or, worse, multiple such structures), check whether a particular flag or enum is set, and then make further exceptions about what to do when certain combinations of your flags and enums exist or do not exist.

## Glossary    
**State Machine**    
The main entity that drives a collection of states, together with regions, transitions, and events.

**State**    
A state models a situation during which some invariant condition holds. The state is the main entity of a state machine where state changes are driven by events.

**Extended State**    
An extended state is a special set of variables kept in a state machine to reduce the number of needed states.

**Transition**    
A transition is a relationship between a source state and a target state. It may be part of a compound transition, which takes the state machine from one state configuration to another, representing the complete response of the state machine to an occurrence of an event of a particular type.

**Event**    
An entity that is sent to a state machine and then drives a various state changes.

**Initial State**    
A special state in which the state machine starts. The initial state is always bound to a particular state machine or a region. A state machine with multiple regions may have a multiple initial states.

**End State**    
(Also called as a final state.) A special kind of state signifying that the enclosing region is completed. If the enclosing region is directly contained in a state machine and all other regions in the state machine are also completed, the entire state machine is completed.

**History State**    
A pseudo state that lets a state machine remember its last active state. Two types of history state exists: shallow (which remembers only top level state) and deep (which remembers active states in sub-machines).

**Choice State**    
A pseudo state that allows for making a transition choice based on (for example) event headers or extended state variables.

**Junction State**    
A pseudo state that is relatively similar to choice state but allows multiple incoming transitions, while choice allows only one incoming transition.

**Fork State**    
A pseudo state that gives controlled entry into a region.

**Join State**    
A pseudo state that gives controlled exit from a region.

**Entry Point**    
A pseudo state that allows controlled entry into a submachine.

**Exit Point**    
A pseudo state that allows controlled exit from a submachine.

**Region**    
A region is an orthogonal part of either a composite state or a state machine. It contains states and transitions.

**Guard**    
A boolean expression evaluated dynamically based on the value of extended state variables and event parameters. Guard conditions affect the behavior of a state machine by enabling actions or transitions only when they evaluate to TRUE and disabling them when they evaluate to FALSE.

**Action**    
A action is a behavior run during the triggering of the transition.

## references

| Item                | Link(s)                                                                             |
| :------------------ | ----------------------------------------------------------------------------------- |
| spring-statemachine | https://spring.io/projects/spring-statemachine                                      |
| Glossary            | https://docs.spring.io/spring-statemachine/docs/4.0.0/reference/index.html#glossary |
